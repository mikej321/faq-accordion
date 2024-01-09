/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/faq-accordion-main/assets/fonts/workSans.ttf */ "./src/fonts/faq-accordion-main/assets/fonts/workSans.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-pattern-mobile.svg */ "./src/images/background-pattern-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-pattern-desktop.svg */ "./src/images/background-pattern-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Work Sans Normal";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Work Sans Larger";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
  font-weight: 600;
}
@font-face {
  font-family: "Work Sans Largest";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
  font-weight: 700;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Work Sans Normal";
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: hsl(275, 100%, 97%);
}

.backgroundContainer {
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 24rem;
  overflow: hidden;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
}

@media screen and (min-width: 600px) {
  .backgroundContainer {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    height: 37.5rem;
    background-position: top;
  }
}
.card {
  padding: 2rem 3rem 1rem 3rem;
  width: 100%;
  max-width: 32rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.8rem;
}

@media screen and (min-width: 600px) {
  .card {
    max-width: 53rem;
    padding: 2.5rem 3rem 1.5rem 3rem;
  }
}
header {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2rem;
}
header img {
  width: 2rem;
  height: auto;
}
header h1 {
  font-family: "Work Sans Largest";
  color: hsl(292, 42%, 14%);
}

@media screen and (min-width: 600px) {
  header img {
    width: 2.5rem;
  }
}
.acc-title {
  display: grid;
  align-items: center;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: 6rem;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.acc-title h4 {
  font-family: "Work Sans Larger";
  color: hsl(292, 42%, 14%);
  pointer-events: none;
  transition: color 0.2s ease-in-out;
}
.acc-title img {
  justify-self: end;
  pointer-events: none;
}

.acc-title:hover h4 {
  color: rgb(173, 40, 235);
}

@media screen and (min-width: 600px) {
  .acc-title {
    grid-template-columns: 90% 10%;
    padding-bottom: unset;
  }
}
section p {
  font-size: 1.3rem;
  line-height: 2rem;
  color: hsl(292, 16%, 49%);
  transition: all 0.2s ease-in-out;
  max-height: 0;
  overflow: hidden;
}
section p[open=""] {
  margin-bottom: 2rem;
}

@media screen and (min-width: 600px) {
  section p {
    font-size: 1.4rem;
  }
}
hr {
  margin: 0;
  border: none;
  border-top: 1px solid hsl(275, 100%, 97%);
}

footer {
  position: absolute;
  bottom: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAAA;EACI,+BAAA;EACA,4CAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AACA;EACI,+BAAA;EACA,4CAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AACA;EACI,gCAAA;EACA,4CAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AACA;;;EAGI,sBAAA;AACJ;;AACA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAEJ;;AAAA;EACI,gBAAA;AAGJ;;AADA;EACI,iBAAA;EACA,+BAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,qCAAA;AAIJ;;AAFA;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,gBAAA;EACA,yDAAA;EACA,sBAAA;AAKJ;;AAHA;EACI;IACI,yDAAA;IACA,eAAA;IACA,wBAAA;EAMN;AACF;AAAA;EACI,4BAAA;EACA,WAAA;EACA,gBAAA;EACA,kCAAA;EACA,qBAAA;AAEJ;;AAAA;EACI;IACI,gBAAA;IACA,gCAAA;EAGN;AACF;AAFA;EACI,aAAA;EACA,WAAA;EACA,mBAAA;AAIJ;AAHI;EACI,WAAA;EACA,YAAA;AAKR;AAJI;EACI,gCAAA;EACA,yBAAA;AAMR;;AAJA;EACI;IACI,aAAA;EAON;AACF;AANA;EACI,aAAA;EACA,mBAAA;EACA,gCAAA;EACA,wBAAA;EACA,oBAAA;EACA,eAAA;EACA,gCAAA;AAQJ;AAPI;EACI,+BAAA;EACA,yBAAA;EACA,oBAAA;EACA,kCAAA;AASR;AARI;EACI,iBAAA;EACA,oBAAA;AAUR;;AAPA;EACI,wBAAA;AAUJ;;AALA;EACI;IACI,8BAAA;IACA,qBAAA;EAQN;AACF;AAPA;EACI,iBAAA;EACA,iBAAA;EACA,yBAAA;EACA,gCAAA;EACA,aAAA;EACA,gBAAA;AASJ;AARI;EACI,mBAAA;AAUR;;AAPA;EACI;IACI,iBAAA;EAUN;AACF;AAJA;EACI,SAAA;EACA,YAAA;EACA,yCAAA;AAMJ;;AAJA;EACI,kBAAA;EACA,YAAA;AAOJ","sourcesContent":["@font-face \n    font-family: 'Work Sans Normal'\n    src: url(../fonts/faq-accordion-main/assets/fonts/workSans.ttf)\n    font-style: normal\n    font-weight: 400\n\n@font-face \n    font-family: 'Work Sans Larger'\n    src: url(../fonts/faq-accordion-main/assets/fonts/workSans.ttf)\n    font-style: normal\n    font-weight: 600\n\n@font-face \n    font-family: 'Work Sans Largest'\n    src: url(../fonts/faq-accordion-main/assets/fonts/workSans.ttf)\n    font-style: normal\n    font-weight: 700\n    \n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml \n    font-size: 62.5%\n\nbody\n    font-size: 1.6rem\n    font-family: 'Work Sans Normal'\n    min-height: 100vh\n    display: flex\n    flex-direction: column\n    align-items: center\n    justify-content: center\n    position: relative\n    background-color: hsl(275, 100%, 97%)\n    \n.backgroundContainer\n    width: 100%\n    position: absolute\n    z-index: -1\n    top: 0\n    left: 0\n    height: 24rem\n    overflow: hidden\n    background-image: url('../images/background-pattern-mobile.svg')\n    background-size: cover\n    \n@media screen and (min-width: 600px)\n    .backgroundContainer\n        background-image: url('../images/background-pattern-desktop.svg')\n        height: 37.5rem\n        background-position: top\n\n\n\n\n    \n\n.card\n    padding: 2rem 3rem 1rem 3rem\n    width: 100%\n    max-width: 32rem\n    background-color: hsl(0, 0%, 100%)\n    border-radius: .8rem\n\n@media screen and (min-width: 600px)\n    .card\n        max-width: 53rem\n        padding: 2.5rem 3rem 1.5rem 3rem\n\nheader\n    display: flex\n    gap: 2.5rem\n    margin-bottom: 2rem\n    img\n        width: 2rem\n        height: auto\n    h1\n        font-family: 'Work Sans Largest'\n        color: hsl(292, 42%, 14%)\n\n@media screen and (min-width: 600px)\n    header img\n        width: 2.5rem\n\n.acc-title\n    display: grid\n    align-items: center\n    grid-template-columns: 22rem 1fr\n    grid-template-rows: 6rem\n    padding-bottom: 1rem\n    cursor: pointer\n    transition: all 0.2s ease-in-out\n    h4\n        font-family: 'Work Sans Larger'\n        color: hsl(292, 42%, 14%)\n        pointer-events: none\n        transition: color 0.2s ease-in-out\n    img\n        justify-self: end\n        pointer-events: none\n        \n\n.acc-title:hover h4\n    color: rgb(173, 40, 235)\n\n\n\n\n@media screen and (min-width: 600px)\n    .acc-title\n        grid-template-columns: 90% 10%\n        padding-bottom: unset\n\nsection p\n    font-size: 1.3rem\n    line-height: 2rem\n    color: hsl(292, 16%, 49%)\n    transition: all 0.2s ease-in-out\n    max-height: 0\n    overflow: hidden\n    &[open='']\n        margin-bottom: 2rem\n    \n\n@media screen and (min-width: 600px)\n    section p\n        font-size: 1.4rem\n    \n\n\n\n    \n\nhr\n    margin: 0\n    border: none\n    border-top: 1px solid hsl(275, 100%, 97%)\n\nfooter\n    position: absolute\n    bottom: 2rem\n\n\n\n// .backgroundPattern\n//     position: absolute\n//     z-index: -1\n//     width: 100%\n    \n//     top: 0\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/toggle.js":
/*!***********************!*\
  !*** ./src/toggle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleDescription: () => (/* binding */ toggleDescription)
/* harmony export */ });
/* harmony import */ var _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-plus.svg */ "./src/images/icon-plus.svg");
/* harmony import */ var _images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon-minus.svg */ "./src/images/icon-minus.svg");
// global variables



