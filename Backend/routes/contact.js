// Backend/routes/contact.js
const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const ContactMessage = require("../models/ContactMessage");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    if (!name || !email || !grade || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save in MongoDB
    const saved = await ContactMessage.create({ name, email, grade, message });
    console.log("💾 Saved contact message:", saved._id);

    // Prepare email
    const msg = {
      to: process.env.CONTACT_TO_EMAIL,
      from: { email: process.env.EMAIL_FROM, name: "StudyBuddy" },
      subject: "New StudyBuddy Contact Message",
      text: `
New contact form submission

Name: ${name}
Email: ${email}
Grade: ${grade}
Message:
${message}

Saved ID: ${saved._id}
`,
    };

    // Send email (async)
    (async () => {
      try {
        await sgMail.send(msg);
        console.log("✅ Email sent successfully via SendGrid");
      } catch (err) {
        if (err.response && err.response.body) {
          console.error("❌ SendGrid Error:", err.response.body);
        } else {
          console.error("❌ SendGrid Error:", err);
        }
      }
    })();

    // Respond to client
    return res.status(200).json({ success: true, message: "Message received", id: saved._id });
  } catch (error) {
    console.error("Contact route error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
