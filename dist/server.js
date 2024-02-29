const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
require('dotenv').config(); // Loads variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
  const { name, email, message } = req.body;

  // Process the form data, send an email
  console.log('Form data:', { name, email, message });

  // Send email
  const transporter = nodeMailer.createTransport("SMTP", {
    host: 'smtp-mail.outlook.com', // Hostname
    secureConnection: false, // TLS require secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS // Your password
    },
    tls: {
      ciphers:'SSLv3'
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Form Submission',
    text: `Dear ${name},\n\nThank you for submitting the form. I have received your message. I will be in touch soon: ${message}\n\nRegards,\nAndrew Webster`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.redirect('/'); // User is sent to homepage after clicking submit button
    }
  });
});

// Port listener to establish website is running on the port specified
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
