exports.id = "main";
exports.modules = {

/***/ "./src/components/manage/Blocks/Text/Edit.jsx":
/*!****************************************************!*\
  !*** ./src/components/manage/Blocks/Text/Edit.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react/dist/commonjs/lib */ "semantic-ui-react/dist/commonjs/lib");
/* harmony import */ var semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-draft-wysiwyg */ "react-draft-wysiwyg");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! draft-js-inline-toolbar-plugin */ "draft-js-inline-toolbar-plugin");
/* harmony import */ var draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/circle-plus.svg */ "./volto/src/icons/circle-plus.svg");
/* harmony import */ var _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_19__);








var _jsxFileName = "/opt/fise/src/components/manage/Blocks/Text/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */












var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["defineMessages"])({
  text: {
    "id": "Type text\u2026",
    "defaultMessage": "Type text\u2026"
  }
});
/**
 * Edit text block class.
 * @class Edit
 * @extends Component
 */

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Edit, _Component);

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

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Edit).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleAddNewBlock", function () {
      return _this.setState(function (state) {
        return {
          addNewBlockOpened: !state.addNewBlockOpened
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleClickOutside", function (e) {
      if (_this.props.blockNode.current && Object(semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_11__["doesNodeContainClick"])(_this.props.blockNode.current, e)) return;

      _this.setState(function () {
        return {
          addNewBlockOpened: false
        };
      });
    });

    if (false) { var inlineToolbarPlugin, editorState; }

    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }
  /**
   * Component will receive props
   * @method componentDidMount
   * @returns {undefined}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.selected) {
        this.node.focusEditor();
      }

      document.addEventListener('mousedown', this.handleClickOutside, false);
    }
    /**
     * Component will receive props
     * @method componentWillReceiveProps
     * @param {Object} nextProps Next properties
     * @returns {undefined}
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.selected && nextProps.selected) {
        this.node.focusEditor();
        this.setState({
          editorState: draft_js__WEBPACK_IMPORTED_MODULE_13__["EditorState"].moveFocusToEnd(this.state.editorState)
        });
      }
    }
    /**
     * Component will receive props
     * @method componentWillUnmount
     * @returns {undefined}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.selected) {
        this.node.focusEditor();
      }

      document.removeEventListener('mousedown', this.handleClickOutside, false);
    }
    /**
     * Change handler
     * @method onChange
     * @param {object} editorState Editor state.
     * @returns {undefined}
     */

  }, {
    key: "onChange",
    value: function onChange(editorState) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_16__["isEqual"])(Object(draft_js__WEBPACK_IMPORTED_MODULE_13__["convertToRaw"])(editorState.getCurrentContent()), Object(draft_js__WEBPACK_IMPORTED_MODULE_13__["convertToRaw"])(this.state.editorState.getCurrentContent()))) {
        this.props.onChangeBlock(this.props.block, _objectSpread({}, this.props.data, {
          text: Object(draft_js__WEBPACK_IMPORTED_MODULE_13__["convertToRaw"])(editorState.getCurrentContent())
        }));
      }

      this.setState({
        editorState: editorState
      });
    }
  }, {
    key: "render",

    /**
     * Render method.
     * @method render
     * @returns {string} Markup for the component.
     */
    value: function render() {
      var _this2 = this;

      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        });
      } // const { InlineToolbar } = this.state.inlineToolbarPlugin;


      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["Editor"], {
        onChange: this.onChange,
        editorState: this.state.editorState,
        plugins: [this.state.inlineToolbarPlugin].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_17__["settings"].richTextEditorPlugins)),
        blockRenderMap: _config__WEBPACK_IMPORTED_MODULE_17__["settings"].extendedBlockRenderMap,
        blockStyleFn: _config__WEBPACK_IMPORTED_MODULE_17__["settings"].blockStyleFn,
        placeholder: this.props.intl.formatMessage(messages.text),
        handleReturn: function handleReturn() {
          if (!_this2.props.detached) {
            var selectionState = _this2.state.editorState.getSelection();

            var anchorKey = selectionState.getAnchorKey();

            var currentContent = _this2.state.editorState.getCurrentContent();

            var currentContentBlock = currentContent.getBlockForKey(anchorKey);
            var blockType = currentContentBlock.getType();

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_16__["includes"])(_config__WEBPACK_IMPORTED_MODULE_17__["settings"].listBlockTypes, blockType)) {
              _this2.props.onSelectBlock(_this2.props.onAddBlock('text', _this2.props.index + 1));

              return 'handled';
            }

            return 'un-handled';
          }

          return {};
        },
        handleKeyCommand: function handleKeyCommand(command, editorState) {
          if (command === 'backspace' && editorState.getCurrentContent().getPlainText().length === 0) {
            _this2.props.onDeleteBlock(_this2.props.block, true);
          }
        },
        onUpArrow: function onUpArrow() {
          var selectionState = _this2.state.editorState.getSelection();

          var currentCursorPosition = selectionState.getStartOffset();

          if (currentCursorPosition === 0) {
            _this2.props.onFocusPreviousBlock(_this2.props.block, _this2.node);
          }
        },
        onDownArrow: function onDownArrow() {
          var selectionState = _this2.state.editorState.getSelection();

          var editorState = _this2.state.editorState;
          var currentCursorPosition = selectionState.getStartOffset();
          var blockLength = editorState.getCurrentContent().getFirstBlock().getLength();

          if (currentCursorPosition === blockLength) {
            _this2.props.onFocusNextBlock(_this2.props.block, _this2.node);
          }
        },
        ref: function ref(node) {
          _this2.node = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), !this.props.detached && (!this.props.data.text || this.props.data.text && this.props.data.text.blocks && this.props.data.text.blocks.length === 1 && this.props.data.text.blocks[0].text === '') && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        basic: true,
        icon: true,
        onClick: this.toggleAddNewBlock,
        className: "block-add-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
        name: _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
        className: "block-add-button",
        size: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      })), this.state.addNewBlockOpened && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["BlockChooser"], {
        onMutateBlock: this.props.onMutateBlock,
        currentBlock: this.props.block,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Edit, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any).isRequired,
  detached: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  index: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  block: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  onAddBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onChangeBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onDeleteBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onMutateBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onFocusPreviousBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onFocusNextBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onSelectBlock: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Edit, "defaultProps", {
  detached: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["injectIntl"])(Edit));

/***/ })

};
//# sourceMappingURL=main.b25d0a5d96db5bba43dc.hot-update.js.map