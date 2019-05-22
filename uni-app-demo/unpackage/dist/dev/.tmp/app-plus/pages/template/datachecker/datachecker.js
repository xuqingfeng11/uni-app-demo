(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/template/datachecker/datachecker"],{

/***/ "../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/common/graceChecker.js":
/*!**********************************************************************!*\
  !*** /Users/true/Desktop/hi-xqf/uni-app-demo/common/graceChecker.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" /**\r\n              数据验证（表单验证）\r\n              来自 grace.hcoder.net \r\n              作者 hcoder 深海\r\n              */\nmodule.exports = {\n  error: '',\n  check: function check(data, rule) {\n    for (var i = 0; i < rule.length; i++) {\n      if (!rule[i].checkType) {return true;}\n      if (!rule[i].name) {return true;}\n      if (!rule[i].errorMsg) {return true;}\n      if (!data[rule[i].name]) {this.error = rule[i].errorMsg;return false;}\n      switch (rule[i].checkType) {\n        case 'string':\n          var reg = new RegExp('^.{' + rule[i].checkRule + '}$');\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'int':\n          var reg = new RegExp('^(-[1-9]|[1-9])[0-9]{' + rule[i].checkRule + '}$');\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          break;\n          break;\n        case 'between':\n          if (!this.isNumber(data[rule[i].name])) {\n            this.error = rule[i].errorMsg;\n            return false;\n          }\n          var minMax = rule[i].checkRule.split(',');\n          minMax[0] = Number(minMax[0]);\n          minMax[1] = Number(minMax[1]);\n          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {\n            this.error = rule[i].errorMsg;\n            return false;\n          }\n          break;\n        case 'betweenD':\n          var reg = /^-?[1-9][0-9]?$/;\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          var minMax = rule[i].checkRule.split(',');\n          minMax[0] = Number(minMax[0]);\n          minMax[1] = Number(minMax[1]);\n          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {\n            this.error = rule[i].errorMsg;\n            return false;\n          }\n          break;\n        case 'betweenF':\n          var reg = /^-?[0-9][0-9]?.+[0-9]+$/;\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          var minMax = rule[i].checkRule.split(',');\n          minMax[0] = Number(minMax[0]);\n          minMax[1] = Number(minMax[1]);\n          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {\n            this.error = rule[i].errorMsg;\n            return false;\n          }\n          break;\n        case 'same':\n          if (data[rule[i].name] != rule[i].checkRule) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'notsame':\n          if (data[rule[i].name] == rule[i].checkRule) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'email':\n          var reg = /^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/;\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'phoneno':\n          var reg = /^1[0-9]{10,10}$/;\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'zipcode':\n          var reg = /^[0-9]{6}$/;\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'reg':\n          var reg = new RegExp(rule[i].checkRule);\n          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}\n          break;\n        case 'in':\n          if (rule[i].checkRule.indexOf(data[rule[i].name]) == -1) {\n            this.error = rule[i].errorMsg;return false;\n          }\n          break;\n        case 'notnull':\n          if (data[rule[i].name] == null || data[rule[i].name].length < 1) {this.error = rule[i].errorMsg;return false;}\n          break;}\n\n    }\n    return true;\n  },\n  isNumber: function isNumber(checkVal) {\n    var reg = /^-?[1-9][0-9]?.?[0-9]*$/;\n    return reg.test(checkVal);\n  } };\n\n//# sourceURL=uni-app:///common/graceChecker.js?c566");

/***/ }),

/***/ "../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/main.js?{\"page\":\"pages%2Ftemplate%2Fdatachecker%2Fdatachecker\"}":
/*!***************************************************************************************************************!*\
  !*** /Users/true/Desktop/hi-xqf/uni-app-demo/main.js?{"page":"pages%2Ftemplate%2Fdatachecker%2Fdatachecker"} ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _datachecker = _interopRequireDefault(__webpack_require__(/*! ./pages/template/datachecker/datachecker.vue */ \"../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_datachecker.default));\n\n//# sourceURL=Users/true/Desktop/hi-xqf/uni-app-demo/main.js?%7B%22page%22:%22pages%252Ftemplate%252Fdatachecker%252Fdatachecker%22%7D");

/***/ }),

/***/ "../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue":
/*!******************************************************************************************!*\
  !*** /Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datachecker_vue_vue_type_template_id_a76e92fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datachecker.vue?vue&type=template&id=a76e92fe& */ \"../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe&\");\n/* harmony import */ var _datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datachecker.vue?vue&type=script&lang=js& */ \"../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datachecker_vue_vue_type_template_id_a76e92fe___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datachecker_vue_vue_type_template_id_a76e92fe___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue");

/***/ }),

/***/ "../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** /Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./datachecker.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/template/datachecker/datachecker.vue?vue&type=script&lang=js&?a89a");

/***/ }),

