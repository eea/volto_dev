exports.id = "main";
exports.modules = {

/***/ "./src/components/manage/Slider/Edit.jsx":
/*!***********************************************!*\
  !*** ./src/components/manage/Slider/Edit.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_components_manage_Blocks_Text_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Blocks/Text/Edit */ "./volto/src/components/manage/Blocks/Text/Edit.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/pen.svg */ "./volto/src/icons/pen.svg");
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/helpers */ "./volto/src/helpers/index.js");
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! promise-file-reader */ "promise-file-reader");
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(promise_file_reader__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redraft */ "redraft");
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(redraft__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_22__);







var _jsxFileName = "/opt/fise/src/components/manage/Slider/Edit.jsx";















 // import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
// import Editor from 'draft-js-plugins-editor';

var CONTAINER = 'slider-images';

var SlideEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SlideEditor, _Component);

  function SlideEditor(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SlideEditor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SlideEditor).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "node", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());

    _this.state = {
      editing: false,
      editorState: null
    };
    _this.save = _this.save.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onChangeTile = _this.onChangeTile.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.sendDelete = _this.sendDelete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SlideEditor, [{
    key: "onChangeTile",
    value: function onChangeTile(id, data) {
      this.setState({
        editorState: data
      });
      console.log(arguments);
    }
  }, {
    key: "sendDelete",
    value: function sendDelete() {
      this.props.onDelete(this.props.slide['@id']);
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;

      var text = react_dom_server__WEBPACK_IMPORTED_MODULE_22___default.a.renderToStaticMarkup(redraft__WEBPACK_IMPORTED_MODULE_21___default()(this.state.editorState.text, _config__WEBPACK_IMPORTED_MODULE_19__["settings"].ToHTMLRenderers, _config__WEBPACK_IMPORTED_MODULE_19__["settings"].ToHTMLOptions));
      this.setState({
        editing: false
      }, function () {
        _this2.props.onChange(_this2.props.slide['@id'], text);
      });
    }
  }, {
    key: "nop",
    value: function nop() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var slide = this.props.slide;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        ref: this.node,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        cols: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Image, {
        src: Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_17__["flattenToAppURL"])(slide.file.scales.thumb.download),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.state.editing ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components_manage_Blocks_Text_Edit__WEBPACK_IMPORTED_MODULE_8__["default"], {
        index: this.props.index,
        detached: true,
        selected: false,
        block: slide['@id'],
        onAddTile: this.nop,
        onChangeTile: this.onChangeTile,
        onDeleteTile: this.nop,
        onFocusPreviousTile: this.nop,
        onFocusNextTile: this.nop,
        onSelectTile: this.nop,
        onMutateTile: this.nop,
        data: slide.text || {},
        blockNode: this.node,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, slide.text)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, !this.state.editing && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        size: "mini",
        onClick: function onClick() {
          return _this3.setState({
            editing: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
        size: "10",
        name: _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), "Edit"), this.state.editing && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        size: "mini",
        onClick: this.save,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
        size: "10",
        name: _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), "Save"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        size: "mini",
        onClick: this.sendDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
        size: "10",
        name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), "Delete"))))));
    }
  }]);

  return SlideEditor;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var EditSlider =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EditSlider, _Component2);

  function EditSlider(props) {
    var _this4;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditSlider);

    _this4 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditSlider).call(this, props));
    console.log('editslider props', props);
    _this4.state = {
      uploading: false
    };
    _this4.onDrop = _this4.onDrop.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this4));
    _this4.onChange = _this4.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this4));
    _this4.onDelete = _this4.onDelete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this4));
    return _this4;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditSlider, [{
    key: "onDrop",
    value: function onDrop(acceptedFiles) {
      var _this5 = this;

      console.log('ondrop props', this.props);
      this.setState({
        uploading: true
      });
      acceptedFiles.forEach(function (file) {
        Object(promise_file_reader__WEBPACK_IMPORTED_MODULE_18__["readAsDataURL"])(file).then(function (data) {
          var fields = data.match(/^data:(.*);(.*),(.*)$/);

          _this5.props.createAttachment("".concat(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_17__["getBaseUrl"])(_this5.props.pathname), "/@attachments"), {
            '@container': CONTAINER,
            text: file.name,
            file: {
              data: fields[3],
              encoding: fields[2],
              'content-type': fields[1],
              filename: file.name
            }
          });
        });
      });
    }
  }, {
    key: "onDelete",
    value: function onDelete(path) {
      this.props.deleteAttachment(path.replace(_config__WEBPACK_IMPORTED_MODULE_19__["settings"].apiPath, ''));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = "".concat(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_17__["getBaseUrl"])(this.props.pathname), "/@attachments");
      this.props.getAllAttachments(url);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.pathname === prevProps.pathname) return;
      var url = "".concat(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_17__["getBaseUrl"])(this.props.pathname), "/@attachments");
      this.props.getAllAttachments(url);
    }
  }, {
    key: "onChange",
    value: function onChange(id, data) {
      this.props.saveAttachment(id, data);
      console.log('on change', data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      console.log('props attachments', this.props.attachments);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onDrop: this.onDrop,
        className: "dropzone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, this.state.uploading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Loader"], {
        indeterminate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "Uploading")) || react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "Drag files here"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Group, {
        divided: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, this.props.attachments.map(function (at, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SlideEditor, {
          key: at['@id'],
          slide: at,
          index: i,
          onChange: _this6.onChange,
          onDelete: _this6.onDelete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        });
      })), this.props.attach_errors || '', this.props.data.url ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: this.props.data.url.includes(_config__WEBPACK_IMPORTED_MODULE_19__["settings"].apiPath) ? "".concat(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_17__["flattenToAppURL"])(this.props.data.url), "/@@images/image") : this.props.data.url,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      })) : null);
    }
  }]);

  return EditSlider;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

function getSliderImages(attachments) {
  if (!attachments) return [];
  var atch = attachments.attachments || [];
  var slider = atch && atch.find(function (el) {
    return el['@id'] === 'slider-images';
  }) || [];
  return slider && slider.items || [];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_14__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(function (state, props) {
  return {
    data: {},
    attachments: getSliderImages(state.attachments || {}),
    pathname: props.location.pathname,
    attach_errors: state.attachments.errors
  };
}, {
  createAttachment: _actions__WEBPACK_IMPORTED_MODULE_16__["createAttachment"],
  getAllAttachments: _actions__WEBPACK_IMPORTED_MODULE_16__["getAllAttachments"],
  updateAttachment: _actions__WEBPACK_IMPORTED_MODULE_16__["updateAttachment"],
  deleteAttachment: _actions__WEBPACK_IMPORTED_MODULE_16__["deleteAttachment"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_20__["withRouter"])(EditSlider));

/***/ }),

/***/ "./src/components/manage/Tiles/ChartTile/ChartTileEdit.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/manage/Tiles/ChartTile/ChartTileEdit.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions */ "./src/actions/index.js");
/* harmony import */ var _plone_volto_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/actions */ "./volto/src/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");







var _jsxFileName = "/opt/fise/src/components/manage/Tiles/ChartTile/ChartTileEdit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // EditTile

