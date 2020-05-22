(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jeft-vue-directive"] = factory();
	else
		root["jeft-vue-directive"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./packages/long-tap.js
/*
 * @Author: your name
 * @Date: 2020-05-21 09:45:07
 * @LastEditTime: 2020-05-21 11:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-longtap\packages\index.js
 */
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}

const longTap = {
  getFireEvent: function () {
    // 兼容pc端
    let fireEvent = {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    };

    if (browserRedirect() === 'pc') {
      fireEvent = {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
      };
    }

    return fireEvent;
  },
  install: function (Vue) {
    /**
     * @description: 长按事件
     * @param {arg} 触发事件的时间
     * @return: e touchstart事件的event el触发的dom
     * eg: v-longTap:600='longTap'
     */
    // 长按指令
    Vue.directive('longTap', {
      bind(el, binding) {
        const longTime = binding.arg ? binding.arg : 1000;
        let timer = null;

        if (typeof binding.value !== 'function') {
          return;
        }

        const handler = (e, el) => {
          binding.value(e, el);
        };

        const touchstart = e => {
          timer = setTimeout(() => {
            handler(e, el);
          }, longTime);
        };

        const touchmove = function () {
          clearTimeout(timer);
          timer = 0;
        };

        const touchend = function () {
          clearTimeout(timer);
          timer = 0;
        };

        el.__vueTouchStart__ = touchstart;
        el.__vueTouchMove__ = touchmove;
        el.__vueTouchEnd__ = touchend;
        const {
          start,
          move,
          end
        } = longTap.getFireEvent();
        el.addEventListener(start, touchstart);
        el.addEventListener(move, touchmove);
        el.addEventListener(end, touchend);
      },

      unbind(el) {
        const {
          start,
          move,
          end
        } = longTap.getFireEvent();
        el.addEventListener(start, el.__vueTouchStart__);
        el.addEventListener(move, el.__vueTouchMove__);
        el.addEventListener(end, el.__vueTouchEnd__);
        el.__vueTouchStart__ = null;
        el.__vueTouchMove__ = null;
        el.__vueTouchEnd__ = null;
      }

    });
  }
};
/* harmony default export */ var long_tap = (longTap);
// CONCATENATED MODULE: ./packages/grow-height.js
/*
 * @Author: your name
 * @Date: 2020-05-21 10:42:36
 * @LastEditTime: 2020-05-21 11:10:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\packages\growheight.js
 */
function autoTextarea(elem, extra, maxHeight) {
  extra = extra || 0;
  var isFirefox;
  isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window;
  var isOpera;
  isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera');
  var addEvent;

  addEvent = function (type, callback) {
    elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent('on' + type, callback);
  };

  var getStyle;
  getStyle = elem.currentStyle ? function (name) {
    var val = elem.currentStyle[name];

    if (name === 'height' && val.search(/px/i) !== 1) {
      var rect = elem.getBoundingClientRect();
      return rect.bottom - rect.top - parseFloat(getStyle('paddingTop')) - parseFloat(getStyle('paddingBottom')) + 'px';
    }

    return val;
  } : function (name) {
    return getComputedStyle(elem, null)[name];
  };
  var minHeight;
  minHeight = parseFloat(getStyle('height'));
  elem.style.resize = 'none';

  var change = function () {
    var scrollTop;
    var height;
    var padding = 0;
    var style = elem.style;
    if (elem._length === elem.value.length) return;
    elem._length = elem.value.length;

    if (!isFirefox && !isOpera) {
      padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
    }

    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    elem.style.height = minHeight + 'px';

    if (elem.scrollHeight > minHeight) {
      if (maxHeight && elem.scrollHeight > maxHeight) {
        height = maxHeight - padding;
        style.overflowY = 'auto';
      } else {
        height = elem.scrollHeight - padding;
        style.overflowY = 'hidden';
      }

      style.height = height + extra + 'px';
      scrollTop += parseInt(style.height) - elem.currHeight;
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
      elem.currHeight = parseInt(style.height);
    }
  };

  addEvent('propertychange', change);
  addEvent('input', change);
  addEvent('focus', change);
  change();
}

const GrowHeight = {};

GrowHeight.install = function (Vue) {
  Vue.directive('growHeight', {
    componentUpdated: function (el, binding) {
      const grow = el.getAttribute('data-grow');

      if (grow === 'false') {
        autoTextarea(el, binding.value);
        el.setAttribute('data-grow', 'true');
      }
    },
    inserted: function (el) {
      el.setAttribute('data-grow', 'false');
    }
  });
};

/* harmony default export */ var grow_height = (GrowHeight);
// CONCATENATED MODULE: ./packages/slide.js
/*
 * @Author: your name
 * @Date: 2020-05-21 22:50:37
 * @LastEditTime: 2020-05-22 10:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\packages\slide.js
 */
function slide_browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}