/***/ "../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe&":
/*!*************************************************************************************************************************!*\
  !*** /Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_template_id_a76e92fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./datachecker.vue?vue&type=template&id=a76e92fe& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_template_id_a76e92fe___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datachecker_vue_vue_type_template_id_a76e92fe___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe&");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//来自 graceUI 的表单验证， 使用说明见手册 http://grace.hcoder.net/doc/info/73-3.html\nvar graceChecker = __webpack_require__(/*! ../../../common/graceChecker.js */ \"../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/common/graceChecker.js\");var _default =\n{\n  data: function data() {\n    return {\n      title: '表单验证' };\n\n  },\n  methods: {\n    formSubmit: function formSubmit(e) {\n      //将下列代码加入到对应的检查位置\n      //定义表单规则\n      var rule = [\n      { name: \"nickname\", checkType: \"string\", checkRule: \"1,3\", errorMsg: \"姓名应为1-3个字符\" },\n      { name: \"gender\", checkType: \"in\", checkRule: \"男,女\", errorMsg: \"请选择性别\" },\n      { name: \"loves\", checkType: \"notnull\", checkRule: \"\", errorMsg: \"请选择爱好\" }];\n\n      //进行表单检查\n      var formData = e.detail.value;\n      var checkRes = graceChecker.check(formData, rule);\n      if (checkRes) {\n        uni.showToast({ title: \"验证通过!\", icon: \"none\" });\n      } else {\n        uni.showToast({ title: graceChecker.error, icon: \"none\" });\n      }\n    },\n    formReset: function formReset(e) {\n      console.log(\"清空数据\");\n      this.chosen = '';\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/template/datachecker/datachecker.vue?vue&type=script&lang=js&?fedf");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"281eda38-0\" } }),\n      _c(\n        \"view\",\n        { staticClass: \"uni-padding-wrap\" },\n        [\n          _c(\n            \"form\",\n            {\n              attrs: { eventid: \"281eda38-0\" },\n              on: { submit: _vm.formSubmit, reset: _vm.formReset }\n            },\n            [\n              _c(\"view\", [\n                _c(\"view\", { staticClass: \"uni-title\" }, [_vm._v(\"姓名\")]),\n                _c(\"view\", { staticClass: \"uni-list\" }, [\n                  _c(\"view\", { staticClass: \"uni-list-cell\" }, [\n                    _c(\"input\", {\n                      staticClass: \"uni-input\",\n                      attrs: { name: \"nickname\", placeholder: \"请填写您的昵称\" }\n                    })\n                  ])\n                ])\n              ]),\n              _c(\n                \"view\",\n                [\n                  _c(\"view\", { staticClass: \"uni-title\" }, [_vm._v(\"性别\")]),\n                  _c(\n                    \"radio-group\",\n                    {\n                      staticClass: \"uni-flex\",\n                      attrs: { name: \"gender\", mpcomid: \"281eda38-1\" }\n                    },\n                    [\n                      _c(\n                        \"label\",\n                        [_c(\"radio\", { attrs: { value: \"男\" } }), _vm._v(\"男\")],\n                        1\n                      ),\n                      _c(\n                        \"label\",\n                        [_c(\"radio\", { attrs: { value: \"女\" } }), _vm._v(\"女\")],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              ),\n              _c(\n                \"view\",\n                [\n                  _c(\"view\", { staticClass: \"uni-title\" }, [_vm._v(\"爱好\")]),\n                  _c(\n                    \"checkbox-group\",\n                    {\n                      staticClass: \"uni-flex\",\n                      attrs: { name: \"loves\", mpcomid: \"281eda38-2\" }\n                    },\n                    [\n                      _c(\n                        \"label\",\n                        [\n                          _c(\"checkbox\", { attrs: { value: \"读书\" } }),\n                          _vm._v(\"读书\")\n                        ],\n                        1\n                      ),\n                      _c(\n                        \"label\",\n                        [\n                          _c(\"checkbox\", { attrs: { value: \"写字\" } }),\n                          _vm._v(\"写字\")\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              ),\n              _c(\n                \"view\",\n                { staticClass: \"uni-btn-v uni-common-mt\" },\n                [\n                  _c(\n                    \"button\",\n                    {\n                      staticClass: \"btn-submit\",\n                      attrs: { formType: \"submit\", type: \"primary\" }\n                    },\n                    [_vm._v(\"Submit\")]\n                  ),\n                  _c(\n                    \"button\",\n                    { attrs: { type: \"default\", formType: \"reset\" } },\n                    [_vm._v(\"Reset\")]\n                  )\n                ],\n                1\n              )\n            ]\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=Users/true/Desktop/hi-xqf/uni-app-demo/pages/template/datachecker/datachecker.vue?vue&type=template&id=a76e92fe&");

/***/ })

},[["../../../../../../Users/true/Desktop/hi-xqf/uni-app-demo/main.js?{\"page\":\"pages%2Ftemplate%2Fdatachecker%2Fdatachecker\"}","common/runtime","common/vendor"]]]);