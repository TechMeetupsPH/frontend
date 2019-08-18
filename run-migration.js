# migration.js
var mysql = require('mysql');
var migration = require('mysql-migration');

var connection = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'your_database'
});

migration.init(connection, __dirname + '/migrations');
