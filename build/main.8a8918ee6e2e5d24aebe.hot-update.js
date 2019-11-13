exports.id = "main";
exports.modules = {

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js ***!
  \********************************************************************************/
/*! exports provided: create, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var injectScriptTag = function (scriptId, doc, url, callback) {
    var scriptTag = doc.createElement('script');
    scriptTag.referrerPolicy = 'origin';
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
var create = function () {
    return {
        listeners: [],
        scriptId: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js ***!
  \***************************************************************************/
/*! exports provided: getTinymce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTinymce", function() { return getTinymce; });
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js ***!
  \*************************************************************************/
/*! exports provided: isFunction, bindHandlers, uuid, isTextarea, mergePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindHandlers", function() { return bindHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextarea", function() { return isTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergePlugins", function() { return mergePlugins; });
/* harmony import */ var _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditorPropTypes */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var isFunction = function (x) { return typeof x === 'function'; };
var isEventProp = function (name) {
    return name in _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__["eventPropTypes"];
};
var findEventHandlers = function (props) {
    return Object.keys(props)
        .filter(isEventProp)
        .filter(function (name) { return isFunction(props[name]); })
        .map(function (name) { return ({
        handler: props[name],
        eventName: name.substring(2)
    }); });
};
var bindHandlers = function (editor, props, boundHandlers) {
    findEventHandlers(props).forEach(function (found) {
        // Unbind old handler
        var oldHandler = boundHandlers[found.eventName];
        if (isFunction(oldHandler)) {
            editor.off(found.eventName, oldHandler);
        }
        // Bind new handler
        var newHandler = function (e) { return found.handler(e, editor); };
        boundHandlers[found.eventName] = newHandler;
        editor.on(found.eventName, newHandler);
    });
};
var unique = 0;
var uuid = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js ***!
  \*************************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var scriptState = _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__["create"]();
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = _super.call(this, props) || this;
        _this.initialise = function () {
            var finalInit = __assign({}, _this.props.init, { target: _this.elementRef.current, readonly: _this.props.disabled, inline: _this.inline, plugins: Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["mergePlugins"])(_this.props.init && _this.props.init.plugins, _this.props.plugins), toolbar: _this.props.toolbar || (_this.props.init && _this.props.init.toolbar), setup: function (editor) {
                    _this.editor = editor;
                    editor.on('init', function (e) {
                        _this.initEditor(e, editor);
                    });
                    if (_this.props.init && typeof _this.props.init.setup === 'function') {
                        _this.props.init.setup(editor);
                    }
                } });
            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isTextarea"])(_this.elementRef.current)) {
                _this.elementRef.current.style.visibility = '';
            }
            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])().init(finalInit);
        };
        _this.id = _this.props.id || Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])('tiny-react');
        _this.elementRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.inline = _this.props.inline ? _this.props.inline : _this.props.init && _this.props.init.inline;
        _this.boundHandlers = {};
        return _this;
    }
    Editor.prototype.componentDidUpdate = function (prevProps) {
        if (this.editor && this.editor.initialized) {
            Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["bindHandlers"])(this.editor, this.props, this.boundHandlers);
            this.currentContent = this.currentContent || this.editor.getContent();
            if (typeof this.props.value === 'string' && this.props.value !== prevProps.value && this.props.value !== this.currentContent) {
                this.editor.setContent(this.props.value);
            }
            if (typeof this.props.disabled === 'boolean' && this.props.disabled !== prevProps.disabled) {
                this.editor.setMode(this.props.disabled ? 'readonly' : 'design');
            }
        }
    };
    Editor.prototype.componentDidMount = function () {
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])() !== null) {
            this.initialise();
        }
        else if (this.elementRef.current && this.elementRef.current.ownerDocument) {
            var doc = this.elementRef.current.ownerDocument;
            var channel = this.props.cloudChannel;
            var apiKey = this.props.apiKey ? this.props.apiKey : 'no-api-key';
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__["load"](scriptState, doc, "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js", this.initialise);
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])() !== null) {
            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])().remove(this.editor);
        }
    };
    Editor.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor.prototype.initEditor = function (initEvent, editor) {
        var _this = this;
        var value = typeof this.props.value === 'string' ? this.props.value : typeof this.props.initialValue === 'string' ? this.props.initialValue : '';
        editor.setContent(value);
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(this.props.onEditorChange)) {
            editor.on('change keyup setcontent', function (e) {
                var newContent = editor.getContent();
                if (newContent !== _this.currentContent) {
                    _this.currentContent = newContent;
                    if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.onEditorChange)) {
                        _this.props.onEditorChange(_this.currentContent, editor);
                    }
                }
            });
        }
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(this.props.onInit)) {
            this.props.onInit(initEvent, editor);
        }
        Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["bindHandlers"])(editor, this.props, this.boundHandlers);
    };
    Editor.prototype.renderInline = function () {
        var _a = this.props.tagName, tagName = _a === void 0 ? 'div' : _a;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](tagName, {
            ref: this.elementRef,
            id: this.id
        });
    };
    Editor.prototype.renderIframe = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('textarea', {
            ref: this.elementRef,
            style: { visibility: 'hidden' },
            name: this.props.textareaName,
            id: this.id
        });
    };
    Editor.propTypes = _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__["EditorPropTypes"];
    Editor.defaultProps = {
        cloudChannel: '5'
    };
    return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \**********************************************************************************************/
