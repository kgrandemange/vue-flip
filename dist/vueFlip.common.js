module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1082":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "ba2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1082");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flip_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e3f99554-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Flip.vue?vue&type=template&id=216c1e36&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flip-container",class:{ 'active-hover': _vm.activeHover, 'hover': _vm.hover },style:({ width: _vm.width, height: _vm.height }),on:{"click":_vm.handlerHover,"mouseover":_vm.handlerMouseover,"mouseout":_vm.handlerMouseout}},[_c('div',{staticClass:"flipper",style:({ transition: _vm.transition })},[_c('div',{staticClass:"front"},[_vm._t("front")],2),_c('div',{staticClass:"back"},[_vm._t("back")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Flip.vue?vue&type=template&id=216c1e36&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.module.js


var vue_composition_api_module_toString = function (x) { return Object.prototype.toString.call(x); };
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var noopFn = function (_) { return _; };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noopFn,
    set: noopFn,
};
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    sharedPropertyDefinition.get = get || noopFn;
    sharedPropertyDefinition.set = set || noopFn;
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
var vue_composition_api_module_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return vue_composition_api_module_hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition)
        throw new Error("[vue-composition-api] " + msg);
}
function isArray(x) {
    return Array.isArray(x);
}
function isPlainObject(x) {
    return vue_composition_api_module_toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function warn(msg, vm) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.util.warn(msg, vm);
}
function logError(err, vm, info) {
    {
        warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

var currentVue = null;
var currentVM = null;
function getCurrentVue() {
    {
        assert(currentVue, "must call Vue.use(plugin) before using any function.");
    }
    return currentVue;
}
function setCurrentVue(vue) {
    currentVue = vue;
}
function getCurrentVM() {
    return currentVM;
}
function setCurrentVM(vm) {
    currentVM = vm;
}

function ensureCurrentVMInFn(hook) {
    var vm = getCurrentVM();
    {
        assert(vm, "\"" + hook + "\" get called outside of \"setup()\"");
    }
    return vm;
}
function createComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    return currentVue && obj instanceof currentVue;
}
function createSlotProxy(vm, slotName) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            return warn("slots." + slotName + "() got called outside of the \"render()\" scope", vm);
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    };
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol('vfa.key.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('vfa.key.postFlushQueue');
var AccessControlIdentifierKey = createSymbol('vfa.key.accessControlIdentifier');
var ReactiveIdentifierKey = createSymbol('vfa.key.reactiveIdentifier');
var NonReactiveIdentifierKey = createSymbol('vfa.key.nonReactiveIdentifier');
// must be a string, symbol key is ignored in reactive
var RefKey = 'vfa.key.refKey';

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options) {
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shoulnd't extend it.
    // related issues: #79
    return Object.seal(new RefImpl(options));
}
// implementation
function ref(raw) {
    // if (isRef(raw)) {
    //   return {} as any;
    // }
    var _a;
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}
function toRefs(obj) {
    if (!isPlainObject(obj))
        return obj;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        // use ref to proxy the property
        if (!isRef(val)) {
            val = createRef({
                get: function () { return obj[key]; },
                set: function (v) { return (obj[key] = v); },
            });
        }
        // todo
        res[key] = val;
    });
    return res;
}

