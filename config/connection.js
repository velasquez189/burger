// MySQL connection initial setup
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "16011989",
    database: "burgers_db"
});
// Make connection
connection.connect(function (err) {
    if (err) {
        console.error("Congratulations, you've played yourself: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});


module.exports = connection;