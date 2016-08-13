"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var joinClassNames = function joinClassNames() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (n) {
    return n && typeof n === "string";
  }).join(" ");
};

exports.default = joinClassNames;