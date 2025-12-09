// Backend/routes/admin.js
const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");

// middleware to check admin key header
router.use((req, res, next) => {
  const key = req.header("x-admin-key");
  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

// GET /admin/messages - list messages (most recent first)
router.get("/messages", async (req, res) => {
  try {
    const msgs = await ContactMessage.find().sort({ createdAt: -1 }).limit(1000).lean();
    res.json({ success: true, messages: msgs });
  } catch (err) {
    console.error("Admin list error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// DELETE /admin/messages/:id - delete a message
router.delete("/messages/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await ContactMessage.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    console.error("Admin delete error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
