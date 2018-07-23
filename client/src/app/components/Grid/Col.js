"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = exports.Col = function Col(_ref) {
  var size = _ref.size,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: size.split(" ").map(function (size) {
        return "col-" + size;
      }).join(" ") },
    children
  );
};