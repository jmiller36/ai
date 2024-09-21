"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-parse";
exports.ids = ["vendor-chunks/remark-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-parse/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkParse)\n/* harmony export */ });\n/* harmony import */ var mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-from-markdown */ \"(ssr)/./node_modules/mdast-util-from-markdown/dev/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-from-markdown').Options} Options\n */\n\n\n\n/**\n * @this {import('unified').Processor}\n * @type {import('unified').Plugin<[Options?] | void[], string, Root>}\n */\nfunction remarkParse(options) {\n  /** @type {import('unified').ParserFunction<Root>} */\n  const parser = (doc) => {\n    // Assume options.\n    const settings = /** @type {Options} */ (this.data('settings'))\n\n    return (0,mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__.fromMarkdown)(\n      doc,\n      Object.assign({}, settings, options, {\n        // Note: these options are not in the readme.\n        // The goal is for them to be set by plugins on `data` instead of being\n        // passed by users.\n        extensions: this.data('micromarkExtensions') || [],\n        mdastExtensions: this.data('fromMarkdownExtensions') || []\n      })\n    )\n  }\n\n  Object.assign(this, {Parser: parser})\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSw0Q0FBNEM7QUFDekQ7O0FBRXFEOztBQUVyRDtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDZTtBQUNmLGFBQWEsd0NBQXdDO0FBQ3JEO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUzs7QUFFekMsV0FBVyxzRUFBWTtBQUN2QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsdUJBQXVCLGVBQWU7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLXRvZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2luZGV4LmpzPzYxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG5pbXBvcnQge2Zyb21NYXJrZG93bn0gZnJvbSAnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJ1xuXG4vKipcbiAqIEB0aGlzIHtpbXBvcnQoJ3VuaWZpZWQnKS5Qcm9jZXNzb3J9XG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP10gfCB2b2lkW10sIHN0cmluZywgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbWFya1BhcnNlKG9wdGlvbnMpIHtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QYXJzZXJGdW5jdGlvbjxSb290Pn0gKi9cbiAgY29uc3QgcGFyc2VyID0gKGRvYykgPT4ge1xuICAgIC8vIEFzc3VtZSBvcHRpb25zLlxuICAgIGNvbnN0IHNldHRpbmdzID0gLyoqIEB0eXBlIHtPcHRpb25zfSAqLyAodGhpcy5kYXRhKCdzZXR0aW5ncycpKVxuXG4gICAgcmV0dXJuIGZyb21NYXJrZG93bihcbiAgICAgIGRvYyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCBvcHRpb25zLCB7XG4gICAgICAgIC8vIE5vdGU6IHRoZXNlIG9wdGlvbnMgYXJlIG5vdCBpbiB0aGUgcmVhZG1lLlxuICAgICAgICAvLyBUaGUgZ29hbCBpcyBmb3IgdGhlbSB0byBiZSBzZXQgYnkgcGx1Z2lucyBvbiBgZGF0YWAgaW5zdGVhZCBvZiBiZWluZ1xuICAgICAgICAvLyBwYXNzZWQgYnkgdXNlcnMuXG4gICAgICAgIGV4dGVuc2lvbnM6IHRoaXMuZGF0YSgnbWljcm9tYXJrRXh0ZW5zaW9ucycpIHx8IFtdLFxuICAgICAgICBtZGFzdEV4dGVuc2lvbnM6IHRoaXMuZGF0YSgnZnJvbU1hcmtkb3duRXh0ZW5zaW9ucycpIHx8IFtdXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24odGhpcywge1BhcnNlcjogcGFyc2VyfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-parse/lib/index.js\n");

/***/ })

};
;