exports.id = "main";
exports.modules = {

/***/ "./volto-mosaic/src/components/manage/Edit.jsx":
/*!*****************************************************!*\
  !*** ./volto-mosaic/src/components/manage/Edit.jsx ***!
  \*****************************************************/
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./volto-mosaic/src/components/manage/Form.jsx");
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _plone_volto_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/actions */ "./volto/src/actions/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/helpers */ "./volto/src/helpers/index.js");







var _jsxFileName = "/opt/fise/volto-mosaic/src/components/manage/Edit.jsx";
 // import VoltoEdit from '@plone/volto/components/manage/Edit/Edit';
















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({
  edit: {
    "id": "Edit {title}",
    "defaultMessage": "Edit {title}"
  },
  save: {
    "id": "Save",
    "defaultMessage": "Save"
  },
  cancel: {
    "id": "Cancel",
    "defaultMessage": "Cancel"
  }
});

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs EditComponent
   */
  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "form", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    _this.state = {
      visual: true
    };
    _this.onCancel = _this.onCancel.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getContent(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_22__["getBaseUrl"])(this.props.pathname));
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
      if (this.props.getRequest.loading && nextProps.getRequest.loaded) {
        this.props.getSchema(nextProps.content['@type']);
      }

      if (this.props.schemaRequest.loading && nextProps.schemaRequest.loaded) {
        if (!Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_22__["hasBlocksData"])(nextProps.schema.properties)) {
          this.setState({
            visual: false
          });
        }
      } // Hack for make the Plone site editable by Volto Editor without checkings


      if (this.props.content && this.props.content['@type'] === 'Plone Site') {
        this.setState({
          visual: true
        });
      }

      if (this.props.updateRequest.loading && nextProps.updateRequest.loaded) {
        this.props.history.push(this.props.returnUrl || Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_22__["getBaseUrl"])(this.props.pathname));
      }
    }
    /**
     * Submit handler
     * @method onSubmit
     * @param {object} data Form data.
     * @returns {undefined}
     */

  }, {
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.updateContent(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_22__["getBaseUrl"])(this.props.pathname), data);
    }
    /**
     * Cancel handler
     * @method onCancel
     * @returns {undefined}
     */

  }, {
    key: "onCancel",
    value: function onCancel() {
      this.props.history.push(this.props.returnUrl || Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_22__["getBaseUrl"])(this.props.pathname));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props,
          _this$props$schema,
          _this$props2,
          _this$props2$schema,
          _this2 = this;

      // This is the only thing different from the original. This version comes
      // from Volto 4.0.0.alpha-9
      var isMosaic = false;
      var content = this.props.content;
      if (content && this.props.content.layout === 'moosaic_tiles_view') isMosaic = true;
      if (content && this.props.content['@type'] === 'Plone Site') isMosaic = true;
      var FormImpl = isMosaic ? _Form__WEBPACK_IMPORTED_MODULE_8__["default"] : _plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Form"]; // const FwdFormImpl = React.forwardRef((props, ref) => (
      //   <FormImpl {...props} />
      // ));
      //

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "page-edit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_11___default.a, {
        title: ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$schema = _this$props.schema) === null || _this$props$schema === void 0 ? void 0 : _this$props$schema.title) ? this.props.intl.formatMessage(messages.edit, {
          title: this.props.schema.title
        }) : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FormImpl, {
        ref: this.form,
        schema: this.props.schema,
        formData: this.props.content,
        onSubmit: this.onSubmit,
        hideActions: true,
        pathname: this.props.pathname,
        visual: this.state.visual,
        title: ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$schema = _this$props2.schema) === null || _this$props2$schema === void 0 ? void 0 : _this$props2$schema.title) ? this.props.intl.formatMessage(messages.edit, {
          title: this.props.schema.title
        }) : null,
        loading: this.props.updateRequest.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_12__["Portal"], {
        node:  false && false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Toolbar"], {
        pathname: this.props.pathname,
        hideDefaultViewButtons: true,
        inner: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          id: "toolbar-save",
          className: "save",
          "aria-label": this.props.intl.formatMessage(messages.save),
          onClick: function onClick() {
            return _this2.form.current.onSubmit();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          name: _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
          className: "circled",
          size: "30px",
          title: this.props.intl.formatMessage(messages.save),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "cancel",
          "aria-label": this.props.intl.formatMessage(messages.cancel),
          onClick: function onClick() {
            return _this2.onCancel();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
          className: "circled",
          size: "30px",
          title: this.props.intl.formatMessage(messages.cancel),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      })), this.state.visual && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_12__["Portal"], {
        node:  false && false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Sidebar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Edit, "propTypes", {
  updateContent: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  getContent: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  getSchema: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  updateRequest: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,
    loaded: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool
  }).isRequired,
  schemaRequest: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,
    loaded: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool
  }).isRequired,
  getRequest: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,
    loaded: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool
  }).isRequired,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string.isRequired,
  returnUrl: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.shape({
    '@type': prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string
  }),
  schema: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.any)
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Edit, "defaultProps", {
  schema: {},
  content: null,
  returnUrl: null
});

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_16__["compose"])(Object(react_dnd__WEBPACK_IMPORTED_MODULE_17__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_18___default.a), react_intl__WEBPACK_IMPORTED_MODULE_10__["injectIntl"], Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(function (state, props) {
  return {
    content: state.content.data,
    schema: state.schema.schema,
    getRequest: state.content.get,
    schemaRequest: state.schema,
    updateRequest: state.content.update,
    pathname: props.location.pathname,
    returnUrl: query_string__WEBPACK_IMPORTED_MODULE_19___default.a.parse(props.location.search).return_url
  };
}, {
  updateContent: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_20__["updateContent"],
  getContent: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_20__["getContent"],
  getSchema: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_20__["getSchema"]
}))(Edit));

/***/ }),

/***/ "./volto-mosaic/src/index.js":
/*!***********************************!*\
  !*** ./volto-mosaic/src/index.js ***!
  \***********************************/
/*! exports provided: layoutViews, EditMosaic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutViews", function() { return layoutViews; });
/* harmony import */ var _components_manage_Edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/manage/Edit */ "./volto-mosaic/src/components/manage/Edit.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditMosaic", function() { return _components_manage_Edit__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_theme_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/theme/View */ "./volto-mosaic/src/components/theme/View.jsx");


var layoutViews = {
  moosaic_tiles_view: _components_theme_View__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ })

};
//# sourceMappingURL=main.17cc9ebf870b94338974.hot-update.js.map