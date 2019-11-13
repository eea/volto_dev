exports.id = "main";
exports.modules = {

/***/ "./volto-mosaic/src/components/manage/BlockMetadataEditor.jsx":
/*!********************************************************************!*\
  !*** ./volto-mosaic/src/components/manage/BlockMetadataEditor.jsx ***!
  \********************************************************************/
/*! exports provided: SIZING_POLICY_CHOICES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZING_POLICY_CHOICES", function() { return SIZING_POLICY_CHOICES; });
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions */ "./volto-mosaic/src/actions/index.js");
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var _plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/show.svg */ "./volto/src/icons/show.svg");
/* harmony import */ var _plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_icons_hide_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/icons/hide.svg */ "./volto/src/icons/hide.svg");
/* harmony import */ var _plone_volto_icons_hide_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_hide_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _BlockStyleSelectWidget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BlockStyleSelectWidget */ "./volto-mosaic/src/components/manage/BlockStyleSelectWidget.jsx");






var _jsxFileName = "/opt/fise/volto-mosaic/src/components/manage/BlockMetadataEditor.jsx";




 // EditBlock




 // import PropTypes from 'prop-types';

var SIZING_POLICY_CHOICES = [['fit-content', 'Shrink fit to content'], ['min-height', 'Minimum block height (specific to each block type)'], ['fill-space', 'Fill available space'], ['manual', 'Resized manually']];

var BlockMetadataEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BlockMetadataEditor, _Component);

  function BlockMetadataEditor(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockMetadataEditor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BlockMetadataEditor).call(this, props));
    console.log('props in blockmetadateeditor', props);
    var block = JSON.parse(JSON.stringify(props.blockData));
    var show_block_title = block.show_block_title;

    if (Object.keys(block).indexOf('show_block_title') === -1) {
      show_block_title = true;
    }

    _this.state = {
      settings: props.settings,
      selectedBoxStyle: block.mosaic_box_style || 'default-block',
      mosaic_block_title: block.mosaic_block_title,
      mosaic_box_sizing: block.mosaic_box_sizing || 'fit-content',
      block_title: block.block_title,
      show_block_title: show_block_title
    };
    _this.updateData = _this.updateData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // this.getCard = this.getCard.bind(this);
    // this.handleSelectBoxStyle = this.handleSelectBoxStyle.bind(this);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockMetadataEditor, [{
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getMosaicSettings();
    }
  }, {
    key: "updateData",
    value: function updateData(obj) {
      var _this2 = this;

      this.setState(obj, function () {
        _this2.props.onDataChange(obj);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var styles = this.state.settings && this.state.settings.styles || [];
      console.log('will pass styles', styles);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
        inline: true,
        required: false,
        className: "help block-title",
        id: "field-block-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
        stretched: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        width: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "block-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Title:")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        width: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        id: "block-title",
        type: "text",
        defaultValue: this.state.block_title || '',
        onChange: function onChange(e, d) {
          return _this3.updateData({
            block_title: d.value
          });
        },
        icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          color: this.state.show_block_title ? 'green' : 'red',
          onClick: function onClick() {
            return _this3.updateData({
              show_block_title: !_this3.state.show_block_title
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          size: "20",
          name: this.state.show_block_title ? _plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_11___default.a : _plone_volto_icons_hide_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_10__["Field"], {
        id: "mosaic-title",
        title: "Block name",
        type: "text",
        description: "Identifier for this block",
        value: this.state.mosaic_block_title,
        required: false,
        onChange: function onChange(e, d) {
          return _this3.updateData({
            mosaic_block_title: d
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BlockStyleSelectWidget__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Block style",
        description: "Select a style to apply to this block",
        value: this.state.selectedBoxStyle,
        options: styles,
        id: "block-style-select",
        onChange: function onChange(name, selection) {
          return _this3.updateData({
            mosaic_box_style: selection
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_10__["Field"], {
        id: "sizing-policy",
        title: "Height sizing policy",
        description: "Set the default sizing policy for this block",
        value: this.state.mosaic_box_sizing,
        onChange: function onChange(e, d) {
          _this3.updateData({
            mosaic_box_sizing: d
          });
        },
        choices: SIZING_POLICY_CHOICES,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }));
    }
  }]);

  return BlockMetadataEditor;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return {
    settings: state.mosaic_settings.items
  };
}, {
  getMosaicSettings: _actions__WEBPACK_IMPORTED_MODULE_9__["getMosaicSettings"]
})(BlockMetadataEditor));

/***/ }),

/***/ "./volto-mosaic/src/components/manage/BlockStyleSelectWidget.jsx":
/*!***********************************************************************!*\
  !*** ./volto-mosaic/src/components/manage/BlockStyleSelectWidget.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/opt/fise/volto-mosaic/src/components/manage/BlockStyleSelectWidget.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var BlockStyleSelectWidget =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(BlockStyleSelectWidget, _Component);

  function BlockStyleSelectWidget(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BlockStyleSelectWidget);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(BlockStyleSelectWidget).call(this, props));
    _this.state = _objectSpread({}, props);
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    console.log('props in style select', props);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BlockStyleSelectWidget, [{
    key: "handleClick",
    value: function handleClick(e, data) {
      var _this2 = this;

      this.setState({
        value: data.name
      }, function () {
        _this2.props.onChange(_this2.props.id, data.name);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title; // const selected = this.state.value;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true,
        required: this.props.required,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "field-".concat(id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
        inverted: true,
        fluid: true,
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Item"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.props.options.map(function (style) {
        var _style$split = style.split('|'),
            _style$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_style$split, 2),
            opttitle = _style$split2[0],
            optid = _style$split2[1];

        var klass = 'block-box preview ' + optid;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
          name: optid,
          active: optid === _this3.state.value,
          onClick: _this3.handleClick,
          key: optid,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Item"].Image, {
          size: "tiny",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: klass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Item"].Content, {
          verticalAlign: "middle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, opttitle));
      })))))));
    }
  }]);

  return BlockStyleSelectWidget;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BlockStyleSelectWidget);

/***/ })

};
//# sourceMappingURL=main.67c354ebbe5c56d2f903.hot-update.js.map