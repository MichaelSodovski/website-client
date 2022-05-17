const { createPool } = require("mysql");

var connection = createPool({
    host: 'localhost',
    user: 'root',
    password: 'V8OYdaMVxsXl0LQEU8So',
    database: 'site_db',
});

connection.connect(err => {
    if (err) throw new Error('mySql failed connection');
    console.log('connected to SQL server');
})

connection.query('select * from users_table', (err, result, fields) => {
    if(err) {
        return console.log(err);
    }
    return console.log(result);
});

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

