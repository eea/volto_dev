exports.id = "main";
exports.modules = {

/***/ "./volto-mosaic/src/components/css/edit.css":
/*!**************************************************!*\
  !*** ./volto-mosaic/src/components/css/edit.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/razzle/node_modules/css-loader/lib/css-base.js */ "./node_modules/razzle/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.modal label {\n  margin-right: 1em;\n  font-weight: 500;\n}\n\n.ui.modal .ui.input button {\n  margin: 0 0.5em;\n}\n\n.ui.modal {\n  transform-origin: none!important;\n}\n\n.ui.modal .ui.input > input {\n  padding: 0.5em;\n}\n\n.ui.button svg {\n  margin: 0 !important;\n}\n\n.ui.modal .actions .button {\n  margin-left: 0.75em;\n  border-radius: 4px;\n}\n\n.ui.modal .ui.vertical.menu .item {\n  display: flex;\n  margin: 0;\n  font-weight: normal;\n}\n\n.ui.modal .ui.vertical.menu .active.item {\n  font-weight: 600;\n}\n\n.ui.modal .ui.vertical.menu {\n  display: -webkit-flex;\n  -webkit-flex-direction: column;\n  height: auto;\n  max-height: 150px;\n}\n\n.ui.modal .ui.vertical.menu .items {\n  -webkit-flex: 1 1 auto;\n  overflow-y: auto;\n}\n\n/* .ui.modal .ui.vertical.menu .item:hover,\n.ui.modal .ui.vertical.menu .active.item {\n  background-color: rgba(0, 0, 0, 0.02);\n  color: #020;\n} */\n\n.modal .block {\n  min-height: 400px;\n  margin-top: 1em;\n}\n\n.ui.modal {\n  margin: 0 !important;\n  transform: translate(-50%, -50%);\n}\n\n#page-edit .mosaic-window-body {\n  position: static;\n  z-index: 5;\n  padding: 1rem;\n  background: #ddd;\n  pointer-events: none;\n}\n\n#page-edit .mosaic-window-body > * {\n  pointer-events: all;\n}\n\n#page-edit .mosaic-window-body .block {\n  height: 100%;\n}\n\n#page-edit .mosaic-preview {\n  display: none;\n}\n\n#page-edit .mosaic-window-body .block .block-inner-wrapper {\n  height: 100%;\n}\n\n#page-edit .mosaic-window-body .block .block-inner-wrapper .hero-body {\n  min-width: 100px;\n  height: 100%;\n}\n\n.mosaic.mosaic-blueprint-theme {\n  background: none !important;\n}\n\n.mosaic-window-body > div {\n  width: 100%;\n}\n\n.mosaic-window > .mosaic-window-toolbar.draggable {\n  /* display: none!important; */\n\n  position: absolute;\n  width: 100%;\n  height: 100% !important;\n}\n\n.mosaic-window > .mosaic-window-toolbar.draggable .mosaic-window-title {\n  position: absolute;\n  top:0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.mosaic-window > .mosaic-window-toolbar .mosaic-window-controls {\n  display: none !important;\n}\n\n.block-selector .menu{\n  height: 200px;\n}\n\n\n.view-editview .react-grid-item:not(.react-grid-placeholder) {\n  overflow: auto;\n  border: 2px solid white;\n  background: #fafafa;\n\n  /* border: 1px solid #ddd; */\n}\n\n\n.ui.upward.dropdown > .menu {\n  overflow: auto;\n}\n\n.react-grid-layout.mosaic-edit-layout .ui.grid{\n  height: 100%;\n  margin: 0 !important;\n}\n\n.react-grid-layout.mosaic-edit-layout .ui.grid .column {\n  /* border: 1px solid #ddd; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.react-grid-layout.mosaic-edit-layout .ui.grid .row .column:first-child {\n  /* border: 1px solid #ddd; */\n  margin-right: -1px;\n}\n\n\n.react-grid-layout.mosaic-edit-layout .ui.grid > .row {\n  padding: 0;\n}\n\n.react-grid-layout.mosaic-edit-layout .ui.grid > .row:first-child {\n  padding: 0;\n  margin-bottom: -1px;\n}\n\n.column.gridDragColumn {\n  cursor: pointer;\n  transition: background-color 200ms;\n}\n\n.column.gridDragColumn:hover {\n  background-color: #ddd;\n}\n\n\n.react-grid-item.react-draggable > .block-edit-wrapper {\n  height: 100%;\n  background-color: rgba(0, 128, 0, 0.1);\n  -webkit-box-shadow: inset 0px 0px 8px 0px rgb(210,210,210);\n  -moz-box-shadow: inset 0px 0px 8px 0px rgb(210,210,210);\n  box-shadow: inset 0px 0px 8px 0px rgb(210,210,210);\n}\n\n.react-grid-item.react-draggable > .empty {\n  background-color: rgba(128,0,0,0.1);\n}\n\n.block-info-data {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n/* sizing policies */\n/* see https://leaverou.github.io/css3patterns/#microbial-mat */\n/* for more */\n.block-edit-fill-space {\n  /* background-image: linear-gradient(45deg, #D6A3AC 16.67%, #e0d0d0 16.67%, transparent 33.33%, #e0d0d0 33.33%, #e0d0d0 50%, #d6a3ac 50%, #d6a3ac 66.67%, #97b8cc 66.67%, #97b8cc 83.33%, #e0d0d0 83.33%, #e0d0d0 100%); */\n  /* background-size: 6px 6px; */\n  background: radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,\n              radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px), #8a3;\n  background-size: 20px 20px;\n}\n\n.block-edit-manual {\n  /* background-image: linear-gradient(45deg, #B2A2CD 25%, transparent 25%, transparent 50%, #B2A2CD 50%, #B2A2CD 75%, #5F5370 75%, #5F5370 100%); */\n  /* background-size: 6px 6px; */\n  /* background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, */\n  /*   linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, */\n  /*   linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, */\n  /*   linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, */\n  /*   linear-gradient(90deg, #1b1b1b 10px, transparent 10px), */\n  /*   linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424); */\n\n  /* background: */\n  /*   radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent), */\n  /*   radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent) 50px 50px, */\n  /*   linear-gradient(#A8B1BB 8px, transparent 8px) 0 -4px, */\n  /*   linear-gradient(90deg, #A8B1BB 8px, transparent 8px) -4px 0; */\n  background-color: slategray;\n  background-size:20px 20px, 20px 20px, 4px 4px, 4px 4px;\n  color: white;\n\n  /* background-color: #131313; */\n  /* background-size: 20px 20px; */\n}\n\n.block-edit-fit-content {\n  background-image: linear-gradient(45deg, #98cd8d30 25%, #f6f0cf30 25%, #f6f0cf30 50%, #98cd8d30 50%, #98cd8d30 75%, #f6f0cf30 75%, #f6f0cf30 100%);\n  background-size: 6px 6px;\n}\n\n.block-edit-min-height {\n  /* background-image: linear-gradient(45deg, #F6F0CF 25%, transparent 25%, transparent 50%, #B2A2CD 50%, #B2A2CD 75%, #5F5370 75%, #5F5370 100%); */\n  /* background-size: 6px 6px; */\n  background-color: #6d695c;\n  background-image:\n    repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),\n    repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),\n    linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),\n    linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));\n  background-size: 70px 120px;\n}\n\n.block-uuid-info {\n  position: absolute;\n  right: 1rem;\n  bottom: 0.6rem;\n  color: gray;\n  font-size: smaller;\n}\n.block-size-info {\n  position: absolute;\n  bottom: 0.6rem;\n  left: 1rem;\n  font-size: smaller;\n  color: gray;\n}\n\n.block-container p {\n  margin: 0;\n}\n\n.layout-preview {\n  background: gray;\n  border: 6px solid gray;\n  padding: 6px;\n}\n\n#layout-preview-lg {\n  width: 1573px !important;\n}\n\n#layout-preview-md {\n  /* width: 1230px !important; */\n  width: 1109px !important;\n}\n\n#layout-preview-sm {\n  /* for some reasone need to add 24px, probably padding and border */\n  /* width: 792px !important; */\n  width: 743px;\n}\n#layout-preview-xs {\n  width: 504px !important;\n}\n#layout-preview-xxs {\n  width: 484px !important;\n}\n.block-chooser {\n  top:unset;\n  left: 0;\n  bottom: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./volto-mosaic/src/components/manage/Form.jsx":
/*!*****************************************************!*\
  !*** ./volto-mosaic/src/components/manage/Form.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/helpers */ "./volto/src/helpers/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-grid-layout */ "react-grid-layout");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-sizeme */ "react-sizeme");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _css_edit_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../css/edit.css */ "./volto-mosaic/src/components/css/edit.css");
/* harmony import */ var _css_edit_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_css_edit_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _css_view_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../css/view.css */ "./volto-mosaic/src/components/css/view.css");
/* harmony import */ var _css_view_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_css_view_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../config */ "./volto-mosaic/src/config.js");
/* harmony import */ var _BlockEditor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./BlockEditor */ "./volto-mosaic/src/components/manage/BlockEditor.jsx");
/* harmony import */ var _LayoutToolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./LayoutToolbar */ "./volto-mosaic/src/components/manage/LayoutToolbar.jsx");
/* harmony import */ var _theme_View__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./../theme/View */ "./volto-mosaic/src/components/theme/View.jsx");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @plone/volto/icons/editing.svg */ "./volto/src/icons/editing.svg");
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../src/config */ "./src/config.js");











