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

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    // Email to YOU (admin)
    await transporter.sendMail({
      from: `"StudyBuddy Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Contact Message",
      text: `
Name: ${name}
Email: ${email}
Grade: ${grade}
Message: ${message}
      `
    });

    // Thank you email to USER
    await transporter.sendMail({
      from: `"StudyBuddy" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting StudyBuddy!",
      text: `
Hi ${name},

Thank you for reaching out to StudyBuddy! 🎓  
We have received your message and our team will contact you shortly.

✔ Your Message:  
"${message}"

We are always here to support your learning journey.

Warm regards,  
StudyBuddy Team
      `
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
