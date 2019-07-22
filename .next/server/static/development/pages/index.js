module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.ts":
/*!************************!*\
  !*** ./pages/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var containers_home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! containers/home/home */ "./src/containers/home/home.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return containers_home_home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/assets/icons/back2.svg":
/*!************************************!*\
  !*** ./src/assets/icons/back2.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBack2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "back2_svg__a"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "none",
  d: "M0 0h128.628v128.628H0z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "back2_svg__b",
  x: 0,
  y: 0,
  width: 128.628,
  height: 128.628,
  filterUnits: "userSpaceOnUse"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 1
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 10,
  result: "blur"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0.141
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  operator: "in",
  in2: "blur"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "SourceGraphic"
})));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Component 26 \\u2013 1",
  clipPath: "url(#back2_svg__a)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#back2_svg__b)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  "data-name": "Ellipse 91",
  cx: 34.314,
  cy: 34.314,
  r: 34.314,
  transform: "translate(30 29)",
  fill: "#fff"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 158"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 157"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-name": "Path 170",
  d: "M81.926 61.937H45.334a1.608 1.608 0 1 0 0 3.216h36.592a1.608 1.608 0 1 0 0-3.216z"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 160"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-name": "Group 159"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-name": "Path 171",
  d: "M47.608 63.544l12.584-12.583a1.608 1.608 0 1 0-2.274-2.275L44.197 62.407a1.608 1.608 0 0 0 0 2.274l13.721 13.72a1.608 1.608 0 1 0 2.274-2.274z"
}))));

var SvgBack2 = function SvgBack2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 128.628,
    height: 128.628
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4LjYyOCIgaGVpZ2h0PSIxMjguNjI4IiB2aWV3Qm94PSIwIDAgMTI4LjYyOCAxMjguNjI4Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEyOC42MjgiIGhlaWdodD0iMTI4LjYyOCIgZmlsbD0ibm9uZSIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxmaWx0ZXIgaWQ9IkVsbGlwc2VfOTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjguNjI4IiBoZWlnaHQ9IjEyOC42MjgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW5wdXQ9IlNvdXJjZUFscGhhIi8+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMC4xNDEiLz4KICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxnIGlkPSJDb21wb25lbnRfMjZfMSIgZGF0YS1uYW1lPSJDb21wb25lbnQgMjYg4oCTIDEiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiBmaWx0ZXI9InVybCgjRWxsaXBzZV85MSkiPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzkxLTIiIGRhdGEtbmFtZT0iRWxsaXBzZSA5MSIgY3g9IjM0LjMxNCIgY3k9IjM0LjMxNCIgcj0iMzQuMzE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCAyOSkiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJsZWZ0LWFycm93IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0My43MjYgNDguMjE2KSI+CiAgICAgIDxnIGlkPSJHcm91cF8xNTgiIGRhdGEtbmFtZT0iR3JvdXAgMTU4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEzLjcyMSkiPgogICAgICAgIDxnIGlkPSJHcm91cF8xNTciIGRhdGEtbmFtZT0iR3JvdXAgMTU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MCIgZGF0YS1uYW1lPSJQYXRoIDE3MCIgZD0iTTM4LjIsMjM1LjMxOEgxLjYwOGExLjYwOCwxLjYwOCwwLDEsMCwwLDMuMjE2SDM4LjJhMS42MDgsMS42MDgsMCwxLDAsMC0zLjIxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTIzNS4zMTgpIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xNjAiIGRhdGEtbmFtZT0iR3JvdXAgMTYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KICAgICAgICA8ZyBpZD0iR3JvdXBfMTU5IiBkYXRhLW5hbWU9Ikdyb3VwIDE1OSI+CiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xNzEiIGRhdGEtbmFtZT0iUGF0aCAxNzEiIGQ9Ik0zLjg4Miw3NC4xNTgsMTYuNDY2LDYxLjU3NUExLjYwOCwxLjYwOCwwLDEsMCwxNC4xOTIsNTkuM0wuNDcxLDczLjAyMWExLjYwOCwxLjYwOCwwLDAsMCwwLDIuMjc0bDEzLjcyMSwxMy43MmExLjYwOCwxLjYwOCwwLDEsMCwyLjI3NC0yLjI3NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTU4LjgzKSIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/assets/icons/pastalogo.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/pastalogo.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPastalogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./src/assets/images/arrabiata.png":
/*!*****************************************!*\
  !*** ./src/assets/images/arrabiata.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrabiata_88264487b71de00a5eb71bd046964ea0.png";

/***/ }),