function toggleDescription() {
    const accTitle = document.querySelectorAll('.acc-title');
    /* When accTitle is clicked, description will toggle the closed
    data attribute on and off */
    accTitle.forEach((title) => {
        title.addEventListener('click', (event) => {
            let eventTar = event.target;
            let eventAcc = eventTar.nextElementSibling;
            let accImg = eventTar.lastElementChild;
            if (!eventAcc.hasAttribute('open')) {
                eventAcc.setAttribute('open', '');
                accImg.src = _images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_1__;
                accImg.alt = 'A minus sign for collapsing the viewable text underneath';
                eventAcc.style.maxHeight = eventAcc.scrollHeight + 'px';
            } else {
                eventAcc.style.maxHeight = 0;
                accImg.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
                accImg.alt = 'A plus sign for expanding the hidden text underneath';
                eventAcc.removeAttribute('open', '');
            }
        })
    })
}





/***/ }),

/***/ "./src/fonts/faq-accordion-main/assets/fonts/workSans.ttf":
/*!****************************************************************!*\
  !*** ./src/fonts/faq-accordion-main/assets/fonts/workSans.ttf ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0297787a1a192213b53.ttf";

/***/ }),

/***/ "./src/images/background-pattern-desktop.svg":
/*!***************************************************!*\
  !*** ./src/images/background-pattern-desktop.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "621478cf83f8150af604.svg";

/***/ }),

