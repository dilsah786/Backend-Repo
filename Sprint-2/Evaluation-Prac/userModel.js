const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  city: String,
  phone_no: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

module.exports = User;

// Morgan Middleware


const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

// Use the 'morgan' middleware with the desired format
app.use(morgan(':method :status :res[content-length] :response-time ms :date :http-version :url\n'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express with Morgan!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
