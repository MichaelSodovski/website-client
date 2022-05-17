const { createPool } = require("mysql");

var connection = createPool({
    host: 'localhost',
    user: 'root',
    port: 3000,
    password: 'V8OYdaMVxsXl0LQEU8So',
    database: 'site_db',
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

