const connection = require('./connection')

module.exports = {
    findAll: function (table, callback) {
        const str = "SELECT * FROM ??"
        connection.query(str, [table], callback)
    },
    create: function (table, data, callback) {
        let str = "INSERT INTO " + table
        // data = { name: Petr, age: 26 }
        // Object.keys(data) === ['name', 'age']
        // .toString() === name,age
        str += " (" + Object.keys(data).toString() + ") ";

        // data = { name: Petr, age: 26 }
        // Object.vales(data) === ['Petr', 26 ]
        // ['Petr', 26 ].map(x => "?") === ['?', '?']
        // .toString() === ?,?
        str += "VALUES (" + Object.values(data).map(x => "?").toString() + ")"
        connection.query(str, Object.values(data), callback)
    }
}