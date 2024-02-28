const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
  const { name, email, message } = req.body;

  // Process the form data, send an email
  console.log('Form data:', { name, email, message });

  // Respond to the client
  res.send('Form submitted successfully!');
});
// Port listener to establish website is running on the port specified
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});