/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/client.js":
/*!******************************!*\
  !*** ./src/client/client.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\src\\\\client\\\\client.js: Unexpected token (9:4)\\n\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mhydrate(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m  document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m)\\u001b[0m\\n    at Parser.raise (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6325:17)\\n    at Parser.unexpected (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7642:16)\\n    at Parser.parseExprAtom (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8841:20)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:23)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\\n    at Parser.parseMaybeConditional (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8240:23)\\n    at Parser.parseMaybeAssign (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8187:21)\\n    at Parser.parseExprListItem (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9491:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8621:22)\\n    at Parser.parseSubscript (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8514:29)\\n    at Parser.parseSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8433:19)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8422:17)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\\n    at Parser.parseMaybeConditional (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8240:23)\\n    at Parser.parseMaybeAssign (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8187:21)\\n    at Parser.parseExpression (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8135:23)\\n    at Parser.parseStatementContent (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9958:23)\\n    at Parser.parseStatement (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Parser.parseBlockBody (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Parser.parseTopLevel (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9758:10)\\n    at Parser.parse (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11270:17)\\n    at parse (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11306:38)\\n    at parser (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\");\n\n//# sourceURL=webpack:///./src/client/client.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./src/client/client.js\");\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ })

/******/ });