var LoadablePlot = react_loadable__WEBPACK_IMPORTED_MODULE_10___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-plotly.js */ "react-plotly.js", 7));
  },
  modules: ['react-plotly.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! react-plotly.js */ "react-plotly.js")];
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, "Loading chart...");
  }
}); // const data = [
//   { name: 'Finland', 'Total area': 4000, 'Forest area': 2400 },
//   { name: 'Sweeden', 'Total area': 3000, 'Forest area': 1398 },
//   { name: 'Slovenia', 'Total area': 2000, 'Forest area': 9800 },
//   { name: 'Estonia', 'Total area': 2780, 'Forest area': 3908 },
//   { name: 'Austria', 'Total area': 1890, 'Forest area': 4800 },
//   { name: 'Slovakia', 'Total area': 1890, 'Forest area': 4800 },
// ];

/*
 * Pick up a chart from an existing visualization, add text
 */

var ChartPick =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ChartPick, _Component);

  function ChartPick(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ChartPick);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ChartPick).call(this, props));
    var localChartData = props.data.chartData || {};
    var text = props.data['chart-text'];
    if (typeof text !== 'string') text = '';
    _this.state = _objectSpread({
      localChartData: localChartData,
      text: text
    }, props.data);
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.updateData = _this.updateData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)); // this.getChartData = this.getChartData.bind(this);

    _this.handleChangeVisualization = _this.handleChangeVisualization.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ChartPick, [{
    key: "updateData",
    value: function updateData(obj) {
      this.setState(obj, this.onSubmit);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.props.onChangeTile(this.props.block, _objectSpread({}, this.props.data, {
        'chart-text': this.state.text,
        chartData: this.state.localChartData
      }, this.state));
    }
  }, {
    key: "handleChangeVisualization",
    value: function handleChangeVisualization(id, path) {
      this.props.getChartDataFromVisualization(path);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // get the existing visualizations
      this.props.searchContent('', {
        object_provides: 'forests.content.interfaces.IDataVisualization'
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log('new props', this.props);

      if (this.props.remoteChartData !== prevProps.remoteChartData) {
        this.setState({
          localChartData: this.props.remoteChartData
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('state in render', this.state);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "block selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        columns: 2,
        divided: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.localChartData && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadablePlot, {
        data: this.state.localChartData.data || [],
        layout: this.state.localChartData.layout || {},
        frames: this.state.localChartData.frames || [],
        config: {
          displayModeBar: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        title: "Pick chart from existing visualization",
        id: "chart-data",
        choices: this.props.visualizations,
        required: true,
        onChange: this.handleChangeVisualization,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        title: "Text",
        id: "chart-text",
        widget: "cktext",
        value: this.state.text,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            text: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        title: "Source",
        id: "chart-source",
        type: "text",
        value: this.state.chart_source,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            chart_source: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        title: "Source Link",
        id: "chart-source-link",
        type: "text",
        value: this.state.chart_source_link,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            chart_source_link: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })))))));
    }
  }]);

  return ChartPick;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state, props) {
  // const chartData = state.data_providers ? state.data_providers.item : {};
  // console.log('connect props', state, props);
  var visualizations = state.search ? state.search.items : [];
  visualizations = visualizations.map(function (el) {
    return [el['@id'], el.title];
  });
  return {
    visualizations: visualizations,
    remoteChartData: state.chart_data_visualization && state.chart_data_visualization.data
  };
}, {
  searchContent: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_8__["searchContent"],
  getChartDataFromVisualization: _actions__WEBPACK_IMPORTED_MODULE_7__["getChartDataFromVisualization"]
})(ChartPick));

/***/ }),

/***/ "./src/components/manage/Tiles/ChartTile/ChartTileView.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/manage/Tiles/ChartTile/ChartTileView.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/opt/fise/src/components/manage/Tiles/ChartTile/ChartTileView.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var LoadablePlot = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-plotly.js */ "react-plotly.js", 7));
  },
  modules: ['react-plotly.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! react-plotly.js */ "react-plotly.js")];
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, "Loading chart...");
  }
});

var EmbedChartView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EmbedChartView, _Component);

  function EmbedChartView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EmbedChartView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(EmbedChartView).call(this, props));
    console.log('chart data', _this.props.data, _this.props);
    var chartData = _this.props.data.chartData || [];

    if (typeof chartData === 'string') {
      try {
        chartData = JSON.parse(chartData);
      } catch (error) {
        console.log('Error in JSON parsing chart data', error);
        chartData = {};
      }
    } // TODO: the axis labels need to come from the data


    _this.state = {
      chartData: chartData
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EmbedChartView, [{
    key: "render",
    value: function render() {
      var text = this.props.data['chart-text'];
      if (typeof text !== 'string') text = '';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chartWrapperView",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, text && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: text
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, this.state.chartData ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LoadablePlot, {
        className: "embedded-chart",
        data: this.state.chartData.data || [],
        layout: _objectSpread({}, this.state.chartData.layout, {
          autosize: true
        }),
        frames: this.state.chartData.frames || [],
        config: {
          displayModeBar: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "No valid data.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "discreet",
        href: this.props.data.chart_source_link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.data.chart_source))))));
    }
  }]);

  return EmbedChartView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

EmbedChartView.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EmbedChartView);

/***/ }),

