/**
* cedar-core - v1.0.0 - Tue May 09 2017 13:16:27 GMT-0400 (EDT)
* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
* ISC
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.cedar = global.cedar || {})));
}(this, (function (exports) { 'use strict';

function cubed(x) {
    return x * x * x;
}

// import {version} from '../package.json';
// export {version};
function square(x) {
    return x * x;
}
function bob(x) {
    return cubed(square(x));
}

exports.square = square;
exports.bob = bob;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cedar-core.js.map
