"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-sanitize-uri";
exports.ids = ["vendor-chunks/micromark-util-sanitize-uri"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-sanitize-uri/dev/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark-util-sanitize-uri/dev/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeUri: () => (/* binding */ normalizeUri),\n/* harmony export */   sanitizeUri: () => (/* binding */ sanitizeUri)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-encode */ \"(ssr)/./node_modules/micromark-util-encode/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"(ssr)/./node_modules/micromark-util-symbol/values.js\");\n\n\n\n\n\n/**\n * Make a value safe for injection as a URL.\n *\n * This encodes unsafe characters with percent-encoding and skips already\n * encoded sequences (see `normalizeUri`).\n * Further unsafe characters are encoded as character references (see\n * `micromark-util-encode`).\n *\n * A regex of allowed protocols can be given, in which case the URL is\n * sanitized.\n * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or\n * `/^https?$/i` for `img[src]` (this is what `github.com` allows).\n * If the URL includes an unknown protocol (one not matched by `protocol`, such\n * as a dangerous example, `javascript:`), the value is ignored.\n *\n * @param {string | undefined} url\n *   URI to sanitize.\n * @param {RegExp | null | undefined} [protocol]\n *   Allowed protocols.\n * @returns {string}\n *   Sanitized URI.\n */\nfunction sanitizeUri(url, protocol) {\n  const value = (0,micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__.encode)(normalizeUri(url || ''))\n\n  if (!protocol) {\n    return value\n  }\n\n  const colon = value.indexOf(':')\n  const questionMark = value.indexOf('?')\n  const numberSign = value.indexOf('#')\n  const slash = value.indexOf('/')\n\n  if (\n    // If there is no protocol, it’s relative.\n    colon < 0 ||\n    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    (slash > -1 && colon > slash) ||\n    (questionMark > -1 && colon > questionMark) ||\n    (numberSign > -1 && colon > numberSign) ||\n    // It is a protocol, it should be allowed.\n    protocol.test(value.slice(0, colon))\n  ) {\n    return value\n  }\n\n  return ''\n}\n\n/**\n * Normalize a URL.\n *\n * Encode unsafe characters with percent-encoding, skipping already encoded\n * sequences.\n *\n * @param {string} value\n *   URI to normalize.\n * @returns {string}\n *   Normalized URI.\n */\nfunction normalizeUri(value) {\n  /** @type {Array<string>} */\n  const result = []\n  let index = -1\n  let start = 0\n  let skip = 0\n\n  while (++index < value.length) {\n    const code = value.charCodeAt(index)\n    /** @type {string} */\n    let replace = ''\n\n    // A correct percent encoded value.\n    if (\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.percentSign &&\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 1)) &&\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 2))\n    ) {\n      skip = 2\n    }\n    // ASCII.\n    else if (code < 128) {\n      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {\n        replace = String.fromCharCode(code)\n      }\n    }\n    // Astral.\n    else if (code > 55295 && code < 57344) {\n      const next = value.charCodeAt(index + 1)\n\n      // A correct surrogate pair.\n      if (code < 56320 && next > 56319 && next < 57344) {\n        replace = String.fromCharCode(code, next)\n        skip = 1\n      }\n      // Lone surrogate.\n      else {\n        replace = micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_3__.values.replacementCharacter\n      }\n    }\n    // Unicode.\n    else {\n      replace = String.fromCharCode(code)\n    }\n\n    if (replace) {\n      result.push(value.slice(start, index), encodeURIComponent(replace))\n      start = index + skip + 1\n      replace = ''\n    }\n\n    if (skip) {\n      index += skip\n      skip = 0\n    }\n  }\n\n  return result.join('') + value.slice(start)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFDZDtBQUNRO0FBQ0U7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLDZEQUFNOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGlFQUFLO0FBQ3BCLE1BQU0sMkVBQWlCO0FBQ3ZCLE1BQU0sMkVBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdG9kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXNhbml0aXplLXVyaS9kZXYvaW5kZXguanM/MWIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FzY2lpQWxwaGFudW1lcmljfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2VuY29kZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtZW5jb2RlJ1xuaW1wb3J0IHtjb2Rlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvZGVzLmpzJ1xuaW1wb3J0IHt2YWx1ZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC92YWx1ZXMuanMnXG5cbi8qKlxuICogTWFrZSBhIHZhbHVlIHNhZmUgZm9yIGluamVjdGlvbiBhcyBhIFVSTC5cbiAqXG4gKiBUaGlzIGVuY29kZXMgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nIGFuZCBza2lwcyBhbHJlYWR5XG4gKiBlbmNvZGVkIHNlcXVlbmNlcyAoc2VlIGBub3JtYWxpemVVcmlgKS5cbiAqIEZ1cnRoZXIgdW5zYWZlIGNoYXJhY3RlcnMgYXJlIGVuY29kZWQgYXMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgKHNlZVxuICogYG1pY3JvbWFyay11dGlsLWVuY29kZWApLlxuICpcbiAqIEEgcmVnZXggb2YgYWxsb3dlZCBwcm90b2NvbHMgY2FuIGJlIGdpdmVuLCBpbiB3aGljaCBjYXNlIHRoZSBVUkwgaXNcbiAqIHNhbml0aXplZC5cbiAqIEZvciBleGFtcGxlLCBgL14oaHR0cHM/fGlyY3M/fG1haWx0b3x4bXBwKSQvaWAgY2FuIGJlIHVzZWQgZm9yIGBhW2hyZWZdYCwgb3JcbiAqIGAvXmh0dHBzPyQvaWAgZm9yIGBpbWdbc3JjXWAgKHRoaXMgaXMgd2hhdCBgZ2l0aHViLmNvbWAgYWxsb3dzKS5cbiAqIElmIHRoZSBVUkwgaW5jbHVkZXMgYW4gdW5rbm93biBwcm90b2NvbCAob25lIG5vdCBtYXRjaGVkIGJ5IGBwcm90b2NvbGAsIHN1Y2hcbiAqIGFzIGEgZGFuZ2Vyb3VzIGV4YW1wbGUsIGBqYXZhc2NyaXB0OmApLCB0aGUgdmFsdWUgaXMgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gdXJsXG4gKiAgIFVSSSB0byBzYW5pdGl6ZS5cbiAqIEBwYXJhbSB7UmVnRXhwIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3RvY29sXVxuICogICBBbGxvd2VkIHByb3RvY29scy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNhbml0aXplZCBVUkkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVVyaSh1cmwsIHByb3RvY29sKSB7XG4gIGNvbnN0IHZhbHVlID0gZW5jb2RlKG5vcm1hbGl6ZVVyaSh1cmwgfHwgJycpKVxuXG4gIGlmICghcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGNvbnN0IGNvbG9uID0gdmFsdWUuaW5kZXhPZignOicpXG4gIGNvbnN0IHF1ZXN0aW9uTWFyayA9IHZhbHVlLmluZGV4T2YoJz8nKVxuICBjb25zdCBudW1iZXJTaWduID0gdmFsdWUuaW5kZXhPZignIycpXG4gIGNvbnN0IHNsYXNoID0gdmFsdWUuaW5kZXhPZignLycpXG5cbiAgaWYgKFxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHByb3RvY29sLCBpdOKAmXMgcmVsYXRpdmUuXG4gICAgY29sb24gPCAwIHx8XG4gICAgLy8gSWYgdGhlIGZpcnN0IGNvbG9uIGlzIGFmdGVyIGEgYD9gLCBgI2AsIG9yIGAvYCwgaXTigJlzIG5vdCBhIHByb3RvY29sLlxuICAgIChzbGFzaCA+IC0xICYmIGNvbG9uID4gc2xhc2gpIHx8XG4gICAgKHF1ZXN0aW9uTWFyayA+IC0xICYmIGNvbG9uID4gcXVlc3Rpb25NYXJrKSB8fFxuICAgIChudW1iZXJTaWduID4gLTEgJiYgY29sb24gPiBudW1iZXJTaWduKSB8fFxuICAgIC8vIEl0IGlzIGEgcHJvdG9jb2wsIGl0IHNob3VsZCBiZSBhbGxvd2VkLlxuICAgIHByb3RvY29sLnRlc3QodmFsdWUuc2xpY2UoMCwgY29sb24pKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiAnJ1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIFVSTC5cbiAqXG4gKiBFbmNvZGUgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nLCBza2lwcGluZyBhbHJlYWR5IGVuY29kZWRcbiAqIHNlcXVlbmNlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVVJJIHRvIG5vcm1hbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIE5vcm1hbGl6ZWQgVVJJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVXJpKHZhbHVlKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IGluZGV4ID0gLTFcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgc2tpcCA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIGNvbnN0IGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCByZXBsYWNlID0gJydcblxuICAgIC8vIEEgY29ycmVjdCBwZXJjZW50IGVuY29kZWQgdmFsdWUuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMucGVyY2VudFNpZ24gJiZcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKSkgJiZcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAyKSlcbiAgICApIHtcbiAgICAgIHNraXAgPSAyXG4gICAgfVxuICAgIC8vIEFTQ0lJLlxuICAgIGVsc2UgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgIGlmICghL1shIyQmLTs9Py1aX2Eten5dLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpKSB7XG4gICAgICAgIHJlcGxhY2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzdHJhbC5cbiAgICBlbHNlIGlmIChjb2RlID4gNTUyOTUgJiYgY29kZSA8IDU3MzQ0KSB7XG4gICAgICBjb25zdCBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIEEgY29ycmVjdCBzdXJyb2dhdGUgcGFpci5cbiAgICAgIGlmIChjb2RlIDwgNTYzMjAgJiYgbmV4dCA+IDU2MzE5ICYmIG5leHQgPCA1NzM0NCkge1xuICAgICAgICByZXBsYWNlID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlLCBuZXh0KVxuICAgICAgICBza2lwID0gMVxuICAgICAgfVxuICAgICAgLy8gTG9uZSBzdXJyb2dhdGUuXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVwbGFjZSA9IHZhbHVlcy5yZXBsYWNlbWVudENoYXJhY3RlclxuICAgICAgfVxuICAgIH1cbiAgICAvLyBVbmljb2RlLlxuICAgIGVsc2Uge1xuICAgICAgcmVwbGFjZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGluZGV4KSwgZW5jb2RlVVJJQ29tcG9uZW50KHJlcGxhY2UpKVxuICAgICAgc3RhcnQgPSBpbmRleCArIHNraXAgKyAxXG4gICAgICByZXBsYWNlID0gJydcbiAgICB9XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgaW5kZXggKz0gc2tpcFxuICAgICAgc2tpcCA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpICsgdmFsdWUuc2xpY2Uoc3RhcnQpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-sanitize-uri/dev/index.js\n");

/***/ })

};
;