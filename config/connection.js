var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "16011989",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Congratulations, you've played yourself: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});


module.exports = connection;