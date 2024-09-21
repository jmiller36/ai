"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-math";
exports.ids = ["vendor-chunks/remark-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-math/index.js":
/*!*******************************************!*\
  !*** ./node_modules/remark-math/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkMath)\n/* harmony export */ });\n/* harmony import */ var micromark_extension_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-math */ \"(ssr)/./node_modules/micromark-extension-math/dev/lib/syntax.js\");\n/* harmony import */ var mdast_util_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-math */ \"(ssr)/./node_modules/mdast-util-math/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-math').ToOptions} Options\n *\n * @typedef {import('mdast-util-math')} DoNotTouchAsThisImportIncludesMathInTree\n */\n\n\n\n\n/**\n * Plugin to support math.\n *\n * @type {import('unified').Plugin<[Options?] | void[], Root, Root>}\n */\nfunction remarkMath(options = {}) {\n  const data = this.data()\n\n  add('micromarkExtensions', (0,micromark_extension_math__WEBPACK_IMPORTED_MODULE_0__.math)(options))\n  add('fromMarkdownExtensions', (0,mdast_util_math__WEBPACK_IMPORTED_MODULE_1__.mathFromMarkdown)())\n  add('toMarkdownExtensions', (0,mdast_util_math__WEBPACK_IMPORTED_MODULE_1__.mathToMarkdown)(options))\n\n  /**\n   * @param {string} field\n   * @param {unknown} value\n   */\n  function add(field, value) {\n    const list = /** @type {unknown[]} */ (\n      // Other extensions\n      /* c8 ignore next 2 */\n      data[field] ? data[field] : (data[field] = [])\n    )\n\n    list.push(value)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLW1hdGgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHFDQUFxQztBQUNsRDtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDOztBQUU2QztBQUNtQjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ2UsZ0NBQWdDO0FBQy9DOztBQUVBLDZCQUE2Qiw4REFBSTtBQUNqQyxnQ0FBZ0MsaUVBQWdCO0FBQ2hELDhCQUE4QiwrREFBYzs7QUFFNUM7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLXRvZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9yZW1hcmstbWF0aC9pbmRleC5qcz83OTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLW1hdGgnKS5Ub09wdGlvbnN9IE9wdGlvbnNcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLW1hdGgnKX0gRG9Ob3RUb3VjaEFzVGhpc0ltcG9ydEluY2x1ZGVzTWF0aEluVHJlZVxuICovXG5cbmltcG9ydCB7bWF0aH0gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1tYXRoJ1xuaW1wb3J0IHttYXRoRnJvbU1hcmtkb3duLCBtYXRoVG9NYXJrZG93bn0gZnJvbSAnbWRhc3QtdXRpbC1tYXRoJ1xuXG4vKipcbiAqIFBsdWdpbiB0byBzdXBwb3J0IG1hdGguXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dIHwgdm9pZFtdLCBSb290LCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtYXJrTWF0aChvcHRpb25zID0ge30pIHtcbiAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpXG5cbiAgYWRkKCdtaWNyb21hcmtFeHRlbnNpb25zJywgbWF0aChvcHRpb25zKSlcbiAgYWRkKCdmcm9tTWFya2Rvd25FeHRlbnNpb25zJywgbWF0aEZyb21NYXJrZG93bigpKVxuICBhZGQoJ3RvTWFya2Rvd25FeHRlbnNpb25zJywgbWF0aFRvTWFya2Rvd24ob3B0aW9ucykpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG4gICAqL1xuICBmdW5jdGlvbiBhZGQoZmllbGQsIHZhbHVlKSB7XG4gICAgY29uc3QgbGlzdCA9IC8qKiBAdHlwZSB7dW5rbm93bltdfSAqLyAoXG4gICAgICAvLyBPdGhlciBleHRlbnNpb25zXG4gICAgICAvKiBjOCBpZ25vcmUgbmV4dCAyICovXG4gICAgICBkYXRhW2ZpZWxkXSA/IGRhdGFbZmllbGRdIDogKGRhdGFbZmllbGRdID0gW10pXG4gICAgKVxuXG4gICAgbGlzdC5wdXNoKHZhbHVlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-math/index.js\n");

/***/ })

};
;