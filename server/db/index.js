const mysql  = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'airbnb'
});

connection.connect((err) => {
  err ? console.error(err) :
    console.log('Connected to DB!');
});

module.exports = connection;