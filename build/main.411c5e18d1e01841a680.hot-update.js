exports.id = "main";
exports.modules = {

/***/ "./src/components/manage/Blocks/TableauBlock/TableauBlockEdit.jsx":
/*!************************************************************************!*\
  !*** ./src/components/manage/Blocks/TableauBlock/TableauBlockEdit.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _theme_TableauView_TableauReport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../theme/TableauView/TableauReport */ "./src/components/theme/TableauView/TableauReport.jsx");







var _jsxFileName = "/opt/fise/src/components/manage/Blocks/TableauBlock/TableauBlockEdit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import PropTypes from 'prop-types';



 // const url = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';

var StackedBarChart =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(StackedBarChart, _Component);

  function StackedBarChart(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StackedBarChart);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StackedBarChart).call(this, props));
    var data = _this.props.data.tableauData || {};
    var show =  false ? undefined : false;
    var filters = data.filters && data.sheetname ? data.filters[data.sheetname] : {};
    _this.state = {
      show: show,
      tableauData: data,
      url: data.url || '',
      filters: filters,
      sheetname: data.sheetname || ''
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getChartData = _this.getChartData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.saveCallback = _this.saveCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StackedBarChart, [{
    key: "handleChange",
    value: function handleChange(e) {
      var data = e.target.value;

      try {
        data = e.target.value;
        this.setState({
          url: data
        } // this.onSubmit,
        );
      } catch (_unused) {
        console.warning('Invalid JSON data: ', data);
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.props.onChangeBlock(this.props.block, _objectSpread({}, this.props.data, {
        tableauData: this.state.tableauData
      }));
      this.props.handleClose();
    }
  }, {
    key: "saveCallback",
    value: function saveCallback(saveData) {
      console.log('Received save data', saveData);
      var stateData = JSON.parse(JSON.stringify(this.state));
      this.setState({
        tableauData: saveData
      }, this.onSubmit);
    }
  }, {
    key: "getChartData",
    value: function getChartData() {
      var tableauData = this.state.tableauData;

      if (typeof tableauData == 'string') {
        try {
          tableauData = tableauData;
        } catch (error) {
          console.log(error);
          tableauData = {};
        }
      }

      console.log(tableauData);
      return tableauData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (true) return ''; // const TableauReport = require('tableau-react');

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block chartWrapperEdit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "block-inner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.show && this.state.url ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "image-add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["ResponsiveContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_theme_TableauView_TableauReport__WEBPACK_IMPORTED_MODULE_10__["default"], {
        url: this.state.url,
        filters: this.state.filters,
        sheetname: this.state.sheetname,
        callback: this.saveCallback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "image-add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "ui placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "image header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "medium line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "class": "short line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Enter JSON data"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        defaultValue: this.state.url,
        placeholder: "Enter tableau URL",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            show: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Show dashboard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Save"))));
    }
  }]);

  return StackedBarChart;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StackedBarChart);

/***/ }),

/***/ "./src/components/theme/TableauView/TableauReport.jsx":
/*!************************************************************!*\
  !*** ./src/components/theme/TableauView/TableauReport.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shallowequal */ "shallowequal");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tokenizeUrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tokenizeUrl */ "./src/components/theme/TableauView/tokenizeUrl.js");







var _jsxFileName = "/opt/fise/src/components/theme/TableauView/TableauReport.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import { Promise } from 'es6-promise';



var propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  url: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  parameters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  options: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  token: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  query: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
var defaultProps = {
  loading: false,
  parameters: {},
  filters: {},
  options: {},
  query: '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
};

