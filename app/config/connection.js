var mysql = require("mysql");

var connection;

exports.envVar = (req, res) => {
  console.log(process.env.GoogleCloud);
};

// Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else if (process.env.GoogleCloud) {
  connection = mysql.createConnection({
    host: "104.196.51.217",
    port: 3307,
    user: "root",
    password: "password",
    database: "FoodTruck"
  });
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "project2_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
