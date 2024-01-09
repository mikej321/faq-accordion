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
    headerImg.alt = 'A star';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsc0xBQXdFO0FBQ3BILDRDQUE0QywwSkFBMEQ7QUFDdEcsNENBQTRDLDRKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsbW5HQUFtbkc7QUFDbjNJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7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QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGtEQUFRO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0RBQVE7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBaUI7QUFDckIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YmZhZCIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vLi9zcmMvdG9nZ2xlLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZmFxLWFjY29yZGlvbi1tYWluL2Fzc2V0cy9mb250cy93b3JrU2Fucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC1wYXR0ZXJuLW1vYmlsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC1wYXR0ZXJuLWRlc2t0b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnMgTm9ybWFsXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zIExhcmdlclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2FucyBMYXJnZXN0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zIE5vcm1hbFwiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3NSwgMTAwJSwgOTclKTtcbn1cblxuLmJhY2tncm91bmRDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDI0cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5iYWNrZ3JvdW5kQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgaGVpZ2h0OiAzNy41cmVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgfVxufVxuLmNhcmQge1xuICBwYWRkaW5nOiAycmVtIDNyZW0gMXJlbSAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1M3JlbTtcbiAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbSAxLjVyZW0gM3JlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogYXV0bztcbn1cbmhlYWRlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2FucyBMYXJnZXN0XCI7XG4gIGNvbG9yOiBoc2woMjkyLCA0MiUsIDE0JSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlciBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gIH1cbn1cbi5hY2MtdGl0bGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycmVtIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hY2MtdGl0bGUgaDQge1xuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnMgTGFyZ2VyXCI7XG4gIGNvbG9yOiBoc2woMjkyLCA0MiUsIDE0JSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmFjYy10aXRsZSBpbWcge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hY2MtdGl0bGU6aG92ZXIgaDQge1xuICBjb2xvcjogcmdiKDE3MywgNDAsIDIzNSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5hY2MtdGl0bGUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogdW5zZXQ7XG4gIH1cbn1cbnNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgY29sb3I6IGhzbCgyOTIsIDE2JSwgNDklKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5zZWN0aW9uIHBbb3Blbj1cIlwiXSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbn1cbmhyIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMjc1LCAxMDAlLCA5NyUpO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDQTtFQUNJLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDQTtFQUNJLGdDQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDQTs7O0VBR0ksc0JBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUhBO0VBQ0k7SUFDSSx5REFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtFQU1OO0FBQ0Y7QUFBQTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUFBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdDQUFBO0VBR047QUFDRjtBQUZBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUlKO0FBSEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUtSO0FBSkk7RUFDSSxnQ0FBQTtFQUNBLHlCQUFBO0FBTVI7O0FBSkE7RUFDSTtJQUNJLGFBQUE7RUFPTjtBQUNGO0FBTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFRSjtBQVBJO0VBQ0ksK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFTUjtBQVJJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQVVSOztBQVBBO0VBQ0ksd0JBQUE7QUFVSjs7QUFMQTtFQUNJO0lBQ0ksOEJBQUE7SUFDQSxxQkFBQTtFQVFOO0FBQ0Y7QUFQQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBU0o7QUFSSTtFQUNJLG1CQUFBO0FBVVI7O0FBUEE7RUFDSTtJQUNJLGlCQUFBO0VBVU47QUFDRjtBQUpBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBT0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSBcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMgTm9ybWFsJ1xcbiAgICBzcmM6IHVybCguLi9mb250cy9mYXEtYWNjb3JkaW9uLW1haW4vYXNzZXRzL2ZvbnRzL3dvcmtTYW5zLnR0ZilcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcXG5cXG5AZm9udC1mYWNlIFxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucyBMYXJnZXInXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2ZhcS1hY2NvcmRpb24tbWFpbi9hc3NldHMvZm9udHMvd29ya1NhbnMudHRmKVxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxcblxcbkBmb250LWZhY2UgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zIExhcmdlc3QnXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2ZhcS1hY2NvcmRpb24tbWFpbi9hc3NldHMvZm9udHMvd29ya1NhbnMudHRmKVxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICBcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aFxcblxcbmh0bWwgXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5ib2R5XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zIE5vcm1hbCdcXG4gICAgbWluLWhlaWdodDogMTAwdmhcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzUsIDEwMCUsIDk3JSlcXG4gICAgXFxuLmJhY2tncm91bmRDb250YWluZXJcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgIHotaW5kZXg6IC0xXFxuICAgIHRvcDogMFxcbiAgICBsZWZ0OiAwXFxuICAgIGhlaWdodDogMjRyZW1cXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLXBhdHRlcm4tbW9iaWxlLnN2ZycpXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcXG4gICAgXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5iYWNrZ3JvdW5kQ29udGFpbmVyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLXBhdHRlcm4tZGVza3RvcC5zdmcnKVxcbiAgICAgICAgaGVpZ2h0OiAzNy41cmVtXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3BcXG5cXG5cXG5cXG5cXG4gICAgXFxuXFxuLmNhcmRcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtIDFyZW0gM3JlbVxcbiAgICB3aWR0aDogMTAwJVxcbiAgICBtYXgtd2lkdGg6IDMycmVtXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSlcXG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNhcmRcXG4gICAgICAgIG1heC13aWR0aDogNTNyZW1cXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAzcmVtIDEuNXJlbSAzcmVtXFxuXFxuaGVhZGVyXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZ2FwOiAyLjVyZW1cXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICBpbWdcXG4gICAgICAgIHdpZHRoOiAycmVtXFxuICAgICAgICBoZWlnaHQ6IGF1dG9cXG4gICAgaDFcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zIExhcmdlc3QnXFxuICAgICAgICBjb2xvcjogaHNsKDI5MiwgNDIlLCAxNCUpXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGhlYWRlciBpbWdcXG4gICAgICAgIHdpZHRoOiAyLjVyZW1cXG5cXG4uYWNjLXRpdGxlXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycmVtIDFmclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW1cXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW1cXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgIGg0XFxuICAgICAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucyBMYXJnZXInXFxuICAgICAgICBjb2xvcjogaHNsKDI5MiwgNDIlLCAxNCUpXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dFxcbiAgICBpbWdcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxcbiAgICAgICAgXFxuXFxuLmFjYy10aXRsZTpob3ZlciBoNFxcbiAgICBjb2xvcjogcmdiKDE3MywgNDAsIDIzNSlcXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmFjYy10aXRsZVxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdW5zZXRcXG5cXG5zZWN0aW9uIHBcXG4gICAgZm9udC1zaXplOiAxLjNyZW1cXG4gICAgbGluZS1oZWlnaHQ6IDJyZW1cXG4gICAgY29sb3I6IGhzbCgyOTIsIDE2JSwgNDklKVxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICBtYXgtaGVpZ2h0OiAwXFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgJltvcGVuPScnXVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICBcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgc2VjdGlvbiBwXFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbVxcbiAgICBcXG5cXG5cXG5cXG4gICAgXFxuXFxuaHJcXG4gICAgbWFyZ2luOiAwXFxuICAgIGJvcmRlcjogbm9uZVxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDI3NSwgMTAwJSwgOTclKVxcblxcbmZvb3RlclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgYm90dG9tOiAycmVtXFxuXFxuXFxuXFxuLy8gLmJhY2tncm91bmRQYXR0ZXJuXFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbi8vICAgICB6LWluZGV4OiAtMVxcbi8vICAgICB3aWR0aDogMTAwJVxcbiAgICBcXG4vLyAgICAgdG9wOiAwXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZ2xvYmFsIHZhcmlhYmxlc1xuaW1wb3J0IFBsdXNTaWduIGZyb20gJy4vaW1hZ2VzL2ljb24tcGx1cy5zdmcnO1xuaW1wb3J0IE1pbnVzU2lnbiBmcm9tICcuL2ltYWdlcy9pY29uLW1pbnVzLnN2Zyc7XG5cbmZ1bmN0aW9uIHRvZ2dsZURlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IGFjY1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjYy10aXRsZScpO1xuICAgIC8qIFdoZW4gYWNjVGl0bGUgaXMgY2xpY2tlZCwgZGVzY3JpcHRpb24gd2lsbCB0b2dnbGUgdGhlIGNsb3NlZFxuICAgIGRhdGEgYXR0cmlidXRlIG9uIGFuZCBvZmYgKi9cbiAgICBhY2NUaXRsZS5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV2ZW50VGFyID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGV2ZW50QWNjID0gZXZlbnRUYXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgbGV0IGFjY0ltZyA9IGV2ZW50VGFyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoIWV2ZW50QWNjLmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRBY2Muc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuICAgICAgICAgICAgICAgIGFjY0ltZy5zcmMgPSBNaW51c1NpZ247XG4gICAgICAgICAgICAgICAgYWNjSW1nLmFsdCA9ICdBIG1pbnVzIHNpZ24gZm9yIGNvbGxhcHNpbmcgdGhlIHZpZXdhYmxlIHRleHQgdW5kZXJuZWF0aCc7XG4gICAgICAgICAgICAgICAgZXZlbnRBY2Muc3R5bGUubWF4SGVpZ2h0ID0gZXZlbnRBY2Muc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRBY2Muc3R5bGUubWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICBhY2NJbWcuc3JjID0gUGx1c1NpZ247XG4gICAgICAgICAgICAgICAgYWNjSW1nLmFsdCA9ICdBIHBsdXMgc2lnbiBmb3IgZXhwYW5kaW5nIHRoZSBoaWRkZW4gdGV4dCB1bmRlcm5lYXRoJztcbiAgICAgICAgICAgICAgICBldmVudEFjYy5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCB7IHRvZ2dsZURlc2NyaXB0aW9uIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuaW1wb3J0IHsgdG9nZ2xlRGVzY3JpcHRpb24gfSBmcm9tICcuL3RvZ2dsZSc7XG5pbXBvcnQgSGVhZGVySW1nIGZyb20gJy4vaW1hZ2VzL2ljb24tc3Rhci5zdmcnO1xuaW1wb3J0IFBsdXNTaWduIGZyb20gJy4vaW1hZ2VzL2ljb24tcGx1cy5zdmcnO1xuXG53aW5kb3cub25sb2FkID0gbG9hZFBhZ2VDb250ZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kKCkge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRDb250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgXG4gICAgLy8gaGVhZGVyIHNlY3Rpb25cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkZXJJbWcuc3JjID0gSGVhZGVySW1nO1xuICAgIGhlYWRlckltZy5hbHQgPSAnQSBzdGFyJztcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckltZyk7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnRkFRUyc7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSk7XG5cbiAgICBjYXJkLmFwcGVuZChoZWFkZXIpO1xuXG4gICAgLy8gbWFpbiBzZWN0aW9uXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgYWNjVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWNjVGl0bGUxLmNsYXNzTGlzdC5hZGQoJ2FjYy10aXRsZScpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVIZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhY2NUaXRsZUhlYWRlcjEudGV4dENvbnRlbnQgPSAnV2hhdCBpcyBGcm9udGVuZCBNZW50b3IsIGFuZCBob3cgd2lsbCBpdCBoZWxwIG1lPyc7XG4gICAgYWNjVGl0bGUxLmFwcGVuZChhY2NUaXRsZUhlYWRlcjEpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVQbHVzMSA9IG5ldyBJbWFnZSgpO1xuICAgIGFjY1RpdGxlUGx1czEuc3JjID0gUGx1c1NpZ247XG4gICAgYWNjVGl0bGVQbHVzMS5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCdcbiAgICBhY2NUaXRsZTEuYXBwZW5kKGFjY1RpdGxlUGx1czEpO1xuXG4gICAgc2VjdGlvbjEuYXBwZW5kKGFjY1RpdGxlMSk7XG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUxLmNsYXNzTGlzdC5hZGQoJ3RpdGxlMScpO1xuICAgIHRpdGxlMS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIHRpdGxlMS50ZXh0Q29udGVudCA9IGBGcm9udGVuZCBNZW50b3Igb2ZmZXJzIHJlYWxpc3RpYyBjb2RpbmcgY2hhbGxlbmdlcyB0byBoZWxwIGRldmVsb3BlcnNcbiAgICBpbXByb3ZlIHRoZWlyIGZyb250ZW5kIGNvZGluZyBza2lsbHMgd2l0aCBwcm9qZWN0cyBpbiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJdFxcJ3Mgc3VpdGFibGVcbiAgICBmb3IgYWxsIGxldmVscyBhbmQgaWRlYWwgZm9yIHBvcnRmb2xpbyBidWlsZGluZy5gO1xuICAgIFxuICAgIHNlY3Rpb24xLmFwcGVuZCh0aXRsZTEpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24xKTtcblxuICAgIGNvbnN0IGJyZWFrRWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBtYWluLmFwcGVuZChicmVha0VsMSk7XG5cbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY1RpdGxlMi5jbGFzc0xpc3QuYWRkKCdhY2MtdGl0bGUnKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlSGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWNjVGl0bGVIZWFkZXIyLnRleHRDb250ZW50ID0gJ0lzIEZyb250ZW5kIE1lbnRvciBmcmVlPyc7XG4gICAgYWNjVGl0bGUyLmFwcGVuZChhY2NUaXRsZUhlYWRlcjIpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVQbHVzMiA9IG5ldyBJbWFnZSgpO1xuICAgIGFjY1RpdGxlUGx1czIuc3JjID0gUGx1c1NpZ247XG4gICAgYWNjVGl0bGVQbHVzMi5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCc7XG4gICAgYWNjVGl0bGUyLmFwcGVuZChhY2NUaXRsZVBsdXMyKTtcblxuICAgIHNlY3Rpb24yLmFwcGVuZChhY2NUaXRsZTIpO1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlMi5jbGFzc0xpc3QuYWRkKCd0aXRsZTInKTtcbiAgICB0aXRsZTIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBgWWVzLCBGcm9udGVuZCBNZW50b3Igb2ZmZXJzIGJvdGggZnJlZSBhbmQgcHJlbWl1bSBjb2RpbmcgY2hhbGxlbmdlcyxcbiAgICB3aXRoIHRoZSBmcmVlIG9wdGlvbiBwcm92aWRpbmcgYWNjZXNzIHRvIGEgcmFuZ2Ugb2YgcHJvamVjdHMgc3VpdGFibGUgZm9yIGFsbCBza2lsbCBsZXZlbHMuYDtcblxuICAgIHNlY3Rpb24yLmFwcGVuZCh0aXRsZTIpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24yKTtcblxuICAgIGNvbnN0IGJyZWFrRWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBtYWluLmFwcGVuZChicmVha0VsMik7XG5cbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY1RpdGxlMy5jbGFzc0xpc3QuYWRkKCdhY2MtdGl0bGUnKTtcblxuICAgIGNvbnN0IGFjY1RpdGxlSGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWNjVGl0bGVIZWFkZXIzLnRleHRDb250ZW50ID0gJ0NhbiBJIHVzZSBGcm9udGVuZCBNZW50b3IgcHJvamVjdHMgaW4gbXkgcG9ydGZvbGlvPyc7XG4gICAgYWNjVGl0bGUzLmFwcGVuZChhY2NUaXRsZUhlYWRlcjMpO1xuXG4gICAgY29uc3QgYWNjVGl0bGVQbHVzMyA9IG5ldyBJbWFnZSgpO1xuICAgIGFjY1RpdGxlUGx1czMuc3JjID0gUGx1c1NpZ247XG4gICAgYWNjVGl0bGVQbHVzMy5hbHQgPSAnQSBwbHVzIHNpZ24gZm9yIGV4cGFuZGluZyB0aGUgaGlkZGVuIHRleHQgdW5kZXJuZWF0aCc7XG4gICAgYWNjVGl0bGUzLmFwcGVuZChhY2NUaXRsZVBsdXMzKTtcblxuICAgIHNlY3Rpb24zLmFwcGVuZChhY2NUaXRsZTMpO1xuXG4gICAgY29uc3QgdGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlMy5jbGFzc0xpc3QuYWRkKCd0aXRsZTMnKTtcbiAgICB0aXRsZTMuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICB0aXRsZTMudGV4dENvbnRlbnQgPSBgWWVzLCB5b3UgY2FuIHVzZSBwcm9qZWN0cyBjb21wbGV0ZWQgb24gRnJvbnRlbmQgTWVudG9yIGluIHlvdXIgcG9ydGZvbGlvLlxuICAgIEl0J3MgYW4gZXhjZWxsZW50IHdheSB0byBzaG93Y2FzZSB5b3VyIHNraWxscyB0byBwb3RlbnRpYWwgZW1wbG95ZXJzIWA7XG5cbiAgICBzZWN0aW9uMy5hcHBlbmQodGl0bGUzKTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uMyk7XG5cbiAgICBjb25zdCBicmVha0VsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbWFpbi5hcHBlbmQoYnJlYWtFbDMpO1xuXG4gICAgY29uc3Qgc2VjdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBhY2NUaXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY2NUaXRsZTQuY2xhc3NMaXN0LmFkZCgnYWNjLXRpdGxlJyk7XG5cbiAgICBjb25zdCBhY2NUaXRsZUhlYWRlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGFjY1RpdGxlSGVhZGVyNC50ZXh0Q29udGVudCA9ICdIb3cgY2FuIEkgZ2V0IGhlbHAgaWYgSVxcJ20gc3R1Y2sgb24gYSBjaGFsbGVuZ2U/JztcbiAgICBhY2NUaXRsZTQuYXBwZW5kKGFjY1RpdGxlSGVhZGVyNCk7XG5cbiAgICBjb25zdCBhY2NUaXRsZVBsdXM0ID0gbmV3IEltYWdlKCk7XG4gICAgYWNjVGl0bGVQbHVzNC5zcmMgPSBQbHVzU2lnbjtcbiAgICBhY2NUaXRsZVBsdXM0LmFsdCA9ICdBIHBsdXMgc2lnbiBmb3IgZXhwYW5kaW5nIHRoZSBoaWRkZW4gdGV4dCB1bmRlcm5lYXRoJztcbiAgICBhY2NUaXRsZTQuYXBwZW5kKGFjY1RpdGxlUGx1czQpO1xuXG4gICAgc2VjdGlvbjQuYXBwZW5kKGFjY1RpdGxlNCk7XG5cbiAgICBjb25zdCB0aXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGU0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlNCcpO1xuICAgIHRpdGxlNC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIHRpdGxlNC50ZXh0Q29udGVudCA9IGBUaGUgYmVzdCBwbGFjZSB0byBnZXQgaGVscCBpcyBpbnNpZGUgRnJvbnRlbmQgTWVudG9yJ3MgRGlzY29yZCBjb21tdW5pdHkuXG4gICAgVGhlcmUncyBhIGhlbHAgY2hhbm5lbCB3aGVyZSB5b3UgY2FuIGFzayBxdWVzdGlvbnMgYW5kIHNlZWsgc3VwcG9ydCBmcm9tIG90aGVyIGNvbW11bml0eSBtZW1iZXJzLmA7XG5cbiAgICBzZWN0aW9uNC5hcHBlbmQodGl0bGU0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uNCk7XG5cbiAgICBjYXJkLmFwcGVuZChtYWluKTtcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2VDb250ZW50KCkge1xuICAgIGNyZWF0ZUJhY2tncm91bmQoKTtcbiAgICBjcmVhdGVDYXJkKCk7XG4gICAgdG9nZ2xlRGVzY3JpcHRpb24oKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=