var express = require('express');
var app = express();
var http = require('http');

app.use(express.static('client'));
// app.get('/', (request, response) => {
  // if (error)
// });

app.post('/', (request, response) =>{
  console.log('this is a POST request');
})

console.log('listening on port 3000');
app.listen(3000);


