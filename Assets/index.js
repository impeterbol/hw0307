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
    // console.log('working');
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
  
  // * View departments, roles, employees

function viewDepRolesEmps(){
    inquirer
            .prompt ({
              name: "do",
              type: "list",
              message: "What would you like to view?",
              choices: [
                    "department",
                    "role",
                    "employee",
                    //add about all
                    "exit"
                    ]

            })

            .then(function(answer){
              connection.query(
                'SELECT * FROM ??',`${answer.do}`, function(err,res){
                        if(err) {
                          throw err
                        };
                        console.table(res)
                  
             });

            });
};


//   * Add departments, roles, employees



function addDepRolesEmps(){
      inquirer
                .prompt ({
                  name: "do",
                  type: "list",
                  message: "What would you like to add?",
                  choices: [
                        "department",
                        "role",
                        "employee",
                        "exit"
                        ]

                })

                .then(function(answer){
                    if(answer.do=== 'department')
                    {
                            inquirer
                              .prompt(
                                {
                                name: "newDepName",
                                type: "input",
                                message: "Enter dept Name"
                                }
                              )
                            
                              .then(function(answer2){
                                
                                connection.query(
                                  'INSERT INTO ?? (name) VALUES (?)',[answer.do, answer2.newDepName], function(err,res){
                                          if(err) {
                                            throw err
                                          };
                                          console.log('added!');
                              })

                              })

                              
                  }

                  else if(answer.do === 'role')
                  
                  {
                            inquirer
                            .prompt(
                              [
                              {
                              name: "newRoleName",
                              type: "input",
                              message: "Enter role title"
                              },
                              {name: "newRoleSalary",
                              type: "input",
                              message: "Enter role salary"
                              },
                              {name: "newRoleDeptId",
                              type: "input",
                              message: "Enter dept_id associated with this role"
                              }
                            ]
                            )
                          
                            .then(function(answer3){
                              console.log(answer.do);
                                                           
                              connection.query(
                                //I was getting error here when trying to add multiple values
                                'INSERT INTO ?? (title,salary,department_id) VALUES (?,?,?)',[answer.do,answer3.newRoleName,answer3.newRoleSalary,answer3.newRoleDeptId], function(err,res){
                                        if(err) {
                                          throw err
                                        };
                                        console.log('added!')
                            })

                            })

                    
                  }


                  else if(answer.do === 'employee')
                  
                  {
                            inquirer
                            .prompt(
                              [
                              {
                              name: "newEmpFirstName",
                              type: "input",
                              message: "Enter Emp first name"
                              },
                              {
                                name: "newEmpLastName",
                                type: "input",
                                message: "Enter Emp last name"
                                },
                              {name: "newEmpRoleId",
                              type: "input",
                              message: "Enter role_id for new employee"
                              },
                              {name: "newEmpManagerId",
                              type: "input",
                              message: "Enter manager_id for new employee (if no manager enter 0)"
                              }
                            ]
                            )
                          
                            .then(function(answer4){
                              
                              connection.query(
                                //I am getting error here when trying to add multiple values
                                'INSERT INTO ?? (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)',[answer.do, answer4.newEmpFirstName,answer4.newEmpLastName,answer4.newEmpRoleId,answer4.newEmpManagerId], function(err,res){
                                        if(err) {
                                          throw err
                                        };
                                        console.log('added!')
                            })

                            })

                    
                  }
                

              
                              

              });
};

// upd emp role

 function updateEmpRoles(){
  inquirer
            .prompt ({
              name: "updRole",
              type: "list",
              message: "What would you like to do?",
            choices: [
                  "List employees to update roles",
                  "exit"
                  ]
            })

            .then(function(answer){
                  if(answer.updRole ==='List employees to update roles'){
                        connection.query ('SELECT employee.first_name,employee.last_name,role.title,role.id FROM employee LEFT JOIN role ON employee.role_id=role.id',function(err,res){
                                                if(err) {
                                                  throw err
                                                };
                                                 console.table(res);
                                                updateEmpRoles2();
                                              });
                                      
                  }
            });



};




function updateEmpRoles2(){
  var employees = [];
  inquirer
        .prompt ({
                  type: "input",
                  name: "updEmpFirstName",
                  message: "Enter the employees name:"
                },
                {
                  type: "input",
                  name: "updEmpSecondName",
                  message: "Enter the employees second_name:"
                },
                {
                  type: 'input',
                  name: 'updEmpCurid',
                  message: 'Enter Employee Id'
                })
                
                .then
                      (function(updEmpAnswers){
                  const {updEmpFirstName, updEmpSecondName, updEmpCurid } = updEmpAnswers;
                  
                  console.log(updEmpAnswers)
            // employees.push(new Emp.Manager(name, id, email, office)
                })

};

