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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 7)();
}


/***/ }),
/* 2 */
/*!**********************!*\
  !*** ./src/mvelo.js ***!
  \**********************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Mailvelope - secure email with OpenPGP encryption for Webmail
 * Copyright (C) 2012-2017 Mailvelope GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint strict: 0 */
var mvelo = {}; // eslint-disable-line no-var
// web extension

mvelo.webex = typeof browser !== 'undefined'; // chrome extension

mvelo.crx = !mvelo.webex && typeof chrome !== 'undefined';
/* constants */
// min height for large frame

mvelo.LARGE_FRAME = 600; // frame constants

mvelo.FRAME_STATUS = 'stat'; // frame status

mvelo.FRAME_ATTACHED = 'att';
mvelo.FRAME_DETACHED = 'det'; // key for reference to frame object

mvelo.FRAME_OBJ = 'fra'; // marker for dynamically created iframes

mvelo.DYN_IFRAME = 'dyn';
mvelo.IFRAME_OBJ = 'obj'; // armor header type

mvelo.PGP_MESSAGE = 'msg';
mvelo.PGP_SIGNATURE = 'sig';
mvelo.PGP_PUBLIC_KEY = 'pub';
mvelo.PGP_PRIVATE_KEY = 'priv'; // display decrypted message

mvelo.DISPLAY_INLINE = 'inline';
mvelo.DISPLAY_POPUP = 'popup'; // editor type

mvelo.PLAIN_TEXT = 'plain';
mvelo.RICH_TEXT = 'rich'; // keyring

mvelo.KEYRING_DELIMITER = '|#|';
mvelo.MAIN_KEYRING_ID = `localhost${mvelo.KEYRING_DELIMITER}mailvelope`;
mvelo.GNUPG_KEYRING_ID = `localhost${mvelo.KEYRING_DELIMITER}gnupg`; // colors for secure background

mvelo.SECURE_COLORS = ['#e9e9e9', '#c0c0c0', '#808080', '#ffce1e', '#ff0000', '#85154a', '#6f2b8b', '#b3d1e3', '#315bab', '#1c449b', '#4c759c', '#1e8e9f', '#93b536']; // 50 MB file size limit

mvelo.MAX_FILE_UPLOAD_SIZE = 50 * 1024 * 1024; // stable id if app runs in top frame

mvelo.APP_TOP_FRAME_ID = 'apptopframeid';
mvelo.Error = class extends Error {
  constructor(msg, code = 'INTERNAL_ERROR') {
    super(msg);
    this.code = code;
  }

};

mvelo.appendTpl = function ($element, path) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', path);
    req.responseType = 'text';

    req.onload = function () {
      if (req.status == 200) {
        $element.append($.parseHTML(req.response));
        setTimeout(() => resolve($element), 1);
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = function () {
      reject(new Error('Network Error'));
    };

    req.send();
  });
};

mvelo.runtime = chrome.runtime;
mvelo.l10n = {};
mvelo.l10n.getMessage = chrome.i18n.getMessage;

mvelo.l10n.getMessages = function (ids) {
  const result = {};
  ids.forEach(id => result[id] = chrome.i18n.getMessage(id));
  return result;
};

mvelo.l10n.localizeHTML = function (l10n, idSelector) {
  const selector = idSelector ? `${idSelector} [data-l10n-id]` : '[data-l10n-id]';
  $(selector).each(function () {
    const jqElement = $(this);
    const id = jqElement.data('l10n-id');
    const text = l10n ? l10n[id] : chrome.i18n.getMessage(id) || id;
    jqElement.text(text);
  });
  $('[data-l10n-title-id]').each(function () {
    const jqElement = $(this);
    const id = jqElement.data('l10n-title-id');
    const text = l10n ? l10n[id] : chrome.i18n.getMessage(id) || id;
    jqElement.attr('title', text);
  });
};

mvelo.ui = {};

mvelo.ui.terminate = function (port) {
  mvelo.util.removeSecurityBackground().then(() => {
    $('body').empty();
    setTimeout(() => {
      $('body').removeClass().addClass('glyphicon glyphicon-flash termination');
    }, 0);
  });
  port.disconnect();
};

mvelo.ui.addDocumentTitle = function (text) {
  const title = document.createElement('title');
  title.appendChild(document.createTextNode(text));
  document.head.appendChild(title);
};

mvelo.ui.formatFpr = function (fpr) {
  return fpr.toUpperCase().match(/.{1,4}/g).join(' ');
};

mvelo.util = {};

mvelo.util.sortAndDeDup = function (unordered, compFn) {
  const result = [];
  const sorted = unordered.sort(compFn); // remove duplicates

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || compFn && compFn(sorted[i - 1], sorted[i]) !== 0 || !compFn && sorted[i - 1] !== sorted[i]) {
      result.push(sorted[i]);
    }
  }

  return result;
};
/**
 * Remove duplicates from list, by default compares items as strings
 * @param  {Array} list - the list of items with duplicates
 * @param {Function} [compFn] compare function that gets element that should be added to result list plus the current result list
 *                            must return true if element should be added to the result list
 * @return {Array} - the list of items without duplicates
 */


mvelo.util.deDup = function (list = [], compFn = (element, array) => array.indexOf(element) === -1) {
  const result = [];

  for (const item of list) {
    if (compFn(item, result)) {
      result.push(item);
    }
  }

  return result;
};

mvelo.util.filterAsync = async function (array, asyncFilterFn) {
  const promises = array.map(async item => (await asyncFilterFn(item)) && item);
  const result = await Promise.all(promises);
  return result.filter(item => item);
};

mvelo.util.someAsync = async function (array, asyncSomeFn) {
  const promises = array.map(asyncSomeFn);
  const result = await Promise.all(promises);
  return result.some(item => item);
};

mvelo.util.wait = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}; // random hash generator


mvelo.util.getHash = function () {
  let result = '';
  const buf = new Uint16Array(6);
  window.crypto.getRandomValues(buf);

  for (let i = 0; i < buf.length; i++) {
    result += buf[i].toString(16);
  }

  return result;
};

mvelo.util.encodeHTML = function (text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\//g, '&#x2F;');
};

mvelo.util.decodeHTML = function (html) {
  return String(html).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "\'").replace(/&#x2F;/g, '\/');
};

mvelo.util.decodeQuotedPrint = function (armored) {
  return armored.replace(/=3D=3D\s*$/m, '==').replace(/=3D\s*$/m, '=').replace(/=3D(\S{4})\s*$/m, '=$1');
};
/**
 * Normalize PGP armored message
 * @param  {String} msg
 * @param  {Regex} typeRegex - filter message with this Regex
 * @return {String}
 */


mvelo.util.normalizeArmored = function (msg, typeRegex) {
  // filtering to get well defined PGP message format
  msg = msg.replace(/\r\n/g, '\n'); // unify new line characters

  msg = msg.replace(/\n\s+/g, '\n'); // compress sequence of whitespace and new line characters to one new line

  msg = msg.replace(/[^\S\r\n]/g, ' '); // unify white space characters (all \s without \r and \n)

  if (typeRegex) {
    msg = msg.match(typeRegex);

    if (msg) {
      msg = msg[0];
    } else {
      throw new mvelo.Error('Could not extract valid PGP message', 'INVALID_ARMORED_BLOCK');
    }
  }

  msg = msg.replace(/^(\s?>)+/gm, ''); // remove quotation

  msg = msg.replace(/^\s+/gm, ''); // remove leading whitespace

  msg = msg.replace(/:.*\n(?!.*:)/, '$&\n'); // insert new line after last armor header

  msg = msg.replace(/-----\n(?!.*:)/, '$&\n'); // insert new line if no header

  msg = mvelo.util.decodeQuotedPrint(msg);
  return msg;
};

mvelo.util.text2html = function (text) {
  return this.encodeHTML(text).replace(/\n/g, '<br>');
};

mvelo.util.html2text = function (html) {
  html = html.replace(/\n/g, ' '); // replace new line with space

  html = html.replace(/(<br>)/g, '\n'); // replace <br> with new line

  html = html.replace(/<\/(blockquote|div|dl|dt|dd|form|h1|h2|h3|h4|h5|h6|hr|ol|p|pre|table|tr|td|ul|li|section|header|footer)>/g, '\n'); // replace block closing tags </..> with new line

  html = html.replace(/<(.+?)>/g, ''); // remove tags

  html = html.replace(/&nbsp;/g, ' '); // replace non-breaking space with whitespace

  html = html.replace(/\n{3,}/g, '\n\n'); // compress new line

  return mvelo.util.decodeHTML(html);
};
/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 * @param {string} str
 * @returns {number}
 */


mvelo.util.byteCount = function (str) {
  return encodeURI(str).split(/%..|./).length - 1;
};

mvelo.util.ab2str = function (buf) {
  const ab = new Uint8Array(buf);
  return mvelo.util.Uint8Array2str(ab);
};

mvelo.util.Uint8Array2str = function (ab) {
  let str = '';
  const CHUNK_SIZE = Math.pow(2, 16);
  let offset;
  let len;
  let subab;

  for (offset = 0; offset < ab.length; offset += CHUNK_SIZE) {
    len = Math.min(CHUNK_SIZE, ab.length - offset);
    subab = ab.subarray(offset, offset + len);
    str += String.fromCharCode.apply(null, subab);
  }

  return str;
};

mvelo.util.str2ab = function (str) {
  const bufView = mvelo.util.str2Uint8Array(str);
  return bufView.buffer;
};

mvelo.util.str2Uint8Array = function (str) {
  const bufView = new Uint8Array(str.length);

  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }

  return bufView;
};

mvelo.util.dataURL2str = function (dataURL) {
  const base64 = mvelo.util.dataURL2base64(dataURL);
  return window.atob(base64);
};

mvelo.util.dataURL2base64 = function (dataURL) {
  return dataURL.split(';base64,')[1];
};

