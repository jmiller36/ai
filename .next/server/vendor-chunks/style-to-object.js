/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! inline-style-parser */ \"(ssr)/./node_modules/inline-style-parser/index.js\");\n\n/**\n * Parses inline style to object.\n *\n * @example\n * // returns { 'line-height': '42' }\n * StyleToObject('line-height: 42;');\n *\n * @param  {String}      style      - The inline style.\n * @param  {Function}    [iterator] - The iterator function.\n * @return {null|Object}\n */\nfunction StyleToObject(style, iterator) {\n  var output = null;\n  if (!style || typeof style !== 'string') {\n    return output;\n  }\n\n  var declaration;\n  var declarations = parse(style);\n  var hasIterator = typeof iterator === 'function';\n  var property;\n  var value;\n\n  for (var i = 0, len = declarations.length; i < len; i++) {\n    declaration = declarations[i];\n    property = declaration.property;\n    value = declaration.value;\n\n    if (hasIterator) {\n      iterator(property, value, declaration);\n    } else if (value) {\n      output || (output = {});\n      output[property] = value;\n    }\n  }\n\n  return output;\n}\n\nmodule.exports = StyleToObject;\nmodule.exports[\"default\"] = StyleToObject; // ESM support\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFlBQVksbUJBQU8sQ0FBQyw4RUFBcUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGtDQUFrQztBQUNsQztBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLGFBQWE7QUFDekIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUFzQixrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLXRvZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS10by1vYmplY3QvaW5kZXguanM/OGNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFyc2UgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcGFyc2VyJyk7XG5cbi8qKlxuICogUGFyc2VzIGlubGluZSBzdHlsZSB0byBvYmplY3QuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgeyAnbGluZS1oZWlnaHQnOiAnNDInIH1cbiAqIFN0eWxlVG9PYmplY3QoJ2xpbmUtaGVpZ2h0OiA0MjsnKTtcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgc3R5bGUgICAgICAtIFRoZSBpbmxpbmUgc3R5bGUuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgW2l0ZXJhdG9yXSAtIFRoZSBpdGVyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bGx8T2JqZWN0fVxuICovXG5mdW5jdGlvbiBTdHlsZVRvT2JqZWN0KHN0eWxlLCBpdGVyYXRvcikge1xuICB2YXIgb3V0cHV0ID0gbnVsbDtcbiAgaWYgKCFzdHlsZSB8fCB0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHZhciBkZWNsYXJhdGlvbjtcbiAgdmFyIGRlY2xhcmF0aW9ucyA9IHBhcnNlKHN0eWxlKTtcbiAgdmFyIGhhc0l0ZXJhdG9yID0gdHlwZW9mIGl0ZXJhdG9yID09PSAnZnVuY3Rpb24nO1xuICB2YXIgcHJvcGVydHk7XG4gIHZhciB2YWx1ZTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGVjbGFyYXRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbnNbaV07XG4gICAgcHJvcGVydHkgPSBkZWNsYXJhdGlvbi5wcm9wZXJ0eTtcbiAgICB2YWx1ZSA9IGRlY2xhcmF0aW9uLnZhbHVlO1xuXG4gICAgaWYgKGhhc0l0ZXJhdG9yKSB7XG4gICAgICBpdGVyYXRvcihwcm9wZXJ0eSwgdmFsdWUsIGRlY2xhcmF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICBvdXRwdXQgfHwgKG91dHB1dCA9IHt9KTtcbiAgICAgIG91dHB1dFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0eWxlVG9PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVUb09iamVjdDsgLy8gRVNNIHN1cHBvcnRcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/style-to-object/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/style-to-object/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"(ssr)/./node_modules/style-to-object/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1Qzs7QUFFdkMsaUVBQWUsc0NBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdG9kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5tanM/ZGE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVUb09iamVjdCBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVUb09iamVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.mjs\n");

/***/ })

};
;