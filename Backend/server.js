// StudyBuddy Backend - server.js

const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { Server } = require("socket.io");

// Import routes
const authRoute = require("./routes/auth");
const bookingRoute = require("./routes/booking");
const paymentRoute = require("./routes/payment");
const referralRoute = require("./routes/referral");
const subscriptionRoute = require("./routes/subscription");
const subscriptionUsageRoute = require("./routes/subscriptionUsage");
const contactRoute = require("./routes/contact"); // ✨ contact form route
const adminRoute = require("./routes/admin");

// Create app and server
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Simple root and health endpoints for Render / monitoring
app.get("/", (req, res) => {
  res.type("text").status(200).send("StudyBuddy backend – OK");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Mount routes
app.use("/auth", authRoute);
app.use("/booking", bookingRoute);
app.use("/payment", paymentRoute);
app.use("/referral", referralRoute);
app.use("/subscription", subscriptionRoute);
app.use("/subscription-usage", subscriptionUsageRoute);

// Contact form endpoint (used by frontend at /api/contact)
app.use("/api/contact", contactRoute);
app.use("/admin", adminRoute);

// MongoDB connect
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/studybuddy";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connect error", err);
    // If you want the app to stop on DB failure, uncomment next line:
    // process.exit(1);
  });

// Socket.io for opportunity chat
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  socket.on("joinOpportunity", ({ opportunityId, userId, role }) => {
    const room = `opp_${opportunityId}`;
    socket.join(room);
    io.to(room).emit("systemMessage", {
      message: `${role} joined`,
      userId,
    });
  });

  socket.on("oppMessage", ({ opportunityId, userId, text }) => {
    const room = `opp_${opportunityId}`;
    io.to(room).emit("oppMessage", {
      opportunityId,
      userId,
      text,
      createdAt: new Date(),
    });
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
