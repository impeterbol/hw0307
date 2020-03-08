module.exports = {
    menu: {
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
    },
    viewDepts: {
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

    },
    addMenu: {
        name: "do",
        type: "list",
        message: "What would you like to add?",
        choices: [
            "department",
            "role",
            "employee",
            "exit"
        ]

    },
    addDepartment: {
        name: "name",
        type: "input",
        message: "Enter dept Name"
    },
    addRole: [
        {
            name: "title",
            type: "input",
            message: "Enter role title"
        },
        {
            name: "salary",
            type: "input",
            message: "Enter role salary"
        },
        {
            name: "department_id",
            type: "input",
            message: "Enter dept_id associated with this role"
        }
    ]
}