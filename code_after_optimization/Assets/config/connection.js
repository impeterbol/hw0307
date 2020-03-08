const mysql = require('mysql');
const util = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: "password",
    database: "empTrackerDb"
});

// general entry point to the app
connection.connect(function (err) {
    if (err) throw err;
});


module.exports = connection;