/***/ "./src/components/manage/Tiles/EuropeCompareTile/Edit.jsx":
/*!****************************************************************!*\
  !*** ./src/components/manage/Tiles/EuropeCompareTile/Edit.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");







var _jsxFileName = "/opt/fise/src/components/manage/Tiles/EuropeCompareTile/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // EditTile

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Edit, _Component);

  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Edit).call(this, props));
    var blockData = props.data;
    _this.state = _objectSpread({}, blockData);
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.updateData = _this.updateData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Edit, [{
    key: "updateData",
    value: function updateData(obj) {
      this.setState(obj, this.onSubmit);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.props.onChangeTile(this.props.block, _objectSpread({}, this.props.data, {}, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-block-title",
        title: "Title",
        type: "text",
        value: this.state.europe_block_title,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_block_title: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-forest-area",
        title: "Total forest land",
        type: "text",
        value: this.state.europe_forest_area,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_forest_area: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-data-1-name",
        title: "Data",
        type: "text",
        value: this.state.europe_data_1_name,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_data_1_name: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-data-1-value",
        title: "Value",
        type: "text",
        value: this.state.europe_data_1_value,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_data_1_value: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-data-2-name",
        title: "Data",
        type: "text",
        value: this.state.europe_data_2_name,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_data_2_name: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-country-2-value",
        title: "Value",
        type: "text",
        value: this.state.europe_data_2_value,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_data_2_value: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-block-source",
        title: "Source",
        type: "text",
        value: this.state.europe_text_attribution,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_text_attribution: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-block-link",
        title: "Source link",
        type: "text",
        value: this.state.europe_block_link,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_block_link: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/components/manage/Tiles/EuropeCompareTile/View.jsx":
/*!****************************************************************!*\
  !*** ./src/components/manage/Tiles/EuropeCompareTile/View.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/opt/fise/src/components/manage/Tiles/EuropeCompareTile/View.jsx";
 // import TableauReport from '~/components/theme/TableauView/TableauReport';

var View =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(View, _Component);

  function View() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, View);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(View).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(View, [{
    key: "render",
    value: function render() {
      console.log('props', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "forest-block-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "forest-specific-block forest-comparation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.props.data.europe_block_title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.data.europe_forest_area)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "of Europe's land area consists of Forest and Other wooden land")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui bulleted list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.data.europe_data_1_name, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.data.europe_data_1_value)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.props.data.europe_data_2_name, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.data.europe_data_2_value))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "discreet",
        href: this.props.data.europe_block_link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, this.props.data.europe_text_attribution)));
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/components/manage/Tiles/EuropeForestTile/Edit.jsx":
/*!***************************************************************!*\
  !*** ./src/components/manage/Tiles/EuropeForestTile/Edit.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");







var _jsxFileName = "/opt/fise/src/components/manage/Tiles/EuropeForestTile/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // EditTile

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Edit, _Component);

  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Edit).call(this, props));
    var blockData = props.data;
    _this.state = _objectSpread({}, blockData);
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.updateData = _this.updateData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Edit, [{
    key: "updateData",
    value: function updateData(obj) {
      this.setState(obj, this.onSubmit);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.props.onChangeTile(this.props.block, _objectSpread({}, this.props.data, {}, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-block-title",
        title: "Title",
        type: "text",
        value: this.state.europe_block_title,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_block_title: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-forest-p-eu28",
        title: "Forest area in EU28",
        type: "text",
        value: this.state.europe_forest_p_eu28,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_forest_p_eu28: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-forest-l-eu28",
        title: "Total forest area in EU28",
        type: "text",
        value: this.state.europe_forest_l_eu28,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_forest_l_eu28: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-forest-p-eea39",
        title: "Forest area in EEA39",
        type: "text",
        value: this.state.europe_forest_p_eea39,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_forest_p_eea39: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-forest-l-eea39",
        title: "Total forest area in EEA39",
        type: "text",
        value: this.state.europe_forest_l_eea39,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_forest_l_eea39: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-source",
        title: "Source",
        type: "text",
        value: this.state.europe_text_attribution,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_text_attribution: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        id: "europe-block-link",
        title: "Source link",
        type: "text",
        value: this.state.europe_block_link,
        required: false,
        onChange: function onChange(e, d) {
          return _this2.updateData({
            europe_block_link: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/components/manage/Tiles/EuropeForestTile/View.jsx":
/*!***************************************************************!*\
  !*** ./src/components/manage/Tiles/EuropeForestTile/View.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/opt/fise/src/components/manage/Tiles/EuropeForestTile/View.jsx";
 // import TableauReport from '~/components/theme/TableauView/TableauReport';

var View =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(View, _Component);

  function View() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, View);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(View).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(View, [{
    key: "render",
    value: function render() {
      console.log('props', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "forest-block-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "forest-specific-block forest-area-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.props.data.europe_block_title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data-wrapper eu28-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.data.europe_forest_p_eu28)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "of Europe's land surface ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.data.europe_forest_l_eu28))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data-wrapper eea39-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.props.data.europe_forest_p_eea39)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "land-data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "of Europe's land surface ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.data.europe_forest_l_eea39))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "discreet",
        href: this.props.data.europe_block_link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.props.data.europe_text_attribution)));
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/components/manage/Tiles/PlotlyChart/Edit.jsx":
/*!**********************************************************!*\
  !*** ./src/components/manage/Tiles/PlotlyChart/Edit.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_chart_editor_lib_react_chart_editor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-chart-editor/lib/react-chart-editor.css */ "./node_modules/react-chart-editor/lib/react-chart-editor.css");
/* harmony import */ var react_chart_editor_lib_react_chart_editor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_chart_editor_lib_react_chart_editor_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/actions */ "./volto/src/actions/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../actions */ "./src/actions/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/opt/fise/src/components/manage/Tiles/PlotlyChart/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var LoadablePlotlyEditor = react_loadable__WEBPACK_IMPORTED_MODULE_9___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-chart-editor */ "react-chart-editor", 7));
  },
  modules: ['react-chart-editor'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! react-chart-editor */ "react-chart-editor")];
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, "Loading chart editor...");
  }
});
var dataSources = {
  col1: [1, 2, 3],
  // eslint-disable-line no-magic-numbers
  col2: [4, 3, 2],
  // eslint-disable-line no-magic-numbers
  col3: [17, 13, 9] // eslint-disable-line no-magic-numbers

};

function getDataSourceOptions(data) {
  return Object.keys(data).map(function (name) {
    return {
      value: name,
      label: name
    };
  });
}

var config = {
  editable: true
};

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Edit, _Component);

  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Edit).call(this, props));
    var chartData = _this.props.data.chartData || {};
    _this.state = {
      data: chartData.data || [],
      layout: chartData.layout || [],
      frames: chartData.frames || []
    };
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleChangeProvider = _this.handleChangeProvider.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)); // this.getChartData = this.getChartData.bind(this);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Edit, [{
    key: "onSubmit",
    value: function onSubmit() {
      var chartData = {
        data: this.state.data,
        layout: this.state.layout,
        frames: this.state.frames
      };
      this.props.onChangeTile(this.props.block, _objectSpread({}, this.props.data, {
        chartData: chartData
      }));
    } // componentWillReceiveProps(nextProps) {
    //   console.log('got props', nextProps);
    // }

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.searchContent('', {
        object_provides: 'forests.content.interfaces.IBasicDataProvider'
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(data, layout, frames) {
      this.setState({
        data: data,
        layout: layout,
        frames: frames
      }, this.onSubmit);
    }
  }, {
    key: "handleChangeProvider",
    value: function handleChangeProvider(ev, _ref) {
      var value = _ref.value;
      this.props.getDataFromProvider(value);
    }
  }, {
    key: "render",
    value: function render() {
      var plotly = __webpack_require__(/*! plotly.js/dist/plotly */ "plotly.js/dist/plotly");

      var selectProviders = this.props.providers.map(function (el) {
        return {
          key: el['@id'],
          text: el.title,
          value: el['@id']
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      },  false ? undefined : '');
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state, props) {
  var providerData = state.data_providers ? state.data_providers.item : {};
  return {
    providers: state.search.items,
    providerData: providerData,
    dataSourceOptions: getDataSourceOptions(providerData || dataSources)
  };
}, {
  searchContent: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_11__["searchContent"],
  getDataFromProvider: _actions__WEBPACK_IMPORTED_MODULE_12__["getDataFromProvider"]
})(Edit));

/***/ }),

/***/ "./src/components/manage/Tiles/PlotlyChart/View.jsx":
/*!**********************************************************!*\
  !*** ./src/components/manage/Tiles/PlotlyChart/View.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/opt/fise/src/components/manage/Tiles/PlotlyChart/View.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var LoadablePlot = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-plotly.js */ "react-plotly.js", 7));
  },
  modules: ['react-plotly.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! react-plotly.js */ "react-plotly.js")];
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, "Loading chart...");
  }
});

var ChartView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ChartView, _Component);

  function ChartView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ChartView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ChartView).call(this, props));
    _this.state = _objectSpread({}, props.data.chartData);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ChartView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chartWrapperView",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LoadablePlot, {
        data: this.state.data,
        layout: this.state.layout,
        frames: this.state.frames,
        config: {
          displayModeBar: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    }
  }]);

  return ChartView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

ChartView.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ChartView);

/***/ }),

/***/ "./src/components/manage/Tiles/TableauTile/TableauTileEdit.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/manage/Tiles/TableauTile/TableauTileEdit.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _theme_TableauView_TableauReport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../theme/TableauView/TableauReport */ "./src/components/theme/TableauView/TableauReport.jsx");







