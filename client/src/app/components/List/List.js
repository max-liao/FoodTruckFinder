"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./List.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = exports.List = function List(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: "list-overflow-container" },
    _react2.default.createElement(
      "ul",
      { className: "list-group" },
      children
    )
  );
};