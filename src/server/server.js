const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://thanhduong81959:GOASUbo14TQsh94U@cluster0.hs3frd6.mongodb.net/test');

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error', error);
})

db.once('open', () => {
  console.log("Database connected");
})


const app = express();

app.get('/signin', (req, res) => {
  res.send('This is the sign in page');
})

app.post('/signin', (req, res) => {
  
})

app.get('/register', (req, res) => {
  res.send('This is the sign up page');
})

app.post('/register', (req, res) => {
  
})


app.listen(8080, () => {
  console.log("Listening on port 8080");
})