var TableauReport =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TableauReport, _React$Component);

  function TableauReport(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TableauReport);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TableauReport).call(this, props));
    _this.state = {
      filters: props.filters,
      parameters: props.parameters,
      saveData: {
        url: props.url,
        filters: {}
      }
    };

    if (false) {} else {// this.api = null;
      }

    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TableauReport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initTableau();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isReportChanged = nextProps.url !== this.props.url;
      var isFiltersChanged = !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.props.filters, nextProps.filters, this.compareArrays);
      var isParametersChanged = !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.props.parameters, nextProps.parameters);
      var isLoading = this.state.loading; // Only report is changed - re-initialize

      if (isReportChanged) {
        this.initTableau(nextProps.url);
      } // Only filters are changed, apply via the API


      if (!isReportChanged && isFiltersChanged && !isLoading) {
        this.applyFilters(nextProps.filters);
      } // Only parameters are changed, apply via the API


      if (!isReportChanged && isParametersChanged && !isLoading) {
        this.applyParameters(nextProps.parameters);
      } // token change, validate it.


      if (nextProps.token !== this.props.token) {
        this.setState({
          didInvalidateToken: false
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.props.callback && this.props.callback(this.state.saveData);
    }
    /**
     * Compares the values of filters to see if they are the same.
     * @param  {Array<Number>} a
     * @param  {Array<Number>} b
     * @return {Boolean}
     */

  }, {
    key: "compareArrays",
    value: function compareArrays(a, b) {
      if (Array.isArray(a) && Array.isArray(b)) {
        return a.sort().toString() === b.sort().toString();
      }

      return undefined;
    }
    /**
     * Execute a callback when an array of promises complete, regardless of
     * whether any throw an error.
     */

  }, {
    key: "onComplete",
    value: function onComplete(promises, cb) {
      Promise.all(promises).then(function () {
        return cb();
      }, function () {
        return cb();
      });
    }
    /**
     * Returns a vizUrl, tokenizing it if a token is passed and immediately
     * invalidating it to prevent it from being used more than once.
     */

  }, {
    key: "getUrl",
    value: function getUrl(nextUrl) {
      var newUrl = nextUrl || this.props.url;
      var _this$props = this.props,
          token = _this$props.token,
          query = _this$props.query;
      var parsed = url__WEBPACK_IMPORTED_MODULE_9___default.a.parse(newUrl, true);

      if (!this.state.didInvalidateToken && token) {
        this.invalidateToken();
        return Object(_tokenizeUrl__WEBPACK_IMPORTED_MODULE_11__["default"])(newUrl, token) + query;
      }

      return parsed.protocol + '//' + parsed.host + parsed.pathname + query;
    } // invalidateToken() {
    //   this.setState({ didInvalidateToken: true });
    // }

    /**
     * Asynchronously applies filters to the worksheet, excluding those that have
     * already been applied, which is determined by checking against state.
     * @param  {Object} filters
     * @return {void}
     */
    // applyFilters(filters) {
    //   const REPLACE = Tableau.FilterUpdateType.REPLACE;
    //   const promises = [];
    //
    //   this.setState({ loading: true });
    //
    //   for (const key in filters) {
    //     if (
    //       !this.state.filters.hasOwnProperty(key) ||
    //       !this.compareArrays(this.state.filters[key], filters[key])
    //     ) {
    //       promises.push(this.sheet.applyFilterAsync(key, filters[key], REPLACE));
    //     }
    //   }
    //
    //   this.onComplete(promises, () => this.setState({ loading: false, filters }));
    // }
    //
    // applyParameters(parameters) {
    //   const promises = [];
    //
    //   for (const key in parameters) {
    //     if (
    //       !this.state.parameters.hasOwnProperty(key) ||
    //       this.state.parameters[key] !== parameters[key]
    //     ) {
    //       const val = parameters[key];
    //       // Ensure that parameters are applied only when we have a workbook
    //       if (this.workbook && this.workbook.changeParameterValueAsync) {
    //         promises.push(this.workbook.changeParameterValueAsync(key, val));
    //       }
    //     }
    //   }
    //
    //   this.onComplete(promises, () =>
    //     this.setState({ loading: false, parameters }),
    //   );
    // }

    /**
     * Initialize the viz via the Tableau JS API.
     * @return {void}
     */

  }, {
    key: "initTableau",
    value: function initTableau(nextUrl) {
      var _this2 = this;

      if (true) return;
      var _this$props2 = this.props,
          filters = _this$props2.filters,
          parameters = _this$props2.parameters;
      var vizUrl = this.getUrl(nextUrl);
      console.log('initing tableau', vizUrl);

      var options = _objectSpread({}, filters, {}, parameters, {}, this.props.options, {
        // hideTabs: true,
        onFirstInteractive: function onFirstInteractive() {
          console.log('On first interacitve');
          _this2.workbook = _this2.viz.getWorkbook();

          var activeSheet = _this2.workbook.getActiveSheet();

          var saveData = JSON.parse(JSON.stringify(_this2.state.saveData));
          saveData['url'] = _this2.viz.getUrl();
          saveData['sheetname'] = activeSheet.getName();
          console.log('urls', _this2.props.url, _this2.state.saveData.url);

          if (_this2.props.url !== _this2.state.saveData.url) {
            _this2.setState({
              saveData: saveData
            }, _this2.onChange);
          } else {
            _this2.setState({
              saveData: saveData
            });
          }

          _this2.viz.addEventListener(_this2.api.tableauSoftware.TableauEventName.TAB_SWITCH, function (e) {
            var sheetname = e.getNewSheetName();

            _this2.viz.getCurrentUrlAsync().then(function (r) {
              var save = _objectSpread({}, _this2.state.saveData, {
                sheetname: sheetname,
                url: r,
                filters: _objectSpread({}, _this2.state.saveData.filters)
              });

              _this2.setState({
                saveData: save
              }, _this2.onChange);
            });
          });

          _this2.viz.addEventListener(_this2.api.tableauSoftware.TableauEventName.FILTER_CHANGE, function (e) {
            console.log('changed filter');
            e.getFilterAsync().then(function (r) {
              console.log('filter async', r);
              var name = r.$caption;
              var values = r.$appliedValues.map(function (e) {
                return e.value;
              });
              var sheetname = _this2.state.saveData.sheetname;

              var save = _objectSpread({}, _this2.state.saveData, {
                filters: _objectSpread({}, _this2.state.saveData.filters, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, sheetname, _objectSpread({}, _this2.state.saveData.filters[sheetname] || {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, values))))
              });

              _this2.setState({
                saveData: save
              }, _this2.onChange);
            });
          });
        }
      });

      console.log('the options', options); // cleanup

      if (this.viz) {
        this.viz.dispose();
        this.viz = null;
      }

      this.viz = new this.api.tableauSoftware.Viz(this.container, vizUrl, options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (true) return '';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(c) {
          return _this3.container = c;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      });
    }
  }]);

  return TableauReport;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

TableauReport.propTypes = propTypes;
TableauReport.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TableauReport);

/***/ }),

/***/ "./src/components/theme/TableauView/tokenizeUrl.js":
/*!*********************************************************!*\
  !*** ./src/components/theme/TableauView/tokenizeUrl.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);


function tokenizeUrl(_url, token) {
  var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(_url, true);
  var protocol = parsed.protocol,
      host = parsed.host,
      pathname = parsed.pathname;
  return "".concat(protocol, "//").concat(host, "/trusted/").concat(token).concat(pathname);
}

/* harmony default export */ __webpack_exports__["default"] = (tokenizeUrl);

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
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/TableauBlock/TableauBlockView'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      view: !(function webpackMissingModule() { var e = new Error("Cannot find module './components/manage/Blocks/TableauBlock/TableauBlockView'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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

/***/ }),

/***/ "shallowequal":
/*!*******************************!*\
  !*** external "shallowequal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shallowequal");

/***/ })

};
//# sourceMappingURL=main.411c5e18d1e01841a680.hot-update.js.map