/***/ "./src/assets/images/bowl.png":
/*!************************************!*\
  !*** ./src/assets/images/bowl.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bowl_83436303d3610a26737228dc78183b9d.png";

/***/ }),

/***/ "./src/assets/images/farm-fresh-salad.png":
/*!************************************************!*\
  !*** ./src/assets/images/farm-fresh-salad.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/farm-fresh-salad_48a69701d75d9b271c9db69e8969d011.png";

/***/ }),

/***/ "./src/assets/images/french-fries.png":
/*!********************************************!*\
  !*** ./src/assets/images/french-fries.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/french-fries_fb6d070efed5d1ebbc55de0e2edd99b0.png";

/***/ }),

/***/ "./src/assets/images/garlic-bread.png":
/*!********************************************!*\
  !*** ./src/assets/images/garlic-bread.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/garlic-bread_f79f1fe96473fe71053f473fc721644f.png";

/***/ }),

/***/ "./src/assets/images/image_name/aglio-olio.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/image_name/aglio-olio.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/aglio-olio_bcaef6ca6e9757660da241eb3f978aca.png";

/***/ }),

/***/ "./src/assets/images/image_name/alfredo.png":
/*!**************************************************!*\
  !*** ./src/assets/images/image_name/alfredo.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alfredo_03b0020c994871315cf39f0922647e32.png";

/***/ }),

/***/ "./src/assets/images/image_name/bacon.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/bacon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bacon_85c856e4c794fb3f3fee725287b852c3.png";

/***/ }),

/***/ "./src/assets/images/image_name/basil.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/basil.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/basil_5eabd19c201a0e4b17028941414676a1.png";

/***/ }),

/***/ "./src/assets/images/image_name/bell-pepper.png":
/*!******************************************************!*\
  !*** ./src/assets/images/image_name/bell-pepper.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bell-pepper_9c3b0bd8469e952f3d31841bf89e9569.png";

/***/ }),

/***/ "./src/assets/images/image_name/blackolives.png":
/*!******************************************************!*\
  !*** ./src/assets/images/image_name/blackolives.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blackolives_9189c2ee7a9f69acb4b1d642dda0fc72.png";

/***/ }),

/***/ "./src/assets/images/image_name/bowl1.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/bowl1.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bowl1_6126fcce2564d8260211cbdf248100ca.png";

/***/ }),

/***/ "./src/assets/images/image_name/bowl2.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/bowl2.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bowl2_738bb02d9fbc31b3638d2297dbd9264b.png";

/***/ }),

/***/ "./src/assets/images/image_name/brolloc.png":
/*!**************************************************!*\
  !*** ./src/assets/images/image_name/brolloc.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/brolloc_b3023bc3eed7fca70fe9fabba11128dc.png";

/***/ }),

/***/ "./src/assets/images/image_name/elbow.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/elbow.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/elbow_30c00dae7c69dfae66997551a120a4a1.png";

/***/ }),

/***/ "./src/assets/images/image_name/grill_chicken.png":
/*!********************************************************!*\
  !*** ./src/assets/images/image_name/grill_chicken.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grill_chicken_a86db7dd593ce63a4808a23f13e6a28d.png";

/***/ }),

/***/ "./src/assets/images/image_name/meatballs.png":
/*!****************************************************!*\
  !*** ./src/assets/images/image_name/meatballs.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meatballs_308b8931fc7e392a691358ec8534a78f.png";

/***/ }),

/***/ "./src/assets/images/image_name/mushroom.png":
/*!***************************************************!*\
  !*** ./src/assets/images/image_name/mushroom.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mushroom_29f82cbefd036f97c8c2cf7adbbdb415.png";

/***/ }),

/***/ "./src/assets/images/image_name/mushrooms2.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/image_name/mushrooms2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mushrooms2_ca3da3587c1023d47089f6be9d2f1029.png";

/***/ }),

/***/ "./src/assets/images/image_name/parmesan.png":
/*!***************************************************!*\
  !*** ./src/assets/images/image_name/parmesan.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/parmesan_d4d5cf68c23368869862399a606935c3.png";

/***/ }),

/***/ "./src/assets/images/image_name/parsley.png":
/*!**************************************************!*\
  !*** ./src/assets/images/image_name/parsley.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/parsley_169a59966aba518501fbfc54f28d4f1d.png";

/***/ }),

