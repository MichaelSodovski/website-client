const { createPool } = require("mysql");

var connection = create({
    host: 'localhost',
    user: 'root',
    password: 'V8OYdaMVxsXl0LQEU8So',
    database: 'site_db',
});

connection.connect(err => {
    if (err) throw new Error('mySql failed connection');
    console.log('connected to SQL server');
})

function runSQL(sqlCommand) {
    return new Promise((resolve, reject) => {
        connection.query(sqlCommand, function (error, results) {
            if (error) reject(error);
            else resolve(results);
        });
    })
}

module.exports = {
    runSQL
}