var _jsxFileName = "/opt/fise/src/components/manage/Tiles/TableauTile/TableauTileEdit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import PropTypes from 'prop-types';



 // const url = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';

var StackedBarChart =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(StackedBarChart, _Component);

  function StackedBarChart(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StackedBarChart);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StackedBarChart).call(this, props));
    var data = _this.props.data.tableauData || {};
    var show =  false ? undefined : false;
    var filters = data.filters && data.sheetname ? data.filters[data.sheetname] : {};
    _this.state = {
      show: show,
      tableauData: data,
      url: data.url || '',
      filters: filters,
      sheetname: data.sheetname || ''
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getChartData = _this.getChartData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.saveCallback = _this.saveCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StackedBarChart, [{
    key: "handleChange",
    value: function handleChange(e) {
      var data = e.target.value;

      try {
        data = e.target.value;
        this.setState({
          url: data
        } // this.onSubmit,
        );
      } catch (_unused) {
        console.warning('Invalid JSON data: ', data);
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.props.onChangeBlock(this.props.block, _objectSpread({}, this.props.data, {
        tableauData: this.state.tableauData
      }));
      this.props.handleClose();
    }
  }, {
    key: "saveCallback",
    value: function saveCallback(saveData) {
      console.log('Received save data', saveData);
      var stateData = JSON.parse(JSON.stringify(this.state));
      this.setState({
        tableauData: saveData
      }, this.onSubmit);
    }
  }, {
    key: "getChartData",
    value: function getChartData() {
      var tableauData = this.state.tableauData;

      if (typeof tableauData == 'string') {
        try {
          tableauData = tableauData;
        } catch (error) {
          console.log(error);
          tableauData = {};
        }
      }

      console.log(tableauData);
      return tableauData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (true) return ''; // const TableauReport = require('tableau-react');

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block chartWrapperEdit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.show && this.state.url ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "image-add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["ResponsiveContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_theme_TableauView_TableauReport__WEBPACK_IMPORTED_MODULE_10__["default"], {
        url: this.state.url,
        filters: this.state.filters,
        sheetname: this.state.sheetname,
        callback: this.saveCallback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "image-add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "ui placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "image header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "medium line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "short line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Enter JSON data"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        defaultValue: this.state.url,
        placeholder: "Enter tableau URL",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            show: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Show dashboard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Save"))));
    }
  }]);

  return StackedBarChart;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StackedBarChart);

/***/ }),

/***/ "./src/components/manage/Tiles/Text/Edit.jsx":
/*!***************************************************!*\
  !*** ./src/components/manage/Tiles/Text/Edit.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/opt/fise/src/components/manage/Tiles/Text/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Edit text block.
 * @module components/manage/Tiles/Title/Edit
 */



 // import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

/**
 * Edit text block class.
 * @class Edit
 * @extends Component
 */

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).call(this, props));

    if (false) { var htmltext; }

    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onChange",
    value: function onChange(event, editor) {
      var cktext = editor.getData();
      this.props.onChangeTile(this.props.block, _objectSpread({}, this.props.data, {
        cktext: cktext
      }));
    }
    /**
     * Render method.
     * @method render
     * @returns {string} Markup for the component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        });
      }

      var CKEditor = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react");

      var ClassicEditor = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic"); // console.log(
      //   'plugins',
      //   ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName),
      // );
      // const ClassicEditor = require('@ckeditor/ckeditor5-build-balloon-block');
      // const ClassicEditor = require('@ckeditor/ckeditor5-editor-classic/src/classiceditor');


      var editorConfiguration = {
        heading: {
          options: [// {
          //   model: 'paragraph',
          //   title: 'Paragraph Tibi',
          //   class: 'ck-heading_paragraph',
          // },
          {
            model: 'heading5',
            view: 'h5',
            title: 'Tile Title (H5)',
            "class": 'ck-heading_heading5'
          }, {
            model: 'block_description',
            view: {
              name: 'div',
              classes: 'chart-highlight'
            },
            title: 'Tile Description',
            "class": 'chart-highlight'
          } // {
          //   model: 'heading2',
          //   view: 'h2',
          //   title: 'Heading 2',
          //   class: 'ck-heading_heading2',
          // },
          ]
        }
      }; //

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        role: "presentation",
        onClick: function onClick() {
          return _this2.props.onSelectTile(_this2.props.block);
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('block text', {
          selected: this.props.selected
        }),
        ref: function ref(node) {
          return _this2.ref = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CKEditor, {
        config: editorConfiguration,
        editor: ClassicEditor,
        data: this.state.htmltext,
        onInit: function onInit(editor) {// You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
        },
        onChange: this.onChange,
        onBlur: function onBlur(event, editor) {},
        onFocus: function onFocus(event, editor) {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Edit, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any).isRequired,
  detached: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  block: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  onAddTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onChangeTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onDeleteTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onMutateTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onFocusPreviousTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onFocusNextTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSelectTile: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Edit, "defaultProps", {
  detached: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(Edit));

/***/ }),

/***/ "./src/components/manage/Tiles/Text/View.jsx":
/*!***************************************************!*\
  !*** ./src/components/manage/Tiles/Text/View.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redraft */ "redraft");
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redraft__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
var _jsxFileName = "/opt/fise/src/components/manage/Tiles/Text/View.jsx";

/**
 * View text block.
 * @module components/manage/Tiles/Text/View
 */




/**
 * View text block class.
 * @class View
 * @extends Component
 */

var View = function View(_ref) {
  var data = _ref.data;
  var text = data.cktext;
  var result;

  if (typeof text === 'string') {
    // TODO: need better regexp here
    text = text.replace(/(<? *script)/gi, 'illegalscript');
    result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: text
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    });
  } else {
    result = redraft__WEBPACK_IMPORTED_MODULE_2___default()(text, _config__WEBPACK_IMPORTED_MODULE_3__["settings"].ToHTMLRenderers, _config__WEBPACK_IMPORTED_MODULE_3__["settings"].ToHTMLOptions);
  }

  return text ? result : '';
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */


View.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/components/manage/Widgets/CKEditor.jsx":
/*!****************************************************!*\
  !*** ./src/components/manage/Widgets/CKEditor.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/opt/fise/src/components/manage/Widgets/CKEditor.jsx";




var CKText = function CKText(_ref) {
  var id = _ref.id,
      title = _ref.title,
      required = _ref.required,
      description = _ref.description,
      error = _ref.error,
      value = _ref.value,
      _onChange = _ref.onChange,
      fieldSet = _ref.fieldSet;
  if (true) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  });

  var CKEditor = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react");

  var ClassicEditor = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic");

  var editorConfiguration = {
    heading: {
      options: [// {
      //   model: 'paragraph',
      //   title: 'Paragraph Tibi',
      //   class: 'ck-heading_paragraph',
      // },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Tile Title (H5)',
        "class": 'ck-heading_heading5'
      }, {
        model: 'block_description',
        view: {
          name: 'div',
          classes: 'chart-highlight'
        },
        title: 'Tile Description',
        "class": 'chart-highlight'
      } // {
      //   model: 'heading2',
      //   view: 'h2',
      //   title: 'Heading 2',
      //   class: 'ck-heading_heading2',
      // },
      ]
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    inline: true,
    required: required,
    error: error ? error.length > 0 : false,
    id: "".concat(fieldSet || 'field', "-").concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "field-".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CKEditor, {
    id: "field-".concat(id),
    name: id,
    config: editorConfiguration,
    editor: ClassicEditor,
    data: value || '',
    onInit: function onInit(editor) {},
    onChange: function onChange(event, editor) {
      return _onChange(id, editor.getData());
    },
    onBlur: function onBlur(event, editor) {},
    onFocus: function onFocus(event, editor) {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(error, function (message) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      key: message,
      basic: true,
      color: "red",
      pointing: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    }, message);
  }))), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    stretched: true,
    width: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, description)))));
};

/* harmony default export */ __webpack_exports__["default"] = (CKText);

