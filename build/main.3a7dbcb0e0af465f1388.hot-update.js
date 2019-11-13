exports.id = "main";
exports.modules = {

/***/ "./volto-mosaic/src/actions/index.js":
/*!*******************************************!*\
  !*** ./volto-mosaic/src/actions/index.js ***!
  \*******************************************/
/*! exports provided: getMosaicSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMosaicSettings", function() { return getMosaicSettings; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ "./volto-mosaic/src/constants.js");

function getMosaicSettings() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_MOSAIC_SETTINGS"],
    request: {
      op: 'get',
      path: "/@mosaic-settings"
    }
  };
}

/***/ }),

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
/* harmony import */ var _BlockMetadataEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BlockMetadataEditor */ "./volto-mosaic/src/components/manage/BlockMetadataEditor.jsx");
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

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Block, {
        id: this.state.blockid,
        block: this.state.blockid,
        data: this.state.blockData,
        properties: this.state.formData,
        onAddBlock: nop,
        onChangeBlock: this.onChangeBlock,
        onMutateBlock: nop,
        onChangeField: nop,
        onDeleteBlock: nop,
        onSelectBlock: nop,
        handleKeyDown: nop,
        pathname: this.props.pathname,
        onMoveBlock: nop,
        onFocusPreviousBlock: nop,
        onFocusNextBlock: nop,
        selected: true,
        index: 0,
        ref: this.blockRef,
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
          lineNumber: 153
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Modal"].Content, {
        scrolling: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
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
                lineNumber: 167
              }
            }, _this2.renderEditBlock());
          }
        }, {
          menuItem: 'Metadata',
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BlockMetadataEditor__WEBPACK_IMPORTED_MODULE_15__["default"], {
              onDataChange: _this2.handleMetadataChange,
              blockData: _this2.state.blockData,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 173
              }
            }));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Modal"].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        columns: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        style: {
          textAlign: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"].Group, {
        floated: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            showBlockChooser: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, this.state.blockData['@type'] ? _src_config__WEBPACK_IMPORTED_MODULE_9__["blocks"].blocksConfig[this.state.blockData['@type']].title : 'Set type'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.ref = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, this.state.showBlockChooser && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_11__["BlockChooser"], {
        onMutateBlock: this.onMutateBlock,
        currentBlock: this.state.blockData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"].Group, {
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
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
          lineNumber: 207
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "circled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
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
          lineNumber: 215
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "circled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      })))))));
    }
  }]);

  return ModalEditor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ModalEditor);

/***/ }),

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
!(function webpackMissingModule() { var e = new Error("Cannot find module './BlockStyleSelectWidget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






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
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module './BlockStyleSelectWidget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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

/***/ "./volto-mosaic/src/constants.js":
/*!***************************************!*\
  !*** ./volto-mosaic/src/constants.js ***!
  \***************************************/
/*! exports provided: GET_MOSAIC_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOSAIC_SETTINGS", function() { return GET_MOSAIC_SETTINGS; });
var GET_MOSAIC_SETTINGS = 'GET_MOSAIC_SETTINGS';

/***/ }),

/***/ "./volto/src/icons/hide.svg":
/*!**********************************!*\
  !*** ./volto/src/icons/hide.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36","viewBox":"0 0 36 36"},"content":"<path fill-rule=\"evenodd\" d=\"M18.0474,27 C15.8624,27 13.7604,26.488 11.8884,25.573 L13.8634,23.598 C15.0324,24.474 16.4774,25 18.0474,25 C21.9074,25 25.0474,21.859 25.0474,18 C25.0474,16.43 24.5214,14.985 23.6454,13.816 L25.9904,11.471 C28.2964,13.058 30.0884,15.321 30.9964,18 C29.1954,23.314 23.9174,27 18.0474,27 L18.0474,27 Z M13.0474,18 C13.0474,15.243 15.2904,13 18.0474,13 C19.0644,13 20.0094,13.309 20.8004,13.833 L18.1254,16.508 C18.0994,16.506 18.0744,16.5 18.0474,16.5 C17.2194,16.5 16.5474,17.172 16.5474,18 C16.5474,18.027 16.5534,18.052 16.5554,18.078 L13.8804,20.753 C13.3564,19.962 13.0474,19.017 13.0474,18 L13.0474,18 Z M23.0474,18 C23.0474,20.757 20.8044,23 18.0474,23 C17.0304,23 16.0854,22.691 15.2944,22.167 L17.9694,19.492 C17.9954,19.494 18.0204,19.5 18.0474,19.5 C18.8754,19.5 19.5474,18.828 19.5474,18 C19.5474,17.973 19.5414,17.948 19.5394,17.922 L22.2144,15.247 C22.7384,16.038 23.0474,16.983 23.0474,18 L23.0474,18 Z M5.0984,18 C6.8994,12.686 12.1774,9 18.0474,9 C20.2324,9 22.3344,9.512 24.2064,10.427 L22.2314,12.402 C21.0624,11.526 19.6174,11 18.0474,11 C14.1874,11 11.0474,14.141 11.0474,18 C11.0474,19.57 11.5734,21.015 12.4494,22.184 L10.1044,24.529 C7.7984,22.942 6.0064,20.679 5.0984,18 L5.0984,18 Z M33.0024,17.703 C32.0314,14.579 30.0284,11.924 27.4224,10.039 L30.7544,6.707 L29.3404,5.293 L25.6814,8.952 C23.3934,7.71 20.7784,7 18.0474,7 C11.2014,7 5.0514,11.401 3.0924,17.703 L3.0004,18 L3.0924,18.297 C4.0634,21.421 6.0664,24.076 8.6724,25.961 L5.3404,29.293 L6.7544,30.707 L10.4134,27.048 C12.7014,28.29 15.3164,29 18.0474,29 C24.8934,29 31.0434,24.599 33.0024,18.297 L33.0944,18 L33.0024,17.703 Z\"/>"}

/***/ })

};
//# sourceMappingURL=main.3a7dbcb0e0af465f1388.hot-update.js.map