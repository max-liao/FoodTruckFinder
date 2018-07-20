var express = require("express");
var bodyParser = require("body-parser");
var React = require("react")
// const template = require('./client/src/app/components/Template/template.js');

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./client/public"));  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/jsoon
app.use(bodyParser.json());

// var controller = require("./client/src/controllers/controller.js");
// app.use(controller);

var _routes = require('./client/src/controllers/routes');
(0, _routes.default)(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});