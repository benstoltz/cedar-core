/**
* cedar-core - v1.0.0 - Sun May 07 2017 20:19:46 GMT-0400 (EDT)
* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
* ISC
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.cedar = global.cedar || {})));
}(this, (function (exports) { 'use strict';

var version = "1.0.0";

function square (x) {
  return x * x;
}

exports.version = version;
exports.square = square;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cedar-core.js.map
