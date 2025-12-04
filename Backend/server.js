// StudyBuddy Backend - server.js
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { Server } = require('socket.io');

const authRoute = require('./routes/auth');
const bookingRoute = require('./routes/booking');
const paymentRoute = require('./routes/payment');
const referralRoute = require('./routes/referral');
const subscriptionRoute = require('./routes/subscription');
const subscriptionUsageRoute = require('./routes/subscriptionUsage');

const contactRoute = require("./routes/contact");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// simple root and health endpoints for Render / monitoring
app.get('/', (req, res) => {
  res.type('text').status(200).send('StudyBuddy backend — OK');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});


// Mount routes
app.use('/auth', authRoute);
app.use('/booking', bookingRoute);
app.use('/payment', paymentRoute);
app.use('/referral', referralRoute);
app.use('/subscription', subscriptionRoute);
app.use('/subscription-usage', subscriptionUsageRoute);
app.use("/api/contact", contactRoute);


// DB connect
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/studybuddy';
mongoose.connect(MONGO, { useNewUrlParser:true, useUnifiedTopology:true })
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.error('MongoDB connect error', err));

// Socket.io for opportunity chat
const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL || '*', methods: ['GET','POST'] }
});
io.on('connection', socket=>{
  console.log('socket connected', socket.id);
  socket.on('joinOpportunity', ({ opportunityId, userId, role })=>{
    const room = `opp_${opportunityId}`;
    socket.join(room);
    io.to(room).emit('systemMessage', { message: `${role} joined`, userId });
  });
  socket.on('oppMessage', ({ opportunityId, userId, text })=>{
    const room = `opp_${opportunityId}`;
    io.to(room).emit('oppMessage', { opportunityId, userId, text, createdAt: new Date() });
  });
  socket.on('disconnect', ()=>{ console.log('socket disconnected', socket.id); });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
