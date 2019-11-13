exports.id = "main";
exports.modules = {

/***/ "./volto-mosaic/src/components/manage/BlockEditor.jsx":
/*!************************************************************!*\
  !*** ./volto-mosaic/src/components/manage/BlockEditor.jsx ***!
  \************************************************************/
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
/* harmony import */ var semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react/dist/commonjs/lib */ "semantic-ui-react/dist/commonjs/lib");
/* harmony import */ var semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/config */ "./src/config.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var _BlockMetadataEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BlockMetadataEditor */ "./volto-mosaic/src/components/manage/BlockMetadataEditor.jsx");
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/icons/pen.svg */ "./volto/src/icons/pen.svg");
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/opt/fise/volto-mosaic/src/components/manage/BlockEditor.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 // import PropTypes from 'prop-types';
// import blockDataEditor from './blockDataEditor';

var ModalEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ModalEditor, _Component);

  function ModalEditor(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ModalEditor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ModalEditor).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClickOutside", function (e) {
      if (_this.ref && Object(semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_8__["doesNodeContainClick"])(_this.ref, e)) return;

      _this.setState(function () {
        return {
          showBlockChooser: false
        };
      });
    });

    var block = JSON.parse(JSON.stringify(props.formData['blocks'][props.blockid]));
    _this.state = {
      // blocks: props.blocks,
      blockid: props.blockid,
      formData: props.formData,
      blockData: block,
      showBlockChooser: false,
      activeTabPage: 0
    };
    _this.blockRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.renderEditBlock = _this.renderEditBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // this is ugly, should reduce number of similar methods

    _this.onChangeBlock = _this.onChangeBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onMutateBlock = _this.onMutateBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleMetadataChange = _this.handleMetadataChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateblockData = _this.updateblockData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleTabChange = _this.handleTabChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.panes = [];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ModalEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside, false);
    }
  }, {
    key: "renderEditBlock",
    value: function renderEditBlock() {
      // const { formData } = this.state; // destructuring
      // const blocksFieldname = getBlocksFieldname(formData);
      // const blocksDict = formData[blocksFieldname];
      var Block = null;
      var type = this.state.blockData['@type'].toLowerCase();
      Block = _src_config__WEBPACK_IMPORTED_MODULE_9__["blocks"].blocksConfig[type].edit;

      var nop = function nop() {};

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Block // id={this.state.blockid}
      // block={this.state.blockid}
      // data={this.state.blockData}
      // properties={this.state.formData}
      // onAddBlock={nop}
      // onChangeBlock={this.onChangeBlock}
      // onMutateBlock={nop}
      // onChangeField={nop}
      // onDeleteBlock={nop}
      // onSelectBlock={nop}
      // handleKeyDown={nop}
      // pathname={this.props.pathname}
      // onMoveBlock={nop}
      // onFocusPreviousBlock={nop}
      // onFocusNextBlock={nop}
      // selected={true}
      // index={0}
      // ref={this.blockRef}
      , {
        id: block,
        index: index,
        type: blocksDict[block]['@type'],
        key: block,
        handleKeyDown: this.handleKeyDown,
        onAddBlock: this.onAddBlock,
        onChangeBlock: this.onChangeBlock,
        onMutateBlock: this.onMutateBlock,
        onChangeField: this.onChangeField,
        onDeleteBlock: this.onDeleteBlock,
        onSelectBlock: this.onSelectBlock,
        onMoveBlock: this.onMoveBlock,
        onFocusPreviousBlock: this.onFocusPreviousBlock,
        onFocusNextBlock: this.onFocusNextBlock,
        properties: formData,
        data: blocksDict[block],
        pathname: this.props.pathname,
        block: block,
        selected: this.state.selected === block,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      });
    }
  }, {
    key: "onChangeBlock",
    value: function onChangeBlock(id, value) {
      // handles editing inside the actual block editor (ex: TinyMCE)
      this.setState({
        blockData: _objectSpread({}, value)
      });
    }
  }, {
    key: "onMutateBlock",
    value: function onMutateBlock(block, choice) {
      // handles changing the block type. Needed by the <Block> component?
      this.setState({
        blockData: _objectSpread({}, this.state.blockData, {}, choice),
        showBlockChooser: false,
        activeTabPage: 0
      });
    }
  }, {
    key: "handleMetadataChange",
    value: function handleMetadataChange(values) {
      // handles changes coming from the metadata editor
      var blockData = this.state.blockData;
      this.setState({
        blockData: _objectSpread({}, blockData, {}, values)
      }, function () {// console.log('State after handleMetadataChange', this.state);
      });
    }
  }, {
    key: "updateblockData",
    value: function updateblockData(name, data) {
      var blockData = this.state.blockData; // TODO: check if this doesn't introduce extra render of block editor

      this.setState({
        blockData: _objectSpread({}, blockData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, name, data))
      });
    }
  }, {
    key: "handleTabChange",
    value: function handleTabChange(e, _ref) {
      var activeIndex = _ref.activeIndex;
      this.setState({
        activeTabPage: activeIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        open: true,
        size: "fullscreen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Modal"].Content, {
        scrolling: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"], {
        onTabChange: this.handleTabChange,
        activeIndex: this.state.activeTabPage,
        menu: {
          secondary: true,
          pointing: true,
          attached: true,
          tabular: true
        },
        panes: [{
          menuItem: 'Data',
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              }
            }, _this2.renderEditBlock());
          }
        }, {
          menuItem: 'Metadata',
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              }
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BlockMetadataEditor__WEBPACK_IMPORTED_MODULE_12__["default"], {
              onDataChange: _this2.handleMetadataChange,
              blockData: _this2.state.blockData,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              }
            }));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Modal"].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        columns: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        style: {
          textAlign: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"].Group, {
        floated: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            showBlockChooser: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, this.state.blockData['@type'] ? _src_config__WEBPACK_IMPORTED_MODULE_9__["blocks"].blocksConfig[this.state.blockData['@type']].title : 'Set type'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.ref = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, this.state.showBlockChooser && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_11__["BlockChooser"], {
        onMutateBlock: this.onMutateBlock,
        currentBlock: this.state.blockData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"].Group, {
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        basic: true,
        circular: true,
        primary: true,
        onClick: function onClick() {
          return _this2.props.onClose(_this2.state.blockData);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "circled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        basic: true,
        circular: true,
        secondary: true,
        size: "big",
        onClick: function onClick() {
          return _this2.props.onClose();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "circled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      })))))));
    }
  }]);

  return ModalEditor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ModalEditor);

/***/ })

};
//# sourceMappingURL=main.f70606a9dce9df6472fd.hot-update.js.map