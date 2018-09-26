var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

exports.envVar = (req, res) => {
  res.send(process.env.GoogleCloud);
};

console.log(process.env.GoogleCloud);

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./app/public"));  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/jsoon
app.use(bodyParser.json());

var routes = require('./app/controllers/controller.js');
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
