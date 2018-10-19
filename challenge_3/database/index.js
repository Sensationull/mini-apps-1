var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'Checkout'
});

connection.connect();

var accountAll = function(callback) {
  connection.query('SELECT * FROM Account', function(error, results){
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
} 

accountAll(function(err,results){
  console.log('All the things', err,results);
});

module.exports.accountAll = accountAll;
