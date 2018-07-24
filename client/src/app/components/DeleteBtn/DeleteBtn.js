"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./DeleteBtn.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
var DeleteBtn = function DeleteBtn(props) {
  return _react2.default.createElement(
    "span",
    _extends({ className: "delete-btn" }, props),
    "\u2717"
  );
};

exports.default = DeleteBtn;