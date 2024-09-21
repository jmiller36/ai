"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-html-tag-name";
exports.ids = ["vendor-chunks/micromark-util-html-tag-name"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-html-tag-name/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-html-tag-name/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   htmlBlockNames: () => (/* binding */ htmlBlockNames),\n/* harmony export */   htmlRawNames: () => (/* binding */ htmlRawNames)\n/* harmony export */ });\n/**\n * List of lowercase HTML “block” tag names.\n *\n * The list, when parsing HTML (flow), results in more relaxed rules (condition\n * 6).\n * Because they are known blocks, the HTML-like syntax doesn’t have to be\n * strictly parsed.\n * For tag names not in this list, a more strict algorithm (condition 7) is used\n * to detect whether the HTML-like syntax is seen as HTML (flow) or not.\n *\n * This is copied from:\n * <https://spec.commonmark.org/0.30/#html-blocks>.\n *\n * > 👉 **Note**: `search` was added in `CommonMark@0.31`.\n */\nconst htmlBlockNames = [\n  'address',\n  'article',\n  'aside',\n  'base',\n  'basefont',\n  'blockquote',\n  'body',\n  'caption',\n  'center',\n  'col',\n  'colgroup',\n  'dd',\n  'details',\n  'dialog',\n  'dir',\n  'div',\n  'dl',\n  'dt',\n  'fieldset',\n  'figcaption',\n  'figure',\n  'footer',\n  'form',\n  'frame',\n  'frameset',\n  'h1',\n  'h2',\n  'h3',\n  'h4',\n  'h5',\n  'h6',\n  'head',\n  'header',\n  'hr',\n  'html',\n  'iframe',\n  'legend',\n  'li',\n  'link',\n  'main',\n  'menu',\n  'menuitem',\n  'nav',\n  'noframes',\n  'ol',\n  'optgroup',\n  'option',\n  'p',\n  'param',\n  'search',\n  'section',\n  'summary',\n  'table',\n  'tbody',\n  'td',\n  'tfoot',\n  'th',\n  'thead',\n  'title',\n  'tr',\n  'track',\n  'ul'\n]\n\n/**\n * List of lowercase HTML “raw” tag names.\n *\n * The list, when parsing HTML (flow), results in HTML that can include lines\n * without exiting, until a closing tag also in this list is found (condition\n * 1).\n *\n * This module is copied from:\n * <https://spec.commonmark.org/0.30/#html-blocks>.\n *\n * > 👉 **Note**: `textarea` was added in `CommonMark@0.30`.\n */\nconst htmlRawNames = ['pre', 'script', 'style', 'textarea']\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtaHRtbC10YWctbmFtZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS10b2Rvcy1hcHAvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtaHRtbC10YWctbmFtZS9pbmRleC5qcz81ZDEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGlzdCBvZiBsb3dlcmNhc2UgSFRNTCDigJxibG9ja+KAnSB0YWcgbmFtZXMuXG4gKlxuICogVGhlIGxpc3QsIHdoZW4gcGFyc2luZyBIVE1MIChmbG93KSwgcmVzdWx0cyBpbiBtb3JlIHJlbGF4ZWQgcnVsZXMgKGNvbmRpdGlvblxuICogNikuXG4gKiBCZWNhdXNlIHRoZXkgYXJlIGtub3duIGJsb2NrcywgdGhlIEhUTUwtbGlrZSBzeW50YXggZG9lc27igJl0IGhhdmUgdG8gYmVcbiAqIHN0cmljdGx5IHBhcnNlZC5cbiAqIEZvciB0YWcgbmFtZXMgbm90IGluIHRoaXMgbGlzdCwgYSBtb3JlIHN0cmljdCBhbGdvcml0aG0gKGNvbmRpdGlvbiA3KSBpcyB1c2VkXG4gKiB0byBkZXRlY3Qgd2hldGhlciB0aGUgSFRNTC1saWtlIHN5bnRheCBpcyBzZWVuIGFzIEhUTUwgKGZsb3cpIG9yIG5vdC5cbiAqXG4gKiBUaGlzIGlzIGNvcGllZCBmcm9tOlxuICogPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjMwLyNodG1sLWJsb2Nrcz4uXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBgc2VhcmNoYCB3YXMgYWRkZWQgaW4gYENvbW1vbk1hcmtAMC4zMWAuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sQmxvY2tOYW1lcyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3NlYXJjaCcsXG4gICdzZWN0aW9uJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dXG5cbi8qKlxuICogTGlzdCBvZiBsb3dlcmNhc2UgSFRNTCDigJxyYXfigJ0gdGFnIG5hbWVzLlxuICpcbiAqIFRoZSBsaXN0LCB3aGVuIHBhcnNpbmcgSFRNTCAoZmxvdyksIHJlc3VsdHMgaW4gSFRNTCB0aGF0IGNhbiBpbmNsdWRlIGxpbmVzXG4gKiB3aXRob3V0IGV4aXRpbmcsIHVudGlsIGEgY2xvc2luZyB0YWcgYWxzbyBpbiB0aGlzIGxpc3QgaXMgZm91bmQgKGNvbmRpdGlvblxuICogMSkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgY29waWVkIGZyb206XG4gKiA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMzAvI2h0bWwtYmxvY2tzPi5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IGB0ZXh0YXJlYWAgd2FzIGFkZGVkIGluIGBDb21tb25NYXJrQDAuMzBgLlxuICovXG5leHBvcnQgY29uc3QgaHRtbFJhd05hbWVzID0gWydwcmUnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RleHRhcmVhJ11cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-html-tag-name/index.js\n");

/***/ })

};
;