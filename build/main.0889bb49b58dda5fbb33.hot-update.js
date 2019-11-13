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
    _this.onChangeBlock = _this.onChangeBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.sendDelete = _this.sendDelete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SlideEditor, [{
    key: "onChangeBlock",
    value: function onChangeBlock(id, data) {
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
        onAddBlock: this.nop,
        onChangeBlock: this.onChangeBlock,
        onDeleteBlock: this.nop,
        onFocusPreviousBlock: this.nop,
        onFocusNextBlock: this.nop,
        onSelectBlock: this.nop,
        onMutateBlock: this.nop,
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
false,

/***/ "./src/components/manage/Tiles/ChartTile/ChartTileView.jsx":
false,

/***/ "./src/components/manage/Tiles/EuropeCompareTile/Edit.jsx":
false,

/***/ "./src/components/manage/Tiles/EuropeCompareTile/View.jsx":
false,

/***/ "./src/components/manage/Tiles/EuropeForestTile/Edit.jsx":
false,

/***/ "./src/components/manage/Tiles/EuropeForestTile/View.jsx":
false,

/***/ "./src/components/manage/Tiles/PlotlyChart/Edit.jsx":
false,

/***/ "./src/components/manage/Tiles/PlotlyChart/View.jsx":
false,

/***/ "./src/components/manage/Tiles/TableauTile/TableauTileEdit.jsx":
false,

/***/ "./src/components/manage/Tiles/TableauTile/TableauTileView.jsx":
false,

/***/ "./src/components/manage/Tiles/Text/Edit.jsx":
false,

/***/ "./src/components/manage/Tiles/Text/View.jsx":
false,

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
        title: 'Block Title (H5)',
        "class": 'ck-heading_heading5'
      }, {
        model: 'block_description',
        view: {
          name: 'div',
          classes: 'chart-highlight'
        },
        title: 'Block Description',
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

/***/ "./src/components/theme/TableauView/TableauReport.jsx":
false,

/***/ "./src/components/theme/TableauView/tokenizeUrl.js":
false,

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
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/ChartBlock/ChartBlockEdit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/ChartBlock/ChartBlockView'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeCompareBlock/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeCompareBlock/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeForestBlock/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeForestBlock/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/PlotlyChart/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/PlotlyChart/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/TableauBlock/TableauBlockEdit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/TableauBlock/TableauBlockView'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/Text/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/Text/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_theme_Portlets_ForestMetadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/theme/Portlets/ForestMetadata */ "./src/components/theme/Portlets/ForestMetadata.jsx");
/* harmony import */ var _components_manage_Slider_Portlet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage/Slider/Portlet */ "./src/components/manage/Slider/Portlet.jsx");
/* harmony import */ var _components_theme_HomepageView_HomepageView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/theme/HomepageView/HomepageView */ "./src/components/theme/HomepageView/HomepageView.jsx");
/* harmony import */ var _components_theme_VisualizationView_View__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/theme/VisualizationView/View */ "./src/components/theme/VisualizationView/View.jsx");
/* harmony import */ var draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! draft-js-buttons/lib/utils/createInlineStyleButton */ "draft-js-buttons/lib/utils/createInlineStyleButton");
/* harmony import */ var draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/underline.svg */ "./volto/src/icons/underline.svg");
/* harmony import */ var _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/world.svg */ "./volto/src/icons/world.svg");
/* harmony import */ var _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _volto_mosaic_src__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../volto-mosaic/src */ "./volto-mosaic/src/index.js");


var _jsxFileName = "/opt/fise/src/config.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















 // Display types
// import CountryView from '~/components/theme/CountryView/CountryView';
// import CountryPageView from '~/components/theme/CountryPageView/CountryPageView';








var Underline = draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_14___default()({
  style: 'UNDERLINE',
  children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
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
    homepage_view: _components_theme_HomepageView_HomepageView__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, _volto_mosaic_src__WEBPACK_IMPORTED_MODULE_18__["layoutViews"]),
  contentTypesViews: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["views"].contentTypesViews, {
    visualization: _components_theme_VisualizationView_View__WEBPACK_IMPORTED_MODULE_13__["default"]
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
    "defaultMessage": "Forests Specific Blocks"
  }
});
console.log('alalalala', _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"]);
var blocks = _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"], {
  groupBlocksOrder: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].groupBlocksOrder), [{
    id: 'custom_addons',
    title: 'Custom addons'
  }, {
    id: 'forests_specific',
    title: 'Forests Specific Blocks'
  }]),
  blocksConfig: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].blocksConfig, {
    europe_compare_block: {
      id: 'europe_compare_block',
      title: 'Europe Compare Block',
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeCompareBlock/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      edit: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeCompareBlock/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      group: 'forests_specific'
    },
    europe_forest_block: {
      id: 'europe_forest_block',
      title: 'Europe Forest Area Block',
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeForestBlock/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      edit: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/EuropeForestBlock/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      group: 'forests_specific'
    },
    embed_chart: {
      id: 'embed_chart',
      title: 'Embed Chart',
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/ChartBlock/ChartBlockView'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      edit: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/ChartBlock/ChartBlockEdit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      group: 'custom_addons'
    },
    plotly_chart: {
      id: 'plotly_chart',
      title: 'Plotly Chart',
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/PlotlyChart/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      edit: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/PlotlyChart/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      group: 'custom_addons'
    },
    tableau: {
      id: 'tableau',
      title: 'Tableau',
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/TableauBlock/TableauBlockView'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      edit: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/TableauBlock/TableauBlockEdit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      group: 'custom_addons'
    },
    cktext: {
      id: 'cktext',
      group: 'text',
      title: 'CKEditor',
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/Text/View'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      edit: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/Text/Edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      icon: _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].blocksConfig.text.icon
    }
  })
});
var portlets = [_components_theme_Portlets_ForestMetadata__WEBPACK_IMPORTED_MODULE_10__["default"], _components_manage_Slider_Portlet__WEBPACK_IMPORTED_MODULE_11__["default"]];

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

        var Block = ((_blocks$blocksConfig = _config__WEBPACK_IMPORTED_MODULE_16__["blocks"].blocksConfig[(_content$blocksFieldn = content[blocksFieldname]) === null || _content$blocksFieldn === void 0 ? void 0 : (_content$blocksFieldn2 = _content$blocksFieldn[block]) === null || _content$blocksFieldn2 === void 0 ? void 0 : _content$blocksFieldn2['@type']]) === null || _blocks$blocksConfig === void 0 ? void 0 : _blocks$blocksConfig['view']) || null;
        return Block !== null ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Block, {
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

          var Block = ((_blocks$blocksConfig2 = _config__WEBPACK_IMPORTED_MODULE_16__["blocks"].blocksConfig[(_content$blocksFieldn5 = content[blocksFieldname]) === null || _content$blocksFieldn5 === void 0 ? void 0 : (_content$blocksFieldn6 = _content$blocksFieldn5[block]) === null || _content$blocksFieldn6 === void 0 ? void 0 : _content$blocksFieldn6['@type']]) === null || _blocks$blocksConfig2 === void 0 ? void 0 : _blocks$blocksConfig2['view']) || null;
          return Block !== null ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Block, {
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

/***/ }),

/***/ "shallowequal":
false

};
//# sourceMappingURL=main.0889bb49b58dda5fbb33.hot-update.js.map