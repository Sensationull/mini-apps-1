var express = require('express');
var app = express();
var http = require('http');
const port = 3000;

app.use(express.static('public'));

app.get('/a', function(req, res) {
  console.log(req);
  res.send('Hello from GETTTT')
});



app.listen(port, console.log('listening on port ', port));


//