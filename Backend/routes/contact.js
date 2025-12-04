const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, grade, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("📩 New Contact Message Received:");
    console.log({ name, email, grade, message });

    // Later we can add MongoDB storage or email notifications here

    return res.status(200).json({ success: true, message: "Message received" });
  } catch (err) {
    console.error("Contact route error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
