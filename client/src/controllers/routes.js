'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addRoutes;

var _home = require('../app/pages/home');
var _home2 = _interopRequireDefault(_home);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const model = require("../models/model.js");
const twitterlog = require("../js/twitter.js");

function addRoutes(router) {
  // Browser Routing
  router.get('/', function (req, res, next) {
    console.log("Home Page Accessed");
    next();
  });

  router.get("/contact", function (req, res, next) {
    res.locals.component = _home2.default;
    res.locals.initialState = { name: 'Max', link: 'test' };
    next();
  });

  router.get("/test", function (req, res, next) {
    res.locals.component = _home2.default;
    res.locals.initialState = { name: 'Max, enjoy the test!', link: 'contact'};
    next();
  });
  
  // SQL Database Routing
  // Shows all trucks data
  router.get("/data", function (req, res) {
    model.selectall(function (data) {
      res.json(data);
      //console.log(data);
    });
  });

  // Shows all trucks data based on the column and the id of the truck
  router.get("/data/:table/:col/:id", function (req, res) {
    var id = req.params.id;
    var table = req.params.table;
    var col = req.params.col;
    model.selectOne(table, col, id, function (data) {
      res.json(data);
      console.log(data);
    });
  });

  // returns all the locations of the food truck
  router.get("/locations", function (req, res) {
    model.selectlocations(function (data) {
      res.json(data);
    });
  });

  //Adds New food truck
  router.post("/api/model", function (req, res) {
    console.log('server got', JSON.stringify(req.body, null, 2))
    //model.createone(req.body.keys, req.body.values, function(result) {

    var keys = ['foodtruck_name', 'contact', 'descr', 'cuisine', 'location', 'date'];
    var values = [req.body.foodtruck_name, req.body.contact, req.body.descr, req.body.cuisine, req.body.location, req.body.date];
    console.log('keys:' + keys);
    console.log('values :' + values);
    model.createone(keys, values, function (result) {
      //res.json({ id: result.id });
      //console.log("result from createone" + result);
      res.send(result);
    });
    //});
  });

  //Update keys to values in row with id
  router.put("/api/model/:id", function (req, res) {
    var keys = ['foodtruck_name', 'contact', 'descr', 'cuisine', 'location', 'date'];
    var values = [req.body.foodtruck_name, req.body.contact, req.body.descr, req.body.cuisine, req.body.location, req.body.date];

    model.updateone(keys, values, req.body.id, function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.json(result);
      res.status(200).end();
    }
    );
  });

  router.get("/api/:table/:column/:name", function(req, res) {
    var name = req.params.name;
    var table = req.params.table;
    var col = req.params.column;
    console.log("search called.")
    model.searchNames(table,col, name, function(data) {
    res.json(data);
    console.log(data);
    });
  });
  
  router.get("/api/twitter/:handle", function(req, res) {
    console.log("twitter called 2");
    var handle = req.params.handle;
    twitterlog.getTweets(handle, function(data) {
      
      //console.log(data);
      res.json(data);
      });
  
  });
};