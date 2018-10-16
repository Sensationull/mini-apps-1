var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

app.use(express.static('client'));
// app.use(bodyParser);
// app.get('/', (request, response) => {
  // if (error)
// });

app.post('/', (request, response) => {
  // JSON stringify the request, and then convert it to CSV
  // send the CSV as a response
  console.log('this is a POST request', request);
})

console.log('listening on port 3000');
app.listen(3000);


