/**
* cedar-core - v1.0.0 - Sun May 07 2017 23:11:03 GMT-0400 (EDT)
* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
* ISC
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.cedar = global.cedar || {})));
}(this, (function (exports) { 'use strict';

// import { version } from '../package.json';
// export { version };

function square (x) {
  fetch('blah.json').then(function (resp) {
    console.log('squee');
  });
  return x * x;
}

exports.square = square;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cedar-core.js.map