/***/ "./src/assets/images/image_name/penne.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/penne.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/penne_b32622deb657d0b3951ea760fc56cbb0.png";

/***/ }),

/***/ "./src/assets/images/image_name/pesto.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/pesto.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pesto_506b693b6ec19f60b07d5f1f1531b0f9.png";

/***/ }),

/***/ "./src/assets/images/image_name/quin.png":
/*!***********************************************!*\
  !*** ./src/assets/images/image_name/quin.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/quin_a5232508a69a92d58f9bd325603aacb2.png";

/***/ }),

/***/ "./src/assets/images/image_name/quinoa.png":
/*!*************************************************!*\
  !*** ./src/assets/images/image_name/quinoa.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/quinoa_e4bbc48d0e3666d6d165303b5467e6f8.png";

/***/ }),

/***/ "./src/assets/images/image_name/sausage.png":
/*!**************************************************!*\
  !*** ./src/assets/images/image_name/sausage.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sausage_40342da3948fe5d4824f8bf541c63bef.png";

/***/ }),

/***/ "./src/assets/images/image_name/shrimp.png":
/*!*************************************************!*\
  !*** ./src/assets/images/image_name/shrimp.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shrimp_5a3f348b00fa7700a30674a14e42925c.png";

/***/ }),

/***/ "./src/assets/images/image_name/spag.png":
/*!***********************************************!*\
  !*** ./src/assets/images/image_name/spag.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/spag_f6f1c3fad9976f9059a635c591337c9b.png";

/***/ }),

/***/ "./src/assets/images/image_name/sundried.png":
/*!***************************************************!*\
  !*** ./src/assets/images/image_name/sundried.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sundried_bb520a9a2cefe008d73d6ef8891a5c89.png";

/***/ }),

/***/ "./src/assets/images/image_name/whole-wheat.png":
/*!******************************************************!*\
  !*** ./src/assets/images/image_name/whole-wheat.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/whole-wheat_3e2f45960c29509ae1b03ea296736317.png";

/***/ }),

/***/ "./src/assets/images/image_name/whole.png":
/*!************************************************!*\
  !*** ./src/assets/images/image_name/whole.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/whole_928053757573116faedd269ec3b4a31d.png";

/***/ }),

/***/ "./src/assets/images/side.png":
/*!************************************!*\
  !*** ./src/assets/images/side.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/side_73e0140535920c02969720285d0de272.png";

/***/ }),

/***/ "./src/components/Button/Button.scss":
/*!*******************************************!*\
  !*** ./src/components/Button/Button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button": "button___3_Ozh",
	"outline": "outline___1_EsF",
	"primary": "primary___zYyzg"
};

/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: ButtonTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTypes", function() { return ButtonTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/generic */ "./src/utils/generic.ts");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.scss */ "./src/components/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mayomi/Desktop/front-temp/src/components/Button/Button.tsx";



var ButtonTypes;

(function (ButtonTypes) {
  ButtonTypes["outline"] = "outline";
  ButtonTypes["primary"] = "primary";
})(ButtonTypes || (ButtonTypes = {}));

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      onClick = _ref.onClick,
      style = _ref.style;
  return (// eslint-disable-next-line react/button-has-type
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      // @ts-ignore
      className: Object(_utils_generic__WEBPACK_IMPORTED_MODULE_1__["composeClasses"])(_Button_scss__WEBPACK_IMPORTED_MODULE_2___default.a.button, _Button_scss__WEBPACK_IMPORTED_MODULE_2___default.a[type], className),
      onClick: onClick,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, children)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Button/index.ts":
/*!****************************************!*\
  !*** ./src/components/Button/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/containers/home/home.tsx":
/*!**************************************!*\
  !*** ./src/containers/home/home.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_side_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/side.png */ "./src/assets/images/side.png");
