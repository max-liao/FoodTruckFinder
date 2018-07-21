"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav() {
  return _react2.default.createElement(
    "nav",
    { className: "navbar navbar-expand-lg navbar-dark bg-primary" },
    _react2.default.createElement(
      "a",
      { className: "navbar-brand", href: "/" },
      "React Reading List"
    )
  );
};

exports.default = Nav;