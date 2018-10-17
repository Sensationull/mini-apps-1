var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (request, response) => {
  // if (error)
// });

app.post('/', (request, response) => {
  // send the CSV as a response
    // take the request and then 
    fs.appendFile('./client/index.html', request.body.name, (err, data) =>{
      if (err) {
        response.statusCode(500).send()
      } else {
        console.log('appended succesfully');
      }
    });
  console.log('this is a POST request', request.body.name);
  // response.end();
  // console.log('end', response.end)
});

console.log('listening on port 3000');
app.listen(3000);


