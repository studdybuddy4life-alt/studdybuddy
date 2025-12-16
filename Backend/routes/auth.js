const express = require("express");
const router = express.Router();
const User = require("../models/User");
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");

// SendGrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * POST /auth/signup
 * Email signup with OTP verification
 */
router.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user = await User.findOne({ email });

    if (user && user.isEmailVerified) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Generate 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    const otpData = {
      code: otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min
    };

    if (!user) {
      user = await User.create({
        email,
        otp: otpData,
      });
    } else {
      user.otp = otpData;
      await user.save();
    }

    // Send OTP email
    await sgMail.send({
      to: email,
      from: process.env.EMAIL_FROM,
      subject: "StuddyBuddy Email Verification",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    });

    res.json({ message: "OTP sent to email" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * Health check
 */
router.get("/health", (req, res) => {
  res.send({ ok: true });
});

module.exports = router;