/*! exports provided: eventPropTypes, EditorPropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventPropTypes", function() { return eventPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPropTypes", function() { return EditorPropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var eventPropTypes = {
    onActivate: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeRenderUI: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforePaste: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onClearUndos: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onCopy: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onCut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDblclick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDeactivate: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDirty: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDrag: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragGesture: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocusIn: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocusOut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onHide: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onInit: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onLoadContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onNodeChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectResizeStart: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectResized: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectSelected: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPaste: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPostProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPostRender: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPreProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onProgressState: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onRedo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onRemove: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onReset: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSaveContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSetAttrib: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onShow: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onVisualAid: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]
};
var EditorPropTypes = __assign({ apiKey: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], inline: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], init: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"], initialValue: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], onEditorChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"], value: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], tagName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], cloudChannel: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], plugins: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["array"]]), toolbar: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["array"]]), disabled: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], textareaName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"] }, eventPropTypes);


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js ***!
  \*************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _components_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */




/***/ }),

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
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");







var _jsxFileName = "/opt/fise/src/components/manage/Blocks/Text/Edit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */




 // import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

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
    value: function onChange(event, editor) {
      console.log('onchange', this.props);
      this.props.handleKeyDown(event, this.props.index, this.props.block, this.ref, {
        disableEnter: true,
        disableArrowUp: true,
        disableArrowDown: true
      });
      var cktext = editor.getData();
      this.props.onChangeBlock(this.props.block, _objectSpread({}, this.props.data, {
        cktext: cktext
      }));
      this.node.focus();
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
            lineNumber: 98
          }
        });
      } // const CKEditor = require('@ckeditor/ckeditor5-react');
      // const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
      // console.log(
      //   'plugins',
      //   ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName),
      // );
      // const ClassicEditor = require('@ckeditor/ckeditor5-build-balloon-block');
      // const ClassicEditor = require('@ckeditor/ckeditor5-editor-classic/src/classiceditor');


      var editorConfiguration = {
        heading: {
          options: [// {
          //   model: 'paragraph',
          //   title: 'Paragraph Tibi',
          //   class: 'ck-heading_paragraph',
          // },
          {
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
          } // {
          //   model: 'heading2',
          //   view: 'h2',
          //   title: 'Heading 2',
          //   class: 'ck-heading_heading2',
          // },
          ]
        }
      }; //

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        role: "presentation" // onClick={() => this.props.onSelectBlock(this.props.block)}
        ,
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('block text', {
          selected: this.props.selected
        }) // ref={node => (this.ref = node)}
        ,
        onClick: function onClick(e) {
          console.log('click', _this2.node);

          _this2.props.onSelectBlock(_this2.props.block);

          _this2.node && _this2.node.focus();
        },
        style: {
          minHeight: '600px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_11__["Editor"], {
        config: editorConfiguration,
        editor: ClassicEditor,
        data: this.state.htmltext,
        onInit: function onInit(editor) {
          // You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
          _this2.node = editor.ui.getEditableElement();
          _this2.ref = editor.ui.getEditableElement();

          _this2.node.focus();
        },
        onChange: this.onChange // onKeyPress={(e)=>this.props.handleKeyDown(e,
        //   this.props.index,
        //   this.props.block,
        //   this.ref,
        //   {
        //     disableEnter: true,
        //     disableArrowUp: true,
        //     disableArrowDown: true,
        // })}
        ,
        onBlur: function onBlur(event, editor) {},
        onFocus: function onFocus(event, editor) {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
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
  detached: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(Edit));

/***/ })

};
//# sourceMappingURL=main.8a8918ee6e2e5d24aebe.hot-update.js.map