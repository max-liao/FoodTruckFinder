"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormBtn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormBtn = exports.FormBtn = function FormBtn(props) {
  return _react2.default.createElement(
    "button",
    _extends({}, props, { style: { float: "right", marginBottom: 10 }, className: "btn btn-success" }),
    props.children
  );
};