mvelo.util.addLoadingAnimation = function ($parent) {
  $parent = $parent || $('body')[0];
  const spinner = $('<div class="m-spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
  spinner.appendTo($parent);
};

mvelo.util.showLoadingAnimation = function ($parent) {
  $parent = $parent || $('body')[0];
  $('.m-spinner', $parent).show();
};

mvelo.util.hideLoadingAnimation = function ($parent) {
  $parent = $parent || $('body')[0];
  $('.m-spinner', $parent).hide();
};

mvelo.util.generateSecurityBackground = function ({
  width,
  height,
  scaling = 1,
  angle = 0,
  colorId = 0
}) {
  const iconWidth = width * scaling;
  const iconHeight = height * scaling;
  const iconColor = mvelo.SECURE_COLORS[colorId];
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" id="secBgnd" version="1.1" width="${iconWidth}px" height="${iconHeight}px" viewBox="0 0 27 27"><path transform="rotate(${angle} 14 14)" style="fill: ${iconColor};" d="m 13.963649,25.901754 c -4.6900005,0 -8.5000005,-3.78 -8.5000005,-8.44 0,-1.64 0.47,-3.17 1.29,-4.47 V 9.0417546 c 0,-3.9399992 3.23,-7.1499992 7.2000005,-7.1499992 3.97,0 7.2,3.21 7.2,7.1499992 v 3.9499994 c 0.82,1.3 1.3,2.83 1.3,4.48 0,4.65 -3.8,8.43 -8.49,8.43 z m -1.35,-7.99 v 3.33 h 0 c 0,0.02 0,0.03 0,0.05 0,0.74 0.61,1.34 1.35,1.34 0.75,0 1.35,-0.6 1.35,-1.34 0,-0.02 0,-0.03 0,-0.05 h 0 v -3.33 c 0.63,-0.43 1.04,-1.15 1.04,-1.97 0,-1.32 -1.07,-2.38 -2.4,-2.38 -1.32,0 -2.4,1.07 -2.4,2.38 0.01,0.82 0.43,1.54 1.06,1.97 z m 6.29,-8.8699994 c 0,-2.7099992 -2.22,-4.9099992 -4.95,-4.9099992 -2.73,0 -4.9500005,2.2 -4.9500005,4.9099992 V 10.611754 C 10.393649,9.6217544 12.103649,9.0317546 13.953649,9.0317546 c 1.85,0 3.55,0.5899998 4.94,1.5799994 l 0.01,-1.5699994 z" /></svg>`;
};

mvelo.util.showSecurityBackground = async function (port, isEmbedded) {
  if (isEmbedded) {
    $('.secureBgndSettingsBtn').on('mouseenter', () => {
      $('.secureBgndSettingsBtn').removeClass('btn-link').addClass('btn-default');
    });
    $('.secureBgndSettingsBtn').on('mouseleave', () => {
      $('.secureBgndSettingsBtn').removeClass('btn-default').addClass('btn-link');
    });
  }

  const background = await port.send('get-security-background');
  const secBgndIcon = mvelo.util.generateSecurityBackground(background);
  const secureStyle = `\n.secureBackground {
    background-color: ${background.color};
    background-position: -20px -20px;
    background-image: url(data:image/svg+xml;base64,${btoa(secBgndIcon)});
  }`;
  const lockIcon = mvelo.util.generateSecurityBackground({
    width: 28,
    height: 28,
    colorId: 2
  });
  const lockButton = `\n.lockBtnIcon, .lockBtnIcon:active {
    margin: 0;
    width: 28px; height: 28px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,'}${btoa(lockIcon)});
  }`;
  mvelo.util.removeSecurityBackground();
  $('head').append($('<style>').attr('id', 'secBgndCss').text(secureStyle + lockButton));
};

mvelo.util.removeSecurityBackground = function () {
  return new Promise(resolve => {
    const secBgndStyle = document.getElementById('secBgndCss');

    if (secBgndStyle) {
      secBgndStyle.parentNode.removeChild(secBgndStyle);
    }

    setTimeout(resolve, 0);
  });
};

mvelo.util.matchPattern2RegEx = function (matchPattern) {
  return new RegExp(`^${mvelo.util.matchPattern2RegExString(matchPattern)}$`);
};

mvelo.util.matchPattern2RegExString = function (matchPattern) {
  return matchPattern.replace(/\./g, '\\.').replace(/\*\\\./, '(\\w+(-\\w+)*\\.)*');
};

mvelo.util.mapError = function (error = {}) {
  return {
    message: error.message || 'Unexpected error.',
    code: error.code || 'INTERNAL_ERROR'
  };
};

mvelo.util.PromiseQueue = class {
  constructor() {
    this.queue = [];
  }

  push(thisArg, method, args) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        resolve,
        reject,
        thisArg,
        method,
        args
      });

      if (this.queue.length === 1) {
        this._next();
      }
    });
  }

  _next() {
    if (this.queue.length === 0) {
      return;
    }

    const nextEntry = this.queue[0];
    setTimeout(() => {
      nextEntry.thisArg[nextEntry.method].apply(nextEntry.thisArg, nextEntry.args).then(result => {
        nextEntry.resolve(result);
      }).catch(error => {
        nextEntry.reject(error);
      }).then(() => {
        this.queue.shift();

        this._next();
      });
    }, 0);
  }

};
/**
 * Waterfall of async processes
 * @param  {Function} process - has to return Promise, result as array
 * @param  {Array} list - each item is processed
 * @return {Promise} - resolved when all processes finished with end result as array
 */

/* eslint-disable arrow-body-style */

mvelo.util.sequential = (process, list) => {
  return list.reduce((acc, item) => {
    return acc.then(result => {
      return process(item).then(processResult => {
        result.push(...processResult);
        return result;
      });
    });
  }, Promise.resolve([]));
};
/* eslint-enable arrow-body-style */

/**
 * Validate an email address.
 * @param  {String} address   The email address to validate
 * @return {Boolean}          True if valid, false if not
 */


mvelo.util.checkEmail = function (address) {
  const pattern = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  return pattern.test(address);
};
/**
 * Normalize parameter to Array. falsy -> []
 * @param  {Any}  param
 * @return {Array}
 */


mvelo.util.toArray = function (param) {
  if (!param) {
    return [];
  }

  if (!Array.isArray(param)) {
    return [param];
  }

  return param;
};
/**
 * Validate an url
 * @param  {String} url       The URL to validate
 * @return {Boolean}          True if valid, false if not
 */


mvelo.util.checkUrl = function (url) {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
  return pattern.test(url);
};
/**
 * Inherit from mvelo.EventHandler.prototype to use the new event handling
 * apis 'on' and 'emit'.
 * @param {Port} port - port object received from runtime.connect()
 * @param {Map} handlers - handler map of parent event handler
 */


mvelo.EventHandler = class {
  constructor(port, handlers) {
    if (port) {
      this.initPort(port);
    }

    this._handlers = handlers || new Map();
    this._reply = null;
    this._replyCount = 0;
    this._handlerObject = null;
  }
  /**
   * Open port to background script
   * @param  {String} sender identifier of sender (type + id)
   * @return {EventHandler}        initialized EventHandler
   */


  static connect(sender, handlerObject) {
    const eventHandler = new mvelo.EventHandler(mvelo.runtime.connect({
      name: sender
    }));
    eventHandler._handlerObject = handlerObject;
    return eventHandler;
  }

  initPort(port) {
    this._port = port;

    this._port.onMessage.addListener(this.handlePortMessage.bind(this));
  }
  /**
   * Disconnect port
   */


  disconnect() {
    if (this._port) {
      this._port.disconnect();
    }
  }

  get onDisconnect() {
    const obj = {};

    obj.addListener = listener => this._port.onDisconnect.addListener(listener);

    return obj;
  }
  /**
   * Generic port message handler that can be attached via port.onMessage.addListener().
   * Once set up, events can be handled with on('event', function(options) {})
   * @param  {String} options.event   The event descriptor
   * @param  {Object} options         Contains message attributes and data
   */


  handlePortMessage(options = {}) {
    if (this._handlers.has(options.event)) {
      const handler = this._handlers.get(options.event);

      if (options._reply) {
        // sender expects reply
        Promise.resolve().then(() => handler.call(this, options)).then(result => this.emit('_reply', {
          result: result || null,
          _reply: options._reply
        })).catch(error => this.emit('_reply', {
          error: mvelo.util.mapError(error),
          _reply: options._reply
        }));
      } else {
        // normal one way communication
        handler.call(this, options);
      }
    } else if (options.event === '_reply') {
      // we have received a reply
      const replyHandler = this._reply.get(options._reply);

      this._reply.delete(options._reply);

      if (options.error) {
        replyHandler.reject(options.error);
      } else {
        replyHandler.resolve(options.result);
      }
    } else {
      console.log('Unknown event', options);
    }
  }
  /**
   * The new event handling style to asign a function to an event.
   * @param  {String} event       The event descriptor
   * @param  {Function} handler   The event handler
   */


  on(event, handler) {
    if (!event || typeof event !== 'string' || event === '_reply' || typeof handler !== 'function') {
      throw new Error('Invalid event handler!');
    }

    this._handlers.set(event, handler.bind(this._handlerObject || this));
  }
  /**
   * Helper to emit events via postMessage using a port.
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   */


  emit(event, options = {}) {
    if (!event || typeof event !== 'string') {
      throw new Error('Invalid event!');
    }

    options.event = event;

    this._port.postMessage(options);
  }
  /**
   * Like emit but receiver can send response
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   * @param  {Object} port      (optional) The port to be used. If
   *                            not specified, the main port is used.
   * @return {Promise}
   */


  send(event, options = {}) {
    return new Promise((resolve, reject) => {
      if (!event || typeof event !== 'string') {
        return reject(new Error('Invalid event!'));
      }

      if (!this._reply) {
        this._reply = new Map();
      }

      options.event = event;
      options._reply = ++this._replyCount;

      this._reply.set(options._reply, {
        resolve,
        reject
      });

      this._port.postMessage(options);
    });
  }

};

