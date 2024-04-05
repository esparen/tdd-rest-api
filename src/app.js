const express = require('express');

const port = 3001;

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

var users = [
  {name:'John Doe', email: 'email@email.com' }
]

app.get('/', (req, res) => {
  res.status(200).send()
});

app.get('/users', (req, res) => {  
  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  console.log('req.body', req.body);
  users.push(req.body);
  res.status(201).json(req.body);
});

module.exports = app ;

