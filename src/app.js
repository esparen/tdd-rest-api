const express = require('express');
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');

const port = 3001;
const app = express();

app.db = knex(knexfile.test);

consign({ cwd: 'src', verbose: false})
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).send()
});

module.exports = app ;

