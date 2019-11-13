exports.id = "main";
exports.modules = {

/***/ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../razzle/node_modules/css-loader/lib/css-base.js */ "./node_modules/razzle/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rdw-option-wrapper {\n  border: 1px solid #F1F1F1;\n  padding: 5px;\n  min-width: 25px;\n  height: 20px;\n  border-radius: 2px;\n  margin: 0 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n  text-transform: capitalize;\n}\n.rdw-option-wrapper:hover {\n  box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-option-wrapper:active {\n  box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-option-active {\n  box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-option-disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.rdw-dropdown-wrapper {\n  height: 30px;\n  background: white;\n  cursor: pointer;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  margin: 0 3px;\n  text-transform: capitalize;\n  background: white;\n}\n.rdw-dropdown-wrapper:focus {\n  outline: none;\n}\n.rdw-dropdown-wrapper:hover {\n  box-shadow: 1px 1px 0px #BFBDBD;\n  background-color: #FFFFFF;\n}\n.rdw-dropdown-wrapper:active {\n  box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-dropdown-carettoopen {\n  height: 0px;\n  width: 0px;\n  position: absolute;\n  top: 35%;\n  right: 10%;\n  border-top: 6px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.rdw-dropdown-carettoclose {\n  height: 0px;\n  width: 0px;\n  position: absolute;\n  top: 35%;\n  right: 10%;\n  border-bottom: 6px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.rdw-dropdown-selectedtext {\n  display: flex;\n  position: relative;\n  height: 100%;\n  align-items: center;\n  padding: 0 5px;\n}\n.rdw-dropdown-optionwrapper {\n  z-index: 100;\n  position: relative;\n  border: 1px solid #F1F1F1;\n  width: 98%;\n  background: white;\n  border-radius: 2px;\n  margin: 0;\n  padding: 0;\n  max-height: 250px;\n  overflow-y: scroll;\n}\n.rdw-dropdown-optionwrapper:hover {\n  box-shadow: 1px 1px 0px #BFBDBD;\n  background-color: #FFFFFF;\n}\n.rdw-dropdownoption-default {\n  min-height: 25px;\n  display: flex;\n  align-items: center;\n  padding: 0 5px;\n}\n.rdw-dropdownoption-highlighted {\n  background: #F1F1F1;\n}\n.rdw-dropdownoption-active {\n  background: #f5f5f5;\n}\n.rdw-dropdownoption-disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.rdw-inline-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-inline-dropdown {\n  width: 50px;\n}\n.rdw-inline-dropdownoption {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n}\n.rdw-block-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-block-dropdown {\n  width: 110px;\n}\n.rdw-fontsize-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-fontsize-dropdown {\n  min-width: 40px;\n}\n.rdw-fontsize-option {\n  display: flex;\n  justify-content: center;\n}\n.rdw-fontfamily-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-fontfamily-dropdown {\n  width: 115px;\n}\n.rdw-fontfamily-placeholder {\n  white-space: nowrap;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rdw-fontfamily-optionwrapper {\n  width: 140px;\n}\n.rdw-list-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-list-dropdown {\n  width: 50px;\n  z-index: 90;\n}\n.rdw-list-dropdownOption {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n}\n.rdw-text-align-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-text-align-dropdown {\n  width: 50px;\n  z-index: 90;\n}\n.rdw-text-align-dropdownOption {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n}\n.rdw-right-aligned-block {\n  text-align: right;\n}\n.rdw-left-aligned-block {\n  text-align: left !important;\n}\n.rdw-center-aligned-block {\n  text-align: center !important;\n}\n.rdw-justify-aligned-block {\n  text-align: justify !important;\n}\n.rdw-right-aligned-block > div {\n  display: inline-block;\n}\n.rdw-left-aligned-block > div {\n  display: inline-block;\n}\n.rdw-center-aligned-block > div {\n  display: inline-block;\n}\n.rdw-justify-aligned-block > div {\n  display: inline-block;\n}\n.rdw-colorpicker-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  position: relative;\n  flex-wrap: wrap\n}\n.rdw-colorpicker-modal {\n  position: absolute;\n  top: 35px;\n  left: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 175px;\n  height: 175px;\n  border: 1px solid #F1F1F1;\n  padding: 15px;\n  border-radius: 2px;\n  z-index: 100;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-colorpicker-modal-header {\n  display: flex;\n  padding-bottom: 5px;\n}\n.rdw-colorpicker-modal-style-label {\n  font-size: 15px;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 10px 5px;\n}\n.rdw-colorpicker-modal-style-label-active {\n  border-bottom: 2px solid #0a66b7;\n}\n.rdw-colorpicker-modal-options {\n  margin: 5px auto;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-wrap: wrap;\n  overflow: scroll;\n}\n.rdw-colorpicker-cube {\n  width: 22px;\n  height: 22px;\n  border: 1px solid #F1F1F1;\n}\n.rdw-colorpicker-option {\n  margin: 3px;\n  padding: 0;\n  min-height: 20px;\n  border: none;\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  box-shadow: 1px 2px 1px #BFBDBD inset;\n}\n.rdw-colorpicker-option:hover {\n  box-shadow: 1px 2px 1px #BFBDBD;\n}\n.rdw-colorpicker-option:active {\n  box-shadow: -1px -2px 1px #BFBDBD;\n}\n.rdw-colorpicker-option-active {\n  box-shadow: 0px 0px 2px 2px #BFBDBD;\n}\n.rdw-link-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  position: relative;\n  flex-wrap: wrap\n}\n.rdw-link-dropdown {\n  width: 50px;\n}\n.rdw-link-dropdownOption {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n}\n.rdw-link-dropdownPlaceholder {\n  margin-left: 8px;\n}\n.rdw-link-modal {\n  position: absolute;\n  top: 35px;\n  left: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 235px;\n  height: 205px;\n  border: 1px solid #F1F1F1;\n  padding: 15px;\n  border-radius: 2px;\n  z-index: 100;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-link-modal-label {\n  font-size: 15px;\n}\n.rdw-link-modal-input {\n  margin-top: 5px;\n  border-radius: 2px;\n  border: 1px solid #F1F1F1;\n  height: 25px;\n  margin-bottom: 15px;\n  padding: 0 5px;\n}\n.rdw-link-modal-input:focus {\n  outline: none;\n}\n.rdw-link-modal-buttonsection {\n  margin: 0 auto;\n}\n.rdw-link-modal-target-option {\n  margin-bottom: 20px;\n}\n.rdw-link-modal-target-option > span {\n  margin-left: 5px;\n}\n.rdw-link-modal-btn {\n  margin-left: 10px;\n  width: 75px;\n  height: 30px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  cursor: pointer;\n  background: white;\n  text-transform: capitalize;\n}\n.rdw-link-modal-btn:hover {\n  box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-link-modal-btn:active {\n  box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-link-modal-btn:focus {\n  outline: none !important;\n}\n.rdw-link-modal-btn:disabled {\n  background: #ece9e9;\n}\n.rdw-link-dropdownoption {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n}\n.rdw-history-dropdown {\n  width: 50px;\n}\n.rdw-embedded-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  position: relative;\n  flex-wrap: wrap\n}\n.rdw-embedded-modal {\n  position: absolute;\n  top: 35px;\n  left: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 235px;\n  height: 180px;\n  border: 1px solid #F1F1F1;\n  padding: 15px;\n  border-radius: 2px;\n  z-index: 100;\n  background: white;\n  justify-content: space-between;\n  box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-embedded-modal-header {\n  font-size: 15px;\n  display: flex;\n}\n.rdw-embedded-modal-header-option {\n  width: 50%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.rdw-embedded-modal-header-label {\n  width: 95px;\n  border: 1px solid #f1f1f1;\n  margin-top: 5px;\n  background: #6EB8D4;\n  border-bottom: 2px solid #0a66b7;\n}\n.rdw-embedded-modal-link-section {\n  display: flex;\n  flex-direction: column;\n}\n.rdw-embedded-modal-link-input {\n  width: 88%;\n  height: 35px;\n  margin: 10px 0;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  font-size: 15px;\n  padding: 0 5px;\n}\n.rdw-embedded-modal-link-input-wrapper {\n  display: flex;\n  align-items: center;\n}\n.rdw-embedded-modal-link-input:focus {\n  outline: none;\n}\n.rdw-embedded-modal-btn-section {\n  display: flex;\n  justify-content: center;\n}\n.rdw-embedded-modal-btn {\n  margin: 0 3px;\n  width: 75px;\n  height: 30px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  cursor: pointer;\n  background: white;\n  text-transform: capitalize;\n}\n.rdw-embedded-modal-btn:hover {\n  box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-embedded-modal-btn:active {\n  box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-embedded-modal-btn:focus {\n  outline: none !important;\n}\n.rdw-embedded-modal-btn:disabled {\n  background: #ece9e9;\n}\n.rdw-embedded-modal-size {\n  align-items: center;\n  display: flex;\n  margin: 8px 0;\n  justify-content: space-between;\n}\n.rdw-embedded-modal-size-input {\n  width: 80%;\n  height: 20px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  font-size: 12px;\n}\n.rdw-embedded-modal-size-input:focus {\n  outline: none;\n}\n.rdw-emoji-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  position: relative;\n  flex-wrap: wrap\n}\n.rdw-emoji-modal {\n  overflow: auto;\n  position: absolute;\n  top: 35px;\n  left: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 235px;\n  height: 180px;\n  border: 1px solid #F1F1F1;\n  padding: 15px;\n  border-radius: 2px;\n  z-index: 100;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-emoji-icon {\n  margin: 2.5px;\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rdw-spinner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.rdw-spinner > div {\n  width: 12px;\n  height: 12px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n.rdw-spinner .rdw-bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.rdw-spinner .rdw-bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n}\n.rdw-image-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  position: relative;\n  flex-wrap: wrap\n}\n.rdw-image-modal {\n  position: absolute;\n  top: 35px;\n  left: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 235px;\n  border: 1px solid #F1F1F1;\n  padding: 15px;\n  border-radius: 2px;\n  z-index: 100;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-image-modal-header {\n  font-size: 15px;\n  margin: 10px 0;\n  display: flex;\n}\n.rdw-image-modal-header-option {\n  width: 50%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.rdw-image-modal-header-label {\n  width: 80px;\n  background: #f1f1f1;\n  border: 1px solid #f1f1f1;\n  margin-top: 5px;\n}\n.rdw-image-modal-header-label-highlighted {\n  background: #6EB8D4;\n  border-bottom: 2px solid #0a66b7;\n}\n.rdw-image-modal-upload-option {\n  width: 100%;\n  color: gray;\n  cursor: pointer;\n  display: flex;\n  border: none;\n  font-size: 15px;\n  align-items: center;\n  justify-content: center;\n  background-color: #f1f1f1;\n  outline: 2px dashed gray;\n  outline-offset: -10px;\n  margin: 10px 0;\n  padding: 9px 0;\n}\n.rdw-image-modal-upload-option-highlighted {\n  outline: 2px dashed #0a66b7;\n}\n.rdw-image-modal-upload-option-label {\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n}\n.rdw-image-modal-upload-option-label span{\n  padding: 0 20px;\n}\n.rdw-image-modal-upload-option-image-preview {\n  max-width: 100%;\n  max-height: 200px;\n}\n.rdw-image-modal-upload-option-input {\n\twidth: 0.1px;\n\theight: 0.1px;\n\topacity: 0;\n\toverflow: hidden;\n\tposition: absolute;\n\tz-index: -1;\n}\n.rdw-image-modal-url-section {\n  display: flex;\n  align-items: center;\n}\n.rdw-image-modal-url-input {\n  width: 90%;\n  height: 35px;\n  margin: 15px 0 12px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  font-size: 15px;\n  padding: 0 5px;\n}\n.rdw-image-modal-btn-section {\n  margin: 10px auto 0;\n}\n.rdw-image-modal-url-input:focus {\n  outline: none;\n}\n.rdw-image-modal-btn {\n  margin: 0 5px;\n  width: 75px;\n  height: 30px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  cursor: pointer;\n  background: white;\n  text-transform: capitalize;\n}\n.rdw-image-modal-btn:hover {\n  box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-image-modal-btn:active {\n  box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-image-modal-btn:focus {\n  outline: none !important;\n}\n.rdw-image-modal-btn:disabled {\n  background: #ece9e9;\n}\n.rdw-image-modal-spinner {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n}\n.rdw-image-modal-alt-input {\n  width: 70%;\n  height: 20px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  font-size: 12px;\n  margin-left: 5px;\n}\n.rdw-image-modal-alt-input:focus {\n  outline: none;\n}\n.rdw-image-modal-alt-lbl {\n  font-size: 12px;\n}\n.rdw-image-modal-size {\n  align-items: center;\n  display: flex;\n  margin: 8px 0;\n  justify-content: space-between;\n}\n.rdw-image-modal-size-input {\n  width: 40%;\n  height: 20px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  font-size: 12px;\n}\n.rdw-image-modal-size-input:focus {\n  outline: none;\n}\n.rdw-image-mandatory-sign {\n  color: red;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.rdw-remove-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  position: relative;\n  flex-wrap: wrap\n}\n.rdw-history-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  flex-wrap: wrap\n}\n.rdw-history-dropdownoption {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n}\n.rdw-history-dropdown {\n  width: 50px;\n}\n.rdw-link-decorator-wrapper {\n  position: relative;\n}\n.rdw-link-decorator-icon {\n  position: absolute;\n  left: 40%;\n  top: 0;\n  cursor: pointer;\n  background-color: white;\n}\n.rdw-mention-link {\n  text-decoration: none;\n  color: #1236ff;\n  background-color: #f0fbff;\n  padding: 1px 2px;\n  border-radius: 2px;\n}\n.rdw-suggestion-wrapper {\n  position: relative;\n}\n.rdw-suggestion-dropdown {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #F1F1F1;\n  min-width: 100px;\n  max-height: 150px;\n  overflow: auto;\n  background: white;\n  z-index: 100;\n}\n.rdw-suggestion-option {\n  padding: 7px 5px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.rdw-suggestion-option-active {\n  background-color: #F1F1F1;\n}\n.rdw-hashtag-link {\n  text-decoration: none;\n  color: #1236ff;\n  background-color: #f0fbff;\n  padding: 1px 2px;\n  border-radius: 2px;\n}\n.rdw-image-alignment-options-popup {\n  position: absolute;\n  background: white;\n  display: flex;\n  padding: 5px 2px;\n  border-radius: 2px;\n  border: 1px solid #F1F1F1;\n  width: 105px;\n  cursor: pointer;\n  z-index: 100;\n}\n.rdw-alignment-option-left {\n  justify-content: flex-start;\n}\n.rdw-image-alignment-option {\n  height: 15px;\n  width: 15px;\n  min-width: 15px;\n}\n.rdw-image-alignment {\n  position: relative;\n}\n.rdw-image-imagewrapper {\n  position: relative;\n}\n.rdw-image-center {\n  display: flex;\n  justify-content: center;\n}\n.rdw-image-left {\n  display: flex;\n}\n.rdw-image-right {\n  display: flex;\n  justify-content: flex-end;\n}\n.rdw-image-alignment-options-popup-right {\n  right: 0;\n}\n.rdw-editor-main {\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n}\n.rdw-editor-toolbar {\n  padding: 6px 5px 0;\n  border-radius: 2px;\n  border: 1px solid #F1F1F1;\n  display: flex;\n  justify-content: flex-start;\n  background: white;\n  flex-wrap: wrap;\n  font-size: 15px;\n  margin-bottom: 5px;\n  user-select: none;\n}\n.public-DraftStyleDefault-block {\n  margin: 1em 0;\n}\n.rdw-editor-wrapper:focus {\n  outline: none;\n}\n.rdw-editor-wrapper {\n  box-sizing: content-box;\n}\n.rdw-editor-main blockquote {\n  border-left: 5px solid #f1f1f1;\n  padding-left: 5px;\n}\n.rdw-editor-main pre {\n  background: #f1f1f1;\n  border-radius: 3px;\n  padding: 1px 10px;\n}/**\n * Draft v0.9.1\n *\n * Copyright (c) 2013-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:0}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}", ""]);

// exports


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
      console.log('willupdate', nextState, this.ref);

      this.ref.handleReturn = function () {
        return true;
      };
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
            lineNumber: 87
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
        },
        onKeyPress: function onKeyPress(e) {
          console.log('lalalala', e);

          _this2.props.handleKeyDown(e, _this2.props.index, _this2.props.block, _this2.ref, {
            disableEnter: true,
            disableArrowUp: true,
            disableArrowDown: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__["Editor"], {
        editorState: editorState,
        onEditorStateChange: this.onChange // onChange={this.onChange}
        ,
        ref: function ref(node) {
          return _this2.ref = node;
        },
        onKeyPress: function onKeyPress(e) {
          console.log(e);
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
          lineNumber: 138
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

/***/ }),

/***/ "react-draft-wysiwyg":
/*!**************************************!*\
  !*** external "react-draft-wysiwyg" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ })

};
//# sourceMappingURL=main.f9306b89b4eb77524b3b.hot-update.js.map