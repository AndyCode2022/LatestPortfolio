const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/path/to/server/script', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Setup email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'website-owner-email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