var _jsxFileName = "/opt/fise/volto-mosaic/src/components/manage/Form.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import ReactDOM from 'react-dom';







 // EditBlock















 // import move from 'lodash-move';
// import aheadSVG from '@plone/volto/icons/ahead.svg';
// import clearSVG from '@plone/volto/icons/clear.svg';

var ReactGridLayout = react_grid_layout__WEBPACK_IMPORTED_MODULE_20___default.a;
var screens = Object.keys(_config__WEBPACK_IMPORTED_MODULE_26__["screenSizes"]).map(function (k) {
  return {
    key: k,
    text: _config__WEBPACK_IMPORTED_MODULE_26__["screenSizes"][k],
    value: k
  };
});
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["defineMessages"])({
  addBlock: {
    "id": "Add block...",
    "defaultMessage": "Add block..."
  },
  required: {
    "id": "Required input is missing.",
    "defaultMessage": "Required input is missing."
  },
  minLength: {
    "id": "Minimum length is {len}.",
    "defaultMessage": "Minimum length is {len}."
  },
  uniqueItems: {
    "id": "Items must be unique.",
    "defaultMessage": "Items must be unique."
  },
  save: {
    "id": "Save",
    "defaultMessage": "Save"
  },
  cancel: {
    "id": "Cancel",
    "defaultMessage": "Cancel"
  },
  error: {
    "id": "Error",
    "defaultMessage": "Error"
  },
  thereWereSomeErrors: {
    "id": "There were some errors.",
    "defaultMessage": "There were some errors."
  }
}); // Instead of Object.fromEntries

