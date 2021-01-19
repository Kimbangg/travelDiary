const express = require('express');
const app = express();

app.listen(5000, function () {
  console.log('start');
});

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