/***/ "./src/images/background-pattern-mobile.svg":
/*!**************************************************!*\
  !*** ./src/images/background-pattern-mobile.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbadbddabee663bba888.svg";

/***/ }),

/***/ "./src/images/icon-minus.svg":
/*!***********************************!*\
  !*** ./src/images/icon-minus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5575b6de09a1e0deab1d.svg";

/***/ }),

/***/ "./src/images/icon-plus.svg":
/*!**********************************!*\
  !*** ./src/images/icon-plus.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c5381bcc9a768ea5c36.svg";

/***/ }),

/***/ "./src/images/icon-star.svg":
/*!**********************************!*\
  !*** ./src/images/icon-star.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "189fd38b8aefdc8fbe0d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle */ "./src/toggle.js");
/* harmony import */ var _images_icon_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icon-star.svg */ "./src/images/icon-star.svg");
/* harmony import */ var _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon-plus.svg */ "./src/images/icon-plus.svg");





window.onload = loadPageContent;

function createBackground() {
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('backgroundContainer');
    document.body.append(backgroundContainer);
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // header section
    const header = document.createElement('header');
    
    const headerImg = new Image();
    headerImg.src = _images_icon_star_svg__WEBPACK_IMPORTED_MODULE_2__;
    header.append(headerImg);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'FAQS';
    header.append(headerTitle);

    card.append(header);

    // main section
    const main = document.createElement('main');

    const section1 = document.createElement('section');

    const accTitle1 = document.createElement('div');
    accTitle1.classList.add('acc-title');

    const accTitleHeader1 = document.createElement('h4');
    accTitleHeader1.textContent = 'What is Frontend Mentor, and how will it help me?';
    accTitle1.append(accTitleHeader1);

    const accTitlePlus1 = new Image();
    accTitlePlus1.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__;
    accTitlePlus1.alt = 'A plus sign for expanding the hidden text underneath'
    accTitle1.append(accTitlePlus1);

    section1.append(accTitle1);

    const title1 = document.createElement('p');
    title1.classList.add('title1');
    title1.classList.add('description');
    title1.textContent = `Frontend Mentor offers realistic coding challenges to help developers
    improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable
    for all levels and ideal for portfolio building.`;
    
    section1.append(title1);
    main.append(section1);

    const breakEl1 = document.createElement('hr');
    main.append(breakEl1);

    const section2 = document.createElement('section');

    const accTitle2 = document.createElement('div');
    accTitle2.classList.add('acc-title');

    const accTitleHeader2 = document.createElement('h4');
    accTitleHeader2.textContent = 'Is Frontend Mentor free?';
    accTitle2.append(accTitleHeader2);

    const accTitlePlus2 = new Image();
    accTitlePlus2.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__;
    accTitlePlus2.alt = 'A plus sign for expanding the hidden text underneath';
    accTitle2.append(accTitlePlus2);

    section2.append(accTitle2);

    const title2 = document.createElement('p');
    title2.classList.add('title2');
    title2.classList.add('description');
    title2.textContent = `Yes, Frontend Mentor offers both free and premium coding challenges,
    with the free option providing access to a range of projects suitable for all skill levels.`;

    section2.append(title2);
    main.append(section2);

    const breakEl2 = document.createElement('hr');
    main.append(breakEl2);

    const section3 = document.createElement('section');

    const accTitle3 = document.createElement('div');
    accTitle3.classList.add('acc-title');

    const accTitleHeader3 = document.createElement('h4');
    accTitleHeader3.textContent = 'Can I use Frontend Mentor projects in my portfolio?';
    accTitle3.append(accTitleHeader3);

    const accTitlePlus3 = new Image();
    accTitlePlus3.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__;
    accTitlePlus3.alt = 'A plus sign for expanding the hidden text underneath';
    accTitle3.append(accTitlePlus3);

    section3.append(accTitle3);

    const title3 = document.createElement('p');
    title3.classList.add('title3');
    title3.classList.add('description');
    title3.textContent = `Yes, you can use projects completed on Frontend Mentor in your portfolio.
    It's an excellent way to showcase your skills to potential employers!`;

    section3.append(title3);
    main.append(section3);

    const breakEl3 = document.createElement('hr');
    main.append(breakEl3);

    const section4 = document.createElement('section');

    const accTitle4 = document.createElement('div');
    accTitle4.classList.add('acc-title');

    const accTitleHeader4 = document.createElement('h4');
    accTitleHeader4.textContent = 'How can I get help if I\'m stuck on a challenge?';
    accTitle4.append(accTitleHeader4);

    const accTitlePlus4 = new Image();
    accTitlePlus4.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__;
    accTitlePlus4.alt = 'A plus sign for expanding the hidden text underneath';
    accTitle4.append(accTitlePlus4);

    section4.append(accTitle4);

    const title4 = document.createElement('p');
    title4.classList.add('title4');
    title4.classList.add('description');
    title4.textContent = `The best place to get help is inside Frontend Mentor's Discord community.
    There's a help channel where you can ask questions and seek support from other community members.`;

    section4.append(title4);
    main.append(section4);

    card.append(main);
    
    document.body.append(card);
}