const slide = {
  getFireEvent: function () {
    // 兼容pc端
    let fireEvent = {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      device: 'mobile'
    };

    if (slide_browserRedirect() === 'pc') {
      fireEvent = {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup',
        device: 'pc'
      };
    }

    return fireEvent;
  },
  install: function (Vue) {
    /**
     * @description: 滑动指令
     * @param {arg} 触发事件的滑动距离 
     * @return: {string} 'left' or 'right'
     * @eg v-slide:50='slide'
     */
    Vue.directive('slide', {
      bind(el, binding) {
        const {
          start,
          end
        } = slide.getFireEvent();
        const arg = Number(binding.arg);
        const distance = !isNaN(arg) ? Number(binding.arg) : 30;
        /**
         * 取出修饰符（和v-on的一样）
         */

        let {
          stop,
          prevent,
          self
        } = binding.modifiers;
        let startX = 0;
        let endX = 0;

        const handler = e => {
          binding.value(e);
        };

        const touchstart = e => {
          // 配置判断
          if (stop) e.stopPropagation();
          if (prevent) e.preventDefault();
          if (self && e.target !== e.currentTarget) return;
          startX = e.touches ? e.touches[0].clientX : e.clientX;
        };

        const touchend = function (e) {
          endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

          if (startX - endX > distance) {
            handler('left');
          }

          if (startX - endX < -distance) {
            handler('right');
          }

          startX = 0;
          endX = 0;
        };

        el.__vueTouchStart__ = touchstart;
        el.__vueTouchEnd__ = touchend;
        el.addEventListener(start, touchstart);
        el.addEventListener(end, touchend);
      },

      unbind(el) {
        const {
          start,
          end
        } = slide.getFireEvent();
        el.addEventListener(start, el.__vueTouchStart__);
        el.addEventListener(end, el.__vueTouchEnd__);
        el.__vueTouchStart__ = null;
        el.__vueTouchEnd__ = null;
      }

    });
  }
};
/* harmony default export */ var packages_slide = (slide);
// CONCATENATED MODULE: ./packages/click-out.js
/*
 * @Author: your name
 * @Date: 2020-05-22 10:30:28
 * @LastEditTime: 2020-05-22 10:41:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-directive\packages\clickout.js
 */
const clickOut = {
  /**
   * @description: 点击外围元素触发事件
   * @param {modifiers.bubble} 
   * @return: e 点击event
   */
  install: function (Vue) {
    Vue.directive('clickOut', {
      bind(el, binding) {
        if (typeof binding.value !== 'function') {
          return;
        }

        const bubble = binding.modifiers.bubble;
        console.log(binding.modifiers);

        const handler = e => {
          if (bubble || !el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },

      unbind(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }

    });
  }
};
/* harmony default export */ var click_out = (clickOut);
// CONCATENATED MODULE: ./packages/index.js
/*
 * @Author: your name
 * @Date: 2020-05-21 10:42:48
 * @LastEditTime: 2020-05-22 17:51:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\packages\index.js
 */




const jeftDirective = {
  longTap: long_tap,
  growHeight: grow_height,
  slide: packages_slide,
  install: function (Vue) {
    Vue.use(long_tap);
    Vue.use(grow_height);
    Vue.use(packages_slide);
    Vue.use(click_out);
  }
};
/* harmony default export */ var packages_0 = (jeftDirective);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=jeft-vue-directive.umd.js.map