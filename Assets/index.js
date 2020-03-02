const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
  
    password: "password",
    database: "empTrackerDb"
});

// general entry point to the app
connection.connect(function(err){
    if (err) throw err;
    startApp();
});



//main function
function startApp() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add departments, roles, employees",
          "View departments, roles, employees",
          "Update employee roles",
          "Update employee managers",
          "View employees by manager ",
          "Delete departments, roles, and employees",
          "View the total utilized budget of a department -- ie the combined salaries of all employees in that department",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Add departments, roles, employees":
          addDepRolesEmps();
          break;
  
        case "View departments, roles, employees":
          viewDepRolesEmps();
          break;
  
        case  "Update employee roles":
         updateEmpRoles();
          break;
  
        case "Update employee managers":
          updateEmpManagers();
          break;

          case "View employees by manager ":
            viewEmpByManager();
            break;

        case "Delete departments, roles, and employees":
                deleteDepRolesEmps();
                break;

        case "View the total utilized budget of a department -- ie the combined salaries of all employees in that department":
        totalBudgetByDept();
        break;

        case "exit":
          connection.end();
          break;
        }
      });
  }
  
//first case  * Add departments, roles, employees


