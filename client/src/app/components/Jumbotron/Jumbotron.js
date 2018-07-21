"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      style: { height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "skyblue", color: "whitesmoke" },
      className: "jumbotron"
    },
    children
  );
};

exports.default = Jumbotron;