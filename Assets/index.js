const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
  
    password: "password",
    database: "empTrackerDb"
});

connection.connect(function(err){
    if (err) {
        throw err;
    }
    selectAllFromEmp();
    function selectAllFromEmp() {
    var query = "SELECT * FROM employee ";
    connection.query(query, function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i]);
      }
     
    });
  }
});