/***/ }),

/***/ "./src/components/manage/Widgets/ChartEditor.jsx":
/*!*******************************************************!*\
  !*** ./src/components/manage/Widgets/ChartEditor.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_chart_editor_lib_react_chart_editor_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chart-editor/lib/react-chart-editor.css */ "./node_modules/react-chart-editor/lib/react-chart-editor.css");
/* harmony import */ var react_chart_editor_lib_react_chart_editor_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_chart_editor_lib_react_chart_editor_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/actions */ "./volto/src/actions/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/opt/fise/src/components/manage/Widgets/ChartEditor.jsx";







var LoadablePlotlyEditor = react_loadable__WEBPACK_IMPORTED_MODULE_8___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-chart-editor */ "react-chart-editor", 7));
  },
  modules: ['react-chart-editor'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! react-chart-editor */ "react-chart-editor")];
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, "Loading chart editor...");
  }
});
var dataSources = {
  col1: [1, 2, 3],
  // eslint-disable-line no-magic-numbers
  col2: [4, 3, 2],
  // eslint-disable-line no-magic-numbers
  col3: [17, 13, 9] // eslint-disable-line no-magic-numbers

};

function getDataSourceOptions(data) {
  return Object.keys(data).map(function (name) {
    return {
      value: name,
      label: name
    };
  });
}

var config = {
  editable: true
};

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).call(this, props));
    console.log('chart editor props', props);
    var chartData = props.value || {};
    _this.state = {
      data: chartData.data || [],
      layout: chartData.layout || {},
      frames: chartData.frames || []
    };
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleChangeProvider = _this.handleChangeProvider.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onSubmit",
    value: function onSubmit() {
      var chartData = {
        data: this.state.data,
        layout: this.state.layout,
        frames: this.state.frames
      };
      this.props.onChangeValue(chartData);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.searchContent('', {
        object_provides: 'forests.content.interfaces.IBasicDataProvider'
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(data, layout, frames) {
      this.setState({
        data: data,
        layout: layout,
        frames: frames
      }, this.onSubmit);
    }
  }, {
    key: "handleChangeProvider",
    value: function handleChangeProvider(ev, _ref) {
      var value = _ref.value;
      this.props.getDataFromProvider(value);
    }
  }, {
    key: "render",
    value: function render() {
      var plotly = __webpack_require__(/*! plotly.js/dist/plotly */ "plotly.js/dist/plotly");

      var selectProviders = this.props.providers.map(function (el) {
        return {
          key: el['@id'],
          text: el.title,
          value: el['@id']
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      },  false ? undefined : '');
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state, props) {
  var providerData = state.data_providers ? state.data_providers.item : {};
  return {
    providers: state.search.items,
    providerData: providerData,
    dataSourceOptions: getDataSourceOptions(providerData || dataSources)
  };
}, {
  searchContent: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_10__["searchContent"],
  getDataFromProvider: _actions__WEBPACK_IMPORTED_MODULE_11__["getDataFromProvider"]
})(Edit));

/***/ }),

/***/ "./src/components/theme/HomepageView/HomepageView.jsx":
/*!************************************************************!*\
  !*** ./src/components/theme/HomepageView/HomepageView.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
/* harmony import */ var _images_basic_forest_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/basic-forest.png */ "./src/components/theme/HomepageView/images/basic-forest.png");
/* harmony import */ var _images_basic_forest_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_basic_forest_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_forest_carbon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/forest-carbon.png */ "./src/components/theme/HomepageView/images/forest-carbon.png");
/* harmony import */ var _images_forest_carbon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_forest_carbon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_forest_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/forest.png */ "./src/components/theme/HomepageView/images/forest.png");
/* harmony import */ var _images_forest_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_forest_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_nature_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/nature.png */ "./src/components/theme/HomepageView/images/nature.png");
/* harmony import */ var _images_nature_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_nature_png__WEBPACK_IMPORTED_MODULE_15__);






var _jsxFileName = "/opt/fise/src/components/theme/HomepageView/HomepageView.jsx";


 // import Helmet from 'react-helmet';
// import { Container, Image } from 'semantic-ui-react';
// import { map } from 'lodash';



 // import { settings, blocks } from '~/config';
// import // getBlocksFieldname,
// // getBlocksLayoutFieldname,
// // hasBlocksData,
// '@plone/volto/helpers';





var numberToWord = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve'
};
var mapDispatchToProps = {
  // setFolderHeader,
  setFolderTabs: _actions__WEBPACK_IMPORTED_MODULE_11__["setFolderTabs"],
  getParentFolderData: _actions__WEBPACK_IMPORTED_MODULE_11__["getParentFolderData"]
};
var data = [{
  name: '00',
  Decidous: 4000,
  Conifers: 2400
}, {
  name: '04',
  Decidous: 3000,
  Conifers: 1398
}, {
  name: '08',
  Decidous: 2000,
  Conifers: 9800
}, {
  name: '12',
  Decidous: 2780,
  Conifers: 3908
}, {
  name: '16',
  Decidous: 1890,
  Conifers: 4800
}];

