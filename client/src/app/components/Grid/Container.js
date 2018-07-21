"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = exports.Container = function Container(_ref) {
  var fluid = _ref.fluid,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "container" + (fluid ? "-fluid" : "") },
    children
  );
};