function fromEntries(iterable) {
  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10___default()(iterable).reduce(function (obj, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    obj[key] = val;
    return obj;
  }, {});
}

function fallbackLayoutFromData(formData, ids) {
  // create a default layout based on existing blocks
  var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
  var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
  var order = formData[blocksLayoutFieldname].items || [];
  var data = formData[blocksFieldname];
  var fallbackLayout = [{
    // provide default block for title
    h: 1,
    i: ids.title,
    w: 12,
    x: 0,
    y: 0
  }, {
    // provide default block for text
    h: 3,
    i: ids.text,
    w: 12,
    x: 0,
    y: 1
  }];
  var validIds = order.filter(function (i) {
    return Object.keys(data).indexOf(i) > -1;
  });
  var res = validIds.map(function (el, ix) {
    return {
      w: 12,
      h: ix === 0 ? 2 : 4,
      x: 0,
      y: ix === 0 ? 0 : 2 + (ix - 1) * 4,
      i: el
    };
  });
  return res || fallbackLayout;
}

var Form =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Form, _Component);

  function Form(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Form);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Form).call(this, props));
    if (true) return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this);
    var ids = {
      title: Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])(),
      text: Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])()
    };
    var formData = props.formData;
    var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
    var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);

    if (formData === null) {
      // get defaults from schema
      formData = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["mapValues"])(props.schema.properties, 'default');
    } // defaults for block editor; should be moved to schema on server side


    if (!formData[blocksLayoutFieldname]) {
      formData[blocksLayoutFieldname] = {
        items: [ids.title, ids.text]
      };
    }

    if (!formData[blocksFieldname]) {
      var _formData$blocksField;

      formData[blocksFieldname] = (_formData$blocksField = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_formData$blocksField, ids.title, {
        '@type': 'title',
        mosaic_block_title: 'title block'
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_formData$blocksField, ids.text, {
        '@type': 'text',
        mosaic_block_title: 'text block'
      }), _formData$blocksField);
    }

    var activeScreenSize = _this.props.activeScreenSize; // TODO: rewrite with ? operator

    var activeMosaicLayout = _this.props.formData && _this.props.formData.blocks_layout && _this.props.formData.blocks_layout.mosaic_layout && _this.props.formData.blocks_layout.mosaic_layout[activeScreenSize] || fallbackLayoutFromData(formData, ids);

    if (!formData[blocksLayoutFieldname].mosaic_layout) {
      formData[blocksLayoutFieldname].mosaic_layout = {
        lg: activeMosaicLayout
      };
    }

    var items = formData[blocksLayoutFieldname].items || [];
    var refs = items.map(function (id) {
      return [id, react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef()];
    });
    _this.state = {
      formData: formData,
      errors: {},
      cols: 12,
      availableScreens: screens,
      layoutWidth: _this.props.layoutWidth,
      activeScreenSize: activeScreenSize,
      activeMosaicLayout: activeMosaicLayout,
      dirtyLayout: false,
      refs: fromEntries(refs),
      blockHeights: {}
    }; // this.onMoveBlock = this.onMoveBlock.bind(this);
    // this.onSelectBlock = this.onSelectBlock.bind(this);
    // this.onDeleteBlock = this.onDeleteBlock.bind(this);
    // this.onFocusPreviousBlock = this.onFocusPreviousBlock.bind(this);
    // this.onFocusNextBlock = this.onFocusNextBlock.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.onEditBlock = this.onEditBlock.bind(this);
    // this.renderBlockPreview = this.renderBlockPreview.bind(this);
    // this.onDragStart = this.onDragStart.bind(this);
    // this.onDrag = this.onDrag.bind(this);
    // this.onResize = this.onResize.bind(this);
    // this.onResizeStart = this.onResizeStart.bind(this);

    _this.onDragStop = _this.onDragStop.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onResizeStop = _this.onResizeStop.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onChangeField = _this.onChangeField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onMutateBlock = _this.onMutateBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onAddBlock = _this.onAddBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.createElement = _this.createElement.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onLayoutChange = _this.onLayoutChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.handleOpen = _this.handleOpen.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.handleCloseEditor = _this.handleCloseEditor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.handleLayoutToolbar = _this.handleLayoutToolbar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onShowBlock = _this.onShowBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Form, [{
    key: "handleOpen",
    value: function handleOpen(blockid) {
      this.setState({
        showModal: true,
        currentBlock: blockid,
        blockHeights: {}
      });
    }
  }, {
    key: "handleCloseEditor",
    value: function handleCloseEditor(blockData) {
      var _this2 = this;

      if (!blockData) {
        this.setState({
          showModal: false,
          currentBlock: null
        });
        return;
      }

      var blockid = this.state.currentBlock;
      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      this.setState({
        formData: _objectSpread({}, this.state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blocksFieldname, _objectSpread({}, this.state.formData[blocksFieldname], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blockid, blockData || null)))),
        showModal: false,
        preview: true
      }, function () {
        console.log('state after handleCloseEditor', _this2.state);
      });
    }
  }, {
    key: "onShowBlock",
    value: function onShowBlock(blockid, height) {
      var _this3 = this;

      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname];
      var activeScreenSize = this.state.activeScreenSize || 'lg';
      var blockData = formData[blocksFieldname][blockid];
      var sizing = blockData.mosaic_box_sizing || 'fit-content';
      var ix, lh;

      switch (sizing) {
        case 'fit-content':
          this.setState(function (state, props) {
            var activeMosaicLayout = JSON.parse(JSON.stringify(state.activeMosaicLayout));
            lh = Math.ceil(height / _this3.props.rowHeight);
            ix = activeMosaicLayout.indexOf(activeMosaicLayout.find(function (el) {
              return el.i === blockid;
            }));
            activeMosaicLayout[ix].h = lh;
            return {
              formData: _objectSpread({}, state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blocksLayoutFieldname, _objectSpread({}, layoutField, {
                mosaic_layout: _objectSpread({}, layoutField.mosaic_layout, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, activeScreenSize, activeMosaicLayout))
              }))),
              activeMosaicLayout: activeMosaicLayout
            };
          }, function () {
            console.log('height of node', height, lh, blockid, _this3.state);
          });
          break;
        // case 'min-height':
        //   // TODO: get minimum block height from settings, trigger layout update
        //   const type = formData['@type'].toLowerCase();
        //   const minHeight = blocks.blocksConfig[type].height || 100;
        //   height = Math.ceil(minHeight / this.props.rowHeight);
        //   ix = activeMosaicLayout.indexOf(
        //     activeMosaicLayout.find(el => {
        //       return el.i === blockid;
        //     }),
        //   );
        //   activeMosaicLayout[ix].h = height;
        //   break;

        case 'fill-space':
          break;

        case 'manual':
          break;

        default:
          break;
      }
    }
  }, {
    key: "onLayoutChange",
    value: function onLayoutChange(newLayout) {
      var _this4 = this;

      console.log('on layout change');
      var formData = this.state.formData;
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname];
      var mosaic_layout = layoutField.mosaic_layout || {};
      var size = this.state.activeScreenSize; // Layout hasn't been created yet

      if (Object.keys(mosaic_layout).indexOf(size) === -1) {
        this.setState({
          activeMosaicLayout: newLayout
        });
        return;
      }

      this.setState(function (state, props) {
        return {
          activeMosaicLayout: newLayout,
          formData: _objectSpread({}, state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blocksLayoutFieldname, _objectSpread({}, state.formData[blocksLayoutFieldname], {
            mosaic_layout: _objectSpread({}, state.formData[blocksLayoutFieldname].mosaic_layout, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, size, newLayout))
          })))
        };
      }, function () {
        console.log('Set state on change layout ' + size, _this4.state);
      });
    }
  }, {
    key: "onLayoutSave",
    value: function onLayoutSave(breakpoint) {
      var _this5 = this;

      var formData = this.state.formData;
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname];
      var mosaic_layout = layoutField.mosaic_layout || {};
      mosaic_layout[breakpoint ? breakpoint : 'lg'] = this.state.activeMosaicLayout;
      this.setState({
        // activeMosaicLayout: mosaic_layout,
        formData: _objectSpread({}, this.state.formData, {
          blocks_layout: _objectSpread({}, this.state.formData.blocks_layout, {
            mosaic_layout: mosaic_layout
          })
        })
      }, function () {
        console.log('Set state on layout save', _this5.state);
      });
    }
  }, {
    key: "onLayoutDelete",
    value: function onLayoutDelete(breakpoint) {
      var _this6 = this;

      var formData = this.state.formData;
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname];
      var mosaic_layout = layoutField.mosaic_layout || {};
      delete mosaic_layout[breakpoint];
      this.setState({
        activeMosaicLayout: mosaic_layout['lg'],
        formData: _objectSpread({}, this.state.formData, {
          blocks_layout: _objectSpread({}, this.state.formData.blocks_layout, {
            mosaic_layout: mosaic_layout
          })
        })
      }, function () {
        console.log('Set state on change layout', _this6.state);
      });
    }
  }, {
    key: "getBlockClass",
    value: function getBlockClass(block) {
      return 'block-info-data block-edit-' + (block.mosaic_box_sizing || 'fit-content');
    }
  }, {
    key: "createElement",
    value: function createElement(el) {
      var blockid = el.i; // const removeStyle = {
      //   position: 'absolute',
      //   right: '2px',
      //   top: 0,
      //   cursor: 'pointer',
      // };

      var i = el.add ? '+' : el.i;
      var ref = this.state.refs[blockid];
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        key: i,
        "data-grid": el,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, this.state.preview ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_theme_View__WEBPACK_IMPORTED_MODULE_29__["BlockViewWrapper"], {
        useref: ref,
        formData: this.state.formData,
        blockid: blockid,
        showUpdate: this.onShowBlock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }) : this.renderEditBlockPlaceholder(el, blockid));
    }
  }, {
    key: "renderEditBlockPlaceholder",
    value: function renderEditBlockPlaceholder(el, blockid) {
      var _this7 = this;

      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      var block = formData[blocksFieldname][blockid];
      var hasData = block['@type'] !== 'text';
      var i = el.add ? '+' : el.i; // what is this?

      var title = '';

      if (!_src_config__WEBPACK_IMPORTED_MODULE_32__["blocks"].blocksConfig[block['@type']]) {
        console.log('could not find configuration for this block type', block['@type']);
        title = 'broken block';
      } else {
        title = block.mosaic_block_title || _src_config__WEBPACK_IMPORTED_MODULE_32__["blocks"].blocksConfig[block['@type']].title;
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: hasData ? 'block-edit-wrapper empty' : 'block-edit-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: this.getBlockClass(block),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        }
      }, el.h > 2 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "block-size-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        }
      }, el.w, " cols x ", el.h, " rows"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, el.h > 2 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        }
      }, title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Group, {
        size: "mini",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        size: "mini",
        icon: true,
        color: "green",
        onClick: function onClick() {
          return _this7.handleOpen(blockid);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
        name: _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_31___default.a,
        size: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      })), this.state.activeScreenSize === 'lg' && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        size: "mini",
        icon: true,
        color: "red",
        onClick: this.onRemoveItem.bind(this, i),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
        name: _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_30___default.a,
        size: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        }
      }))))));
    }
  }, {
    key: "onRemoveItem",
    value: function onRemoveItem(id) {
      var _objectSpread8,
          _this8 = this;

      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname];
      var mosaic_layout = layoutField.mosaic_layout || {};

      var activeMosaicLayout = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.reject(this.state.activeMosaicLayout, {
        i: id
      }); // mosaic_layout[this.state.activeScreenSize] = activeMosaicLayout;


      Object.keys(mosaic_layout).forEach(function (k) {
        mosaic_layout[k] = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.reject(mosaic_layout[k], {
          i: id
        });
      });
      this.setState({
        activeMosaicLayout: activeMosaicLayout,
        formData: _objectSpread({}, this.state.formData, (_objectSpread8 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread8, blocksLayoutFieldname, {
          items: Object(lodash__WEBPACK_IMPORTED_MODULE_13__["without"])(layoutField.items, id),
          mosaic_layout: mosaic_layout // TODO: might need JSON.stringify?

        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread8, blocksFieldname, Object(lodash__WEBPACK_IMPORTED_MODULE_13__["omit"])(this.state.formData[blocksFieldname], [id])), _objectSpread8))
      }, function () {
        console.log('state on removeitem', _this8.state);
      });
    }
  }, {
    key: "onChangeField",
    value: function onChangeField(id, value) {
      var _this9 = this;

      // Handles changes in the normal Volto metadata editor
      this.setState({
        formData: _objectSpread({}, this.state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, value || null))
      }, function () {
        console.log('change state in onChangeField', _this9.state);
      });
    }
  }, {
    key: "onMutateBlock",
    value: function onMutateBlock(id, value) {
      var _objectSpread11,
          _this10 = this;

      // TODO: what does this do? Explain
      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname];
      var mosaic_layout = layoutField.mosaic_layout || {};
      var activeMosaicLayout = this.state.activeMosaicLayout;
      mosaic_layout[this.state.activeScreenSize] = activeMosaicLayout;
      this.setState({
        formData: _objectSpread({}, this.state.formData, (_objectSpread11 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread11, blocksFieldname, _objectSpread({}, this.state.formData[blocksFieldname], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, value || null))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread11, blocksLayoutFieldname, {
          items: this.state.formData[blocksLayoutFieldname].items,
          mosaic_layout: mosaic_layout
        }), _objectSpread11))
      }, function () {
        console.log('change state in onMutateBlock', _this10.state);
      });
    }
  }, {
    key: "onAddBlock",
    value: function onAddBlock(type, index) {
      var _objectSpread14,
          _this11 = this;

      // Handles the creation of a new block in the layout editor
      var id = Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])();
      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var layoutField = formData[blocksLayoutFieldname]; // const totalItems = formData[blocksLayoutFieldname].items.length;
      // const insert = index === -1 ? totalItems : index;

      var newBlock = {
        i: id,
        x: 0,
        y: Infinity,
        // puts it at the bottom
        w: this.state.cols || 2,
        h: 2
      };
      var newLayout = this.state.activeMosaicLayout.concat(newBlock);
      var mosaic_layout = layoutField.mosaic_layout || {}; /// avoids ugly BBB situation

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(mosaic_layout) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()([])) mosaic_layout = {};
      mosaic_layout[this.state.activeScreenSize] = newLayout;
      this.setState({
        // Add a new item. It must have a unique key!
        activeMosaicLayout: newLayout,
        refs: _objectSpread({}, this.state.refs, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef())),
        // Increment the counter to ensure key is always unique.
        formData: _objectSpread({}, this.state.formData, (_objectSpread14 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread14, blocksLayoutFieldname, {
          items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10___default()(this.state.formData[blocksLayoutFieldname].items || []), [id]),
          mosaic_layout: _objectSpread({}, mosaic_layout)
        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread14, blocksFieldname, _objectSpread({}, this.state.formData[blocksFieldname], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, {
          '@type': type
        }))), _objectSpread14))
      }, function () {
        console.log('After onAdd', _this11.state);
      });
      return id;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this12 = this;

      if (event) {
        event.preventDefault();
      }

      var errors = {};
      Object(lodash__WEBPACK_IMPORTED_MODULE_13__["map"])(this.props.schema.fieldsets, function (fieldset) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_13__["map"])(fieldset.fields, function (fieldId) {
          var field = _this12.props.schema.properties[fieldId];
          var data = _this12.state.formData[fieldId];

          if (_this12.props.schema.required.indexOf(fieldId) !== -1) {
            if (field.type !== 'boolean' && !data) {
              errors[fieldId] = errors[field] || [];
              errors[fieldId].push(_this12.props.intl.formatMessage(messages.required));
            }

            if (field.minLength && data.length < field.minLength) {
              errors[fieldId] = errors[field] || [];
              errors[fieldId].push(_this12.props.intl.formatMessage(messages.minLength, {
                len: field.minLength
              }));
            }
          }

          if (field.uniqueItems && data && Object(lodash__WEBPACK_IMPORTED_MODULE_13__["uniq"])(data).length !== data.length) {
            errors[fieldId] = errors[field] || [];
            errors[fieldId].push(_this12.props.intl.formatMessage(messages.uniqueItems));
          }
        });
      });

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_13__["keys"])(errors).length > 0) {
        this.setState({
          errors: errors
        });
      } else {
        this.props.onSubmit(this.state.formData);

        if (this.props.resetAfterSubmit) {
          this.setState({
            formData: this.props.formData
          });
        }
      }
    }
  }, {
    key: "handleLayoutToolbar",
    value: function handleLayoutToolbar(evType, data) {
      // console.log('handleLayoutToolbar', evType, data);
      switch (evType) {
        case 'PREVIEW_TILES':
          this.setState({
            preview: data
          });
          break;

        case 'CHANGE_SCREEN_SIZE':
          var formData = this.state.formData;
          var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
          var layoutField = formData[blocksLayoutFieldname];
          var layouts = layoutField.mosaic_layout || {};
          var fallback = layouts['lg'] ? JSON.parse(JSON.stringify(layouts['lg'])) : [];
          var activeMosaicLayout = layouts[data] || fallback;
          var layoutWidth = _config__WEBPACK_IMPORTED_MODULE_26__["breakpoints"][data];

          if (data === 'lg') {
            layoutWidth = null;
          } else if (data === 'xxs') {
            layoutWidth = _config__WEBPACK_IMPORTED_MODULE_26__["breakpoints"]['xs'] - 20;
          }

          console.log('Change screen', data, layoutWidth, layouts); // TODO: this needs to be improved. We want to automatically take
          // size from (<next upper breakpoint> -1)

          this.setState({
            activeMosaicLayout: activeMosaicLayout,
            dirtyLayout: false,
            // This could be used to show that layout
            // will be saved
            activeScreenSize: data,
            layoutWidth: layoutWidth
          } // this.changeLayoutOnScreenSizeChange(data),
          );
          break;

        case 'CREATE_TILE':
          this.onAddBlock('text');
          break;

        case 'CREATE_LAYOUT':
          // console.log('herere', this.state);
          this.onLayoutSave(data);
          break;

        case 'DELETE_LAYOUT':
          this.onLayoutDelete(data);
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this,
          _this$state$formData$,
          _this$state$formData$2;

      var schema = this.props.schema; // , onCancel, onSubmit

      console.log('render props', this.props);
      return  false ? undefined : '';
    }
  }, {
    key: "onResizeStop",
    value: function onResizeStop(layout, old, neu, x, e, node) {
      // console.log('on resize stop'); //, layout, oldDragItem, l, x, e, node);
      var dW = neu.w - old.w; // negative if size made smaller

      layout.forEach(function (el, i) {
        if (el.i === neu.i) return;

        if (el.x === old.x + old.w) {
          // dragged from right side, to left
          console.log('resizeToLeft w x', dW, el.w, el.x);
          el.x = neu.x + neu.w;
          el.w -= neu.w - old.w;
        } // else if (el.x - dW === neu.x + neu.w) {
        //   // resized original to left
        //   console.log('resizeToRight w x', dW, el.w, el.x);
        //   el.x -= dW;
        //   el.w += dW;
        // }

      }); // if the height has changed, set sizing policy for this layout to manual

      var blockid = old.i;
      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      this.setState(function (state, props) {
        var blockData = state.formData[blocksFieldname][blockid] || {};
        var mosaic_box_sizing = blockData.mosaic_box_sizing || 'fit-content';
        if (neu.h !== old.h) mosaic_box_sizing = 'manual';
        return {
          dirtyLayout: true,
          formData: _objectSpread({}, state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blocksFieldname, _objectSpread({}, state.formData[blocksFieldname], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blockid, _objectSpread({}, state.formData[blocksFieldname][blockid], {
            mosaic_box_sizing: mosaic_box_sizing
          })))))
        };
      }, function () {// console.log('after resize', this.state);
      });
    }
  }, {
    key: "onDragStop",
    value: function onDragStop(layout, old, neu, x, e, node) {
      // console.log('on drag stop'); // , layout, oldDragItem, l, x, e, node);
      this.setState({
        dirtyLayout: true
      });
    } // onResize(layout, old, neu, x, e, node) {
    // console.log(
    //   'on resize layout, oldDragItem, l, x, e, node',
    //   layout,
    //   oO, // oldDragItem, the element that was dragged
    //   nO, // new dragged item, the element that became new
    //   x,
    //   e,
    //   node,
    // );
    // let startH = neu.y;
    // let endH = neu.y + neu.h;
    // console.log('resize', layout, old, neu);
    // TODO: find all elements that are on the same "row"
    // change width of elements only if they are dW units "left behind"
    // console.log('on resize');
    // }
    // onResizeStart(layout, oldDragItem, l, x, e, node) {
    //   console.log('on resize start'); //, layout, oldDragItem, l, x, e, node);
    //   // TODO: identify affected blocks, keep them in state, update their size
    // }
    // onDrag(layout, oldDragItem, l, x, e, node) {
    //   // console.log(
    //   //   'on drag layout, oldDragItem, l, x, e, node',
    //   //   layout,
    //   //   oldDragItem,
    //   //   l,
    //   //   x,
    //   //   // e,
    //   //   // node,
    //   // );
    // }
    // onDragStart(layout, oldDragItem, l, x, e, node) {
    //   // console.log('on drag start'); //, layout, oldDragItem, l, x, e, node);
    // }
    // onEditBlock(id, value, size) {
    //   // Handles editing of block by the block editor
    //   const blocksFieldname = getBlocksFieldname(this.state.formData);
    //   this.setState({
    //     formData: {
    //       ...this.state.formData,
    //       [blocksFieldname]: {
    //         ...this.state.formData[blocksFieldname],
    //         [id]: value || null,
    //       },
    //     },
    //   });
    // }

  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Form, "propTypes", {
  schema: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
    fieldsets: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
      fields: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string),
      id: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
      title: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
    })),
    properties: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any),
    definitions: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any),
    required: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string)
  }),
  formData: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any),
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  submitLabel: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  resetAfterSubmit: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
    message: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
  }),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  hideActions: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  description: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  visual: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  blocks: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object)
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Form, "defaultProps", {
  description: null,
  error: null,
  formData: null,
  hideActions: false,
  loading: null,
  onCancel: null,
  onSubmit: null,
  pathname: '',
  resetAfterSubmit: false,
  schema: {},
  submitLabel: null,
  blocks: [],
  title: null,
  visual: false,
  preview: false,
  // Grid props
  className: 'mosaic-edit-layout',
  // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  // cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
  cols: 12,
  rowHeight: _config__WEBPACK_IMPORTED_MODULE_26__["rowHeight"],
  margin: [0, 0],
  layoutWidth: null,
  // preview responsive layout width
  activeScreenSize: 'lg',
  // 'desktop' is the default screen size
  payload: null // blockData that will be saved

});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["injectIntl"])(Form, {
  forwardRef: true
}));

/***/ })

};
//# sourceMappingURL=main.b6695c5e4e75d036bcd1.hot-update.js.map