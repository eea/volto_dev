exports.id = "main";
exports.modules = {

/***/ "./src/customizations/components/manage/Toolbar/Toolbar.jsx":
/*!******************************************************************!*\
  !*** ./src/customizations/components/manage/Toolbar/Toolbar.jsx ***!
  \******************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react/dist/commonjs/lib */ "semantic-ui-react/dist/commonjs/lib");
/* harmony import */ var semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_components_manage_Toolbar_More__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/More */ "./volto/src/components/manage/Toolbar/More.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_PersonalTools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/PersonalTools */ "./volto/src/components/manage/Toolbar/PersonalTools.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Types */ "./volto/src/components/manage/Toolbar/Types.jsx");
/* harmony import */ var _plone_volto_components_manage_Preferences_PersonalInformation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/components/manage/Preferences/PersonalInformation */ "./volto/src/components/manage/Preferences/PersonalInformation.jsx");
/* harmony import */ var _plone_volto_components_manage_Preferences_PersonalPreferences__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/components/manage/Preferences/PersonalPreferences */ "./volto/src/components/manage/Preferences/PersonalPreferences.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_StandardWrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/StandardWrapper */ "./volto/src/components/manage/Toolbar/StandardWrapper.jsx");
/* harmony import */ var _plone_volto_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/actions */ "./volto/src/actions/index.js");
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @plone/volto/components */ "./volto/src/components/index.js");
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @plone/volto/helpers */ "./volto/src/helpers/index.js");
/* harmony import */ var _plone_volto_components_manage_Toolbar_pastanaga_small_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/pastanaga-small.svg */ "./volto/src/components/manage/Toolbar/pastanaga-small.svg");
/* harmony import */ var _plone_volto_components_manage_Toolbar_pastanaga_small_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_components_manage_Toolbar_pastanaga_small_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _plone_volto_components_manage_Toolbar_pastanaga_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/pastanaga.svg */ "./volto/src/components/manage/Toolbar/pastanaga.svg");
/* harmony import */ var _plone_volto_components_manage_Toolbar_pastanaga_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_components_manage_Toolbar_pastanaga_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @plone/volto/icons/pen.svg */ "./volto/src/icons/pen.svg");
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @plone/volto/icons/folder.svg */ "./volto/src/icons/folder.svg");
/* harmony import */ var _plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @plone/volto/icons/add-document.svg */ "./volto/src/icons/add-document.svg");
/* harmony import */ var _plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @plone/volto/icons/more.svg */ "./volto/src/icons/more.svg");
/* harmony import */ var _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _plone_volto_icons_user_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @plone/volto/icons/user.svg */ "./volto/src/icons/user.svg");
/* harmony import */ var _plone_volto_icons_user_svg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_user_svg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_32__);








var _jsxFileName = "/opt/fise/src/customizations/components/manage/Toolbar/Toolbar.jsx";

/**
 * Toolbar component.
 * @module components/manage/Toolbar/Toolbar
 */

























var toolbarComponents = {
  personalTools: {
    component: _plone_volto_components_manage_Toolbar_PersonalTools__WEBPACK_IMPORTED_MODULE_17__["default"],
    wrapper: null
  },
  more: {
    component: _plone_volto_components_manage_Toolbar_More__WEBPACK_IMPORTED_MODULE_16__["default"],
    wrapper: null
  },
  types: {
    component: _plone_volto_components_manage_Toolbar_Types__WEBPACK_IMPORTED_MODULE_18__["default"],
    wrapper: null
  },
  profile: {
    component: _plone_volto_components_manage_Preferences_PersonalInformation__WEBPACK_IMPORTED_MODULE_19__["default"],
    wrapper: _plone_volto_components_manage_Toolbar_StandardWrapper__WEBPACK_IMPORTED_MODULE_21__["default"],
    hideToolbarBody: true
  },
  preferences: {
    component: _plone_volto_components_manage_Preferences_PersonalPreferences__WEBPACK_IMPORTED_MODULE_20__["default"],
    wrapper: _plone_volto_components_manage_Toolbar_StandardWrapper__WEBPACK_IMPORTED_MODULE_21__["default"],
    hideToolbarBody: true
  }
};
/**
 * Toolbar container class.
 * @class Toolbar
 * @extends Component
 */

var Toolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Toolbar, _Component);

  function Toolbar() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Toolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Toolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      expanded: react_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.load('toolbar_expanded') !== 'false',
      showMenu: false,
      menuStyle: {},
      menuComponents: [],
      loadedComponents: [],
      hideToolbarBody: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toolbarWindow", react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleShrink", function () {
      react_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.save('toolbar_expanded', !_this.state.expanded, {
        expires: new Date((Math.pow(2, 31) - 1) * 1000),
        path: '/'
      });

      _this.setState(function (state) {
        return {
          expanded: !state.expanded
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "closeMenu", function () {
      return _this.setState(function () {
        return {
          showMenu: false,
          loadedComponents: []
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "loadComponent", function (type) {
      var loadedComponents = _this.state.loadedComponents;

      if (!_this.state.loadedComponents.includes(type)) {
        _this.setState({
          loadedComponents: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(loadedComponents), [type]),
          hideToolbarBody: toolbarComponents[type].hideToolbarBody || false
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "unloadComponent", function () {
      _this.setState(function (state) {
        return {
          loadedComponents: state.loadedComponents.slice(0, -1),
          hideToolbarBody: toolbarComponents[state.loadedComponents[state.loadedComponents.length - 2]].hideToolbarBody || false
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleMenu", function (e, selector) {
      if (_this.state.showMenu) {
        _this.closeMenu();

        return;
      } // PersonalTools always shows at bottom


      if (selector === 'personalTools') {
        _this.setState(function (state) {
          return {
            showMenu: !state.showMenu,
            menuStyle: {
              bottom: 0
            }
          };
        });
      } else {
        _this.setState(function (state) {
          return {
            showMenu: !state.showMenu,
            menuStyle: {
              top: 0
            }
          };
        });
      }

      _this.loadComponent(selector);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleClickOutside", function (e) {
      return;
      if (_this.pusher && Object(semantic_ui_react_dist_commonjs_lib__WEBPACK_IMPORTED_MODULE_12__["doesNodeContainClick"])(_this.pusher, e)) return;

      _this.closeMenu();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Toolbar, [{
    key: "componentDidMount",

    /**
     * Component will mount
     * @method componentDidMount
     * @returns {undefined}
     */
    value: function componentDidMount() {
      this.props.listActions(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["getBaseUrl"])(this.props.pathname));
      this.props.getTypes(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["getBaseUrl"])(this.props.pathname));
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
      if (nextProps.pathname !== this.props.pathname) {
        this.props.listActions(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["getBaseUrl"])(nextProps.pathname));
        this.props.getTypes(Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["getBaseUrl"])(nextProps.pathname));
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
      document.removeEventListener('mousedown', this.handleClickOutside, false);
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

      var path = Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["getBaseUrl"])(this.props.pathname);
      var editAction = Object(lodash__WEBPACK_IMPORTED_MODULE_14__["find"])(this.props.actions.object, {
        id: 'edit'
      });
      var folderContentsAction = Object(lodash__WEBPACK_IMPORTED_MODULE_14__["find"])(this.props.actions.object, {
        id: 'folderContents'
      });
      var expanded = this.state.expanded;
      return this.props.token && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["BodyClass"], {
        className: expanded ? 'has-toolbar' : 'has-toolbar-collapsed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: this.state.menuStyle,
        className: this.state.showMenu ? 'toolbar-content show' : 'toolbar-content',
        ref: this.toolbarWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, this.state.showMenu && // This sets the scroll locker in the body tag in mobile
      react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_24__["BodyClass"], {
        className: "has-toolbar-menu-open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pusher-puller",
        ref: function ref(node) {
          return _this2.pusher = node;
        },
        style: {
          transform: this.toolbarWindow.current ? "translateX(-".concat((this.state.loadedComponents.length - 1) * this.toolbarWindow.current.getBoundingClientRect().width, "px)") : null
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, this.state.loadedComponents.map(function (component, index) {
        return function () {
          var ToolbarComponent = toolbarComponents[component].component;
          var WrapperComponent = toolbarComponents[component].wrapper;
          var haveActions = toolbarComponents[component].hideToolbarBody;

          if (WrapperComponent) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(WrapperComponent, {
              componentName: component,
              pathname: _this2.props.pathname,
              loadComponent: _this2.loadComponent,
              unloadComponent: _this2.unloadComponent,
              componentIndex: index,
              theToolbar: _this2.theToolbar,
              key: "personalToolsComponent-".concat(index),
              closeMenu: _this2.closeMenu,
              hasActions: haveActions,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251
              }
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ToolbarComponent, {
              pathname: _this2.props.pathname,
              loadComponent: _this2.loadComponent,
              unloadComponent: _this2.unloadComponent,
              componentIndex: index,
              theToolbar: _this2.theToolbar,
              closeMenu: _this2.closeMenu,
              isToolbarEmbedded: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 262
              }
            }));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ToolbarComponent, {
              pathname: _this2.props.pathname,
              loadComponent: _this2.loadComponent,
              unloadComponent: _this2.unloadComponent,
              componentIndex: index,
              theToolbar: _this2.theToolbar,
              key: "personalToolsComponent-".concat(index),
              closeMenu: _this2.closeMenu,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 275
              }
            });
          }
        }();
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: this.state.expanded ? 'toolbar expanded' : 'toolbar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar-actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, this.props.hideDefaultViewButtons && this.props.inner && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.inner), !this.props.hideDefaultViewButtons && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, editAction && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        "aria-label": "Edit",
        className: "edit",
        to: "".concat(path, "/edit"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        name: _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
        size: "30px",
        className: "circled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      })), this.props.content && this.props.content.is_folderish && folderContentsAction && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        "aria-label": "Contents",
        to: "".concat(path, "/contents"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        name: _plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      })), this.props.content && this.props.content.is_folderish && this.props.types.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "add",
        "aria-label": "Add",
        onClick: function onClick(e) {
          return _this2.toggleMenu(e, 'types');
        },
        tabIndex: 0,
        id: "toolbar-add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        name: _plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_29___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar-button-spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "more",
        "aria-label": "More",
        onClick: function onClick(e) {
          return _this2.toggleMenu(e, 'more');
        },
        tabIndex: 0,
        id: "toolbar-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        className: "mobile hidden",
        name: _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_30___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }), this.state.showMenu ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        className: "mobile only",
        name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_32___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        className: "mobile only",
        name: _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_30___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "minipastanaga",
        src: _plone_volto_components_manage_Toolbar_pastanaga_small_svg__WEBPACK_IMPORTED_MODULE_25___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }), !this.props.hideDefaultViewButtons && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "user",
        "aria-label": "Personal tools",
        onClick: function onClick(e) {
          return _this2.toggleMenu(e, 'personalTools');
        },
        tabIndex: 0,
        id: "toolbar-personal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_23__["Icon"], {
        name: _plone_volto_icons_user_svg__WEBPACK_IMPORTED_MODULE_31___default.a,
        size: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pastanagalogo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _plone_volto_components_manage_Toolbar_pastanaga_svg__WEBPACK_IMPORTED_MODULE_26___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar-handler",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, this.props.content ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        "aria-label": "Shrink toolbar",
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, this.props.content.review_state, this.props.content && this.props.content.review_state)),
        onClick: this.handleShrink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }) : '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pusher",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }));
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Toolbar, "propTypes", {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    object: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object),
    object_buttons: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object),
    user: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object)
  }),
  token: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    '@type': prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    is_folderish: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    review_state: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
  }),
  getTypes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  types: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    '@id': prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    addable: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
  })),
  listActions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  inner: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.element.isRequired,
  hideDefaultViewButtons: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Toolbar, "defaultProps", {
  actions: null,
  token: null,
  content: null,
  hideDefaultViewButtons: false,
  types: []
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state, props) {
  return {
    actions: state.actions.actions,
    token: state.userSession.token,
    content: state.content.data,
    pathname: props.pathname,
    types: Object(lodash__WEBPACK_IMPORTED_MODULE_14__["filter"])(state.types.types, 'addable')
  };
}, {
  getTypes: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_22__["getTypes"],
  listActions: _plone_volto_actions__WEBPACK_IMPORTED_MODULE_22__["listActions"]
})(Toolbar));

/***/ })

};
//# sourceMappingURL=main.5c710a89d093f7dd5072.hot-update.js.map