var AccessControlIdentifier = {};
var ReactiveIdentifier = {};
var NonReactiveIdentifier = {};
function isNonReactive(obj) {
    return (hasOwn(obj, NonReactiveIdentifierKey) && obj[NonReactiveIdentifierKey] === NonReactiveIdentifier);
}
function isReactive(obj) {
    return hasOwn(obj, ReactiveIdentifierKey) && obj[ReactiveIdentifierKey] === ReactiveIdentifier;
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isNonReactive(target) ||
        Array.isArray(target) ||
        isRef(target) ||
        isComponentInstance(target)) {
        return;
    }
    if (hasOwn(target, AccessControlIdentifierKey) &&
        target[AccessControlIdentifierKey] === AccessControlIdentifier) {
        return;
    }
    if (Object.isExtensible(target)) {
        def(target, AccessControlIdentifierKey, AccessControlIdentifier);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ && arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            var value = getter ? getter.call(target) : val;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getCurrentVue();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = createComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!obj) {
        warn('"reactive()" is called without provide an "object".');
        // @ts-ignore
        return;
    }
    if (!isPlainObject(obj) || isReactive(obj) || isNonReactive(obj) || !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    def(observed, ReactiveIdentifierKey, ReactiveIdentifier);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function nonReactive(obj) {
    if (!isPlainObject(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    def(obj, '__ob__', observe({}).__ob__);
    // mark as nonReactive
    def(obj, NonReactiveIdentifierKey, NonReactiveIdentifier);
    return obj;
}

function isUndef(v) {
    return v === undefined || v === null;
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
function set(target, key, val) {
    var Vue = getCurrentVue();
    var _a = Vue.util, warn = _a.warn, defineReactive = _a.defineReactive;
    if (isUndef(target) || isPrimitive(target)) {
        warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    // IMPORTANT: define access control before trigger watcher
    defineAccessControl(target, key, val);
    ob.dep.notify();
    return val;
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
    if (!from)
        return to;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            (isPlainObject(toVal) && !isRef(toVal)) &&
            (isPlainObject(fromVal) && !isRef(fromVal))) {
            mergeData(toVal, fromVal);
        }
    }
    return to;
}
function install(Vue, _install) {
    if (currentVue && currentVue === Vue) {
        {
            assert(false, 'already installed. Vue.use(plugin) should be called only once');
        }
        return;
    }
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(typeof child === 'function' ? child(props, context) || {} : {}, typeof parent === 'function' ? parent(props, context) || {} : {});
        };
    };
    setCurrentVue(Vue);
    _install(Vue);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function set$1(vm, key, value) {
    var state = (vm.__secret_vfa_state__ = vm.__secret_vfa_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__secret_vfa_state__ || {})[key];
}
var vmStateManager = {
    set: set$1,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        proxy(vm, propName, {
            get: function () { return propValue.value; },
            set: function (val) {
                propValue.value = val;
            },
        });
        {
            // expose binding to Vue Devtool as a data property
            // delay this until state has been resolved to prevent repeated works
            vm.$nextTick(function () {
                proxy(vm._data, propName, {
                    get: function () { return propValue.value; },
                    set: function (val) {
                        propValue.value = val;
                    },
                });
            });
        }
    }
    else {
        if (props && hasOwn(props, propName)) {
            warn("The setup binding property \"" + propName + "\" is already declared as a prop.", vm);
        }
        else {
            warn("The setup binding property \"" + propName + "\" is already declared.", vm);
        }
    }
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVode = vm.$options._parentVnode;
    if (!parentVode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(vm, fn, onError) {
    var preVm = getCurrentVM();
    setCurrentVM(vm);
    try {
        return fn(vm);
    }
    catch (err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentVM(preVm);
    }
}
function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            updateTemplateRef(this);
        },
        updated: function () {
            updateTemplateRef(this);
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(vm, function () { return render.apply(_this, args); });
            };
        }
        if (!setup) {
            return;
        }
        if (typeof setup !== 'function') {
            {
                warn('The "setup" option should be a function that returns a object in component definitions.', vm);
            }
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return typeof data === 'function'
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(vm, function () {
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(vm, function () { return bindingFunc_1(); });
            };
            return;
        }
        if (isPlainObject(binding)) {
            var bindingObj_1 = binding;
            vmStateManager.set(vm, 'rawBindings', binding);
            Object.keys(binding).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                // only make primitive value reactive
                if (!isRef(bindingValue)) {
                    if (isReactive(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                    else {
                        // a non-reactive should not don't get reactivity
                        bindingValue = ref(nonReactive(bindingValue));
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        {
            assert(false, "\"setup\" must return a \"Object\" or a \"Function\", got \"" + Object.prototype.toString
                .call(binding)
                .slice(8, -1) + "\"");
        }
    }
    function createSetupContext(vm) {
        var ctx = {
            slots: {},
        };
        var props = [
            'root',
            'parent',
            'refs',
            'attrs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var methodReturnVoid = ['emit'];
        props.forEach(function (key) {
            var _a;
            var targetKey;
            var srcKey;
            if (Array.isArray(key)) {
                _a = __read(key, 2), targetKey = _a[0], srcKey = _a[1];
            }
            else {
                targetKey = srcKey = key;
            }
            srcKey = "$" + srcKey;
            proxy(ctx, targetKey, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    warn("Cannot assign to '" + targetKey + "' because it is a read-only property", vm);
                },
            });
        });
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        return ctx;
    }
}

var fallbackCreateElement;
var createElement = function createElement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!currentVM) {
        warn('`createElement()` has been called outside of render function.');
        if (!fallbackCreateElement) {
            fallbackCreateElement = createComponentInstance(getCurrentVue()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return currentVM.$createElement.apply(currentVM, args);
};

// implementation, close to no-op
function createComponent(options) {
    return options;
}

var genName = function (name) { return "on" + (name[0].toUpperCase() + name.slice(1)); };
function createLifeCycle(lifeCyclehook) {
    return function (callback) {
        var vm = ensureCurrentVMInFn(genName(lifeCyclehook));
        injectHookOption(getCurrentVue(), vm, lifeCyclehook, callback);
    };
}
function createLifeCycles(lifeCyclehooks, name) {
    return function (callback) {
        var currentVue = getCurrentVue();
        var vm = ensureCurrentVMInFn(name);
        lifeCyclehooks.forEach(function (lifeCyclehook) {
            return injectHookOption(currentVue, vm, lifeCyclehook, callback);
        });
    };
}
function injectHookOption(Vue, vm, hook, val) {
    var options = vm.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    options[hook] = mergeFn(options[hook], val);
}
// export const onCreated = createLifeCycle('created');
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
// only one event will be fired between destroyed and deactivated when an unmount occurs
var onUnmounted = createLifeCycles(['destroyed', 'deactivated'], genName('unmounted'));
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');

var fallbackVM;
function flushPreQueue() {
    flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
    flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
    return vm[WatcherPreFlushQueueKey] !== undefined;
}
function installWatchEnv(vm) {
    vm[WatcherPreFlushQueueKey] = [];
    vm[WatcherPostFlushQueueKey] = [];
    vm.$on('hook:beforeUpdate', flushPreQueue);
    vm.$on('hook:updated', flushPostQueue);
}
function flushQueue(vm, key) {
    var queue = vm[key];
    for (var index = 0; index < queue.length; index++) {
        queue[index]();
    }
    queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
    var fallbackFlush = function () {
        vm.$nextTick(function () {
            if (vm[WatcherPreFlushQueueKey].length) {
                flushQueue(vm, WatcherPreFlushQueueKey);
            }
            if (vm[WatcherPostFlushQueueKey].length) {
                flushQueue(vm, WatcherPostFlushQueueKey);
            }
        });
    };
    switch (mode) {
        case 'pre':
            fallbackFlush();
            vm[WatcherPreFlushQueueKey].push(fn);
            break;
        case 'post':
            fallbackFlush();
            vm[WatcherPostFlushQueueKey].push(fn);
            break;
        default:
            assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got " + mode);
            break;
    }
}
function createVueWatcher(vm, getter, callback, options) {
    var index = vm._watchers.length;
    // @ts-ignore: use undocumented options
    vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before,
    });
    return vm._watchers[index];
}
function createWatcher(vm, source, cb, options) {
    var flushMode = options.flush;
    var isSync = flushMode === 'sync';
    var cleanup;
    var registerCleanup = function (fn) {
        cleanup = function () {
            try {
                fn();
            }
            catch (error) {
                logError(error, vm, 'onCleanup()');
            }
        };
    };
    // cleanup before running getter again
    var runCleanup = function () {
        if (cleanup) {
            cleanup();
            cleanup = null;
        }
    };
    var createScheduler = function (fn) {
        if (isSync || /* without a current active instance, ignore pre|post mode */ vm === fallbackVM) {
            return fn;
        }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return queueFlushJob(vm, function () {
                fn.apply(void 0, __spread(args));
            }, flushMode);
        });
    };
    // effect watch
    if (cb === null) {
        var getter_1 = function () { return source(registerCleanup); };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
            noRun: true,
            deep: options.deep,
            sync: isSync,
            before: runCleanup,
        });
        // enable the watcher update
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        if (isSync) {
            watcher_1.get();
        }
        else {
            vm.$nextTick(originGet);
        }
        watcher_1.get = createScheduler(originGet);
        return function () {
            watcher_1.teardown();
            runCleanup();
        };
    }
    var getter;
    if (Array.isArray(source)) {
        getter = function () { return source.map(function (s) { return (isRef(s) ? s.value : s()); }); };
    }
    else if (isRef(source)) {
        getter = function () { return source.value; };
    }
    else {
        getter = source;
    }
    var applyCb = function (n, o) {
        // cleanup before running cb again
        runCleanup();
        cb(n, o, registerCleanup);
    };
    var callback = createScheduler(applyCb);
    if (!options.lazy) {
        var originalCallbck_1 = callback;
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
            shiftCallback_1 = originalCallbck_1;
            applyCb(n, o);
        };
        callback = function (n, o) {
            shiftCallback_1(n, o);
        };
    }
    // @ts-ignore: use undocumented option "sync"
    var stop = vm.$watch(getter, callback, {
        immediate: !options.lazy,
        deep: options.deep,
        sync: isSync,
    });
    return function () {
        stop();
        runCleanup();
    };
}
function watch(source, cb, options) {
    var callback = null;
    if (typeof cb === 'function') {
        // source watch
        callback = cb;
    }
    else {
        // effect watch
        options = cb;
        callback = null;
    }
    var opts = __assign({
        lazy: false,
        deep: false,
        flush: 'post',
    }, options);
    var vm = getCurrentVM();
    if (!vm) {
        if (!fallbackVM) {
            fallbackVM = createComponentInstance(getCurrentVue());
        }
        vm = fallbackVM;
    }
    else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
    }
    return createWatcher(vm, source, callback, opts);
}

