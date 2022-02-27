const mysql = require("mysql");
// aws를 위해서 
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user : 'root',
    password : 'password',
    database : 'myapp'
});
exports.pool = pool;