/* harmony import */ var assets_images_side_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_side_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/bowl.png */ "./src/assets/images/bowl.png");
/* harmony import */ var assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_image_name_bowl1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/image_name/bowl1.png */ "./src/assets/images/image_name/bowl1.png");
/* harmony import */ var assets_images_image_name_bowl1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_bowl1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_image_name_bowl2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/image_name/bowl2.png */ "./src/assets/images/image_name/bowl2.png");
/* harmony import */ var assets_images_image_name_bowl2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_bowl2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_image_name_alfredo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/image_name/alfredo.png */ "./src/assets/images/image_name/alfredo.png");
/* harmony import */ var assets_images_image_name_alfredo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_alfredo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_image_name_aglio_olio_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/image_name/aglio-olio.png */ "./src/assets/images/image_name/aglio-olio.png");
/* harmony import */ var assets_images_image_name_aglio_olio_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_aglio_olio_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/images/arrabiata.png */ "./src/assets/images/arrabiata.png");
/* harmony import */ var assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_image_name_pesto_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/image_name/pesto.png */ "./src/assets/images/image_name/pesto.png");
/* harmony import */ var assets_images_image_name_pesto_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_pesto_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_image_name_mushroom_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/images/image_name/mushroom.png */ "./src/assets/images/image_name/mushroom.png");
/* harmony import */ var assets_images_image_name_mushroom_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_mushroom_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_images_image_name_penne_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/images/image_name/penne.png */ "./src/assets/images/image_name/penne.png");
/* harmony import */ var assets_images_image_name_penne_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_penne_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_images_image_name_spag_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/images/image_name/spag.png */ "./src/assets/images/image_name/spag.png");
/* harmony import */ var assets_images_image_name_spag_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_spag_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_images_image_name_elbow_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/images/image_name/elbow.png */ "./src/assets/images/image_name/elbow.png");
/* harmony import */ var assets_images_image_name_elbow_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_elbow_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_images_image_name_quinoa_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/images/image_name/quinoa.png */ "./src/assets/images/image_name/quinoa.png");
/* harmony import */ var assets_images_image_name_quinoa_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_quinoa_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_images_image_name_whole_wheat_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/images/image_name/whole-wheat.png */ "./src/assets/images/image_name/whole-wheat.png");
/* harmony import */ var assets_images_image_name_whole_wheat_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_whole_wheat_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_images_image_name_brolloc_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/images/image_name/brolloc.png */ "./src/assets/images/image_name/brolloc.png");
/* harmony import */ var assets_images_image_name_brolloc_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_brolloc_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_images_image_name_bell_pepper_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/images/image_name/bell-pepper.png */ "./src/assets/images/image_name/bell-pepper.png");
/* harmony import */ var assets_images_image_name_bell_pepper_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_bell_pepper_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_images_image_name_quin_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/images/image_name/quin.png */ "./src/assets/images/image_name/quin.png");
/* harmony import */ var assets_images_image_name_quin_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_quin_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_images_image_name_mushrooms2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/images/image_name/mushrooms2.png */ "./src/assets/images/image_name/mushrooms2.png");
/* harmony import */ var assets_images_image_name_mushrooms2_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_mushrooms2_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_images_image_name_whole_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/images/image_name/whole.png */ "./src/assets/images/image_name/whole.png");
/* harmony import */ var assets_images_image_name_whole_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_whole_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_images_image_name_blackolives_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/images/image_name/blackolives.png */ "./src/assets/images/image_name/blackolives.png");
/* harmony import */ var assets_images_image_name_blackolives_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_blackolives_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_images_image_name_sundried_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/images/image_name/sundried.png */ "./src/assets/images/image_name/sundried.png");
/* harmony import */ var assets_images_image_name_sundried_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_sundried_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_images_image_name_basil_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/images/image_name/basil.png */ "./src/assets/images/image_name/basil.png");
/* harmony import */ var assets_images_image_name_basil_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_basil_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var assets_images_image_name_parsley_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/images/image_name/parsley.png */ "./src/assets/images/image_name/parsley.png");
/* harmony import */ var assets_images_image_name_parsley_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_parsley_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var assets_images_image_name_parmesan_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/images/image_name/parmesan.png */ "./src/assets/images/image_name/parmesan.png");
/* harmony import */ var assets_images_image_name_parmesan_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_parmesan_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var assets_images_image_name_grill_chicken_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/images/image_name/grill_chicken.png */ "./src/assets/images/image_name/grill_chicken.png");
/* harmony import */ var assets_images_image_name_grill_chicken_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_grill_chicken_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var assets_images_image_name_shrimp_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/images/image_name/shrimp.png */ "./src/assets/images/image_name/shrimp.png");
/* harmony import */ var assets_images_image_name_shrimp_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_shrimp_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var assets_images_image_name_bacon_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/images/image_name/bacon.png */ "./src/assets/images/image_name/bacon.png");
/* harmony import */ var assets_images_image_name_bacon_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_bacon_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var assets_images_image_name_sausage_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/images/image_name/sausage.png */ "./src/assets/images/image_name/sausage.png");
/* harmony import */ var assets_images_image_name_sausage_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_sausage_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var assets_images_image_name_meatballs_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/images/image_name/meatballs.png */ "./src/assets/images/image_name/meatballs.png");
/* harmony import */ var assets_images_image_name_meatballs_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(assets_images_image_name_meatballs_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/images/farm-fresh-salad.png */ "./src/assets/images/farm-fresh-salad.png");
/* harmony import */ var assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! assets/images/french-fries.png */ "./src/assets/images/french-fries.png");
/* harmony import */ var assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! assets/images/garlic-bread.png */ "./src/assets/images/garlic-bread.png");
/* harmony import */ var assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _assets_icons_back2_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../assets/icons/back2.svg */ "./src/assets/icons/back2.svg");
/* harmony import */ var _assets_icons_pastalogo_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../assets/icons/pastalogo.svg */ "./src/assets/icons/pastalogo.svg");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _pasta_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pasta.scss */ "./src/containers/home/pasta.scss");
/* harmony import */ var _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_pasta_scss__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.ts");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.tsx");