var StackedBarChart =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StackedBarChart, _Component);

  function StackedBarChart() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StackedBarChart);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StackedBarChart).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StackedBarChart, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["ResponsiveContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["BarChart"], {
        data: data,
        margin: {
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["XAxis"], {
        dataKey: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["Bar"], {
        dataKey: "Decidous",
        stackId: "a",
        fill: "#225511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["Bar"], {
        dataKey: "Conifers",
        stackId: "a",
        fill: "#769e2e",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })));
    }
  }]);

  return StackedBarChart;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var HomepageView =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(HomepageView, _Component2);

  function HomepageView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HomepageView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(HomepageView).call(this, props));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HomepageView, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.props.setFolderHeader({ inCountryFolder: true });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// this.props.setFolderHeader({ inCountryFolder: false });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.parent) !== JSON.stringify(this.props.parent)) {
        var title = nextProps.parent.title;
        var description = nextProps.parent.description;
        var image = nextProps.parent.items && nextProps.parent.items.find(function (c) {
          return c['@type'] === 'Image';
        });
        var url = image && image.image.download;
        var inCountryFolder = true; // this.props.setFolderHeader({ title, description, url, inCountryFolder });

        var tabsItems = nextProps.parent.items.map(function (i) {
          return {
            // this is ugly
            url: i['@id'].split('/Plone/')[1],
            title: i.title,
            '@type': i['@type']
          };
        }).filter(function (i) {
          return i.title !== 'folder_info';
        });
        this.props.setFolderTabs(tabsItems);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // const content = this.props.content;
      // const blocksFieldname = getBlocksFieldname(content);
      // const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
      this.tabs = [{
        title: 'Coverage & Growth',
        url: '',
        type: 'Section'
      }, {
        title: 'Economy',
        url: '',
        type: 'Section'
      }, {
        title: 'Other Benefits',
        url: '',
        type: 'Section'
      }];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "page-document",
        className: "ui wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "centered-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "A bird's-eye view on Europe\u2019s forests"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "Europe is one of the few regions of the world where forest cover has increased over the last century. The EU currently contains 5 % of the world's forests. Let\u2019s take a look at factors which led to this net growth as well as their economical and ecological implication.")), this.tabs && this.tabs.length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: 'ui home-tab item stackable tabs menu ' + numberToWord[this.tabs.length],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, this.tabs.map(function (item, ix) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          key: ix,
          className: "item",
          to: item.url,
          title: item['@type'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, item.title);
      })) : '', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui active tab tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui stackable two column grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui two column stackable grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui segment coverage-segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Forest coverage"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "land-data-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "land-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "43%"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "land-data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "of Europe's land surface ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "181 Mha"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "coverage-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "owned-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "71%"), " publicy owned"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "private-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "29%"), " private")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "discreet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "2017 tree cover extent"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui segment data-box orange-data-highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "Protected forests"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "land-data-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "land-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "12%"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "land-data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "of Europe's land surface ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "51 Mha"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui bulleted list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "Germany", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "16.2Mha")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "Finland", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "12.4Mha")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, "Italy", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, "14.5Mha"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "discreet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "See all countries")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui one column stackable grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "four wide column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "Growing stock"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "chart-hightlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, "Vestibulum eget est ac lorem dapibus lacinia. Integer magna nunc, scelerisque in lacinia nec, laoreet non augue. Nunc quis pharetra magna, in convallis ligula.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "discreet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, "2017 tree cover extent"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "eight wide column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "chart-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StackedBarChart, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column map-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "map-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        title: "Test Map",
        src: "https://maps.eea.europa.eu/CopernicusViewer/?webmap=f9a8ae48d60a49f1bd9b16dba0f2c5fe&extent=-20.0,30.0,44.0,66.0&zoom=true",
        width: "100%",
        height: "490",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "map-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui primary button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, "Land Cover"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, "Map type no2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "Map type no3"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "thematic-areas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "centered-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, "Main thematic areas"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, "For several decades now, environmental forest functions have attracted increasing attention mainly in relation to the protection of biodiversity and, more recently, in the context of climate change impacts and energy policies. Forests are increasingly valued for their role as regulators of climate and local weather, protection against natural disasters and renewable energy sources.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui stackable four column grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column area-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _images_basic_forest_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "area-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "Basic forest information"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "area-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, "Forests provide renewable raw materials and energy, maintain biodiversity, and protect land and water resources.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column area-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _images_nature_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "area-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, "Nature and biodiversity"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "area-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, "Biodiversity is the wide variety of animals, plants, their habitats and their genes, and it is vital to countless human activities.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column area-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _images_forest_carbon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "area-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, "Forest carbon - LULUCF"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "area-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, "EU climate policy which helps reduce EU greenhouse gas emissions to at least 40 per cent below 1990 levels by 2030.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column area-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _images_forest_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "area-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "area-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, "Forest bioeconomy"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "area-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, "Usin renewable biological resources to produce food, materials and energy.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, "Learn more"))))));
    }
  }]);

  return HomepageView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(HomepageView, "propTypes", {
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    items: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      description: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      image: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
      image_caption: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      '@type': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
    }))
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    tabs: state.folder_tabs.items,
    parent: state.parent_folder_data.items
  };
}, mapDispatchToProps)(HomepageView));

/***/ }),

/***/ "./src/components/theme/TestViews/MosaicSettingsView.jsx":
/*!***************************************************************!*\
  !*** ./src/components/theme/TestViews/MosaicSettingsView.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");






var _jsxFileName = "/opt/fise/src/components/theme/TestViews/MosaicSettingsView.jsx";





var MosaicSettingsView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MosaicSettingsView, _Component);

  function MosaicSettingsView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MosaicSettingsView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MosaicSettingsView).call(this, props));
    _this.state = {
      settings: props.settings
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MosaicSettingsView, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var oldSettings = JSON.stringify(this.props.settings);
      var newSettings = JSON.stringify(nextProps.settings);

      if (oldSettings !== newSettings) {
        this.setState({
          settings: nextProps.settings
        });
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.getMosaicSettings();
    }
  }, {
    key: "getCard",
    value: function getCard(style, key) {
      var bits = style.split('|');
      var name = bits[0];
      var klass = 'block-box preview ' + bits[1];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: klass,
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, name);
    }
  }, {
    key: "render",
    value: function render() {
      console.log('state', this.state.settings);
      return this.state.settings && this.state.settings.styles ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.state.settings.styles.map(this.getCard)) : '';
    }
  }]);

  return MosaicSettingsView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(MosaicSettingsView, "propTypes", {
  getMosaicSettings: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return {
    settings: state.mosaic_settings.items
  };
}, {
  getMosaicSettings: _actions__WEBPACK_IMPORTED_MODULE_9__["getMosaicSettings"]
})(MosaicSettingsView));

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: settings, views, widgets, blocks, portlets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "views", function() { return views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocks", function() { return blocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portlets", function() { return portlets; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/config */ "./volto/src/config/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_components_manage_Widgets_TokenWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/TokenWidget */ "./volto/src/components/manage/Widgets/TokenWidget.jsx");
/* harmony import */ var _components_manage_Widgets_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manage/Widgets/Hidden */ "./src/components/manage/Widgets/Hidden.jsx");
/* harmony import */ var _components_manage_Widgets_CKEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/manage/Widgets/CKEditor */ "./src/components/manage/Widgets/CKEditor.jsx");
/* harmony import */ var _components_manage_Widgets_Chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manage/Widgets/Chart */ "./src/components/manage/Widgets/Chart.jsx");
/* harmony import */ var _components_manage_Tiles_ChartTile_ChartTileEdit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manage/Tiles/ChartTile/ChartTileEdit */ "./src/components/manage/Tiles/ChartTile/ChartTileEdit.jsx");
/* harmony import */ var _components_manage_Tiles_ChartTile_ChartTileView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manage/Tiles/ChartTile/ChartTileView */ "./src/components/manage/Tiles/ChartTile/ChartTileView.jsx");
/* harmony import */ var _components_manage_Tiles_EuropeCompareTile_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage/Tiles/EuropeCompareTile/Edit */ "./src/components/manage/Tiles/EuropeCompareTile/Edit.jsx");
/* harmony import */ var _components_manage_Tiles_EuropeCompareTile_View__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage/Tiles/EuropeCompareTile/View */ "./src/components/manage/Tiles/EuropeCompareTile/View.jsx");
/* harmony import */ var _components_manage_Tiles_EuropeForestTile_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manage/Tiles/EuropeForestTile/Edit */ "./src/components/manage/Tiles/EuropeForestTile/Edit.jsx");
/* harmony import */ var _components_manage_Tiles_EuropeForestTile_View__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/manage/Tiles/EuropeForestTile/View */ "./src/components/manage/Tiles/EuropeForestTile/View.jsx");
/* harmony import */ var _components_manage_Tiles_PlotlyChart_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/manage/Tiles/PlotlyChart/Edit */ "./src/components/manage/Tiles/PlotlyChart/Edit.jsx");
/* harmony import */ var _components_manage_Tiles_PlotlyChart_View__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/manage/Tiles/PlotlyChart/View */ "./src/components/manage/Tiles/PlotlyChart/View.jsx");
/* harmony import */ var _components_manage_Tiles_TableauTile_TableauTileEdit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/manage/Tiles/TableauTile/TableauTileEdit */ "./src/components/manage/Tiles/TableauTile/TableauTileEdit.jsx");
/* harmony import */ var _components_manage_Tiles_TableauTile_TableauTileView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/manage/Tiles/TableauTile/TableauTileView */ "./src/components/manage/Tiles/TableauTile/TableauTileView.jsx");
/* harmony import */ var _components_manage_Tiles_Text_Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/manage/Tiles/Text/Edit */ "./src/components/manage/Tiles/Text/Edit.jsx");
/* harmony import */ var _components_manage_Tiles_Text_View__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/manage/Tiles/Text/View */ "./src/components/manage/Tiles/Text/View.jsx");
/* harmony import */ var _components_theme_Portlets_ForestMetadata__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/theme/Portlets/ForestMetadata */ "./src/components/theme/Portlets/ForestMetadata.jsx");
/* harmony import */ var _components_manage_Slider_Portlet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/manage/Slider/Portlet */ "./src/components/manage/Slider/Portlet.jsx");
/* harmony import */ var _components_theme_HomepageView_HomepageView__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/theme/HomepageView/HomepageView */ "./src/components/theme/HomepageView/HomepageView.jsx");
/* harmony import */ var _components_theme_VisualizationView_View__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/theme/VisualizationView/View */ "./src/components/theme/VisualizationView/View.jsx");
/* harmony import */ var draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! draft-js-buttons/lib/utils/createInlineStyleButton */ "draft-js-buttons/lib/utils/createInlineStyleButton");
/* harmony import */ var draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @plone/volto/icons/underline.svg */ "./volto/src/icons/underline.svg");
/* harmony import */ var _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @plone/volto/icons/world.svg */ "./volto/src/icons/world.svg");
/* harmony import */ var _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _volto_mosaic_src__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../volto-mosaic/src */ "./volto-mosaic/src/index.js");


