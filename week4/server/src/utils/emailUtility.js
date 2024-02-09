// utils/emailUtility.js

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (userEmail, userName) => {
  const mailOptions = {
    from: '"Your App Name" radmyr.deriabin@hicoders.ch',
    to: userEmail,
    subject: "Welcome to Bloggy",
    text: `Hi ${userName}, welcome to our Bloggy`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${userEmail}`);
  } catch (error) {
    console.error(`Error sending welcome email to ${userEmail}:`, error);
  }
};
