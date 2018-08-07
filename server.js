var express = require("express");
var bodyParser = require("body-parser");

//var _react = require("react")
//var _react2 = _interopRequireDefault(_react);

//var _server = require('react-dom/server');

//var _template = require('./client/src/app/components/Template/template.js');
//var _template2 = _interopRequireDefault(_template);
//function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./app/public"));  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/jsoon
app.use(bodyParser.json());

var routes = require('./app/controllers/controller.js');
app.use(routes);
//(0, _routes.default)(app);


app.use(function (req, res, next) {
  var _res$locals = res.locals,
      component = _res$locals.component,
      initialState = _res$locals.initialState;

  if (!component) {
    return next();
  }

  res.format({
    'text/html': function textHtml() {
      var appString = (0, _server.renderToString)(_react2.default.createElement(component, initialState));
      res.send((0, _template2.default)({
        body: appString,
        title: 'Food Truck Finder',
        initialState: JSON.stringify(initialState)
      }));
    },
  });

  next();
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
