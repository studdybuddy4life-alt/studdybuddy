const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("📩 New Contact Form Submission:");
    console.log({ name, email, grade, message });

    // Create Gmail transporter using env vars
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;

    console.log("➡️ Sending email via Gmail:");
    console.log("From:", process.env.EMAIL_USER);
    console.log("To:", toEmail);

    // Email to YOU (admin)
    await transporter.sendMail({
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
    });

    console.log("✅ Email sent successfully from backend");

    return res.status(200).json({
      success: true,
      message: "Message received",
    });
  } catch (err) {
    console.error("❌ Contact route error (email failed):", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
