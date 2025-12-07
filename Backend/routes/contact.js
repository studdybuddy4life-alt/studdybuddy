const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("📩 New Contact Form Submission:", {
      name,
      email,
      grade,
      message,
    });

    // Create Gmail transporter – uses env vars from Render
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;

    // Compose email to YOU (admin)
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

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Message received",
    });
  } catch (err) {
    console.error("❌ Contact route error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
