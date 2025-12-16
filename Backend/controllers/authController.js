import User from "../models/User.js";
import { generateOTP } from "../utils/generateOTP.js";
import { sendEmail } from "../utils/sendEmail.js";

export const signup = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user = await User.findOne({ email });

    if (user && user.isEmailVerified) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const otp = generateOTP();

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

    await sendEmail({
      to: email,
      subject: "StuddyBuddy Email Verification",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    });

    res.json({ message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