if (true) {
  module.exports = mvelo;
}

/***/ }),
/* 3 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 4 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 8);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 8 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** ./src/components/util/FilePanel.css ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./FilePanel.css */ 10);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 10 */
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/util/FilePanel.css ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright (C) 2018 Mailvelope GmbH\n * Licensed under the GNU Affero General Public License version 3\n */\n\n.file-panel {\n  display: inline-block;\n}\n\n.ext-color-pdf  { background-color: #ad1e24 !important; }\n.ext-color-html { background-color: #ad1e24 !important; }\n.ext-color-htm  { background-color: #ad1e24 !important; }\n.ext-color-jpg  { background-color: #4ba5cb !important; }\n.ext-color-jpeg { background-color: #4ba5cb !important; }\n.ext-color-png  { background-color: #4ba5cb !important; }\n.ext-color-bmp  { background-color: #4ba5cb !important; }\n.ext-color-tif  { background-color: #4ba5cb !important; }\n.ext-color-tiff { background-color: #4ba5cb !important; }\n.ext-color-psd  { background-color: #4ba5cb !important; }\n.ext-color-txt  { background-color: #427bba !important; }\n.ext-color-doc  { background-color: #427bba !important; }\n.ext-color-docx { background-color: #427bba !important; }\n.ext-color-rtf  { background-color: #427bba !important; }\n.ext-color-mov  { background-color: #bc4fa9 !important; }\n.ext-color-avi  { background-color: #bc4fa9 !important; }\n.ext-color-wmv  { background-color: #bc4fa9 !important; }\n.ext-color-mpeg { background-color: #bc4fa9 !important; }\n.ext-color-flv  { background-color: #bc4fa9 !important; }\n.ext-color-xvid { background-color: #bc4fa9 !important; }\n.ext-color-mp3  { background-color: #563b8c !important; }\n.ext-color-wav  { background-color: #563b8c !important; }\n.ext-color-zip  { background-color: #e7ab30 !important; }\n.ext-color-rar  { background-color: #e7ab30 !important; }\n.ext-color-xml  { background-color: #d6732c !important; }\n.ext-color-ppt  { background-color: #d6732c !important; }\n.ext-color-pptx { background-color: #d6732c !important; }\n.ext-color-xls  { background-color: #6ea64e !important; }\n.ext-color-xlsx { background-color: #6ea64e !important; }\n.ext-color-exe  { background-color: #4b4a4a !important; }\n\n.file-element {\n  display: inline-flex;\n  align-items: center;\n  color: #5E5E5E;\n  font-weight: normal;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  padding: 3px;\n  margin-bottom: 3px;\n  background: #efefef linear-gradient(to bottom,#ffffff,#ececec);\n  border: 1px solid #cbcbcb;\n  border-radius: 4px;\n  cursor: default;\n  margin-right: 5px;\n}\n\na.file-element {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.file-extension {\n  display: inline-block;\n  font-weight: normal !important;\n  border-radius: 2px;\n  background-color: #8a8a8a;\n  color: #ffffff;\n  padding: 1px 3px;\n  text-transform: uppercase;\n  font-size: 10px;\n}\n\n.file-name {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  white-space: nowrap;\n  display: inline-block;\n  margin: 0 3px;\n}\n\n.remove-file {\n  display: inline-block;\n  border-radius: 2px;\n  color: white;\n  background-color: #a3a3a3;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 2px;\n  position: inherit;\n  top: 0;\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/*!***********************************************************!*\
  !*** ./src/components/editor/components/EditorFooter.css ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./EditorFooter.css */ 13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/editor/components/EditorFooter.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "\n.editor-footer .btn-upload-embedded {\n  font-size: 11px;\n  border: 1px solid #b9b9b9;\n  background: #e6e6e6 linear-gradient(to bottom, #fff, #e6e6e6);\n  color: #333;\n}\n\n.editor-footer .btn-upload-embedded .glyphicon.glyphicon-paperclip {\n  transform: rotate(180deg);\n}\n\n.editor-footer .add-file-input {\n  display: none;\n}\n\n.editor-footer .nav-link-file-encryption {\n  padding: .1em .3em;\n  border: none;\n  background: rgba(255,255,255,.5);\n  font: 11px Verdana, sans-serif;\n}\n", ""]);

// exports


/***/ }),
/* 14 */
/*!****************************************************************!*\
  !*** ./src/components/editor/components/EditorModalFooter.css ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./EditorModalFooter.css */ 15);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 15 */
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/editor/components/EditorModalFooter.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "\n.editor-modal-footer .btn-sign-only {\n  margin-right: 10px\n}\n\n.editor-modal-footer .sign-msg-option {\n  text-align: left;\n}\n\n#signMsgOption, .sign-msg-option .form-group {\n  margin-right: 7px;\n}\n\n.sign-msg-option .form-group select {\n  width: 440px;\n}\n\n.sign-msg-option .form-group {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.sign-msg-option .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.editor-modal-footer .form-nav-link {\n  font-size: 13px;\n}\n", ""]);

// exports


/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** ./src/components/editor/components/RecipientInput.css ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./RecipientInput.css */ 17);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 17 */
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/editor/components/RecipientInput.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "\n.recipients-input tags-input .tags .tag-item {\n  transition: background-color 0.3s, border-color 0.3s;\n}\n\n.recipients-input tags-input .tags .tag-success {\n  /* bootstrap btn-success color */\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.recipients-input tags-input .tags .tag-warning {\n  /* bootstrap btn-warning color */\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.recipients-input tags-input .tags .tag-danger {\n  /* bootstrap btn-danger color */\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.recipients-input .alert {\n  margin: 10px 0 5px;\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/*!*****************************************!*\
  !*** ./src/components/util/Spinner.css ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./Spinner.css */ 19);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 19 */
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/util/Spinner.css ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "/*\nThe MIT License (MIT)\nCopyright (c) 2014 Tobias Ahlin\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n.m-spinner {\n  margin: 60px auto 60px;\n  width: 70px;\n  text-align: center;\n}\n\n.m-spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  animation: bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  animation-fill-mode: both;\n}\n\n.m-spinner .bounce1 {\n  animation-delay: -0.32s;\n}\n\n.m-spinner .bounce2 {\n  animation-delay: -0.16s;\n}\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n  } 40% {\n      transform: scale(1.0);\n    }\n}\n", ""]);

// exports


/***/ }),
/* 20 */
/*!******************************************!*\
  !*** ./src/components/editor/editor.css ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./editor.css */ 21);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 21 */
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/editor/editor.css ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "/**\n * Mailvelope - secure email with OpenPGP encryption for Webmail\n * Copyright (C) 2012-2015 Mailvelope GmbH\n */\n\n.m-modal {\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  margin: 0;\n  background: #ffffff none !important;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 6px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\n  background-clip: padding-box;\n  min-width: 720px;\n}\n\n.m-modal > .modal-header {\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 0;\n}\n\n.m-modal > .modal-body {\n  border-top: 1px solid #e5e5e5;\n  border-bottom: 1px solid #e5e5e5;\n  position: absolute;\n  top: 60px;\n  bottom: 55px;\n  right: 0;\n  left: 0;\n  overflow: hidden;\n  padding-top: 5px;\n}\n\n.m-modal > .modal-footer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 0;\n}\n\n.editor-popup-pwd-dialog {\n  width: 462px;\n  height: 430px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -231px;\n  margin-top: -215px;\n}\n\n.editor-flex-container {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  right: 10px;\n  bottom: 8px;\n}\n\n.editor-flex-container .editor-header {\n  width: 100%;\n  order: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.editor-flex-container .editor-header .upload-panel {\n  flex: 100%;\n  order: 1;\n  max-height: 107px;\n  overflow-y: auto;\n}\n.editor-flex-container .editor-header .button-bar {\n  flex: 30px;\n  order: 2;\n  margin-bottom: 3px;\n}\n\n.editor-flex-container .editor-recipients {\n  width: 100%;\n  position: relative;\n  order: 0;\n  margin-bottom: 5px;\n}\n\n.editor-flex-container .editor-body {\n  width: 100%;\n  position: relative;\n  order: 0;\n  flex: 1 0 auto;\n  align-self: center;\n  /* https://code.google.com/p/chromium/issues/detail?id=551336 */\n  min-width: 0;\n  min-height: 0;\n}\n\n.editor-flex-container .editor-body .plain-text {\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.editor-flex-container .editor-body .plain-text iframe {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0;\n  color: black;\n  resize: none;\n}\n\n.editor-flex-container .editor-footer {\n  width: 100%;\n  padding-top: 4px;\n  order: 0;\n  flex: 0 1 40px;\n  align-self: auto;\n}\n\n.waiting-modal .modal-dialog {\n  width: 500px;\n  margin: 50px auto;\n}\n", ""]);

// exports


/***/ }),
/* 22 */
/*!**********************************************!*\
  !*** ./src/components/editor/editorRoot.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./editorRoot.css */ 23);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 23 */
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/editor/editorRoot.css ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 4)(false);
// imports


