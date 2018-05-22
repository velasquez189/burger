// MySQL connection initial setup
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "16011989",
        database: "burgers_db"
    });
};

// Make connection
connection.connect(function (err) {
    if (err) {
        console.error("Congratulations, you've played yourself: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});


module.exports = connection;