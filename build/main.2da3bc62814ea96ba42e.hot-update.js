exports.id = "main";
exports.modules = {

/***/ "./src/components/manage/Blocks/TableauBlock/TableauBlockView.jsx":
/*!************************************************************************!*\
  !*** ./src/components/manage/Blocks/TableauBlock/TableauBlockView.jsx ***!
  \************************************************************************/
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
/* harmony import */ var _theme_TableauView_TableauReport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/TableauView/TableauReport */ "./src/components/theme/TableauView/TableauReport.jsx");





var _jsxFileName = "/opt/fise/src/components/manage/Blocks/TableauBlock/TableauBlockView.jsx";



var TableauBlockView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TableauBlockView, _Component);

  function TableauBlockView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TableauBlockView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TableauBlockView).call(this, props));
    var data = _this.props.data.tableauData || {};
    var filters = data.filters && data.sheetname ? data.filters[data.sheetname] : {};
    _this.state = {
      show:  true ? false : undefined,
      url: data.url || '',
      sheetname: data.sheetname || '',
      filters: filters
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TableauBlockView, [{
    key: "render",
    value: function render() {
      if (true) return '';
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chartWrapperView",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.state.show && this.state.url ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_theme_TableauView_TableauReport__WEBPACK_IMPORTED_MODULE_6__["default"], {
        url: this.state.url,
        filters: this.state.filters,
        sheetname: this.state.sheetname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Invalid or missing data."));
    }
  }]);

  return TableauBlockView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TableauBlockView);

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
/* harmony import */ var _components_manage_Blocks_ChartBlock_ChartBlockEdit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manage/Blocks/ChartBlock/ChartBlockEdit */ "./src/components/manage/Blocks/ChartBlock/ChartBlockEdit.jsx");
/* harmony import */ var _components_manage_Blocks_ChartBlock_ChartBlockView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manage/Blocks/ChartBlock/ChartBlockView */ "./src/components/manage/Blocks/ChartBlock/ChartBlockView.jsx");
/* harmony import */ var _components_manage_Blocks_EuropeCompareBlock_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage/Blocks/EuropeCompareBlock/Edit */ "./src/components/manage/Blocks/EuropeCompareBlock/Edit.jsx");
/* harmony import */ var _components_manage_Blocks_EuropeCompareBlock_View__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage/Blocks/EuropeCompareBlock/View */ "./src/components/manage/Blocks/EuropeCompareBlock/View.jsx");
/* harmony import */ var _components_manage_Blocks_EuropeForestBlock_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manage/Blocks/EuropeForestBlock/Edit */ "./src/components/manage/Blocks/EuropeForestBlock/Edit.jsx");
/* harmony import */ var _components_manage_Blocks_EuropeForestBlock_View__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/manage/Blocks/EuropeForestBlock/View */ "./src/components/manage/Blocks/EuropeForestBlock/View.jsx");
/* harmony import */ var _components_manage_Blocks_PlotlyChart_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/manage/Blocks/PlotlyChart/Edit */ "./src/components/manage/Blocks/PlotlyChart/Edit.jsx");
/* harmony import */ var _components_manage_Blocks_PlotlyChart_View__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/manage/Blocks/PlotlyChart/View */ "./src/components/manage/Blocks/PlotlyChart/View.jsx");
/* harmony import */ var _components_manage_Blocks_TableauBlock_TableauBlockEdit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/manage/Blocks/TableauBlock/TableauBlockEdit */ "./src/components/manage/Blocks/TableauBlock/TableauBlockEdit.jsx");
/* harmony import */ var _components_manage_Blocks_TableauBlock_TableauBlockView__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/manage/Blocks/TableauBlock/TableauBlockView */ "./src/components/manage/Blocks/TableauBlock/TableauBlockView.jsx");
/* harmony import */ var _components_manage_Blocks_Text_Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/manage/Blocks/Text/Edit */ "./src/components/manage/Blocks/Text/Edit.jsx");
/* harmony import */ var _components_manage_Blocks_Text_View__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/manage/Blocks/Text/View */ "./src/components/manage/Blocks/Text/View.jsx");
/* harmony import */ var _components_theme_Portlets_ForestMetadata__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/theme/Portlets/ForestMetadata */ "./src/components/theme/Portlets/ForestMetadata.jsx");
/* harmony import */ var _components_manage_Slider_Portlet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/manage/Slider/Portlet */ "./src/components/manage/Slider/Portlet.jsx");
/* harmony import */ var _components_theme_HomepageView_HomepageView__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/theme/HomepageView/HomepageView */ "./src/components/theme/HomepageView/HomepageView.jsx");
/* harmony import */ var _components_theme_VisualizationView_View__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/theme/VisualizationView/View */ "./src/components/theme/VisualizationView/View.jsx");
/* harmony import */ var draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! draft-js-buttons/lib/utils/createInlineStyleButton */ "draft-js-buttons/lib/utils/createInlineStyleButton");
/* harmony import */ var draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @plone/volto/icons/underline.svg */ "./volto/src/icons/underline.svg");
/* harmony import */ var _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @plone/volto/icons/world.svg */ "./volto/src/icons/world.svg");
/* harmony import */ var _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _volto_mosaic_src__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../volto-mosaic/src */ "./volto-mosaic/src/index.js");