// module
exports.push([module.i, "\nhtml, body, body > div {\n  height: 100%;\n  background-color: rgba(0,0,0,0);\n}\n\nbody {\n  overflow: hidden;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/*!**********************************************************!*\
  !*** ./src/components/editor/editorRoot.js + 12 modules ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/mvelo.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "jQuery" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(6);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// EXTERNAL MODULE: ./src/mvelo.js
var mvelo = __webpack_require__(2);
var mvelo_default = /*#__PURE__*/__webpack_require__.n(mvelo);

// CONCATENATED MODULE: ./src/lib/l10n.js


let map = {};

function register(ids) {
  ids.forEach(id => {
    map[id] = true;
  });
}

function mapToLocal() {
  map = mvelo_default.a.l10n.getMessages(Object.keys(map));
}

function Trans(props) {
  return external_React_default.a.createElement("span", null, props.id.split(/(<\d>.*?<\/\d>)/).map(value => {
    const tags = value.match(/(<(\d)>(.*?)<\/\d>)/);

    if (tags) {
      const comp = props.components[tags[2]];
      return external_React_default.a.cloneElement(comp, null, comp.props.children || tags[3]);
    } else {
      return value;
    }
  }));
}


// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(3);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./src/components/editor/components/PlainText.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




class PlainText_PlainText extends external_React_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.sandbox = null;
    this.textarea = null;
  }

  componentDidUpdate(prevProps) {
    // if default value is set after rendering, set manually
    if (this.textarea && prevProps.defaultValue !== this.props.defaultValue) {
      this.textarea.value = this.props.defaultValue;
      this.textarea.selectionStart = 0;
      this.textarea.selectionEnd = 0;
    }
  }

  getValue() {
    return this.textarea.value;
  }

  createPlainText() {
    const textarea = external_React_default.a.createElement("textarea", {
      defaultValue: this.props.defaultValue,
      className: "form-control",
      rows: 12,
      autoFocus: true,
      onChange: event => this.props.onChange(event.target.value),
      onBlur: this.props.onBlur,
      onMouseUp: this.props.onMouseUp,
      ref: node => this.textarea = node,
      style: {
        width: '100%',
        height: '100%',
        marginBottom: 0,
        color: 'black',
        resize: 'none'
      }
    });
    external_ReactDOM_default.a.render(textarea, external_jQuery_default()(this.sandbox).contents().find('#root').get(0));
    this.props.onLoad && this.props.onLoad();
  }

  render() {
    const sandboxContent = `
      <!DOCTYPE html>
      <html style="height: 100%">
        <head>
          <meta charset="utf-8">
          <link rel="stylesheet" href="../../dep/bootstrap/css/bootstrap.css">
          <link rel="stylesheet" href="../../mvelo.css">
        </head>
        <body style="overflow: hidden; margin: 0; height: 100%">
         <div id="root" style="height: 100%">
         </div>
        </body>
      </html>
    `;
    return external_React_default.a.createElement("iframe", {
      sandbox: "allow-same-origin allow-scripts",
      srcDoc: sandboxContent,
      frameBorder: 0,
      style: {
        overflowY: 'hidden'
      },
      ref: node => this.sandbox = node,
      onLoad: () => this.createPlainText()
    });
  }

}
PlainText_PlainText.propTypes = {
  defaultValue: prop_types_default.a.string,
  onChange: prop_types_default.a.func.isRequired,
  onBlur: prop_types_default.a.func,
  onMouseUp: prop_types_default.a.func,
  onLoad: prop_types_default.a.func
};
// CONCATENATED MODULE: ./src/lib/file.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


register(['editor_remove_upload', 'encrypt_download_file_button']);
/**
 * @param {File} file
 * @param {Number} file.size
 * @returns {boolean}
 */

function isOversize(file) {
  return file.size >= mvelo_default.a.MAX_FILE_UPLOAD_SIZE;
}
/**
 * @returns {number}
 */

function getFileSize($fileList) {
  let currentAttachmentsSize = 0;
  $fileList.find('.attachmentButton').each(function () {
    currentAttachmentsSize += $(this).data('file').size;
  });
  return currentAttachmentsSize;
}
/**
 * @param {File} file
 * @param {Number} file.lastModified
 * @param {Date} file.lastModifiedDate
 * @param {String} file.name
 * @param {Number} file.size
 * @param {String} file.type
 * @param {String} file.webkitRelativePath
 * @param {Funtion} onLoadEnd
 * @returns {Promise<Object, Error>}
 */

function readUploadFile(file, onLoadEnd) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      resolve({
        content: this.result,
        id: mvelo_default.a.util.getHash(),
        name: file.name,
        size: file.size,
        type: file.type
      });
    };

    fileReader.onloadend = onLoadEnd;

    fileReader.onabort = function (evt) {
      reject(evt);
    };

    fileReader.readAsDataURL(file);
  });
}
function createFileElement(file, options) {
  options = options || {};
  const $button = $('<div/>', {
    'title': file.name,
    'class': 'attachmentButton'
  });
  $button.data('file', file);
  $button.append(getExtensionIcon(file));
  $button.append(getFileName(file));

  if (options.secureIcon) {
    $button.append(getSecureIcon());
  }

  if (options.removeButton) {
    $button.append(getRemoveButton(options.onRemove));
  }

  return $button;
}
function createFileDownloadElement(file, options) {
  options = options || {};
  const $button = $('<a/>', {
    'title': file.name,
    'download': file.name,
    'class': 'attachmentButton',
    'href': downloadAttachment(file)
  });
  $button.append(getExtensionIcon(file));
  $button.append(getFileName(file));

  if (options.secureIcon) {
    $button.append(getSecureIcon());
  }

  $button.append(getDownloadButton());
  return $button;
}
function extractFileNameWithoutExt(fileName) {
  const indexOfDot = fileName.lastIndexOf('.');

  if (indexOfDot > 0) {
    // case: regular
    return fileName.substring(0, indexOfDot);
  } else {
    return fileName;
  }
}
/**
 * @param {File} file
 * @param {String} file.name
 * @returns {*|jQuery}
 */

function getFileName(file) {
  const fileNameNoExt = extractFileNameWithoutExt(file.name);
  return $('<span/>', {
    'class': 'attachmentFilename'
  }).text(fileNameNoExt);
}
/**
 * @param {File} file
 * @param {String} file.id
 * @returns {*|jQuery}
 */


function getDownloadButton() {
  return $('<span/>', {
    'title': map.encrypt_download_file_button,
    'class': 'glyphicon glyphicon-save saveAttachment'
  });
}
/**
 * @param {Function} onRemove
 * @returns {*|jQuery}
 */


function getRemoveButton(onRemove) {
  return $('<span/>', {
    'title': map.editor_remove_upload,
    'class': 'glyphicon glyphicon-remove removeAttachment'
  }).on('click', function (e) {
    e.preventDefault();

    if (onRemove) {
      onRemove();
    }

    $(this).parent().remove();
  });
}

function extractFileExtension(fileName) {
  const lastindexDot = fileName.lastIndexOf('.');

  if (lastindexDot <= 0) {
    // no extension
    return '';
  } else {
    return fileName.substring(lastindexDot + 1, fileName.length).toLowerCase().trim();
  }
}
function getExtensionClass(fileExt) {
  let extClass = '';

  if (fileExt) {
    extClass = `ext-color-${fileExt}`;
  }

  return extClass;
}
/**
 * @param {File} file
 * @param {String} file.name
 * @param {String} file.id
 * @returns {*|jQuery}
 */

function getExtensionIcon(file) {
  const fileExt = extractFileExtension(file.name);

  if (!fileExt) {
    return '';
  }

  const extClass = getExtensionClass(fileExt);
  return $('<span/>', {
    'class': `attachmentExtension ${extClass}`
  }).text(fileExt);
}
/**
 * @returns {*|jQuery|HTMLElement}
 */


function getSecureIcon() {
  return $('<span/>', {
    'class': 'glyphicon glyphicon-lock secure-icon'
  });
}
/**
 * @param {File} file
 * @param {String} file.content
 * @param {String} file.type
 * @returns {string}
 */


function downloadAttachment({
  content,
  type,
  name
}) {
  const ab = mvelo_default.a.util.str2ab(content);
  const file = new File([ab], name, {
    type
  });
  return window.URL.createObjectURL(file);
}
/**
 * @returns {Object}
 */


function getFiles($fileList) {
  const files = [];
  $fileList.find('.attachmentButton').each(function () {
    files.push($(this).data('file'));
  });
  return files;
}
class FileUpload {
  constructor() {
    // flag to monitor upload-in-progress status
    this.numUploadsInProgress = 0; // buffer for actions after upload finished

    this.actions = null;
  }

  readFile(file) {
    this.numUploadsInProgress++;
    return readUploadFile(file, this.onLoadEnd).catch(error => {
      this.onLoadEnd();
      throw error;
    });
  }

  inProgress() {
    return this.actions !== null;
  }

  registerAction(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Wrong parameter type, register only functions as actions');
    }

    this.action = fn;
  }

  onLoadEnd() {
    this.numUploadsInProgress--;

    if (this.numUploadsInProgress === 0 && this.actions) {
      this.action();
      this.action = null;
    }
  }

}
// EXTERNAL MODULE: ./src/components/util/FilePanel.css
var FilePanel = __webpack_require__(9);

// CONCATENATED MODULE: ./src/components/util/FilePanel.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





register(['editor_remove_upload']);
class FilePanel_FileUploadPanel extends external_React_default.a.Component {
  componentDidUpdate(prevProps) {
    if (this.props.files !== prevProps.files) {
      this.panel.scrollIntoView(false);
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "file-panel",
      ref: node => this.panel = node
    }, this.props.files.map(file => external_React_default.a.createElement(FileUploadElement, {
      key: file.id,
      file: file,
      onRemove: this.props.onRemoveFile
    })));
  }

}
FilePanel_FileUploadPanel.propTypes = {
  files: prop_types_default.a.array,
  onRemoveFile: prop_types_default.a.func
};