function loadPageContent() {
    createBackground();
    createCard();
    (0,_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleDescription)();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsc0xBQXdFO0FBQ3BILDRDQUE0QywwSkFBMEQ7QUFDdEcsNENBQTRDLDRKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsbW5HQUFtbkc7QUFDbjNJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7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O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrREFBUTtBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGtEQUFRO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWlCO0FBQ3JCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vc3JjL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2ZhcS1hY2NvcmRpb24tbWFpbi9hc3NldHMvZm9udHMvd29ya1NhbnMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQtcGF0dGVybi1tb2JpbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQtcGF0dGVybi1kZXNrdG9wLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zIE5vcm1hbFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2FucyBMYXJnZXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnMgTGFyZ2VzdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2FucyBOb3JtYWxcIjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzUsIDEwMCUsIDk3JSk7XG59XG5cbi5iYWNrZ3JvdW5kQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYmFja2dyb3VuZENvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGhlaWdodDogMzcuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIH1cbn1cbi5jYXJkIHtcbiAgcGFkZGluZzogMnJlbSAzcmVtIDFyZW0gM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1heC13aWR0aDogNTNyZW07XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW0gMS41cmVtIDNyZW07XG4gIH1cbn1cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5oZWFkZXIgaDEge1xuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnMgTGFyZ2VzdFwiO1xuICBjb2xvcjogaHNsKDI5MiwgNDIlLCAxNCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIgaW1nIHtcbiAgICB3aWR0aDogMi41cmVtO1xuICB9XG59XG4uYWNjLXRpdGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnJlbSAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uYWNjLXRpdGxlIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zIExhcmdlclwiO1xuICBjb2xvcjogaHNsKDI5MiwgNDIlLCAxNCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hY2MtdGl0bGUgaW1nIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWNjLXRpdGxlOmhvdmVyIGg0IHtcbiAgY29sb3I6IHJnYigxNzMsIDQwLCAyMzUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYWNjLXRpdGxlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IHVuc2V0O1xuICB9XG59XG5zZWN0aW9uIHAge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiBoc2woMjkyLCAxNiUsIDQ5JSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuc2VjdGlvbiBwW29wZW49XCJcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59XG5ociB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDI3NSwgMTAwJSwgOTclKTtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSwrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0E7RUFDSSwrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0E7RUFDSSxnQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0E7OztFQUdJLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJO0lBQ0kseURBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7RUFNTjtBQUNGO0FBQUE7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxnQ0FBQTtFQUdOO0FBQ0Y7QUFGQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQUhJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFLUjtBQUpJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtBQU1SOztBQUpBO0VBQ0k7SUFDSSxhQUFBO0VBT047QUFDRjtBQU5BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBUUo7QUFQSTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBU1I7QUFSSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFVUjs7QUFQQTtFQUNJLHdCQUFBO0FBVUo7O0FBTEE7RUFDSTtJQUNJLDhCQUFBO0lBQ0EscUJBQUE7RUFRTjtBQUNGO0FBUEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVNKO0FBUkk7RUFDSSxtQkFBQTtBQVVSOztBQVBBO0VBQ0k7SUFDSSxpQkFBQTtFQVVOO0FBQ0Y7QUFKQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQU9KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2UgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zIE5vcm1hbCdcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvZmFxLWFjY29yZGlvbi1tYWluL2Fzc2V0cy9mb250cy93b3JrU2Fucy50dGYpXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbFxcbiAgICBmb250LXdlaWdodDogNDAwXFxuXFxuQGZvbnQtZmFjZSBcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMgTGFyZ2VyJ1xcbiAgICBzcmM6IHVybCguLi9mb250cy9mYXEtYWNjb3JkaW9uLW1haW4vYXNzZXRzL2ZvbnRzL3dvcmtTYW5zLnR0ZilcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG5cXG5AZm9udC1mYWNlIFxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucyBMYXJnZXN0J1xcbiAgICBzcmM6IHVybCguLi9mb250cy9mYXEtYWNjb3JkaW9uLW1haW4vYXNzZXRzL2ZvbnRzL3dvcmtTYW5zLnR0ZilcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sIFxcbiAgICBmb250LXNpemU6IDYyLjUlXFxuXFxuYm9keVxcbiAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucyBOb3JtYWwnXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjc1LCAxMDAlLCA5NyUpXFxuICAgIFxcbi5iYWNrZ3JvdW5kQ29udGFpbmVyXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICB6LWluZGV4OiAtMVxcbiAgICB0b3A6IDBcXG4gICAgbGVmdDogMFxcbiAgICBoZWlnaHQ6IDI0cmVtXFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC1wYXR0ZXJuLW1vYmlsZS5zdmcnKVxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXFxuICAgIFxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuYmFja2dyb3VuZENvbnRhaW5lclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC1wYXR0ZXJuLWRlc2t0b3Auc3ZnJylcXG4gICAgICAgIGhlaWdodDogMzcuNXJlbVxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wXFxuXFxuXFxuXFxuXFxuICAgIFxcblxcbi5jYXJkXFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbSAxcmVtIDNyZW1cXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgbWF4LXdpZHRoOiAzMnJlbVxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpXFxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5jYXJkXFxuICAgICAgICBtYXgtd2lkdGg6IDUzcmVtXFxuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbSAxLjVyZW0gM3JlbVxcblxcbmhlYWRlclxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGdhcDogMi41cmVtXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW1cXG4gICAgaW1nXFxuICAgICAgICB3aWR0aDogMnJlbVxcbiAgICAgICAgaGVpZ2h0OiBhdXRvXFxuICAgIGgxXFxuICAgICAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucyBMYXJnZXN0J1xcbiAgICAgICAgY29sb3I6IGhzbCgyOTIsIDQyJSwgMTQlKVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBoZWFkZXIgaW1nXFxuICAgICAgICB3aWR0aDogMi41cmVtXFxuXFxuLmFjYy10aXRsZVxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnJlbSAxZnJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtXFxuICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICBoNFxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMgTGFyZ2VyJ1xcbiAgICAgICAgY29sb3I6IGhzbCgyOTIsIDQyJSwgMTQlKVxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgaW1nXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZFxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG4gICAgICAgIFxcblxcbi5hY2MtdGl0bGU6aG92ZXIgaDRcXG4gICAgY29sb3I6IHJnYigxNzMsIDQwLCAyMzUpXFxuXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5hY2MtdGl0bGVcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJVxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHVuc2V0XFxuXFxuc2VjdGlvbiBwXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtXFxuICAgIGNvbG9yOiBoc2woMjkyLCAxNiUsIDQ5JSlcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgbWF4LWhlaWdodDogMFxcbiAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICZbb3Blbj0nJ11cXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW1cXG4gICAgXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIHNlY3Rpb24gcFxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgXFxuXFxuXFxuXFxuICAgIFxcblxcbmhyXFxuICAgIG1hcmdpbjogMFxcbiAgICBib3JkZXI6IG5vbmVcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgyNzUsIDEwMCUsIDk3JSlcXG5cXG5mb290ZXJcXG4gICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgIGJvdHRvbTogMnJlbVxcblxcblxcblxcbi8vIC5iYWNrZ3JvdW5kUGF0dGVyblxcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4vLyAgICAgei1pbmRleDogLTFcXG4vLyAgICAgd2lkdGg6IDEwMCVcXG4gICAgXFxuLy8gICAgIHRvcDogMFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGdsb2JhbCB2YXJpYWJsZXNcbmltcG9ydCBQbHVzU2lnbiBmcm9tICcuL2ltYWdlcy9pY29uLXBsdXMuc3ZnJztcbmltcG9ydCBNaW51c1NpZ24gZnJvbSAnLi9pbWFnZXMvaWNvbi1taW51cy5zdmcnO1xuXG5mdW5jdGlvbiB0b2dnbGVEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBhY2NUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2MtdGl0bGUnKTtcbiAgICAvKiBXaGVuIGFjY1RpdGxlIGlzIGNsaWNrZWQsIGRlc2NyaXB0aW9uIHdpbGwgdG9nZ2xlIHRoZSBjbG9zZWRcbiAgICBkYXRhIGF0dHJpYnV0ZSBvbiBhbmQgb2ZmICovXG4gICAgYWNjVGl0bGUuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBldmVudFRhciA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGxldCBldmVudEFjYyA9IGV2ZW50VGFyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGxldCBhY2NJbWcgPSBldmVudFRhci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgaWYgKCFldmVudEFjYy5oYXNBdHRyaWJ1dGUoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50QWNjLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgICAgICAgICAgICAgICBhY2NJbWcuc3JjID0gTWludXNTaWduO1xuICAgICAgICAgICAgICAgIGFjY0ltZy5hbHQgPSAnQSBtaW51cyBzaWduIGZvciBjb2xsYXBzaW5nIHRoZSB2aWV3YWJsZSB0ZXh0IHVuZGVybmVhdGgnO1xuICAgICAgICAgICAgICAgIGV2ZW50QWNjLnN0eWxlLm1heEhlaWdodCA9IGV2ZW50QWNjLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50QWNjLnN0eWxlLm1heEhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgYWNjSW1nLnNyYyA9IFBsdXNTaWduO1xuICAgICAgICAgICAgICAgIGFjY0ltZy5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCc7XG4gICAgICAgICAgICAgICAgZXZlbnRBY2MucmVtb3ZlQXR0cmlidXRlKCdvcGVuJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG5leHBvcnQgeyB0b2dnbGVEZXNjcmlwdGlvbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcbmltcG9ydCB7IHRvZ2dsZURlc2NyaXB0aW9uIH0gZnJvbSAnLi90b2dnbGUnO1xuaW1wb3J0IEhlYWRlckltZyBmcm9tICcuL2ltYWdlcy9pY29uLXN0YXIuc3ZnJztcbmltcG9ydCBQbHVzU2lnbiBmcm9tICcuL2ltYWdlcy9pY29uLXBsdXMuc3ZnJztcblxud2luZG93Lm9ubG9hZCA9IGxvYWRQYWdlQ29udGVudDtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZCgpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kQ29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFja2dyb3VuZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIFxuICAgIC8vIGhlYWRlciBzZWN0aW9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVySW1nID0gbmV3IEltYWdlKCk7XG4gICAgaGVhZGVySW1nLnNyYyA9IEhlYWRlckltZztcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckltZyk7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnRkFRUyc7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSk7XG5cbiAgICBjYXJkLmFwcGVuZChoZWFkZXIpO1xuXG4gICAgLy8gbWFpbiBzZWN0aW9uXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgYWNjVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWNjVGl0bGUxLmNsYXNzTGlzdC5hZGQoJ2FjYy10aXRsZScpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVIZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhY2NUaXRsZUhlYWRlcjEudGV4dENvbnRlbnQgPSAnV2hhdCBpcyBGcm9udGVuZCBNZW50b3IsIGFuZCBob3cgd2lsbCBpdCBoZWxwIG1lPyc7XG4gICAgYWNjVGl0bGUxLmFwcGVuZChhY2NUaXRsZUhlYWRlcjEpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVQbHVzMSA9IG5ldyBJbWFnZSgpO1xuICAgIGFjY1RpdGxlUGx1czEuc3JjID0gUGx1c1NpZ247XG4gICAgYWNjVGl0bGVQbHVzMS5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCdcbiAgICBhY2NUaXRsZTEuYXBwZW5kKGFjY1RpdGxlUGx1czEpO1xuXG4gICAgc2VjdGlvbjEuYXBwZW5kKGFjY1RpdGxlMSk7XG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUxLmNsYXNzTGlzdC5hZGQoJ3RpdGxlMScpO1xuICAgIHRpdGxlMS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIHRpdGxlMS50ZXh0Q29udGVudCA9IGBGcm9udGVuZCBNZW50b3Igb2ZmZXJzIHJlYWxpc3RpYyBjb2RpbmcgY2hhbGxlbmdlcyB0byBoZWxwIGRldmVsb3BlcnNcbiAgICBpbXByb3ZlIHRoZWlyIGZyb250ZW5kIGNvZGluZyBza2lsbHMgd2l0aCBwcm9qZWN0cyBpbiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJdFxcJ3Mgc3VpdGFibGVcbiAgICBmb3IgYWxsIGxldmVscyBhbmQgaWRlYWwgZm9yIHBvcnRmb2xpbyBidWlsZGluZy5gO1xuICAgIFxuICAgIHNlY3Rpb24xLmFwcGVuZCh0aXRsZTEpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24xKTtcblxuICAgIGNvbnN0IGJyZWFrRWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBtYWluLmFwcGVuZChicmVha0VsMSk7XG5cbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY1RpdGxlMi5jbGFzc0xpc3QuYWRkKCdhY2MtdGl0bGUnKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlSGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWNjVGl0bGVIZWFkZXIyLnRleHRDb250ZW50ID0gJ0lzIEZyb250ZW5kIE1lbnRvciBmcmVlPyc7XG4gICAgYWNjVGl0bGUyLmFwcGVuZChhY2NUaXRsZUhlYWRlcjIpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVQbHVzMiA9IG5ldyBJbWFnZSgpO1xuICAgIGFjY1RpdGxlUGx1czIuc3JjID0gUGx1c1NpZ247XG4gICAgYWNjVGl0bGVQbHVzMi5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCc7XG4gICAgYWNjVGl0bGUyLmFwcGVuZChhY2NUaXRsZVBsdXMyKTtcblxuICAgIHNlY3Rpb24yLmFwcGVuZChhY2NUaXRsZTIpO1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlMi5jbGFzc0xpc3QuYWRkKCd0aXRsZTInKTtcbiAgICB0aXRsZTIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBgWWVzLCBGcm9udGVuZCBNZW50b3Igb2ZmZXJzIGJvdGggZnJlZSBhbmQgcHJlbWl1bSBjb2RpbmcgY2hhbGxlbmdlcyxcbiAgICB3aXRoIHRoZSBmcmVlIG9wdGlvbiBwcm92aWRpbmcgYWNjZXNzIHRvIGEgcmFuZ2Ugb2YgcHJvamVjdHMgc3VpdGFibGUgZm9yIGFsbCBza2lsbCBsZXZlbHMuYDtcblxuICAgIHNlY3Rpb24yLmFwcGVuZCh0aXRsZTIpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24yKTtcblxuICAgIGNvbnN0IGJyZWFrRWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBtYWluLmFwcGVuZChicmVha0VsMik7XG5cbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY1RpdGxlMy5jbGFzc0xpc3QuYWRkKCdhY2MtdGl0bGUnKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlSGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWNjVGl0bGVIZWFkZXIzLnRleHRDb250ZW50ID0gJ0NhbiBJIHVzZSBGcm9udGVuZCBNZW50b3IgcHJvamVjdHMgaW4gbXkgcG9ydGZvbGlvPyc7XG4gICAgYWNjVGl0bGUzLmFwcGVuZChhY2NUaXRsZUhlYWRlcjMpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVQbHVzMyA9IG5ldyBJbWFnZSgpO1xuICAgIGFjY1RpdGxlUGx1czMuc3JjID0gUGx1c1NpZ247XG4gICAgYWNjVGl0bGVQbHVzMy5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCc7XG4gICAgYWNjVGl0bGUzLmFwcGVuZChhY2NUaXRsZVBsdXMzKTtcblxuICAgIHNlY3Rpb24zLmFwcGVuZChhY2NUaXRsZTMpO1xuXG4gICAgY29uc3QgdGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlMy5jbGFzc0xpc3QuYWRkKCd0aXRsZTMnKTtcbiAgICB0aXRsZTMuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICB0aXRsZTMudGV4dENvbnRlbnQgPSBgWWVzLCB5b3UgY2FuIHVzZSBwcm9qZWN0cyBjb21wbGV0ZWQgb24gRnJvbnRlbmQgTWVudG9yIGluIHlvdXIgcG9ydGZvbGlvLlxuICAgIEl0J3MgYW4gZXhjZWxsZW50IHdheSB0byBzaG93Y2FzZSB5b3VyIHNraWxscyB0byBwb3RlbnRpYWwgZW1wbG95ZXJzIWA7XG5cbiAgICBzZWN0aW9uMy5hcHBlbmQodGl0bGUzKTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uMyk7XG5cbiAgICBjb25zdCBicmVha0VsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbWFpbi5hcHBlbmQoYnJlYWtFbDMpO1xuXG4gICAgY29uc3Qgc2VjdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBhY2NUaXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY2NUaXRsZTQuY2xhc3NMaXN0LmFkZCgnYWNjLXRpdGxlJyk7XG5cbiAgICBjb25zdCBhY2NUaXRsZUhlYWRlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGFjY1RpdGxlSGVhZGVyNC50ZXh0Q29udGVudCA9ICdIb3cgY2FuIEkgZ2V0IGhlbHAgaWYgSVxcJ20gc3R1Y2sgb24gYSBjaGFsbGVuZ2U/JztcbiAgICBhY2NUaXRsZTQuYXBwZW5kKGFjY1RpdGxlSGVhZGVyNCk7XG5cbiAgICBjb25zdCBhY2NUaXRsZVBsdXM0ID0gbmV3IEltYWdlKCk7XG4gICAgYWNjVGl0bGVQbHVzNC5zcmMgPSBQbHVzU2lnbjtcbiAgICBhY2NUaXRsZVBsdXM0LmFsdCA9ICdBIHBsdXMgc2lnbiBmb3IgZXhwYW5kaW5nIHRoZSBoaWRkZW4gdGV4dCB1bmRlcm5lYXRoJztcbiAgICBhY2NUaXRsZTQuYXBwZW5kKGFjY1RpdGxlUGx1czQpO1xuXG4gICAgc2VjdGlvbjQuYXBwZW5kKGFjY1RpdGxlNCk7XG5cbiAgICBjb25zdCB0aXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGU0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlNCcpO1xuICAgIHRpdGxlNC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIHRpdGxlNC50ZXh0Q29udGVudCA9IGBUaGUgYmVzdCBwbGFjZSB0byBnZXQgaGVscCBpcyBpbnNpZGUgRnJvbnRlbmQgTWVudG9yJ3MgRGlzY29yZCBjb21tdW5pdHkuXG4gICAgVGhlcmUncyBhIGhlbHAgY2hhbm5lbCB3aGVyZSB5b3UgY2FuIGFzayBxdWVzdGlvbnMgYW5kIHNlZWsgc3VwcG9ydCBmcm9tIG90aGVyIGNvbW11bml0eSBtZW1iZXJzLmA7XG5cbiAgICBzZWN0aW9uNC5hcHBlbmQodGl0bGU0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uNCk7XG5cbiAgICBjYXJkLmFwcGVuZChtYWluKTtcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2VDb250ZW50KCkge1xuICAgIGNyZWF0ZUJhY2tncm91bmQoKTtcbiAgICBjcmVhdGVDYXJkKCk7XG4gICAgdG9nZ2xlRGVzY3JpcHRpb24oKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=