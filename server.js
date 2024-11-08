const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const products = require('./products.json');

app.use(express.static('public')); // Serve static files from the "public" folder

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.get(`/api/products`, (req, res) => {
  res.json(products);
});

// Serve static files (like your images) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


// Route for About Page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});

// Route for Contact Page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact.html'));
});

app.use(express.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message from ${name} (${email}): ${message}`);
  res.send('Thank you for your message!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