function FileUploadElement({
  file,
  secureIcon,
  onRemove
}) {
  const fileExt = extractFileExtension(file.name);
  return external_React_default.a.createElement("div", {
    className: "file-element",
    id: file.id,
    title: file.name
  }, fileExt && external_React_default.a.createElement("span", {
    className: `file-extension ${getExtensionClass(fileExt)}`
  }, fileExt), external_React_default.a.createElement("span", {
    className: "file-name"
  }, extractFileNameWithoutExt(file.name)), secureIcon && external_React_default.a.createElement("span", {
    className: "glyphicon glyphicon-lock secure-icon"
  }), onRemove && external_React_default.a.createElement("span", {
    title: map.editor_remove_upload,
    className: "glyphicon glyphicon-remove remove-file",
    onClick: () => onRemove(file.id)
  }));
}

FileUploadElement.propTypes = {
  file: prop_types_default.a.object,
  // {id, name}
  secureIcon: prop_types_default.a.bool,
  onRemove: prop_types_default.a.func
};
function FileDownloadPanel(props) {
  return external_React_default.a.createElement("div", {
    className: "file-panel"
  }, props.files.map(file => external_React_default.a.createElement(FileDownloadElement, {
    key: file.id,
    file: file,
    onClick: props.onClickFile
  })));
}
FileDownloadPanel.propTypes = {
  files: prop_types_default.a.array,
  // {id, name}
  onClickFile: prop_types_default.a.func
};

function FileDownloadElement({
  file,
  onClick
}) {
  const fileExt = extractFileExtension(file.name);
  return external_React_default.a.createElement("a", {
    className: "file-element",
    onClick: onClick,
    title: file.name,
    download: file.name,
    href: file.objectURL
  }, external_React_default.a.createElement("span", {
    className: `label file-extension ${getExtensionClass(fileExt)}`
  }, fileExt), external_React_default.a.createElement("span", {
    className: "file-name"
  }, extractFileNameWithoutExt(file.name)));
}

FileDownloadElement.propTypes = {
  file: prop_types_default.a.object,
  // {id, name, objectURL}
  onClick: prop_types_default.a.func
};
// EXTERNAL MODULE: ./src/components/editor/components/EditorFooter.css
var components_EditorFooter = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/editor/components/EditorFooter.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['upload_attachment', 'editor_sign_caption_short', 'editor_sign_caption_long', 'editor_no_default_key_caption_short', 'editor_no_default_key_caption_long', 'editor_link_file_encryption']);

class EditorFooter_EditorFooter extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.handleClickUpload = this.handleClickUpload.bind(this);
  }

  componentDidMount() {
    this.initTooltip();
  }

  componentDidUpdate() {
    this.initTooltip();
  }

  initTooltip() {
    if (this.props.signMsg) {
      $(this.signCaption).tooltip();
    }
  }

  handleClickUpload() {
    $('.editor-footer .add-file-input').click();
    this.props.onClickUpload();
  }

  render() {
    const sign_caption_short = this.props.defaultKey ? map.editor_sign_caption_short : map.editor_no_default_key_caption_short;
    const sign_caption_long = this.props.defaultKey ? map.editor_sign_caption_long : map.editor_no_default_key_caption_long;
    return external_React_default.a.createElement("div", {
      className: "editor-footer"
    }, external_React_default.a.createElement("div", {
      className: "form-group pull-left"
    }, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.handleClickUpload,
      className: `btn btn-default btn-upload-embedded ${this.props.embedded ? 'show' : 'hide'}`
    }, external_React_default.a.createElement("span", {
      className: "glyphicon glyphicon-paperclip"
    }), "\xA0", external_React_default.a.createElement("span", null, map.upload_attachment)), external_React_default.a.createElement("input", {
      type: "file",
      className: "add-file-input",
      multiple: "multiple",
      onChange: this.props.onChangeFileInput
    }), external_React_default.a.createElement("div", {
      className: `nav-link-file-encryption ${!this.props.embedded ? 'show' : 'hide'}`
    }, external_React_default.a.createElement("a", {
      role: "button",
      onClick: this.props.onClickFileEncryption
    }, map.editor_link_file_encryption))), external_React_default.a.createElement("div", {
      className: "pull-right"
    }, external_React_default.a.createElement("span", {
      ref: node => this.signCaption = node,
      className: `txt-digital-signature ${this.props.signMsg ? 'show' : 'hide'}`,
      "data-toggle": "tooltip",
      "data-placement": "left",
      title: sign_caption_long
    }, sign_caption_short)));
  }

}

EditorFooter_EditorFooter.propTypes = {
  embedded: prop_types_default.a.bool,
  // component is used inside API container view
  signMsg: prop_types_default.a.bool,
  // message will be signed
  defaultKey: prop_types_default.a.bool,
  // default key to sign message exists
  onClickUpload: prop_types_default.a.func,
  // click on upload button
  onChangeFileInput: prop_types_default.a.func,
  // file input change event triggered
  onClickFileEncryption: prop_types_default.a.func // click on navigation link

};
/* harmony default export */ var editor_components_EditorFooter = (EditorFooter_EditorFooter);
// EXTERNAL MODULE: ./src/components/editor/components/EditorModalFooter.css
var components_EditorModalFooter = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/editor/components/EditorModalFooter.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['form_cancel', 'editor_sign_button', 'editor_encrypt_button', 'options_home', 'sign_dialog_header', 'general_default_key_auto_sign']);

class EditorModalFooter_EditorModalFooter extends external_React_default.a.Component {
  signSelection() {
    return external_React_default.a.createElement("form", {
      className: "sign-msg-option well"
    }, external_React_default.a.createElement("div", {
      className: "form-group"
    }, external_React_default.a.createElement("div", {
      className: "checkbox"
    }, external_React_default.a.createElement("label", {
      className: "checkbox",
      htmlFor: "signMsgOption"
    }, external_React_default.a.createElement("input", {
      checked: this.props.signMsg,
      onChange: event => this.props.onChangeSignMsg(event.target.checked),
      type: "checkbox",
      id: "signMsgOption"
    }), external_React_default.a.createElement("span", null, map.sign_dialog_header)))), external_React_default.a.createElement("div", {
      className: "form-group"
    }, external_React_default.a.createElement("select", {
      className: "form-control",
      value: this.props.signKey,
      onChange: event => this.props.onChangeSignKey(event.target.value)
    }, this.props.privKeys.map(key => external_React_default.a.createElement("option", {
      value: key.fingerprint,
      key: key.fingerprint
    }, `${key.userId} - ${key.keyId}`)))), external_React_default.a.createElement("div", {
      className: "form-nav-link pull-right"
    }, external_React_default.a.createElement("a", {
      role: "button",
      onClick: this.props.onClickSignSetting
    }, map.general_default_key_auto_sign)));
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "editor-modal-footer"
    }, this.props.expanded && this.signSelection(), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.expanded ? this.props.onCollapse : this.props.onExpand,
      className: "btn btn-default btn-sm pull-left"
    }, external_React_default.a.createElement("span", null, map.options_home), "\xA0\xA0", external_React_default.a.createElement("span", {
      className: `glyphicon glyphicon-collapse-${this.props.expanded ? 'down' : 'up'}`,
      "aria-hidden": "true"
    })), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onSignOnly,
      className: "btn btn-default btn-sm btn-sign-only",
      disabled: !(this.props.signMsg && this.props.privKeys.length)
    }, external_React_default.a.createElement("span", {
      className: "glyphicon glyphicon-pencil",
      "aria-hidden": "true"
    }), "\xA0", external_React_default.a.createElement("span", null, map.editor_sign_button)), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onCancel,
      className: "btn btn-default"
    }, external_React_default.a.createElement("span", {
      className: "glyphicon glyphicon-remove",
      "aria-hidden": "true"
    }), "\xA0", external_React_default.a.createElement("span", null, map.form_cancel)), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onEncrypt,
      className: "btn btn-primary",
      disabled: this.props.encryptDisabled
    }, external_React_default.a.createElement("span", {
      className: "glyphicon glyphicon-lock",
      "aria-hidden": "true"
    }), "\xA0", external_React_default.a.createElement("span", null, map.editor_encrypt_button)));
  }

}

EditorModalFooter_EditorModalFooter.propTypes = {
  onCancel: prop_types_default.a.func,
  // click on cancel button
  onSignOnly: prop_types_default.a.func,
  // click on sign only button
  onEncrypt: prop_types_default.a.func,
  // click on encrypt button
  encryptDisabled: prop_types_default.a.bool,
  // encrypt action disabled
  onExpand: prop_types_default.a.func,
  // click on options button in collapsed state
  onCollapse: prop_types_default.a.func,
  // click on options button in expanded state
  expanded: prop_types_default.a.bool,
  // expanded state
  signMsg: prop_types_default.a.bool,
  // sign message indicator
  onChangeSignMsg: prop_types_default.a.func,
  // receives bool value for current signMsg state
  signKey: prop_types_default.a.string,
  // sign key id
  privKeys: prop_types_default.a.array,
  // list of private keys for signing
  onChangeSignKey: prop_types_default.a.func,
  // user selects new key
  onClickSignSetting: prop_types_default.a.func // click on navigation link

};
/* harmony default export */ var editor_components_EditorModalFooter = (EditorModalFooter_EditorModalFooter);
// EXTERNAL MODULE: ./src/components/editor/components/RecipientInput.css
var components_RecipientInput = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/editor/components/RecipientInput.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * Parts of the recipient input is based on Hoodiecrow (MIT License)
 * Copyright (c) 2014 Whiteout Networks GmbH.
 * See https://github.com/tanx/hoodiecrow/blob/master/LICENSE
 */




/* global angular */

register(['editor_label_add_recipient', 'editor_key_not_found', 'editor_key_not_found_msg']);
/*
  reference to props of RecipientInput
  this structure is not immutable, recipients will be received as {email},
  but RecipientInputCtrl will modify recipients to {email, keys}
 */

let _props = null; // reference to angular controller

let rInputCtrl = null;
class RecipientInput_RecipientInput extends external_React_default.a.Component {
  constructor(props) {
    super(props); // store props in global variable for Angular

    _props = props;
  }

