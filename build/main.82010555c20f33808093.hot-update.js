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
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-draft-wysiwyg */ "react-draft-wysiwyg");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/opt/fise/src/components/manage/Blocks/Text/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */







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
    value: function onChange(editorState) {
      this.props.onChangeBlock(this.props.block, _objectSpread({}, this.props.data, {
        editorState: editorState
      }));
      this.setState({
        editorState: editorState
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextState) {
      // console.log('willupdate', nextState, this.ref)
      this.ref.handleReturn = function () {
        return 'un-handled';
      };

      this.ref.focusEditor();
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
            lineNumber: 88
          }
        });
      }

      var editorConfiguration = {
        heading: {
          options: [{
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
          }]
        }
      }; //

      var editorState = this.state.editorState;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        role: "presentation" // onClick={() => this.props.onSelectBlock(this.props.block)}
        ,
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('block text', {
          selected: this.props.selected
        }) // ref={node => (this.ref = node)}
        ,
        onClick: function onClick(e) {
          _this2.props.onSelectBlock(_this2.props.block);
        } // onKeyPress={(e)=> {
        //   console.log('lalalala', e)
        //   this.props.handleKeyDown(e,
        //     this.props.index,
        //     this.props.block,
        //     this.ref,
        //     {
        //       disableEnter: true,
        //       disableArrowUp: true,
        //       disableArrowDown: true,
        //     })
        //   }
        //   }
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__["Editor"], {
        editorState: editorState,
        onEditorStateChange: this.onChange // onChange={this.onChange}
        ,
        ref: function ref(node) {
          return _this2.ref = node;
        },
        handeReturn: function handeReturn(e) {
          console.log('handlereturn here', e);
          return true;
        } // onKeyPress={(e)=>this.props.handleKeyDown(e,
        //   this.props.index,
        //   this.props.block,
        //   this.ref,
        //   {
        //     disableEnter: true,
        //     disableArrowUp: true,
        //     disableArrowDown: true,
        // })}
        // onBlur={(event, editor) => {}}
        // onFocus={(event, editor) => {}}
        ,
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
  onAddBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onChangeBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onDeleteBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onMutateBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onFocusPreviousBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onFocusNextBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSelectBlock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Edit, "defaultProps", {
  detached: true
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(Edit));

/***/ })

};
//# sourceMappingURL=main.82010555c20f33808093.hot-update.js.map