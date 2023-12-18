const express = require('express');

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