  componentDidMount() {
    // load editor module dependencies
    angular.module('recipientInput', ['ngTagsInput']).config((tagsInputConfigProvider, $locationProvider) => {
      // activate monitoring of placeholder option
      tagsInputConfigProvider.setActiveInterpolation('tagsInput', {
        placeholder: true
      });
      $locationProvider.hashPrefix('');
    }); // attach ctrl to editor module

    angular.module('recipientInput').controller('RecipientInputCtrl', RecipientInputCtrl); // bootstrap angular

    angular.bootstrap($('.recipients-input').get(0), ['recipientInput']);
  }

  shouldComponentUpdate(nextProps) {
    _props = nextProps;
    rInputCtrl.recipients = _props.recipients; // only update input controller if recipients or keys change

    if (this.props.recipients !== nextProps.recipients || this.props.keys !== nextProps.keys) {
      rInputCtrl.update();
    } // no re-rendering of component due to Angular


    return false;
  }

  render() {
    const contrAttr = node => {
      node.setAttribute('ng-controller', 'RecipientInputCtrl as rInput');
      node.setAttribute('ng-hide', 'rInput.embedded');
      node.setAttribute('ng-class', "{'has-error': rInput.noEncrypt}");
    };

    return external_React_default.a.createElement("div", {
      className: "recipients-input",
      ref: node => node && contrAttr(node)
    }, external_React_default.a.createElement("tags-input", {
      "ng-model": "rInput.recipients",
      type: "email",
      "allowed-tags-pattern": "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}",
      spellcheck: "false",
      tabindex: "0",
      "add-on-space": "true",
      "add-on-enter": "true",
      "enable-editing-last-tag": "true",
      "display-property": "displayId",
      "on-tag-added": "rInput.verify($tag)",
      "on-tag-removed": "rInput.checkEncryptStatus()",
      placeholder: map.editor_label_add_recipient
    }, external_React_default.a.createElement("auto-complete", {
      source: "rInput.autocomplete($query)",
      "min-length": "1"
    })), external_React_default.a.createElement("div", {
      className: "alert alert-danger alert-dismissible ng-hide",
      role: "alert",
      ref: node => node && node.setAttribute('ng-show', 'rInput.noEncrypt')
    }, external_React_default.a.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, external_React_default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), external_React_default.a.createElement("span", {
      className: "glyphicon glyphicon-lock"
    }), external_React_default.a.createElement("strong", null, map.editor_key_not_found), " ", external_React_default.a.createElement("span", null, map.editor_key_not_found_msg)));
  }

}
RecipientInput_RecipientInput.propTypes = {
  keys: prop_types_default.a.array,
  recipients: prop_types_default.a.array,
  autoLocate: prop_types_default.a.bool,
  encryptDisabled: prop_types_default.a.bool,
  onChangeEncryptStatus: prop_types_default.a.func,
  onAutoLocate: prop_types_default.a.func
};
/**
 * Angular controller for the recipient input
 */

class RecipientInputCtrl {
  constructor($timeout) {
    this._timeout = $timeout;
    this.recipients = _props.recipients;
    rInputCtrl = this;
  }

  update() {
    this._timeout(() => {
      // trigger $scope.$digest() after async call
      this.recipients.forEach(this.verify.bind(this));
      this.checkEncryptStatus();
    });
  }
  /**
   * Verifies a recipient after input, gets their key, colors the
   * input tag accordingly and checks if encryption is possible.
   * @param  {Object} recipient   The recipient object
   */


  verify(recipient) {
    if (!recipient) {
      return;
    }

    if (recipient.email) {
      // display only address from autocomplete
      recipient.displayId = recipient.email;
    } else {
      // set address after manual input
      recipient.email = recipient.displayId;
    } // lookup key in local cache


    recipient.key = this.getKey(recipient);

    if (recipient.key || recipient.checkedServer || !_props.autoLocate) {
      // color tag only if a local key was found, or after server lookup,
      // or if auto-locate is deactivated
      this.colorTag(recipient);
      this.checkEncryptStatus();
    } else {
      // no local key found ... lookup on the server
      this.autoLocate(recipient);
    }
  }
  /**
   * Finds the recipient's corresponding public key and sets it
   * on the 'key' attribute on the recipient object.
   * @param  {Object} recipient   The recipient object
   * @return {Object}             The key object (undefined if none found)
   */


  getKey(recipient) {
    return _props.keys.find(key => {
      if (key.email && recipient.email) {
        return key.email.toLowerCase() === recipient.email.toLowerCase();
      }
    });
  }
  /**
   * Uses jQuery to color the recipient's input tag depending on
   * whether they have a key or not.
   * @param  {Object} recipient   The recipient object
   */


  colorTag(recipient) {
    this._timeout(() => {
      // wait for html tag to appear
      $('tags-input li.tag-item').each(function () {
        if ($(this).text().indexOf(recipient.email) === -1) {
          return;
        }

        if (recipient.key) {
          $(this).addClass('tag-success');
        } else {
          $(this).addClass('tag-danger');
        }
      });
    });
  }
  /**
   * Checks if all recipients have a public key and prevents encryption
   * if one of them does not have a key.
   */


  checkEncryptStatus() {
    this.noEncrypt = this.recipients.some(r => !r.key);
    const encryptDisabled = this.noEncrypt || !this.recipients.length;

    if (_props.encryptDisabled !== encryptDisabled) {
      _props.onChangeEncryptStatus({
        encryptDisabled
      });
    }
  }
  /**
   * Do a search with the autoLocate module
   * if a key was not found in the local keyring.
   * @param  {Object} recipient   The recipient object
   * @return {undefined}
   */


  autoLocate(recipient) {
    recipient.checkedServer = true;

    _props.onAutoLocate(recipient);
  }
  /**
   * Queries the local cache of key objects to find a matching user ID
   * @param  {String} query   The autocomplete query
   * @return {Array}          A list of filtered items that match the query
   */


  autocomplete(query) {
    const cache = _props.keys.map(key => ({
      email: key.email,
      displayId: `${key.userId} - ${key.keyId}`
    })); // filter by display ID and ignore duplicates


    return cache.filter(i => i.displayId.toLowerCase().includes(query.toLowerCase()) && !this.recipients.some(recipient => recipient.email === i.email));
  }

} // workaround to prevent "Error: class constructors must be invoked with |new|" in Firefox
// https://github.com/angular/angular.js/issues/14240

RecipientInputCtrl.$$ngIsClass = true;
// CONCATENATED MODULE: ./src/components/editor/components/BlurWarning.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['editor_blur_warn']);
class BlurWarning_BlurWarning extends external_React_default.a.Component {
  constructor() {
    super(); // ref to blur warning

    this.blurWarn = null; // timeoutID for period in which blur events are monitored

    this.blurWarnPeriod = null; // timeoutID for period in which blur events are non-critical

    this.blurValid = null; // observe window for getting focus

    external_jQuery_default()(window).on('focus', () => this.startBlurValid());
  }

  startBlurWarnInterval() {
    if (this.blurWarnPeriod) {
      // clear timeout
      window.clearTimeout(this.blurWarnPeriod);
    } // restart


    this.blurWarnPeriod = window.setTimeout(() => this.blurWarnPeriod = null, 2000);
  }
  /*
   blur warning displayed if blur occurs:
   - inside blur warning period (2s after input)
   - not within 40ms after keydown event (text editor)
   - not within 40ms before focus event (window, modal)
  */


  onBlur() {
    if (this.blurWarnPeriod && !this.blurValid) {
      window.setTimeout(() => this.showBlurWarning(), 40);
    }
  }

  showBlurWarning() {
    const blurWarn = external_jQuery_default()(this.blurWarn);

    if (!this.blurValid) {
      // fade in 600ms, wait 200ms, fade out 600ms
      blurWarn.removeClass('hide').stop(true).animate({
        opacity: 1
      }, 'slow', 'swing', () => {
        setTimeout(() => {
          blurWarn.animate({
            opacity: 0
          }, 'slow', 'swing', () => {
            blurWarn.addClass('hide');
          });
        }, 200);
      });
    }
  }

  startBlurValid() {
    if (this.blurValid) {
      // clear timeout
      window.clearTimeout(this.blurValid);
    } // restart


    this.blurValid = window.setTimeout(() => this.blurValid = null, 40);
  }

  render() {
    return external_React_default.a.createElement("div", {
      ref: node => this.blurWarn = node,
      className: "alert alert-warning hide",
      style: {
        opacity: 0,
        position: 'absolute',
        top: '200px',
        left: '50%',
        marginLeft: '-240px'
      }
    }, external_React_default.a.createElement("h3", null, map.editor_blur_warn));
  }

}
// CONCATENATED MODULE: ./src/components/util/ModalDialog.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['form_ok', 'form_cancel']);

class ModalDialog_ModalDialog extends external_React_default.a.Component {
  componentDidMount() {
    this.modalNode.modal({
      backdrop: 'static',
      keyboard: this.props.keyboard
    });
    this.modalNode.modal('show');
    this.modalNode.on('hidden.bs.modal', this.props.onHide);
    this.modalNode.on('show.bs.modal', this.props.onShow);
  }

  componentWillUnmount() {
    this.modalNode.modal('hide');
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: `modal fade ${this.props.className || ''}`,
      tabIndex: "-1",
      role: "dialog",
      ref: node => this.modalNode = $(node)
    }, external_React_default.a.createElement("div", {
      className: "modal-dialog",
      role: "document"
    }, external_React_default.a.createElement("div", {
      className: "modal-content"
    }, external_React_default.a.createElement("div", {
      className: `modal-header ${this.props.hideHeader ? 'hide' : ''} ${this.props.headerClass}`
    }, this.props.header || external_React_default.a.createElement("div", null, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onCancel,
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, external_React_default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), external_React_default.a.createElement("h4", {
      className: "modal-title"
    }, this.props.title))), external_React_default.a.createElement("div", {
      className: "modal-body"
    }, this.props.children), external_React_default.a.createElement("div", {
      className: `modal-footer ${this.props.hideFooter ? 'hide' : ''}`
    }, this.props.footer || external_React_default.a.createElement("div", null, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onCancel,
      className: "btn btn-default",
      "data-dismiss": "modal"
    }, map.form_cancel), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onOk,
      className: "btn btn-primary",
      "data-dismiss": "modal"
    }, map.form_ok))))));
  }

}

