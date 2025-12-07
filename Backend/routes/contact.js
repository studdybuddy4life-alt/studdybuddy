const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("📩 New Contact Form Submission:", {
      name,
      email,
      grade,
      message,
    });

    // 👉 Respond to the frontend IMMEDIATELY
    // so the user doesn't wait for Gmail
    res.status(200).json({
      success: true,
      message: "Message received",
    });

    // 👉 Now send the email in the background (no await)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;

    const mailOptions = {
      from: `"StudyBuddy Contact" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "New StudyBuddy Contact Form Message",
      text: `
New message from StudyBuddy Contact Form:

Name:   ${name}
Email:  ${email}
Grade:  ${grade || "Not specified"}

Message:
${message}
      `,
    };

    transporter
      .sendMail(mailOptions)
      .then((info) => {
        console.log("✅ Contact email sent successfully:", info.response);
      })
      .catch((err) => {
        console.error("❌ Error sending contact email:", err);
      });
  } catch (err) {
    console.error("❌ Contact route error (outer catch):", err);
    if (!res.headersSent) {
      return res.status(500).json({ error: "Server error" });
    }
  }
});

module.exports = router;