// implement
function computed(options) {
    var vm = getCurrentVM();
    var get, set;
    if (typeof options === 'function') {
        get = options;
    }
    else {
        get = options.get;
        set = options.set;
    }
    var computedHost = createComponentInstance(getCurrentVue(), {
        computed: {
            $$state: {
                get: get,
                set: set,
            },
        },
    });
    return createRef({
        get: function () { return computedHost.$$state; },
        set: function (v) {
            if (!set) {
                warn('Computed property was assigned to but it has no setter.', vm);
                return;
            }
            computedHost.$$state = v;
        },
    });
}

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var vm = ensureCurrentVMInFn('provide');
    if (!vm._provided) {
        var provideCache_1 = {};
        Object.defineProperty(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue) {
    if (!key) {
        return defaultValue;
    }
    var vm = ensureCurrentVMInFn('inject');
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    else if (defaultValue !== undefined) {
        return defaultValue;
    }
    else {
        warn("Injection \"" + String(key) + "\" not found", vm);
    }
}

var _install = function (Vue) { return install(Vue, mixin); };
var vue_composition_api_module_plugin = {
    install: _install,
};
// Auto install if it is not done yet and `window` has `Vue`.
// To allow users to avoid auto-installation in some cases,
if (currentVue && typeof window !== 'undefined' && window.Vue) {
    _install(window.Vue);
}

/* harmony default export */ var vue_composition_api_module = (vue_composition_api_module_plugin);


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Flip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Flipvue_type_script_lang_js_ = (createComponent({
  name: 'flip',
  props: {
    activeClick: {
      type: Boolean,
      required: false,
      default: false
    },
    activeHover: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    transition: {
      type: String,
      required: false,
      default: '0.5s'
    },
    value: {
      type: Boolean,
      required: false
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var hover = ref(false);

    var handlerHover = function handlerHover() {
      if (props.activeClick) {
        hover.value = !hover.value;
        emit('input', hover.value);
      }
    };

    var handlerMouseout = function handlerMouseout() {
      if (props.activeHover) {
        emit('input', false);
      }
    };

    var handlerMouseover = function handlerMouseover() {
      if (props.activeHover) {
        emit('input', true);
      }
    };

    watch('value', function () {
      hover.value = props.value;
    });
    return {
      hover: hover,
      handlerHover: handlerHover,
      handlerMouseout: handlerMouseout,
      handlerMouseover: handlerMouseover
    };
  }
}));
// CONCATENATED MODULE: ./src/components/Flip.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Flipvue_type_script_lang_js_ = (Flipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Flip.vue?vue&type=style&index=0&lang=css&
var Flipvue_type_style_index_0_lang_css_ = __webpack_require__("ba2a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Flip.vue






/* normalize component */

var component = normalizeComponent(
  components_Flipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Flip = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Flip);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vueFlip.common.js.map