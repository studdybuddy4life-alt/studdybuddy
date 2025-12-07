const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// POST /api/contact
router.post("/", (req, res) => {
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

  // ✅ 1. Reply to the frontend immediately so the form
  //     always shows success (if validation passed)
  res.status(200).json({
    success: true,
    message: "Message received",
  });

  // ✅ 2. Send email in the background – does NOT block the user
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
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

    // Run sendMail asynchronously, log success or error
    (async () => {
      try {
        console.log("➡️ About to send mail via Gmail to:", toEmail);
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Contact email sent successfully:", info.response);
      } catch (err) {
        console.error("❌ Error sending contact email:", err);
      }
    })();
  } catch (err) {
    console.error("❌ Contact route outer error:", err);
  }
});

module.exports = router;
