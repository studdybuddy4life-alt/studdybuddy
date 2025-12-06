const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Configure Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("📩 New Contact Message Received:", {
      name,
      email,
      grade,
      message,
    });

    // Email to YOU (admin)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "New StudyBuddy Contact Form Message",
      text: `
New message from StudyBuddy Contact Form:

Name:  ${name}
Email: ${email}
Grade: ${grade || "Not specified"}

Message:
${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Message received" });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