var _jsxFileName = "/opt/fise/src/config.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















 // Display types
// import CountryView from '~/components/theme/CountryView/CountryView';
// import CountryPageView from '~/components/theme/CountryPageView/CountryPageView';








var Underline = draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_25___default()({
  style: 'UNDERLINE',
  children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_26__["default"], {
    name: _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
    size: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })
});
var settings = _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["settings"], {
  richTextEditorInlineToolbarButtons: [Underline].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["settings"].richTextEditorInlineToolbarButtons)),
  nonContentRoutes: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["settings"].nonContentRoutes), ['/manage-slider', '/mosaic-settings-view', '/data-providers-view'])
});
var views = _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["views"], {
  layoutViews: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["views"].layoutViews, {
    // full_view: CountryView,
    // country_tab_view: CountryPageView,
    homepage_view: _components_theme_HomepageView_HomepageView__WEBPACK_IMPORTED_MODULE_23__["default"]
  }, _volto_mosaic_src__WEBPACK_IMPORTED_MODULE_29__["layoutViews"]),
  contentTypesViews: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["views"].contentTypesViews, {
    visualization: _components_theme_VisualizationView_View__WEBPACK_IMPORTED_MODULE_24__["default"]
  })
}); // read @plone/volto/components/manage/Form/Field.jsx to understand this

var widgets = _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["widgets"], {
  vocabulary: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["widgets"].vocabulary, {
    'fise.topics': _plone_volto_components_manage_Widgets_TokenWidget__WEBPACK_IMPORTED_MODULE_5__["default"],
    'fise.keywords': _plone_volto_components_manage_Widgets_TokenWidget__WEBPACK_IMPORTED_MODULE_5__["default"],
    'fise.publishers': _plone_volto_components_manage_Widgets_TokenWidget__WEBPACK_IMPORTED_MODULE_5__["default"]
  }),
  id: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["widgets"].id, {
    blocks: _components_manage_Widgets_Hidden__WEBPACK_IMPORTED_MODULE_6__["default"],
    blocks_layout: _components_manage_Widgets_Hidden__WEBPACK_IMPORTED_MODULE_6__["default"],
    visualization: _components_manage_Widgets_Chart__WEBPACK_IMPORTED_MODULE_8__["default"]
  }),
  widget: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["widgets"].widget, {
    cktext: _components_manage_Widgets_CKEditor__WEBPACK_IMPORTED_MODULE_7__["default"]
  })
});
Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  custom_addons: {
    "id": "custom_addons",
    "defaultMessage": "Custom Addons"
  },
  plotly_chart: {
    "id": "plotly_chart",
    "defaultMessage": "Plotly Chart"
  },
  demo_chart: {
    "id": "demo_chart",
    "defaultMessage": "Demo Chart"
  },
  tableau: {
    "id": "tableau",
    "defaultMessage": "Tableau"
  },
  forests_specific: {
    "id": "forests_specific",
    "defaultMessage": "Forests Specific Tiles"
  }
});
console.log('alalalala', _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"]);
var blocks = _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"], {
  groupBlocksOrder: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].groupBlocksOrder), [{
    id: 'custom_addons',
    title: 'Custom addons'
  }, {
    id: 'forests_specific',
    title: 'Forests Specific Tiles'
  }]),
  blocksConfig: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].blocksConfig, {
    europe_compare_block: {
      id: 'europe_compare_block',
      title: 'Europe Compare Tile',
      view: _components_manage_Tiles_EuropeCompareTile_View__WEBPACK_IMPORTED_MODULE_12__["default"],
      edit: _components_manage_Tiles_EuropeCompareTile_Edit__WEBPACK_IMPORTED_MODULE_11__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
      group: 'forests_specific'
    },
    europe_forest_block: {
      id: 'europe_forest_block',
      title: 'Europe Forest Area Tile',
      view: _components_manage_Tiles_EuropeForestTile_View__WEBPACK_IMPORTED_MODULE_14__["default"],
      edit: _components_manage_Tiles_EuropeForestTile_Edit__WEBPACK_IMPORTED_MODULE_13__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
      group: 'forests_specific'
    },
    embed_chart: {
      id: 'embed_chart',
      title: 'Embed Chart',
      view: _components_manage_Tiles_ChartTile_ChartTileView__WEBPACK_IMPORTED_MODULE_10__["default"],
      edit: _components_manage_Tiles_ChartTile_ChartTileEdit__WEBPACK_IMPORTED_MODULE_9__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
      group: 'custom_addons'
    },
    plotly_chart: {
      id: 'plotly_chart',
      title: 'Plotly Chart',
      view: _components_manage_Tiles_PlotlyChart_View__WEBPACK_IMPORTED_MODULE_16__["default"],
      edit: _components_manage_Tiles_PlotlyChart_Edit__WEBPACK_IMPORTED_MODULE_15__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
      group: 'custom_addons'
    },
    tableau: {
      id: 'tableau',
      title: 'Tableau',
      view: _components_manage_Tiles_TableauTile_TableauTileView__WEBPACK_IMPORTED_MODULE_18__["default"],
      edit: _components_manage_Tiles_TableauTile_TableauTileEdit__WEBPACK_IMPORTED_MODULE_17__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
      group: 'custom_addons'
    },
    cktext: {
      id: 'cktext',
      group: 'text',
      title: 'CKEditor',
      view: _components_manage_Tiles_Text_View__WEBPACK_IMPORTED_MODULE_20__["default"],
      edit: _components_manage_Tiles_Text_Edit__WEBPACK_IMPORTED_MODULE_19__["default"],
      icon: _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].blocksConfig.text.icon
    }
  })
});
var portlets = [_components_theme_Portlets_ForestMetadata__WEBPACK_IMPORTED_MODULE_21__["default"], _components_manage_Slider_Portlet__WEBPACK_IMPORTED_MODULE_22__["default"]];