var _jsxFileName = "/Users/mayomi/Desktop/front-temp/src/containers/home/home.tsx";










































var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showItem = _useState2[0],
      setShowItem = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      bowl = _useState4[0],
      setBowl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      sauce = _useState6[0],
      setSauce = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      pasta = _useState8[0],
      setPasta = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      veggies = _useState10[0],
      setVeggies = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      garnish = _useState12[0],
      setGarnish = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      meat = _useState14[0],
      setMeat = _useState14[1];

  var goBack = function goBack() {
    if (showItem > 0 && showItem <= 5) {
      setShowItem(showItem - 1);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Pasta")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sideImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Side background",
    src: assets_images_side_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.backLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_icons_back2_svg__WEBPACK_IMPORTED_MODULE_35__["ReactComponent"], {
    onClick: function onClick() {
      return goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_icons_pastalogo_svg__WEBPACK_IMPORTED_MODULE_36__["ReactComponent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), showItem === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.bowlOne,
    onClick: function onClick() {
      return setBowl('Mini Bowl 350ml');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "bowl",
    src: assets_images_image_name_bowl1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.bowlOne,
    onClick: function onClick() {
      return setBowl('Regular Bowl 650ml');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "bowl",
    src: assets_images_image_name_bowl2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))), showItem === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceOne,
    onClick: function onClick() {
      return setSauce('Alfredo');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_alfredo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceTwo,
    onClick: function onClick() {
      return setSauce('Aglio Olio');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_aglio_olio_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceThree,
    onClick: function onClick() {
      return setSauce('Arrabiata');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFour,
    onClick: function onClick() {
      return setSauce('Pesto');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_pesto_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFive,
    onClick: function onClick() {
      return setSauce('Mushroom');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_mushroom_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }))), showItem === 2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceOne,
    onClick: function onClick() {
      return setPasta('Penne');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_penne_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceTwo,
    onClick: function onClick() {
      return setPasta('Spaghetti');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_spag_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceThree,
    onClick: function onClick() {
      return setPasta('Elbow Macaroni');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_elbow_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFour,
    onClick: function onClick() {
      return setPasta('Quinoa Penne');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_quinoa_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFive,
    onClick: function onClick() {
      return setPasta('Whole wheat spaghetti');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_whole_wheat_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }))), showItem === 3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceOne,
    onClick: function onClick() {
      return setVeggies('Broccoli');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_brolloc_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceTwo,
    onClick: function onClick() {
      return setVeggies('Bell pepper');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_bell_pepper_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceThree,
    onClick: function onClick() {
      return setVeggies('Mushroom');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_mushrooms2_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFour,
    onClick: function onClick() {
      return setVeggies('Quinoa penne');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_quin_png__WEBPACK_IMPORTED_MODULE_19___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFive,
    onClick: function onClick() {
      return setVeggies('Tomatoes');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_whole_png__WEBPACK_IMPORTED_MODULE_21___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }))), showItem === 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceOne,
    onClick: function onClick() {
      return setGarnish('Black Olives');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_blackolives_png__WEBPACK_IMPORTED_MODULE_22___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceTwo,
    onClick: function onClick() {
      return setGarnish('Sundried Tomatoes');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_sundried_png__WEBPACK_IMPORTED_MODULE_23___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceThree,
    onClick: function onClick() {
      return setGarnish('Basil');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_basil_png__WEBPACK_IMPORTED_MODULE_24___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFour,
    onClick: function onClick() {
      return setGarnish('Parsley');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_parsley_png__WEBPACK_IMPORTED_MODULE_25___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFive,
    onClick: function onClick() {
      return setGarnish('Parmesan cheese');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_parmesan_png__WEBPACK_IMPORTED_MODULE_26___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }))), showItem === 5 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceOne,
    onClick: function onClick() {
      return setMeat('Grilled chicken');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_grill_chicken_png__WEBPACK_IMPORTED_MODULE_27___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceTwo,
    onClick: function onClick() {
      return setMeat('Shrimp');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_shrimp_png__WEBPACK_IMPORTED_MODULE_28___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceThree,
    onClick: function onClick() {
      return setMeat('Bacon');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_bacon_png__WEBPACK_IMPORTED_MODULE_29___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFour,
    onClick: function onClick() {
      return setMeat('Sausage');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_sausage_png__WEBPACK_IMPORTED_MODULE_30___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sauceFive,
    onClick: function onClick() {
      return setMeat('Meat balls');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_image_name_meatballs_png__WEBPACK_IMPORTED_MODULE_31___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }))), showItem === 6 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sideSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, "Select your sides"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sidesCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "french fries",
    src: assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_33___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, "French fries")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sidesCard,
    style: {
      background: '#FFF0CA'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Farm fresh salad",
    src: assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_32___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "Farm Fresh Salad")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.sidesCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Garlic Bread",
    src: assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_34___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, "Garlic Bread"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.selectSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "Select the bowl"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.detailCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, bowl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "Bowl"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, bowl))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.insideCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, sauce && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, "Sauces"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, sauce)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }), veggies && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, "Veggies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, veggies)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }), meat && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "Meat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, meat))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, pasta && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "Pasta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, pasta)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }), garnish && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, "Garnish"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, garnish)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.bottomButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_37___default.a, {
    href: "/your-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_40__["default"], {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_41__["ButtonTypes"].outline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, "Your Cart")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_40__["default"], {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_39___default.a.ml20,
    onClick: showItem < 5 ? function () {
      return setShowItem(showItem + 1);
    } : function () {
      return next_router__WEBPACK_IMPORTED_MODULE_38___default.a.push('/your-cart');
    },
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_41__["ButtonTypes"].primary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }, "Next"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/containers/home/pasta.scss":
/*!****************************************!*\
  !*** ./src/containers/home/pasta.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"background": "background___33X54",
	"backLogo": "backLogo___Dcw1v",
	"sideImage": "sideImage___2njmi",
	"wrapper": "wrapper___2ulXD",
	"bowlOne": "bowlOne___2bKCH",
	"bowlTwo": "bowlTwo___3Wzbd",
	"selectSection": "selectSection___33FuT",
	"bottomButton": "bottomButton___swj1v",
	"ml20": "ml20___3VdXl",
	"sauceBowl": "sauceBowl_____RYY",
	"sauceOne": "sauceOne___2iYY6",
	"sauceTwo": "sauceTwo___3mBpK",
	"sauceThree": "sauceThree___hDoc-",
	"sauceFour": "sauceFour___1y2cN",
	"sauceFive": "sauceFive___27ELJ",
	"detailCard": "detailCard___3CKbL",
	"insideCard": "insideCard___3DsA4",
	"sideSection": "sideSection___3cqrT",
	"sidesCard": "sidesCard___26neW"
};

/***/ }),

/***/ "./src/utils/generic.ts":
/*!******************************!*\
  !*** ./src/utils/generic.ts ***!
  \******************************/
/*! exports provided: composeClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeClasses", function() { return composeClasses; });
/**
 * Combine a number of classes removing undefined values
 * @param {string} styles A list of classes to compose together
 */
var composeClasses = function composeClasses() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return styles.filter(function (item) {
    return item;
  }).join(' ');
};

/***/ }),

/***/ 8:
/*!******************************!*\
  !*** multi ./pages/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mayomi/Desktop/front-temp/pages/index.ts */"./pages/index.ts");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map