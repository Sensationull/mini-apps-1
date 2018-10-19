var express = require('express');
var app = express();
var http = require('http');
var db = require('./database/index.js');
const port = 3000;

app.use(express.static('public'));

app.get('/Account', function(req, res) {
  db.accountAll((err, results, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});



app.listen(port, console.log('listening on port ', port));


//