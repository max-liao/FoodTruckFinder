"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = exports.ListItem = function ListItem(props) {
  return _react2.default.createElement(
    "li",
    { className: "list-group-item" },
    props.children
  );
};