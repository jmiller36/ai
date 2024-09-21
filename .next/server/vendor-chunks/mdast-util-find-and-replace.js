"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-find-and-replace";
exports.ids = ["vendor-chunks/mdast-util-find-and-replace"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findAndReplace: () => (/* binding */ findAndReplace)\n/* harmony export */ });\n/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ \"(ssr)/./node_modules/escape-string-regexp/index.js\");\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').Parent} MdastParent\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast').Content} Content\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n * @typedef {import('mdast').Text} Text\n * @typedef {import('unist-util-visit-parents').Test} Test\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */\n\n/**\n * @typedef {Content | Root} Node\n * @typedef {Extract<Node, MdastParent>} Parent\n * @typedef {Exclude<Parent, Root>} ContentParent\n *\n * @typedef RegExpMatchObject\n *   Info on the match.\n * @property {number} index\n *   The index of the search at which the result was found.\n * @property {string} input\n *   A copy of the search string in the text node.\n * @property {[Root, ...Array<ContentParent>, Text]} stack\n *   All ancestors of the text node, where the last node is the text itself.\n *\n * @callback ReplaceFunction\n *   Callback called when a search matches.\n * @param {...any} parameters\n *   The parameters are the result of corresponding search expression:\n *\n *   * `value` (`string`) — whole match\n *   * `...capture` (`Array<string>`) — matches from regex capture groups\n *   * `match` (`RegExpMatchObject`) — info on the match\n * @returns {Array<PhrasingContent> | PhrasingContent | string | false | undefined | null}\n *   Thing to replace with.\n *\n *   * when `null`, `undefined`, `''`, remove the match\n *   * …or when `false`, do not replace at all\n *   * …or when `string`, replace with a text node of that value\n *   * …or when `Node` or `Array<Node>`, replace with those nodes\n *\n * @typedef {string | RegExp} Find\n *   Pattern to find.\n *\n *   Strings are escaped and then turned into global expressions.\n *\n * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList\n *   Several find and replaces, in array form.\n * @typedef {Record<string, Replace>} FindAndReplaceSchema\n *   Several find and replaces, in object form.\n * @typedef {[Find, Replace]} FindAndReplaceTuple\n *   Find and replace in tuple form.\n * @typedef {string | ReplaceFunction} Replace\n *   Thing to replace with.\n * @typedef {[RegExp, ReplaceFunction]} Pair\n *   Normalized find and replace.\n * @typedef {Array<Pair>} Pairs\n *   All find and replaced.\n *\n * @typedef Options\n *   Configuration.\n * @property {Test | null | undefined} [ignore]\n *   Test for which nodes to ignore.\n */\n\n\n\n\n\nconst own = {}.hasOwnProperty\n\n/**\n * Find patterns in a tree and replace them.\n *\n * The algorithm searches the tree in *preorder* for complete values in `Text`\n * nodes.\n * Partial matches are not supported.\n *\n * @param tree\n *   Tree to change.\n * @param find\n *   Patterns to find.\n * @param replace\n *   Things to replace with (when `find` is `Find`) or configuration.\n * @param options\n *   Configuration (when `find` is not `Find`).\n * @returns\n *   Given, modified, tree.\n */\n// To do: next major: remove `find` & `replace` combo, remove schema.\nconst findAndReplace =\n  /**\n   * @type {(\n   *   (<Tree extends Node>(tree: Tree, find: Find, replace?: Replace | null | undefined, options?: Options | null | undefined) => Tree) &\n   *   (<Tree extends Node>(tree: Tree, schema: FindAndReplaceSchema | FindAndReplaceList, options?: Options | null | undefined) => Tree)\n   * )}\n   **/\n  (\n    /**\n     * @template {Node} Tree\n     * @param {Tree} tree\n     * @param {Find | FindAndReplaceSchema | FindAndReplaceList} find\n     * @param {Replace | Options | null | undefined} [replace]\n     * @param {Options | null | undefined} [options]\n     * @returns {Tree}\n     */\n    function (tree, find, replace, options) {\n      /** @type {Options | null | undefined} */\n      let settings\n      /** @type {FindAndReplaceSchema|FindAndReplaceList} */\n      let schema\n\n      if (typeof find === 'string' || find instanceof RegExp) {\n        // @ts-expect-error don’t expect options twice.\n        schema = [[find, replace]]\n        settings = options\n      } else {\n        schema = find\n        // @ts-expect-error don’t expect replace twice.\n        settings = replace\n      }\n\n      if (!settings) {\n        settings = {}\n      }\n\n      const ignored = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_1__.convert)(settings.ignore || [])\n      const pairs = toPairs(schema)\n      let pairIndex = -1\n\n      while (++pairIndex < pairs.length) {\n        (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_2__.visitParents)(tree, 'text', visitor)\n      }\n\n      // To do next major: don’t return the given tree.\n      return tree\n\n      /** @type {import('unist-util-visit-parents/complex-types.js').BuildVisitor<Root, 'text'>} */\n      function visitor(node, parents) {\n        let index = -1\n        /** @type {Parent | undefined} */\n        let grandparent\n\n        while (++index < parents.length) {\n          const parent = parents[index]\n\n          if (\n            ignored(\n              parent,\n              // @ts-expect-error: TS doesn’t understand but it’s perfect.\n              grandparent ? grandparent.children.indexOf(parent) : undefined,\n              grandparent\n            )\n          ) {\n            return\n          }\n\n          grandparent = parent\n        }\n\n        if (grandparent) {\n          return handler(node, parents)\n        }\n      }\n\n      /**\n       * Handle a text node which is not in an ignored parent.\n       *\n       * @param {Text} node\n       *   Text node.\n       * @param {Array<Parent>} parents\n       *   Parents.\n       * @returns {VisitorResult}\n       *   Result.\n       */\n      function handler(node, parents) {\n        const parent = parents[parents.length - 1]\n        const find = pairs[pairIndex][0]\n        const replace = pairs[pairIndex][1]\n        let start = 0\n        // @ts-expect-error: TS is wrong, some of these children can be text.\n        const index = parent.children.indexOf(node)\n        let change = false\n        /** @type {Array<PhrasingContent>} */\n        let nodes = []\n\n        find.lastIndex = 0\n\n        let match = find.exec(node.value)\n\n        while (match) {\n          const position = match.index\n          /** @type {RegExpMatchObject} */\n          const matchObject = {\n            index: match.index,\n            input: match.input,\n            // @ts-expect-error: stack is fine.\n            stack: [...parents, node]\n          }\n          let value = replace(...match, matchObject)\n\n          if (typeof value === 'string') {\n            value = value.length > 0 ? {type: 'text', value} : undefined\n          }\n\n          // It wasn’t a match after all.\n          if (value !== false) {\n            if (start !== position) {\n              nodes.push({\n                type: 'text',\n                value: node.value.slice(start, position)\n              })\n            }\n\n            if (Array.isArray(value)) {\n              nodes.push(...value)\n            } else if (value) {\n              nodes.push(value)\n            }\n\n            start = position + match[0].length\n            change = true\n          }\n\n          if (!find.global) {\n            break\n          }\n\n          match = find.exec(node.value)\n        }\n\n        if (change) {\n          if (start < node.value.length) {\n            nodes.push({type: 'text', value: node.value.slice(start)})\n          }\n\n          parent.children.splice(index, 1, ...nodes)\n        } else {\n          nodes = [node]\n        }\n\n        return index + nodes.length\n      }\n    }\n  )\n\n/**\n * Turn a schema into pairs.\n *\n * @param {FindAndReplaceSchema | FindAndReplaceList} schema\n *   Schema.\n * @returns {Pairs}\n *   Clean pairs.\n */\nfunction toPairs(schema) {\n  /** @type {Pairs} */\n  const result = []\n\n  if (typeof schema !== 'object') {\n    throw new TypeError('Expected array or object as schema')\n  }\n\n  if (Array.isArray(schema)) {\n    let index = -1\n\n    while (++index < schema.length) {\n      result.push([\n        toExpression(schema[index][0]),\n        toFunction(schema[index][1])\n      ])\n    }\n  } else {\n    /** @type {string} */\n    let key\n\n    for (key in schema) {\n      if (own.call(schema, key)) {\n        result.push([toExpression(key), toFunction(schema[key])])\n      }\n    }\n  }\n\n  return result\n}\n\n/**\n * Turn a find into an expression.\n *\n * @param {Find} find\n *   Find.\n * @returns {RegExp}\n *   Expression.\n */\nfunction toExpression(find) {\n  return typeof find === 'string' ? new RegExp((0,escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(find), 'g') : find\n}\n\n/**\n * Turn a replace into a function.\n *\n * @param {Replace} replace\n *   Replace.\n * @returns {ReplaceFunction}\n *   Function.\n */\nfunction toFunction(replace) {\n  return typeof replace === 'function' ? replace : () => replace\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLGtEQUFrRDtBQUMvRDs7QUFFQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsNEJBQTRCO0FBQ3pDLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsdUNBQXVDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNEJBQTRCO0FBQ3pDO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QjtBQUN2QztBQUNBOztBQUV5QztBQUNZO0FBQ2hCOztBQUVyQyxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixlQUFlLE1BQU07QUFDckIsZUFBZSxrREFBa0Q7QUFDakUsZUFBZSxzQ0FBc0M7QUFDckQsZUFBZSw0QkFBNEI7QUFDM0MsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0EsaUJBQWlCLHlDQUF5QztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHNEQUFPO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHNFQUFZO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGdGQUFnRjtBQUNqRztBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MscUJBQXFCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQTZDO0FBQ3JFOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQ0FBMkM7QUFDdEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxnRUFBTTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdG9kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZS9saWIvaW5kZXguanM/YTRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGFyZW50fSBNZGFzdFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkNvbnRlbnR9IENvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGhyYXNpbmdDb250ZW50fSBQaHJhc2luZ0NvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuVGV4dH0gVGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0NvbnRlbnQgfCBSb290fSBOb2RlXG4gKiBAdHlwZWRlZiB7RXh0cmFjdDxOb2RlLCBNZGFzdFBhcmVudD59IFBhcmVudFxuICogQHR5cGVkZWYge0V4Y2x1ZGU8UGFyZW50LCBSb290Pn0gQ29udGVudFBhcmVudFxuICpcbiAqIEB0eXBlZGVmIFJlZ0V4cE1hdGNoT2JqZWN0XG4gKiAgIEluZm8gb24gdGhlIG1hdGNoLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4XG4gKiAgIFRoZSBpbmRleCBvZiB0aGUgc2VhcmNoIGF0IHdoaWNoIHRoZSByZXN1bHQgd2FzIGZvdW5kLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlucHV0XG4gKiAgIEEgY29weSBvZiB0aGUgc2VhcmNoIHN0cmluZyBpbiB0aGUgdGV4dCBub2RlLlxuICogQHByb3BlcnR5IHtbUm9vdCwgLi4uQXJyYXk8Q29udGVudFBhcmVudD4sIFRleHRdfSBzdGFja1xuICogICBBbGwgYW5jZXN0b3JzIG9mIHRoZSB0ZXh0IG5vZGUsIHdoZXJlIHRoZSBsYXN0IG5vZGUgaXMgdGhlIHRleHQgaXRzZWxmLlxuICpcbiAqIEBjYWxsYmFjayBSZXBsYWNlRnVuY3Rpb25cbiAqICAgQ2FsbGJhY2sgY2FsbGVkIHdoZW4gYSBzZWFyY2ggbWF0Y2hlcy5cbiAqIEBwYXJhbSB7Li4uYW55fSBwYXJhbWV0ZXJzXG4gKiAgIFRoZSBwYXJhbWV0ZXJzIGFyZSB0aGUgcmVzdWx0IG9mIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGV4cHJlc3Npb246XG4gKlxuICogICAqIGB2YWx1ZWAgKGBzdHJpbmdgKSDigJQgd2hvbGUgbWF0Y2hcbiAqICAgKiBgLi4uY2FwdHVyZWAgKGBBcnJheTxzdHJpbmc+YCkg4oCUIG1hdGNoZXMgZnJvbSByZWdleCBjYXB0dXJlIGdyb3Vwc1xuICogICAqIGBtYXRjaGAgKGBSZWdFeHBNYXRjaE9iamVjdGApIOKAlCBpbmZvIG9uIHRoZSBtYXRjaFxuICogQHJldHVybnMge0FycmF5PFBocmFzaW5nQ29udGVudD4gfCBQaHJhc2luZ0NvbnRlbnQgfCBzdHJpbmcgfCBmYWxzZSB8IHVuZGVmaW5lZCB8IG51bGx9XG4gKiAgIFRoaW5nIHRvIHJlcGxhY2Ugd2l0aC5cbiAqXG4gKiAgICogd2hlbiBgbnVsbGAsIGB1bmRlZmluZWRgLCBgJydgLCByZW1vdmUgdGhlIG1hdGNoXG4gKiAgICog4oCmb3Igd2hlbiBgZmFsc2VgLCBkbyBub3QgcmVwbGFjZSBhdCBhbGxcbiAqICAgKiDigKZvciB3aGVuIGBzdHJpbmdgLCByZXBsYWNlIHdpdGggYSB0ZXh0IG5vZGUgb2YgdGhhdCB2YWx1ZVxuICogICAqIOKApm9yIHdoZW4gYE5vZGVgIG9yIGBBcnJheTxOb2RlPmAsIHJlcGxhY2Ugd2l0aCB0aG9zZSBub2Rlc1xuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmcgfCBSZWdFeHB9IEZpbmRcbiAqICAgUGF0dGVybiB0byBmaW5kLlxuICpcbiAqICAgU3RyaW5ncyBhcmUgZXNjYXBlZCBhbmQgdGhlbiB0dXJuZWQgaW50byBnbG9iYWwgZXhwcmVzc2lvbnMuXG4gKlxuICogQHR5cGVkZWYge0FycmF5PEZpbmRBbmRSZXBsYWNlVHVwbGU+fSBGaW5kQW5kUmVwbGFjZUxpc3RcbiAqICAgU2V2ZXJhbCBmaW5kIGFuZCByZXBsYWNlcywgaW4gYXJyYXkgZm9ybS5cbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCBSZXBsYWNlPn0gRmluZEFuZFJlcGxhY2VTY2hlbWFcbiAqICAgU2V2ZXJhbCBmaW5kIGFuZCByZXBsYWNlcywgaW4gb2JqZWN0IGZvcm0uXG4gKiBAdHlwZWRlZiB7W0ZpbmQsIFJlcGxhY2VdfSBGaW5kQW5kUmVwbGFjZVR1cGxlXG4gKiAgIEZpbmQgYW5kIHJlcGxhY2UgaW4gdHVwbGUgZm9ybS5cbiAqIEB0eXBlZGVmIHtzdHJpbmcgfCBSZXBsYWNlRnVuY3Rpb259IFJlcGxhY2VcbiAqICAgVGhpbmcgdG8gcmVwbGFjZSB3aXRoLlxuICogQHR5cGVkZWYge1tSZWdFeHAsIFJlcGxhY2VGdW5jdGlvbl19IFBhaXJcbiAqICAgTm9ybWFsaXplZCBmaW5kIGFuZCByZXBsYWNlLlxuICogQHR5cGVkZWYge0FycmF5PFBhaXI+fSBQYWlyc1xuICogICBBbGwgZmluZCBhbmQgcmVwbGFjZWQuXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtUZXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2lnbm9yZV1cbiAqICAgVGVzdCBmb3Igd2hpY2ggbm9kZXMgdG8gaWdub3JlLlxuICovXG5cbmltcG9ydCBlc2NhcGUgZnJvbSAnZXNjYXBlLXN0cmluZy1yZWdleHAnXG5pbXBvcnQge3Zpc2l0UGFyZW50c30gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIEZpbmQgcGF0dGVybnMgaW4gYSB0cmVlIGFuZCByZXBsYWNlIHRoZW0uXG4gKlxuICogVGhlIGFsZ29yaXRobSBzZWFyY2hlcyB0aGUgdHJlZSBpbiAqcHJlb3JkZXIqIGZvciBjb21wbGV0ZSB2YWx1ZXMgaW4gYFRleHRgXG4gKiBub2Rlcy5cbiAqIFBhcnRpYWwgbWF0Y2hlcyBhcmUgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0gdHJlZVxuICogICBUcmVlIHRvIGNoYW5nZS5cbiAqIEBwYXJhbSBmaW5kXG4gKiAgIFBhdHRlcm5zIHRvIGZpbmQuXG4gKiBAcGFyYW0gcmVwbGFjZVxuICogICBUaGluZ3MgdG8gcmVwbGFjZSB3aXRoICh3aGVuIGBmaW5kYCBpcyBgRmluZGApIG9yIGNvbmZpZ3VyYXRpb24uXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uICh3aGVuIGBmaW5kYCBpcyBub3QgYEZpbmRgKS5cbiAqIEByZXR1cm5zXG4gKiAgIEdpdmVuLCBtb2RpZmllZCwgdHJlZS5cbiAqL1xuLy8gVG8gZG86IG5leHQgbWFqb3I6IHJlbW92ZSBgZmluZGAgJiBgcmVwbGFjZWAgY29tYm8sIHJlbW92ZSBzY2hlbWEuXG5leHBvcnQgY29uc3QgZmluZEFuZFJlcGxhY2UgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCBmaW5kOiBGaW5kLCByZXBsYWNlPzogUmVwbGFjZSB8IG51bGwgfCB1bmRlZmluZWQsIG9wdGlvbnM/OiBPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4gVHJlZSkgJlxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGU+KHRyZWU6IFRyZWUsIHNjaGVtYTogRmluZEFuZFJlcGxhY2VTY2hlbWEgfCBGaW5kQW5kUmVwbGFjZUxpc3QsIG9wdGlvbnM/OiBPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4gVHJlZSlcbiAgICogKX1cbiAgICoqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHRlbXBsYXRlIHtOb2RlfSBUcmVlXG4gICAgICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gICAgICogQHBhcmFtIHtGaW5kIHwgRmluZEFuZFJlcGxhY2VTY2hlbWEgfCBGaW5kQW5kUmVwbGFjZUxpc3R9IGZpbmRcbiAgICAgKiBAcGFyYW0ge1JlcGxhY2UgfCBPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlcGxhY2VdXG4gICAgICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybnMge1RyZWV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIGZpbmQsIHJlcGxhY2UsIG9wdGlvbnMpIHtcbiAgICAgIC8qKiBAdHlwZSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9ICovXG4gICAgICBsZXQgc2V0dGluZ3NcbiAgICAgIC8qKiBAdHlwZSB7RmluZEFuZFJlcGxhY2VTY2hlbWF8RmluZEFuZFJlcGxhY2VMaXN0fSAqL1xuICAgICAgbGV0IHNjaGVtYVxuXG4gICAgICBpZiAodHlwZW9mIGZpbmQgPT09ICdzdHJpbmcnIHx8IGZpbmQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBkb27igJl0IGV4cGVjdCBvcHRpb25zIHR3aWNlLlxuICAgICAgICBzY2hlbWEgPSBbW2ZpbmQsIHJlcGxhY2VdXVxuICAgICAgICBzZXR0aW5ncyA9IG9wdGlvbnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVtYSA9IGZpbmRcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBkb27igJl0IGV4cGVjdCByZXBsYWNlIHR3aWNlLlxuICAgICAgICBzZXR0aW5ncyA9IHJlcGxhY2VcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IHt9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlnbm9yZWQgPSBjb252ZXJ0KHNldHRpbmdzLmlnbm9yZSB8fCBbXSlcbiAgICAgIGNvbnN0IHBhaXJzID0gdG9QYWlycyhzY2hlbWEpXG4gICAgICBsZXQgcGFpckluZGV4ID0gLTFcblxuICAgICAgd2hpbGUgKCsrcGFpckluZGV4IDwgcGFpcnMubGVuZ3RoKSB7XG4gICAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCAndGV4dCcsIHZpc2l0b3IpXG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGRvIG5leHQgbWFqb3I6IGRvbuKAmXQgcmV0dXJuIHRoZSBnaXZlbiB0cmVlLlxuICAgICAgcmV0dXJuIHRyZWVcblxuICAgICAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9jb21wbGV4LXR5cGVzLmpzJykuQnVpbGRWaXNpdG9yPFJvb3QsICd0ZXh0Jz59ICovXG4gICAgICBmdW5jdGlvbiB2aXNpdG9yKG5vZGUsIHBhcmVudHMpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTFcbiAgICAgICAgLyoqIEB0eXBlIHtQYXJlbnQgfCB1bmRlZmluZWR9ICovXG4gICAgICAgIGxldCBncmFuZHBhcmVudFxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW2luZGV4XVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaWdub3JlZChcbiAgICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBkb2VzbuKAmXQgdW5kZXJzdGFuZCBidXQgaXTigJlzIHBlcmZlY3QuXG4gICAgICAgICAgICAgIGdyYW5kcGFyZW50ID8gZ3JhbmRwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihwYXJlbnQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBncmFuZHBhcmVudFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ3JhbmRwYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncmFuZHBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVyKG5vZGUsIHBhcmVudHMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgYSB0ZXh0IG5vZGUgd2hpY2ggaXMgbm90IGluIGFuIGlnbm9yZWQgcGFyZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7VGV4dH0gbm9kZVxuICAgICAgICogICBUZXh0IG5vZGUuXG4gICAgICAgKiBAcGFyYW0ge0FycmF5PFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqICAgUGFyZW50cy5cbiAgICAgICAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICAgICAgICogICBSZXN1bHQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXIobm9kZSwgcGFyZW50cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc3QgZmluZCA9IHBhaXJzW3BhaXJJbmRleF1bMF1cbiAgICAgICAgY29uc3QgcmVwbGFjZSA9IHBhaXJzW3BhaXJJbmRleF1bMV1cbiAgICAgICAgbGV0IHN0YXJ0ID0gMFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBpcyB3cm9uZywgc29tZSBvZiB0aGVzZSBjaGlsZHJlbiBjYW4gYmUgdGV4dC5cbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKVxuICAgICAgICBsZXQgY2hhbmdlID0gZmFsc2VcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxQaHJhc2luZ0NvbnRlbnQ+fSAqL1xuICAgICAgICBsZXQgbm9kZXMgPSBbXVxuXG4gICAgICAgIGZpbmQubGFzdEluZGV4ID0gMFxuXG4gICAgICAgIGxldCBtYXRjaCA9IGZpbmQuZXhlYyhub2RlLnZhbHVlKVxuXG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWF0Y2guaW5kZXhcbiAgICAgICAgICAvKiogQHR5cGUge1JlZ0V4cE1hdGNoT2JqZWN0fSAqL1xuICAgICAgICAgIGNvbnN0IG1hdGNoT2JqZWN0ID0ge1xuICAgICAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IG1hdGNoLmlucHV0LFxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogc3RhY2sgaXMgZmluZS5cbiAgICAgICAgICAgIHN0YWNrOiBbLi4ucGFyZW50cywgbm9kZV1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhbHVlID0gcmVwbGFjZSguLi5tYXRjaCwgbWF0Y2hPYmplY3QpXG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGggPiAwID8ge3R5cGU6ICd0ZXh0JywgdmFsdWV9IDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSXQgd2FzbuKAmXQgYSBtYXRjaCBhZnRlciBhbGwuXG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ICE9PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUudmFsdWUuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgbm9kZXMucHVzaCguLi52YWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgbm9kZXMucHVzaCh2YWx1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhcnQgPSBwb3NpdGlvbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZmluZC5nbG9iYWwpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0Y2ggPSBmaW5kLmV4ZWMobm9kZS52YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICBpZiAoc3RhcnQgPCBub2RlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZS5zbGljZShzdGFydCl9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIC4uLm5vZGVzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVzID0gW25vZGVdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXggKyBub2Rlcy5sZW5ndGhcbiAgICAgIH1cbiAgICB9XG4gIClcblxuLyoqXG4gKiBUdXJuIGEgc2NoZW1hIGludG8gcGFpcnMuXG4gKlxuICogQHBhcmFtIHtGaW5kQW5kUmVwbGFjZVNjaGVtYSB8IEZpbmRBbmRSZXBsYWNlTGlzdH0gc2NoZW1hXG4gKiAgIFNjaGVtYS5cbiAqIEByZXR1cm5zIHtQYWlyc31cbiAqICAgQ2xlYW4gcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIHRvUGFpcnMoc2NoZW1hKSB7XG4gIC8qKiBAdHlwZSB7UGFpcnN9ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYXJyYXkgb3Igb2JqZWN0IGFzIHNjaGVtYScpXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgc2NoZW1hLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LnB1c2goW1xuICAgICAgICB0b0V4cHJlc3Npb24oc2NoZW1hW2luZGV4XVswXSksXG4gICAgICAgIHRvRnVuY3Rpb24oc2NoZW1hW2luZGV4XVsxXSlcbiAgICAgIF0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBrZXlcblxuICAgIGZvciAoa2V5IGluIHNjaGVtYSkge1xuICAgICAgaWYgKG93bi5jYWxsKHNjaGVtYSwga2V5KSkge1xuICAgICAgICByZXN1bHQucHVzaChbdG9FeHByZXNzaW9uKGtleSksIHRvRnVuY3Rpb24oc2NoZW1hW2tleV0pXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogVHVybiBhIGZpbmQgaW50byBhbiBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7RmluZH0gZmluZFxuICogICBGaW5kLlxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICAgRXhwcmVzc2lvbi5cbiAqL1xuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGZpbmQpIHtcbiAgcmV0dXJuIHR5cGVvZiBmaW5kID09PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAoZXNjYXBlKGZpbmQpLCAnZycpIDogZmluZFxufVxuXG4vKipcbiAqIFR1cm4gYSByZXBsYWNlIGludG8gYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlcGxhY2V9IHJlcGxhY2VcbiAqICAgUmVwbGFjZS5cbiAqIEByZXR1cm5zIHtSZXBsYWNlRnVuY3Rpb259XG4gKiAgIEZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHJlcGxhY2UpIHtcbiAgcmV0dXJuIHR5cGVvZiByZXBsYWNlID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZSA6ICgpID0+IHJlcGxhY2Vcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\n");

/***/ })

};
;