ModalDialog_ModalDialog.propTypes = {
  className: prop_types_default.a.string,
  title: prop_types_default.a.string,
  header: prop_types_default.a.element,
  headerClass: prop_types_default.a.string,
  footer: prop_types_default.a.element,
  children: prop_types_default.a.element,
  onHide: prop_types_default.a.func,
  onShow: prop_types_default.a.func,
  onOk: prop_types_default.a.func,
  onCancel: prop_types_default.a.func,
  hideHeader: prop_types_default.a.bool,
  hideFooter: prop_types_default.a.bool,
  keyboard: prop_types_default.a.bool
};
ModalDialog_ModalDialog.defaultProps = {
  keyboard: true,
  headerClass: ''
};
/* harmony default export */ var util_ModalDialog = (ModalDialog_ModalDialog);
// CONCATENATED MODULE: ./src/components/util/Alert.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


/**
 * Alert
 */

function Alert({
  header,
  message,
  type
}) {
  return external_React_default.a.createElement("div", {
    className: `alert fade in alert-${type}`
  }, header && external_React_default.a.createElement("strong", null, `${header} `), external_React_default.a.createElement("span", null, message));
}
Alert.propTypes = {
  header: prop_types_default.a.string,
  message: prop_types_default.a.string.isRequired,
  type: prop_types_default.a.oneOf(['success', 'info', 'warning', 'danger'])
};
// EXTERNAL MODULE: ./src/components/util/Spinner.css
var util_Spinner = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/util/Spinner.js



class Spinner_Spinner extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: this.props.delay ? true : false
    };
    this.timer = 0;
  }

  componentDidMount() {
    if (this.props.delay) {
      // show spinner after delay
      this.timer = setTimeout(() => this.setState({
        hide: false
      }), this.props.delay);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: `m-spinner ${this.state.hide ? 'hide' : ''}`,
      style: this.props.style
    }, external_React_default.a.createElement("div", {
      className: "bounce1"
    }), external_React_default.a.createElement("div", {
      className: "bounce2"
    }), external_React_default.a.createElement("div", {
      className: "bounce3"
    }));
  }

}
Spinner_Spinner.propTypes = {
  style: prop_types_default.a.object,
  delay: prop_types_default.a.number
};
Spinner_Spinner.defaultProps = {
  delay: 400
};
// EXTERNAL MODULE: ./src/components/editor/editor.css
var editor = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/editor/editor.js
/**
 * Copyright (C) 2012-2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * @fileOverview This file implements the interface for encrypting and
 * signing user data in an sandboxed environment that is secured from
 * the webmail interface.
 */















 // register language strings

