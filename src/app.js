const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.status(200).send()
});

//var server = app.listen(port, () => console.log(`TDD REST API listening on port ${port}!`))


module.exports = app ;

