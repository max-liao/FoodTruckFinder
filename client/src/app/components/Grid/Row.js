"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = exports.Row = function Row(_ref) {
  var fluid = _ref.fluid,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "row" + (fluid ? "-fluid" : "") },
    children
  );
};