register(['waiting_dialog_decryption_failed', 'upload_quota_exceeded_warning', 'editor_error_header', 'waiting_dialog_prepare_email', 'upload_quota_warning_headline', 'security_background_button_title', 'editor_header', 'form_ok']);
class editor_Editor extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUserInput: false,
      signMsg: false,
      signKey: '',
      defaultKey: false,
      privKeys: [],
      optionsExpanded: false,
      defaultPlainText: '',
      publicKeys: [],
      recipients: [],
      autoLocate: true,
      encryptDisabled: true,
      waiting: false,
      error: null,
      pwdDialog: null,
      files: []
    };
    this.port = mvelo_default.a.EventHandler.connect(`editor-${this.props.id}`, this); // flag to control time slice for input logging

    this.logTextareaInput = true;
    this.registerEventListeners(); // ref to PlainText component

    this.plainText = null; // ref to blur warning

    this.blurWarning = null;
  }

  componentDidMount() {
    if (this.props.secureBackground) {
      mvelo_default.a.util.showSecurityBackground(this.port, this.props.embedded);
    }

    if (this.props.embedded) {
      this.fileUpload = new FileUpload();
    } else {
      // keep initial bottom position of body
      this.modalBodyBottomPosition = external_jQuery_default()('.m-modal .modal-body').css('bottom');
    }
  }

  registerEventListeners() {
    this.port.on('set-text', ({
      text
    }) => this.setState({
      defaultPlainText: text
    }));
    this.port.on('set-init-data', this.onSetInitData);
    this.port.on('set-attachment', this.onSetAttachment);
    this.port.on('decrypt-in-progress', this.showWaitingModal);
    this.port.on('encrypt-in-progress', this.showWaitingModal);
    this.port.on('decrypt-end', this.hideWaitingModal);
    this.port.on('encrypt-end', this.hideWaitingModal);
    this.port.on('encrypt-failed', this.hideWaitingModal);
    this.port.on('decrypt-failed', this.onDecryptFailed);
    this.port.on('show-pwd-dialog', this.onShowPwdDialog);
    this.port.on('hide-pwd-dialog', this.onHidePwdDialog);
    this.port.on('get-plaintext', this.getPlaintext);
    this.port.on('error-message', this.onErrorMessage);
    this.port.on('terminate', () => mvelo_default.a.ui.terminate(this.port));
    this.port.on('public-key-userids', this.onPublicKeyUserids);
    this.port.on('key-update', this.onKeyUpdate);
  }

  onSetInitData({
    text = '',
    signMsg,
    defaultKeyFpr,
    privKeys = []
  }) {
    this.setState({
      defaultPlainText: text,
      signMsg: Boolean(signMsg),
      signKey: defaultKeyFpr,
      defaultKey: Boolean(defaultKeyFpr),
      privKeys
    });
  }

  handlePlainTextLoad() {
    // emit event to backend that editor has initialized
    this.port.emit('editor-init');
  }
  /**
   * Remember the available public keys for later and set the recipients proposal gotten from the webmail ui to the editor
   * @param {Array} options.keys         A list of all available public keys from the local keychain
   * @param {Array} options.recipients   recipients gather from the webmail ui
   * @param {boolean} options.autoLocate If the editor should try to auto-locate the key
   */


  onPublicKeyUserids({
    autoLocate,
    keys,
    recipients
  }) {
    this.setState({
      autoLocate,
      publicKeys: keys,
      recipients
    });
  }
  /**
   * Event that is triggered after update of the public keyring (e.g. when the key server responded)
   * @param {Array} options.keys   A list of all available public keys from the local keychain
   */


  onKeyUpdate({
    keys
  }) {
    this.setState({
      publicKeys: keys
    });
  }

  showWaitingModal() {
    this.setState({
      waiting: true
    });
  }

  hideWaitingModal() {
    this.setState({
      waiting: false
    });
  }
  /**
   * send log entry for user input
   * @param {string} type
   */


  logUserInput(type) {
    this.setState({
      hasUserInput: true
    });
    this.port.emit('editor-user-input', {
      source: 'security_log_editor',
      type
    });
  }
  /**
   * Is called when the user clicks the cancel button.
   */


  handleCancel() {
    this.logUserInput('security_log_dialog_cancel');
    this.port.emit('editor-cancel');
  }
  /**
   * Is called when the user clicks the sign button.
   */


  handleSign() {
    this.logUserInput('security_log_dialog_sign');
    this.port.emit('sign-only', {
      signKeyFpr: this.state.signKey
    });
  }
  /**
   * Is called when the user clicks the encrypt button.
   */


  handleEncrypt() {
    this.logUserInput('security_log_dialog_encrypt');
    this.sendPlainText('encrypt');
  }

  getPlaintext(msg) {
    if (this.fileUpload && this.fileUpload.inProgress()) {
      this.fileUpload.registerAction(() => this.getPlaintext(msg));
      return;
    } // don't use key cache when sign & encrypt of message and user has not touched the editor
    // otherwise any predefinedText could be signed with the client-API


    const noCache = this.props.embedded && !msg.draft && !this.state.hasUserInput;
    this.sendPlainText(msg.action, noCache, msg.draft);
  }
  /**
   * Send the plaintext body to the background script for either signing or encryption.
   * @param  {String} action   Either 'sign' or 'encrypt'
   */


  sendPlainText(action, noCache, draft) {
    this.port.emit('editor-plaintext', {
      message: this.plainText.getValue(),
      keys: this.state.recipients.map(r => r.key),
      attachments: this.state.files,
      action,
      signMsg: this.state.signMsg || draft,
      // draft is always signed
      signKeyFpr: this.state.signKey,
      noCache
    });
  }

  handleTextChange() {
    this.blurWarning && this.blurWarning.startBlurWarnInterval();
    this.logTextInput();
  }

  logTextInput() {
    if (this.logTextareaInput) {
      this.logUserInput('security_log_textarea_input'); // limit textarea log to 1 event per second

      this.logTextareaInput = false;
      window.setTimeout(() => {
        this.logTextareaInput = true;
      }, 1000);
    }
  }

  handleTextMouseUp(event) {
    const textElement = event.currentTarget;

    if (textElement.selectionStart === textElement.selectionEnd) {
      this.logUserInput('security_log_textarea_click');
    } else {
      this.logUserInput('security_log_textarea_select');
    }
  }

  handleOptionsExpand() {
    external_jQuery_default()('.m-modal .modal-body').animate({
      bottom: '172px'
    }, () => {
      this.setState({
        optionsExpanded: true
      });
    });
  }

  handleOptionsCollapse() {
    external_jQuery_default()('.m-modal .modal-body').animate({
      bottom: this.modalBodyBottomPosition
    });
    this.setState({
      optionsExpanded: false
    });
  }

  showErrorModal(error) {
    this.setState({
      error: {
        header: error.title || map.editor_error_header,
        message: error.message,
        type: 'danger'
      },
      waiting: false,
      pwdDialog: null
    });
  }

  onDecryptFailed(msg) {
    const error = {
      title: map.waiting_dialog_decryption_failed,
      message: msg.error ? msg.error.message : map.waiting_dialog_decryption_failed,
      type: 'danger'
    };
    this.showErrorModal(error);
  }

  onErrorMessage(msg) {
    if (msg.error.code === 'PWD_DIALOG_CANCEL') {
      return;
    }

    this.showErrorModal(msg.error);
  }

  onShowPwdDialog(msg) {
    this.setState({
      pwdDialog: msg,
      waiting: false,
      error: null
    });
  }

  onHidePwdDialog() {
    this.setState({
      pwdDialog: null
    });
  }

  handleAddAttachment(evt) {
    const files = Array.from(evt.target.files);
    const filesSize = files.reduce((total, file) => total + file.size, 0);
    const uploadedSize = this.state.files.reduce((total, file) => total + file.size, 0);
    const currentAttachmentsSize = uploadedSize + filesSize;

    if (currentAttachmentsSize > this.props.maxFileUploadSize) {
      const error = {
        title: map.upload_quota_warning_headline,
        message: `${map.upload_quota_exceeded_warning} ${Math.floor(this.props.maxFileUploadSize / (1024 * 1024))}MB.`
      };
      this.showErrorModal(error);
      return;
    }

    files.forEach(file => this.addAttachment(file));
  }

  addAttachment(file) {
    if (isOversize(file)) {
      throw new Error('File is too big');
    }

    this.fileUpload.readFile(file).then(file => this.setState(prevState => ({
      files: [...prevState.files, file]
    }))).catch(error => console.log(error));
  }

  onSetAttachment({
    attachment
  }) {
    const buffer = mvelo_default.a.util.str2ab(attachment.content);
    const blob = new Blob([buffer], {
      type: attachment.mimeType
    });
    const file = new File([blob], attachment.filename, {
      type: attachment.mimeType
    });
    this.addAttachment(file);
  }

  handleRemoveFile(id) {
    this.logUserInput('security_log_remove_attachment');
    this.setState(prevState => ({
      files: prevState.files.filter(file => file.id !== id)
    }));
  }

  editorBody() {
    return external_React_default.a.createElement("div", {
      style: {
        height: '100%'
      }
    }, external_React_default.a.createElement("div", {
      className: "editor-flex-container"
    }, external_React_default.a.createElement("div", {
      className: `editor-header ${this.props.secureBackground || this.state.files.length ? '' : 'hide'}`
    }, this.props.secureBackground && external_React_default.a.createElement("div", {
      className: "button-bar"
    }, external_React_default.a.createElement("button", {
      type: "button",
      className: "btn btn-link secureBgndSettingsBtn",
      title: map.security_background_button_title,
      onClick: () => this.port.emit('open-security-settings')
    }, external_React_default.a.createElement("span", {
      className: "glyphicon lockBtnIcon"
    }))), external_React_default.a.createElement("div", {
      className: "upload-panel"
    }, external_React_default.a.createElement(FilePanel_FileUploadPanel, {
      files: this.state.files,
      onRemoveFile: id => this.handleRemoveFile(id)
    }))), this.props.recipientInput && external_React_default.a.createElement("div", {
      className: "editor-recipients"
    }, external_React_default.a.createElement(RecipientInput_RecipientInput, {
      keys: this.state.publicKeys,
      recipients: this.state.recipients,
      autoLocate: this.state.autoLocate,
      encryptDisabled: this.state.encryptDisabled,
      onChangeEncryptStatus: ({
        encryptDisabled
      }) => this.setState({
        encryptDisabled
      }),
      onAutoLocate: recipient => this.port.emit('auto-locate', {
        recipient
      })
    })), external_React_default.a.createElement("div", {
      className: "editor-body"
    }, external_React_default.a.createElement("div", {
      className: "plain-text"
    }, external_React_default.a.createElement(PlainText_PlainText, {
      defaultValue: this.state.defaultPlainText,
      onChange: () => this.handleTextChange(),
      onBlur: () => this.blurWarning && this.blurWarning.onBlur(),
      onMouseUp: element => this.handleTextMouseUp(element),
      onLoad: () => this.handlePlainTextLoad(),
      ref: node => this.plainText = node
    }))), external_React_default.a.createElement("div", {
      className: "editor-footer"
    }, external_React_default.a.createElement(editor_components_EditorFooter, {
      embedded: this.props.embedded,
      signMsg: this.state.signMsg,
      defaultKey: this.state.defaultKey,
      onClickUpload: () => this.logUserInput('security_log_add_attachment'),
      onChangeFileInput: e => this.handleAddAttachment(e),
      onClickFileEncryption: () => this.port.emit('open-app', {
        fragment: '/encryption/file-encrypt'
      })
    }))));
  }

  editorPopup() {
    return external_React_default.a.createElement("div", null, external_React_default.a.createElement("div", {
      className: `m-modal ${this.state.pwdDialog ? 'hide' : ''}`
    }, external_React_default.a.createElement("div", {
      className: "modal-header clearfix"
    }, external_React_default.a.createElement("h4", null, map.editor_header)), external_React_default.a.createElement("div", {
      className: `modal-body ${this.props.secureBackground ? 'secureBackground' : ''}`
    }, this.editorBody()), external_React_default.a.createElement("div", {
      className: "modal-footer"
    }, external_React_default.a.createElement(editor_components_EditorModalFooter, {
      expanded: this.state.optionsExpanded,
      signMsg: this.state.signMsg,
      signKey: this.state.signKey,
      privKeys: this.state.privKeys,
      encryptDisabled: this.state.encryptDisabled,
      onCancel: () => this.handleCancel(),
      onSignOnly: () => this.handleSign(),
      onEncrypt: () => this.handleEncrypt(),
      onExpand: () => this.handleOptionsExpand(),
      onCollapse: () => this.handleOptionsCollapse(),
      onChangeSignMsg: signMsg => this.setState({
        signMsg
      }),
      onChangeSignKey: signKey => this.setState({
        signKey
      }),
      onClickSignSetting: () => this.port.emit('open-app', {
        fragment: '/settings/general'
      })
    }))), external_React_default.a.createElement(BlurWarning_BlurWarning, {
      ref: node => this.blurWarning = node
    }), this.state.pwdDialog && external_React_default.a.createElement("iframe", {
      className: "editor-popup-pwd-dialog",
      src: `../enter-password/pwdDialog.html?id=${this.state.pwdDialog.id}`,
      frameBorder: 0
    }));
  }

  waitingModal() {
    if (!this.state.waiting) {
      return null;
    }

    return external_React_default.a.createElement(util_ModalDialog, {
      className: "waiting-modal",
      hideHeader: true,
      hideFooter: true,
      keyboard: false,
      onShow: this.blurWarning && this.blurWarning.startBlurValid
    }, external_React_default.a.createElement("div", null, external_React_default.a.createElement(Spinner_Spinner, {
      style: {
        margin: '10px auto'
      }
    }), external_React_default.a.createElement("p", {
      className: "text-center"
    }, map.waiting_dialog_prepare_email, "\u2026")));
  }

  errorModal() {
    if (!this.state.error) {
      return null;
    }

    return external_React_default.a.createElement(util_ModalDialog, {
      title: this.state.error.header,
      onShow: this.blurWarning && this.blurWarning.startBlurValid,
      footer: external_React_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        "data-dismiss": "modal"
      }, map.form_ok)
    }, external_React_default.a.createElement("div", {
      style: {
        maxHeight: '120px',
        overflowX: 'scroll'
      }
    }, external_React_default.a.createElement(Alert, {
      message: this.state.error.message,
      type: this.state.error.type
    })));
  }

  render() {
    return external_React_default.a.createElement("div", {
      style: {
        height: '100%'
      }
    }, this.props.embedded ? external_React_default.a.createElement("div", {
      className: this.props.secureBackground ? 'secureBackground' : '',
      style: {
        height: '100%',
        position: 'relative'
      }
    }, this.editorBody()) : this.editorPopup(), this.waitingModal(), this.errorModal());
  }

}
editor_Editor.propTypes = {
  id: prop_types_default.a.string,
  embedded: prop_types_default.a.bool,
  maxFileUploadSize: prop_types_default.a.number,
  recipientInput: prop_types_default.a.bool,
  secureBackground: prop_types_default.a.bool
};
editor_Editor.defaultProps = {
  maxFileUploadSize: mvelo_default.a.MAX_FILE_UPLOAD_SIZE,
  secureBackground: true
};
// EXTERNAL MODULE: ./src/components/editor/editorRoot.css
var editorRoot = __webpack_require__(22);

// CONCATENATED MODULE: ./src/components/editor/editorRoot.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */






document.addEventListener('DOMContentLoaded', init);
register(['editor_header']);
mapToLocal();

function init() {
  if (document.body.dataset.mvelo) {
    return;
  }

  document.body.dataset.mvelo = true;
  const query = new URLSearchParams(document.location.search); // indicator if editor runs in container or popup

  const embedded = Boolean(query.get('embedded') || ''); // component id

  const id = query.get('id' || false); // attachment max file size

  const quota = parseInt(query.get('quota'));
  let maxFileUploadSize = mvelo_default.a.MAX_FILE_UPLOAD_SIZE;

  if (query.quota && quota < maxFileUploadSize) {
    maxFileUploadSize = quota;
  }

  mvelo_default.a.ui.addDocumentTitle(map.editor_header);
  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(editor_Editor, {
    id: id,
    embedded: embedded,
    maxFileUploadSize: maxFileUploadSize,
    recipientInput: !embedded
  }), document.body.appendChild(root));
}

/***/ })
/******/ ]);