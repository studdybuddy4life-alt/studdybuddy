const express = require("express");
const router = express.Router();
const User = require("../models/User");
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");

// SendGrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * ======================================================
 * POST /auth/signup
 * Step 1: Email signup → Send OTP
 * ======================================================
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
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
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

    return res.json({ message: "OTP sent to email" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * ======================================================
 * POST /auth/verify-otp
 * Step 2: Verify OTP → Mark email verified
 * ======================================================
 */
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res
        .status(400)
        .json({ message: "Email and OTP are required" });
    }

    const user = await User.findOne({ email });

    if (!user || !user.otp || !user.otp.code) {
      return res.status(400).json({ message: "OTP not found" });
    }

    if (user.otp.expiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    if (user.otp.code !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // OTP verified successfully
    user.isEmailVerified = true;
    user.otp = undefined;
    await user.save();

    return res.json({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * ======================================================
 * GET /auth/health
 * Health check
 * ======================================================
 */
router.get("/health", (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
