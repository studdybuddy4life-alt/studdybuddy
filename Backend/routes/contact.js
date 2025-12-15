// Backend/routes/contact.js
const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY not set — emails will not be sent.");
}

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // Respond immediately so the frontend is fast
    res.status(200).json({ success: true, message: "Thank you for contacting StudyBuddy" });

    // Send email in background (fire-and-forget)
    (async () => {
      try {
        if (!process.env.SENDGRID_API_KEY) {
          console.log("Skipping email send because SENDGRID_API_KEY is not set.");
          return;
        }

        const msg = {
          to: process.env.CONTACT_TO_EMAIL,
          from: { email: process.env.EMAIL_FROM || process.env.CONTACT_TO_EMAIL },
          subject: `New Contact: ${name}`,
          text:
`New contact form submission

Name: ${name}
Email: ${email}
Grade: ${grade || "N/A"}
Message:
${message}
`,
        };
// Auto-reply email to user
await sgMail.send({
  to: email, // user's email from form
  from: {
    email: process.env.EMAIL_FROM,
    name: "StuddyBuddy Team",
  },
  subject: "Thank you for contacting StuddyBuddy 🎓",
  text: `
Hi ${name},

Thank you for contacting StuddyBuddy!

We have received your message and one of our expert tutors will reach out to you shortly.

✨ What we offer:
• Science, Maths & Technology
• From K-12 to Master’s level
• Fun & concept-based learning
• Led by 25+ elite tutors

We are with you at every stage of learning.

Warm regards,
StuddyBuddy Team
https://studdybuddy-blue.vercel.app
  `,
});

        await sgMail.send(msg);
        console.log("✅ Contact email sent (background).");
      } catch (err) {
        // Log error but nothing is sent back to client (we already responded)
        if (err.response && err.response.body) {
          console.error("SendGrid error:", err.response.body);
        } else {
          console.error("SendGrid error:", err);
        }
      }
    })();

  } catch (err) {
    console.error("Contact route unexpected error:", err);
    // If response already sent above then nothing to do; otherwise reply error:
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  }
});

module.exports = router;
