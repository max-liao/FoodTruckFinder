"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = require("./Input");

Object.keys(_Input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Input[key];
    }
  });
});

var _TextArea = require("./TextArea");

Object.keys(_TextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextArea[key];
    }
  });
});

var _FormBtn = require("./FormBtn");

Object.keys(_FormBtn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormBtn[key];
    }
  });
});