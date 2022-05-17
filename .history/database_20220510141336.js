const { createPool } = require("mysql");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'V8OYdaMVxsXl0LQEU8So',
    database: 'site_db',
})

pool.query('select * from users_table', (err, result, fields) => {
    if
});

