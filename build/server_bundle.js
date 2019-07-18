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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./src/server/server.js\");\n\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\src\\\\server\\\\server.js: Unexpected token (28:6)\\n\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m  \\u001b[33mPromise\\u001b[39m\\u001b[33m.\\u001b[39mall(promises)\\u001b[33m.\\u001b[39mthen(data \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m    \\u001b[36mconst\\u001b[39m content \\u001b[33m=\\u001b[39m renderToString(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 28 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mStaticRouter\\u001b[39m location\\u001b[33m=\\u001b[39m{req\\u001b[33m.\\u001b[39mpath} context\\u001b[33m=\\u001b[39m{{}}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m data\\u001b[33m=\\u001b[39m{data[\\u001b[35m0\\u001b[39m]}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 30 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mStaticRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 31 | \\u001b[39m    )\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6325:17)\\n    at Parser.unexpected (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7642:16)\\n    at Parser.parseExprAtom (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8841:20)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:23)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\\n    at Parser.parseMaybeConditional (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8240:23)\\n    at Parser.parseMaybeAssign (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8187:21)\\n    at Parser.parseExprListItem (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9491:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8621:22)\\n    at Parser.parseSubscript (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8514:29)\\n    at Parser.parseSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8433:19)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8422:17)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\\n    at Parser.parseMaybeConditional (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8240:23)\\n    at Parser.parseMaybeAssign (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8187:21)\\n    at Parser.parseVar (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10480:26)\\n    at Parser.parseVarStatement (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10299:10)\\n    at Parser.parseStatementContent (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9896:21)\\n    at Parser.parseStatement (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Parser.parseBlockBody (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Parser.parseBlock (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:10)\\n    at Parser.parseFunctionBody (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9424:24)\\n    at Parser.parseArrowExpression (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9365:10)\\n    at Parser.parseExprAtom (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8715:18)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:23)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\github\\\\nodejs\\\\react\\\\react-context-ssr\\\\react-context-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\");\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ })

/******/ });