var _jsxFileName = "/opt/fise/src/config.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















 // Display types
// import CountryView from '~/components/theme/CountryView/CountryView';
// import CountryPageView from '~/components/theme/CountryPageView/CountryPageView';








var Underline = draft_js_buttons_lib_utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_24___default()({
  style: 'UNDERLINE',
  children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_25__["default"], {
    name: _plone_volto_icons_underline_svg__WEBPACK_IMPORTED_MODULE_26___default.a,
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
    homepage_view: _components_theme_HomepageView_HomepageView__WEBPACK_IMPORTED_MODULE_22__["default"]
  }, _volto_mosaic_src__WEBPACK_IMPORTED_MODULE_28__["layoutViews"]),
  contentTypesViews: _objectSpread({}, _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["views"].contentTypesViews, {
    visualization: _components_theme_VisualizationView_View__WEBPACK_IMPORTED_MODULE_23__["default"]
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
      view: _components_manage_Blocks_EuropeCompareBlock_View__WEBPACK_IMPORTED_MODULE_12__["default"],
      edit: _components_manage_Blocks_EuropeCompareBlock_Edit__WEBPACK_IMPORTED_MODULE_11__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
      group: 'forests_specific'
    },
    europe_forest_block: {
      id: 'europe_forest_block',
      title: 'Europe Forest Area Block',
      view: _components_manage_Blocks_EuropeForestBlock_View__WEBPACK_IMPORTED_MODULE_14__["default"],
      edit: _components_manage_Blocks_EuropeForestBlock_Edit__WEBPACK_IMPORTED_MODULE_13__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
      group: 'forests_specific'
    },
    embed_chart: {
      id: 'embed_chart',
      title: 'Embed Chart',
      view: _components_manage_Blocks_ChartBlock_ChartBlockView__WEBPACK_IMPORTED_MODULE_10__["default"],
      edit: _components_manage_Blocks_ChartBlock_ChartBlockEdit__WEBPACK_IMPORTED_MODULE_9__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
      group: 'custom_addons'
    },
    plotly_chart: {
      id: 'plotly_chart',
      title: 'Plotly Chart',
      view: _components_manage_Blocks_PlotlyChart_View__WEBPACK_IMPORTED_MODULE_16__["default"],
      edit: _components_manage_Blocks_PlotlyChart_Edit__WEBPACK_IMPORTED_MODULE_15__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
      group: 'custom_addons'
    },
    tableau: {
      id: 'tableau',
      title: 'Tableau',
      view: _components_manage_Blocks_TableauBlock_TableauBlockView__WEBPACK_IMPORTED_MODULE_30__["default"],
      edit: _components_manage_Blocks_TableauBlock_TableauBlockEdit__WEBPACK_IMPORTED_MODULE_29__["default"],
      icon: _plone_volto_icons_world_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
      group: 'custom_addons'
    },
    cktext: {
      id: 'cktext',
      group: 'text',
      title: 'CKEditor',
      view: _components_manage_Blocks_Text_View__WEBPACK_IMPORTED_MODULE_19__["default"],
      edit: _components_manage_Blocks_Text_Edit__WEBPACK_IMPORTED_MODULE_18__["default"],
      icon: _plone_volto_config__WEBPACK_IMPORTED_MODULE_3__["blocks"].blocksConfig.text.icon
    }
  })
});
var portlets = [_components_theme_Portlets_ForestMetadata__WEBPACK_IMPORTED_MODULE_20__["default"], _components_manage_Slider_Portlet__WEBPACK_IMPORTED_MODULE_21__["default"]];

/***/ })

};
//# sourceMappingURL=main.2da3bc62814ea96ba42e.hot-update.js.map