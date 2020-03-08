var general = [
    {
        type: "input",
        name: "name",
        message: "Enter the employees name:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employees email:"
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee Id'
    }
]

var questions = {
    manager: [
        ...general,
        {
            type: "input",
            name: "office",
            message: "Enter the employees office number:"
        }
    ],

    intern: [
        ...general,
        {
            type: "input",
            name: "school",
            message: "Enter the employees school:"
        }
    ],

    engineer: [
        ...general,
        {
            type: "input",
            name: "github",
            message: "Enter the employees github account:"
        }
    ],
    addMoreEmp: {
        type: 'list',
        name: 'add',
        message: 'Would you like to add more employees?',
        choices: ['yes', 'no']
    },
    chooseEmpType: {
        type: 'list',
        name: 'empType',
        message: 'What type of employee would you like to add?',
        choices: ['intern', 'engineer']
    }
};

module.exports = questions;