/***/ }),

/***/ "./src/customizations/components/theme/View/ListingView.jsx":
/*!******************************************************************!*\
  !*** ./src/customizations/components/theme/View/ListingView.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions */ "./src/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/helpers */ "./volto/src/helpers/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");






var _jsxFileName = "/opt/fise/src/customizations/components/theme/View/ListingView.jsx";

/**
 * Document view component.
 * @module components/theme/View/ListingView
 */












var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_13__["defineMessages"])({
  unknownBlock: {
    "id": "Unknown Block",
    "defaultMessage": "Unknown Block {block}"
  }
});

var ListingView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ListingView, _Component);

  function ListingView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListingView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ListingView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListingView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getLocalnavigation(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["flattenToAppURL"])(this.props.content['@id']));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.pathname !== this.props.pathname) {
        this.props.getLocalnavigation(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["flattenToAppURL"])(this.props.pathname));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.content;
      var intl = this.props.intl;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["getBlocksFieldname"])(content);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["getBlocksLayoutFieldname"])(content);
      var localNavigation = this.props.localNavigation.items && this.props.localNavigation.items.filter(function (item) {
        return item.title !== 'Home';
      }) || [];
      var pageTemplate = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
        columns: 3,
        className: "folderWithContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        tablet: 0,
        largeScreen: 3,
        widescreen: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        tablet: 12,
        largeScreen: 6,
        widescreen: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["hasBlocksData"])(content) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "page-document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
        title: content.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), Object(lodash__WEBPACK_IMPORTED_MODULE_15__["map"])(content[blocksLayoutFieldname].items, function (block) {
        var _blocks$blocksConfig, _content$blocksFieldn, _content$blocksFieldn2, _content$blocksFieldn3, _content$blocksFieldn4;

        var Tile = ((_blocks$blocksConfig = _config__WEBPACK_IMPORTED_MODULE_16__["blocks"].blocksConfig[(_content$blocksFieldn = content[blocksFieldname]) === null || _content$blocksFieldn === void 0 ? void 0 : (_content$blocksFieldn2 = _content$blocksFieldn[block]) === null || _content$blocksFieldn2 === void 0 ? void 0 : _content$blocksFieldn2['@type']]) === null || _blocks$blocksConfig === void 0 ? void 0 : _blocks$blocksConfig['view']) || null;
        return Tile !== null ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Tile, {
          key: block,
          id: block,
          properties: content,
          data: content[blocksFieldname][block],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: block,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, intl.formatMessage(messages.unknownBlock, {
          block: (_content$blocksFieldn3 = content[blocksFieldname]) === null || _content$blocksFieldn3 === void 0 ? void 0 : (_content$blocksFieldn4 = _content$blocksFieldn3[block]) === null || _content$blocksFieldn4 === void 0 ? void 0 : _content$blocksFieldn4['@type']
        }));
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        id: "page-document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
        title: content.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), content.image && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Image"], {
        className: "document-image",
        src: content.image.scales.thumb.download,
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), content.remoteUrl && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "The link address is:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: content.remoteUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, content.remoteUrl)), content.text && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: content.text.data.replace(/a href="([^"]*\.[^"]*)"/g, "a href=\"".concat(_config__WEBPACK_IMPORTED_MODULE_16__["settings"].apiPath, "$1/download/file\""))
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        tablet: 6,
        largeScreen: 3,
        widescreen: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "localNavigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, localNavigation.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["flattenToAppURL"])(item['@id']),
          key: item['@id'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, item.title));
      }))));

      if (!localNavigation.length) {
        pageTemplate = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_12__["hasBlocksData"])(content) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "page-document",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
          title: content.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }), Object(lodash__WEBPACK_IMPORTED_MODULE_15__["map"])(content[blocksLayoutFieldname].items, function (block) {
          var _blocks$blocksConfig2, _content$blocksFieldn5, _content$blocksFieldn6, _content$blocksFieldn7, _content$blocksFieldn8;

          var Tile = ((_blocks$blocksConfig2 = _config__WEBPACK_IMPORTED_MODULE_16__["blocks"].blocksConfig[(_content$blocksFieldn5 = content[blocksFieldname]) === null || _content$blocksFieldn5 === void 0 ? void 0 : (_content$blocksFieldn6 = _content$blocksFieldn5[block]) === null || _content$blocksFieldn6 === void 0 ? void 0 : _content$blocksFieldn6['@type']]) === null || _blocks$blocksConfig2 === void 0 ? void 0 : _blocks$blocksConfig2['view']) || null;
          return Tile !== null ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Tile, {
            key: block,
            id: block,
            properties: content,
            data: content[blocksFieldname][block],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            }
          }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            key: block,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            }
          }, intl.formatMessage(messages.unknownBlock, {
            block: (_content$blocksFieldn7 = content[blocksFieldname]) === null || _content$blocksFieldn7 === void 0 ? void 0 : (_content$blocksFieldn8 = _content$blocksFieldn7[block]) === null || _content$blocksFieldn8 === void 0 ? void 0 : _content$blocksFieldn8['@type']
          }));
        })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
          id: "page-document",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
          title: content.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          className: "documentFirstHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }, content.title), content.description && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "documentDescription",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, content.description), content.image && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Image"], {
          className: "document-image",
          src: content.image.scales.thumb.download,
          floated: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }), content.remoteUrl && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, "The link address is:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: content.remoteUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }, content.remoteUrl)), content.text && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: content.text.data.replace(/a href="([^"]*\.[^"]*)"/g, "a href=\"".concat(_config__WEBPACK_IMPORTED_MODULE_16__["settings"].apiPath, "$1/download/file\""))
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }));
      } // return (
      //   <Container id="page-home">
      //     <Helmet title={content.title} />
      //     <section id="content-core">
      //       {content.items.map(item => (
      //         <article key={item.url}>
      //           <h2>
      //             <Link to={item.url} title={item['@type']}>
      //               {item.title}
      //             </Link>
      //           </h2>
      //           {item.description && <p>{item.description}</p>}
      //         </article>
      //       ))}
      //     </section>
      //   </Container>
      // );


      return pageTemplate;
    }
  }]);

  return ListingView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ListingView, "propTypes", {
  localNavigation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  getLocalnavigation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
      data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
    }),
    items: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
      '@id': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      '@type': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      description: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      review_state: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
      url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
    }))
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state, props) {
  return {
    localNavigation: state.localnavigation.items,
    pathname: props.location.pathname
  };
}, {
  getLocalnavigation: _actions__WEBPACK_IMPORTED_MODULE_10__["getLocalnavigation"]
})(Object(react_intl__WEBPACK_IMPORTED_MODULE_13__["injectIntl"])(ListingView)));

/***/ })

};
//# sourceMappingURL=main.0b1422b16fe5ab321fba.hot-update.js.map