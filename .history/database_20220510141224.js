const { createPool } = require("mysql");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'V8OYdaMVxsXl0LQEU8So',
    database: 'site_db',
    insecureAuth: true
})

