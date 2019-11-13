exports.id = "main";
exports.modules = {

/***/ "./src/customizations/components/manage/Form/Form.jsx":
/*!************************************************************!*\
  !*** ./src/customizations/components/manage/Form/Form.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-move */ "lodash-move");
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_move__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isBoolean */ "lodash/isBoolean");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_13__);
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
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/icons/ahead.svg */ "./volto/src/icons/ahead.svg");
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_21__);









var _jsxFileName = "/opt/fise/src/customizations/components/manage/Form/Form.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Form component.
 * @module components/manage/Form/Form
 */













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
});
/**
 * Form container class.
 * @class Form
 * @extends Component
 */

var Form =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Form, _Component);

  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Form
   */
  function Form(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Form);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Form).call(this, props));
    var ids = {
      title: Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])(),
      text: Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])()
    };
    var formData = props.formData;
    var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
    var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);

    if (formData === null) {
      // get defaults from schema
      formData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["mapValues"])(props.schema.properties, 'default');
    } // defaults for block editor; should be moved to schema on server side


    if (!formData[blocksLayoutFieldname]) {
      formData[blocksLayoutFieldname] = {
        items: [ids.title, ids.text]
      };
    }

    if (!formData[blocksFieldname]) {
      var _formData$blocksField;

      formData[blocksFieldname] = (_formData$blocksField = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_formData$blocksField, ids.title, {
        '@type': 'title'
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_formData$blocksField, ids.text, {
        '@type': 'text'
      }), _formData$blocksField);
    }

    _this.state = {
      formData: formData,
      errors: {},
      selected: formData[blocksLayoutFieldname].items.length > 0 ? formData[blocksLayoutFieldname].items[0] : null
    };
    _this.onChangeField = _this.onChangeField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onChangeBlock = _this.onChangeBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onMutateBlock = _this.onMutateBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onSelectBlock = _this.onSelectBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onDeleteBlock = _this.onDeleteBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onAddBlock = _this.onAddBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onMoveBlock = _this.onMoveBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onFocusPreviousBlock = _this.onFocusPreviousBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onFocusNextBlock = _this.onFocusNextBlock.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    return _this;
  }
  /**
   * Change field handler
   * @method onChangeField
   * @param {string} id Id of the field
   * @param {*} value Value of the field
   * @returns {undefined}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Form, [{
    key: "onChangeField",
    value: function onChangeField(id, value) {
      this.setState({
        formData: _objectSpread({}, this.state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, value || value !== undefined && lodash_isBoolean__WEBPACK_IMPORTED_MODULE_13___default()(value) ? value : null))
      });
    }
    /**
     * Change block handler
     * @method onChangeBlock
     * @param {string} id Id of the block
     * @param {*} value Value of the field
     * @returns {undefined}
     */

  }, {
    key: "onChangeBlock",
    value: function onChangeBlock(id, value) {
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(this.state.formData);
      this.setState({
        formData: _objectSpread({}, this.state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blocksFieldname, _objectSpread({}, this.state.formData[blocksFieldname], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, value || null))))
      });
    }
    /**
     * Change block handler
     * @method onMutateBlock
     * @param {string} id Id of the block
     * @param {*} value Value of the field
     * @returns {undefined}
     */

  }, {
    key: "onMutateBlock",
    value: function onMutateBlock(id, value) {
      var _objectSpread5, _objectSpread6;

      var idTrailingBlock = Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])();
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(this.state.formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(this.state.formData);
      var index = this.state.formData[blocksLayoutFieldname].items.indexOf(id) + 1;
      this.setState({
        formData: _objectSpread({}, this.state.formData, (_objectSpread6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread6, blocksFieldname, _objectSpread({}, this.state.formData[blocksFieldname], (_objectSpread5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread5, id, value || null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread5, idTrailingBlock, {
          '@type': 'text'
        }), _objectSpread5))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread6, blocksLayoutFieldname, {
          items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.state.formData[blocksLayoutFieldname].items.slice(0, index)), [idTrailingBlock], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.state.formData[blocksLayoutFieldname].items.slice(index)))
        }), _objectSpread6))
      });
    }
    /**
     * Select block handler
     * @method onSelectBlock
     * @param {string} id Id of the field
     * @returns {undefined}
     */

  }, {
    key: "onSelectBlock",
    value: function onSelectBlock(id) {
      this.setState({
        selected: id
      });
    }
    /**
     * Delete block handler
     * @method onDeleteBlock
     * @param {string} id Id of the field
     * @param {bool} selectPrev True if previous should be selected
     * @returns {undefined}
     */

  }, {
    key: "onDeleteBlock",
    value: function onDeleteBlock(id, selectPrev) {
      var _objectSpread7;

      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(this.state.formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(this.state.formData);
      this.setState({
        formData: _objectSpread({}, this.state.formData, (_objectSpread7 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread7, blocksLayoutFieldname, {
          items: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["without"])(this.state.formData[blocksLayoutFieldname].items, id)
        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread7, blocksFieldname, Object(lodash__WEBPACK_IMPORTED_MODULE_11__["omit"])(this.state.formData[blocksFieldname], [id])), _objectSpread7)),
        selected: selectPrev ? this.state.formData[blocksLayoutFieldname].items[this.state.formData[blocksLayoutFieldname].items.indexOf(id) - 1] : null
      });
    }
    /**
     * Add block handler
     * @method onAddBlock
     * @param {string} type Type of the block
     * @param {Number} index Index where to add the block
     * @returns {string} Id of the block
     */

  }, {
    key: "onAddBlock",
    value: function onAddBlock(type, index) {
      var _objectSpread9;

      var id = Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])();
      var idTrailingBlock = Object(uuid__WEBPACK_IMPORTED_MODULE_16__["v4"])();
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(this.state.formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(this.state.formData);
      var totalItems = this.state.formData[blocksLayoutFieldname].items.length;
      var insert = index === -1 ? totalItems : index;
      this.setState({
        formData: _objectSpread({}, this.state.formData, (_objectSpread9 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread9, blocksLayoutFieldname, {
          items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.state.formData[blocksLayoutFieldname].items.slice(0, insert)), [id], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(type !== 'text' ? [idTrailingBlock] : []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.state.formData[blocksLayoutFieldname].items.slice(insert)))
        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_objectSpread9, blocksFieldname, _objectSpread({}, this.state.formData[blocksFieldname], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, id, {
          '@type': type
        }), type !== 'text' && _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, idTrailingBlock, {
          '@type': 'text'
        }))), _objectSpread9)),
        selected: id
      });
      return id;
    }
    /**
     * Submit handler
     * @method onSubmit
     * @param {Object} event Event object.
     * @returns {undefined}
     */

  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      var errors = {};
      Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(this.props.schema.fieldsets, function (fieldset) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(fieldset.fields, function (fieldId) {
          var field = _this2.props.schema.properties[fieldId];
          var data = _this2.state.formData[fieldId];

          if (typeof data === 'string' || data instanceof String) {
            data = data.trim();
          }

          if (_this2.props.schema.required.indexOf(fieldId) !== -1) {
            if (field.type !== 'boolean' && !data) {
              errors[fieldId] = errors[field] || [];
              errors[fieldId].push(_this2.props.intl.formatMessage(messages.required));
            }

            if (field.minLength && data.length < field.minLength) {
              errors[fieldId] = errors[field] || [];
              errors[fieldId].push(_this2.props.intl.formatMessage(messages.minLength, {
                len: field.minLength
              }));
            }
          }

          if (field.uniqueItems && data && Object(lodash__WEBPACK_IMPORTED_MODULE_11__["uniq"])(data).length !== data.length) {
            errors[fieldId] = errors[field] || [];
            errors[fieldId].push(_this2.props.intl.formatMessage(messages.uniqueItems));
          }
        });
      });

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_11__["keys"])(errors).length > 0) {
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
    /**
     * Move block handler
     * @method onMoveBlock
     * @param {number} dragIndex Drag index.
     * @param {number} hoverIndex Hover index.
     * @returns {undefined}
     */

  }, {
    key: "onMoveBlock",
    value: function onMoveBlock(dragIndex, hoverIndex) {
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(this.state.formData);
      this.setState({
        formData: _objectSpread({}, this.state.formData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, blocksLayoutFieldname, {
          items: lodash_move__WEBPACK_IMPORTED_MODULE_12___default()(this.state.formData[blocksLayoutFieldname].items, dragIndex, hoverIndex)
        }))
      });
    }
    /**
     *
     * @method onFocusPreviousBlock
     * @param {string} currentBlock The id of the current block
     * @param {node} blockNode The id of the current block
     * @returns {undefined}
     */

  }, {
    key: "onFocusPreviousBlock",
    value: function onFocusPreviousBlock(currentBlock, blockNode) {
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(this.state.formData);
      var currentIndex = this.state.formData[blocksLayoutFieldname].items.indexOf(currentBlock);

      if (currentIndex === 0) {
        // We are already at the top block don't do anything
        return;
      }

      var newindex = currentIndex - 1;
      blockNode.blur();
      this.onSelectBlock(this.state.formData[blocksLayoutFieldname].items[newindex]);
    }
    /**
     *
     * @method onFocusNextBlock
     * @param {string} currentBlock The id of the current block
     * @param {node} blockNode The id of the current block
     * @returns {undefined}
     */

  }, {
    key: "onFocusNextBlock",
    value: function onFocusNextBlock(currentBlock, blockNode) {
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(this.state.formData);
      var currentIndex = this.state.formData[blocksLayoutFieldname].items.indexOf(currentBlock);

      if (currentIndex === this.state.formData[blocksLayoutFieldname].items.length - 1) {
        // We are already at the bottom block don't do anything
        return;
      }

      var newindex = currentIndex + 1;
      blockNode.blur();
      this.onSelectBlock(this.state.formData[blocksLayoutFieldname].items[newindex]);
    }
    /**
     * handleKeyDown, sports a way to disable the listeners via an options named
     * parameter
     * @method handleKeyDown
     * @param {object} e Event
     * @param {number} index Block index
     * @param {string} block Block type
     * @param {node} node The block node
     * @returns {undefined}
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e, index, block, node) {
      var _ref2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
          _ref2$disableEnter = _ref2.disableEnter,
          disableEnter = _ref2$disableEnter === void 0 ? false : _ref2$disableEnter,
          _ref2$disableArrowUp = _ref2.disableArrowUp,
          disableArrowUp = _ref2$disableArrowUp === void 0 ? false : _ref2$disableArrowUp,
          _ref2$disableArrowDow = _ref2.disableArrowDown,
          disableArrowDown = _ref2$disableArrowDow === void 0 ? false : _ref2$disableArrowDow;

      console.log('in form', e, block, index, disableEnter);

      if (e.key === 'ArrowUp' && !disableArrowUp) {
        this.onFocusPreviousBlock(block, node);
        e.preventDefault();
      }

      if (e.key === 'ArrowDown' && !disableArrowDown) {
        this.onFocusNextBlock(block, node);
        e.preventDefault();
      }

      if (e.key === 'Enter' && !disableEnter) {
        this.onAddBlock('text', index + 1);
        e.preventDefault();
      }
    }
    /**
     * Render method.
     * @method render
     * @returns {string} Markup for the component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          schema = _this$props.schema,
          onCancel = _this$props.onCancel,
          onSubmit = _this$props.onSubmit;
      var formData = this.state.formData;
      var blocksFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksFieldname"])(formData);
      var blocksLayoutFieldname = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_19__["getBlocksLayoutFieldname"])(formData);
      var renderBlocks = formData[blocksLayoutFieldname].items;
      var blocksDict = formData[blocksFieldname];
      return this.props.visual ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "ui container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        }
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(renderBlocks, function (block, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["EditBlock"], {
          id: block,
          index: index,
          type: blocksDict[block]['@type'],
          key: block,
          handleKeyDown: _this3.handleKeyDown,
          onAddBlock: _this3.onAddBlock,
          onChangeBlock: _this3.onChangeBlock,
          onMutateBlock: _this3.onMutateBlock,
          onChangeField: _this3.onChangeField,
          onDeleteBlock: _this3.onDeleteBlock,
          onSelectBlock: _this3.onSelectBlock,
          onMoveBlock: _this3.onMoveBlock,
          onFocusPreviousBlock: _this3.onFocusPreviousBlock,
          onFocusNextBlock: _this3.onFocusNextBlock,
          properties: formData,
          data: blocksDict[block],
          pathname: _this3.props.pathname,
          block: block,
          selected: _this3.state.selected === block,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 528
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_17__["Portal"], {
        node:  false && false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        method: "post",
        onSubmit: this.onSubmit,
        error: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["keys"])(this.state.errors).length > 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        }
      }, schema && Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(schema.fieldsets, function (item) {
        return [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
          secondary: true,
          attached: true,
          key: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          }
        }, item.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
          attached: true,
          key: "fieldset-contents-".concat(item.title),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 563
          }
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(item.fields, function (field, index) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Field"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, schema.properties[field], {
            id: field,
            focus: index === 0,
            value: _this3.state.formData[field],
            required: schema.required.indexOf(field) !== -1,
            onChange: _this3.onChangeField,
            key: field,
            error: _this3.state.errors[field],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 565
            }
          }));
        }))];
      })))) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        method: "post",
        onSubmit: this.onSubmit,
        error: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["keys"])(this.state.errors).length > 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"].Group, {
        raised: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        }
      }, schema && schema.fieldsets.length > 1 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Tab"], {
        menu: {
          secondary: true,
          pointing: true,
          attached: true,
          tabular: true,
          className: 'formtabs'
        },
        panes: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(schema.fieldsets, function (item) {
          return {
            menuItem: item.title,
            render: function render() {
              return [_this3.props.title && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
                secondary: true,
                attached: true,
                key: _this3.props.title,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 602
                }
              }, _this3.props.title)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(item.fields, function (field, index) {
                return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Field"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, schema.properties[field], {
                  id: field,
                  fieldSet: item.title.toLowerCase(),
                  focus: index === 0,
                  value: _this3.state.formData[field],
                  required: schema.required.indexOf(field) !== -1,
                  onChange: _this3.onChangeField,
                  key: field,
                  error: _this3.state.errors[field],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 607
                  }
                }));
              })));
            }
          };
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        }
      }), schema && schema.fieldsets.length === 1 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        }
      }, this.props.title && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
        className: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        }
      }, this.props.title), this.props.description && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
        secondary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        }
      }, this.props.description), Object(lodash__WEBPACK_IMPORTED_MODULE_11__["keys"])(this.state.errors).length > 0 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Message"], {
        icon: "warning",
        negative: true,
        attached: true,
        header: this.props.intl.formatMessage(messages.error),
        content: this.props.intl.formatMessage(messages.thereWereSomeErrors),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }), this.props.error && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Message"], {
        icon: "warning",
        negative: true,
        attached: true,
        header: this.props.intl.formatMessage(messages.error),
        content: this.props.error.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        }
      }), Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(schema.fieldsets[0].fields, function (field) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Field"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, schema.properties[field], {
          id: field,
          value: _this3.state.formData[field],
          required: schema.required.indexOf(field) !== -1,
          onChange: _this3.onChangeField,
          key: field,
          error: _this3.state.errors[field],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652
          }
        }));
      })), !this.props.hideActions && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
        className: "actions",
        clearing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        }
      }, onSubmit && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        basic: true,
        primary: true,
        floated: "right",
        type: "submit",
        "aria-label": this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(messages.save),
        title: this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(messages.save),
        loading: this.props.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
        className: "circled",
        name: _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        }
      })), onCancel && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        basic: true,
        secondary: true,
        "aria-label": this.props.intl.formatMessage(messages.cancel),
        title: this.props.intl.formatMessage(messages.cancel),
        floated: "right",
        onClick: onCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
        className: "circled",
        name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696
        }
      }))))));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Form, "propTypes", {
  schema: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    fieldsets: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
      fields: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string),
      id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
      title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
    })),
    properties: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any),
    definitions: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any),
    required: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string)
  }),
  formData: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any),
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  submitLabel: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  resetAfterSubmit: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    message: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
  }),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  hideActions: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  description: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  visual: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  blocks: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object)
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Form, "defaultProps", {
  formData: null,
  onSubmit: null,
  onCancel: null,
  submitLabel: null,
  resetAfterSubmit: false,
  title: null,
  description: null,
  error: null,
  loading: null,
  hideActions: false,
  visual: false,
  blocks: [],
  pathname: '',
  schema: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["injectIntl"])(Form, {
  forwardRef: true
}));

/***/ })

};
//# sourceMappingURL=main.5aa21c777c715a7e548e.hot-update.js.map