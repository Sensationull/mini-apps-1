var express = require('express');
var app = express();
var http = require('http');
const port = 3000;

app.use(express.static('client'));



app.listen(port, console.log('listening on port ', port));