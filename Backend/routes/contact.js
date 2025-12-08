const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    if (!name || !email || !grade || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("📩 New Contact Form Submission:", { name, email, grade, message });

    const msg = {
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.EMAIL_FROM, // must be verified sender in SendGrid
      subject: "New StudyBuddy Contact Message",
      text: `
Name: ${name}
Email: ${email}
Grade: ${grade}
Message: ${message}
      `,
    };

    await sgMail.send(msg);

    console.log("✅ Email sent successfully via SendGrid");

    return res.status(200).json({ success: true, message: "Message received" });
  } catch (error) {
    console.error("❌ SendGrid Error:", error);
    return res.status(500).json({ success: false, error: "Email sending failed" });
  }
});

module.exports = router;
