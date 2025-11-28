// simple email util using nodemailer (replace with SendGrid transport in production)
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
async function sendMail(to, subject, text, html){
  const info = await transporter.sendMail({ from: process.env.EMAIL_FROM || process.env.OWNER_EMAIL, to, subject, text, html });
  return info;
}
module.exports = { sendMail };
