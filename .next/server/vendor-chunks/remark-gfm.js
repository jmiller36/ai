"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-gfm";
exports.ids = ["vendor-chunks/remark-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-gfm/index.js":
/*!******************************************!*\
  !*** ./node_modules/remark-gfm/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkGfm)\n/* harmony export */ });\n/* harmony import */ var micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-gfm */ \"(ssr)/./node_modules/micromark-extension-gfm/index.js\");\n/* harmony import */ var mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-gfm */ \"(ssr)/./node_modules/mdast-util-gfm/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('micromark-extension-gfm').Options & import('mdast-util-gfm').Options} Options\n */\n\n\n\n\n/**\n * Plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).\n *\n * @type {import('unified').Plugin<[Options?]|void[], Root>}\n */\nfunction remarkGfm(options = {}) {\n  const data = this.data()\n\n  add('micromarkExtensions', (0,micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__.gfm)(options))\n  add('fromMarkdownExtensions', (0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmFromMarkdown)())\n  add('toMarkdownExtensions', (0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmToMarkdown)(options))\n\n  /**\n   * @param {string} field\n   * @param {unknown} value\n   */\n  function add(field, value) {\n    const list = /** @type {unknown[]} */ (\n      // Other extensions\n      /* c8 ignore next 2 */\n      data[field] ? data[field] : (data[field] = [])\n    )\n\n    list.push(value)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsOEVBQThFO0FBQzNGOztBQUUyQztBQUNrQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ2UsK0JBQStCO0FBQzlDOztBQUVBLDZCQUE2Qiw0REFBRztBQUNoQyxnQ0FBZ0MsK0RBQWU7QUFDL0MsOEJBQThCLDZEQUFhOztBQUUzQztBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdG9kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1nZm0vaW5kZXguanM/YjJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0nKS5PcHRpb25zICYgaW1wb3J0KCdtZGFzdC11dGlsLWdmbScpLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG5pbXBvcnQge2dmbX0gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0nXG5pbXBvcnQge2dmbUZyb21NYXJrZG93biwgZ2ZtVG9NYXJrZG93bn0gZnJvbSAnbWRhc3QtdXRpbC1nZm0nXG5cbi8qKlxuICogUGx1Z2luIHRvIHN1cHBvcnQgR0ZNIChhdXRvbGluayBsaXRlcmFscywgZm9vdG5vdGVzLCBzdHJpa2V0aHJvdWdoLCB0YWJsZXMsIHRhc2tsaXN0cykuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dfHZvaWRbXSwgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbWFya0dmbShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpXG5cbiAgYWRkKCdtaWNyb21hcmtFeHRlbnNpb25zJywgZ2ZtKG9wdGlvbnMpKVxuICBhZGQoJ2Zyb21NYXJrZG93bkV4dGVuc2lvbnMnLCBnZm1Gcm9tTWFya2Rvd24oKSlcbiAgYWRkKCd0b01hcmtkb3duRXh0ZW5zaW9ucycsIGdmbVRvTWFya2Rvd24ob3B0aW9ucykpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG4gICAqL1xuICBmdW5jdGlvbiBhZGQoZmllbGQsIHZhbHVlKSB7XG4gICAgY29uc3QgbGlzdCA9IC8qKiBAdHlwZSB7dW5rbm93bltdfSAqLyAoXG4gICAgICAvLyBPdGhlciBleHRlbnNpb25zXG4gICAgICAvKiBjOCBpZ25vcmUgbmV4dCAyICovXG4gICAgICBkYXRhW2ZpZWxkXSA/IGRhdGFbZmllbGRdIDogKGRhdGFbZmllbGRdID0gW10pXG4gICAgKVxuXG4gICAgbGlzdC5wdXNoKHZhbHVlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-gfm/index.js\n");

/***/ })

};
;