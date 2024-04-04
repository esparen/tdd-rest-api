const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.status(200).send()
});

app.get('/users', (req, res) => {
  const users = [
    {name:'John Doe', email: 'email@email.com' }
  ]
  res.status(200).json(users);
});

module.exports = app ;

