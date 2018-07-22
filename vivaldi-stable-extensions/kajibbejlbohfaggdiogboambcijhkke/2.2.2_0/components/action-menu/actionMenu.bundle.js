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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: Component, default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!*************************!*\
  !*** ./src/lib/l10n.js ***!
  \*************************/
/*! exports provided: map, register, mapToLocal, default */
/*! exports used: default, map, mapToLocal, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapToLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trans; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mvelo__ = __webpack_require__(/*! ../mvelo */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mvelo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mvelo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);




let map = {};

function register(ids) {
  ids.forEach(id => {
    map[id] = true;
  });
}

function mapToLocal() {
  map = __WEBPACK_IMPORTED_MODULE_0__mvelo___default.a.l10n.getMessages(Object.keys(map));
}

function Trans(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'span',
    null,
    props.id.split(/(<\d>.*?<\/\d>)/).map(value => {
      const tags = value.match(/(<(\d)>(.*?)<\/\d>)/);
      if (tags) {
        const comp = props.components[tags[2]];
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(comp, null, comp.props.children || tags[3]);
      } else {
        return value;
      }
    })
  );
}



/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 9)();
}


/***/ }),
/* 3 */
/*!**********************!*\
  !*** ./src/mvelo.js ***!
  \**********************/
/*! dynamic exports provided */
/*! exports used: default */
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
mvelo.webex = typeof browser !== 'undefined';
// chrome extension
mvelo.crx = !mvelo.webex && typeof chrome !== 'undefined';

/* constants */

// min height for large frame
mvelo.LARGE_FRAME = 600;
// frame constants
mvelo.FRAME_STATUS = 'stat';
// frame status
mvelo.FRAME_ATTACHED = 'att';
mvelo.FRAME_DETACHED = 'det';
// key for reference to frame object
mvelo.FRAME_OBJ = 'fra';
// marker for dynamically created iframes
mvelo.DYN_IFRAME = 'dyn';
mvelo.IFRAME_OBJ = 'obj';
// armor header type
mvelo.PGP_MESSAGE = 'msg';
mvelo.PGP_SIGNATURE = 'sig';
mvelo.PGP_PUBLIC_KEY = 'pub';
mvelo.PGP_PRIVATE_KEY = 'priv';
// display decrypted message
mvelo.DISPLAY_INLINE = 'inline';
mvelo.DISPLAY_POPUP = 'popup';
// editor type
mvelo.PLAIN_TEXT = 'plain';
mvelo.RICH_TEXT = 'rich';
// keyring
mvelo.KEYRING_DELIMITER = '|#|';
mvelo.LOCAL_KEYRING_ID = `localhost${mvelo.KEYRING_DELIMITER}mailvelope`;
// colors for secure background
mvelo.SECURE_COLORS = ['#e9e9e9', '#c0c0c0', '#808080', '#ffce1e', '#ff0000', '#85154a', '#6f2b8b', '#b3d1e3', '#315bab', '#1c449b', '#4c759c', '#1e8e9f', '#93b536'];
// 50 MB file size limit
mvelo.MAX_FILE_UPLOAD_SIZE = 50 * 1024 * 1024;
// stable id if app runs in top frame
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

mvelo.util = {};

mvelo.util.sortAndDeDup = function (unordered, compFn) {
  const result = [];
  const sorted = unordered.sort(compFn);
  // remove duplicates
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || compFn && compFn(sorted[i - 1], sorted[i]) !== 0 || !compFn && sorted[i - 1] !== sorted[i]) {
      result.push(sorted[i]);
    }
  }
  return result;
};

/**
 * Only deduplicates, does not sort
 * @param  {Array} list   The list of items with duplicates
 * @return {Array}        The list of items without duplicates
 */
mvelo.util.deDup = function (list) {
  const result = [];
  (list || []).forEach(i => {
    if (result.indexOf(i) === -1) {
      result.push(i);
    }
  });
  return result;
};

// random hash generator
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
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\//g, "&#x2F;");
};

mvelo.util.decodeHTML = function (html) {
  return String(html).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&#x2F;/g, "\/");
};

mvelo.util.decodeQuotedPrint = function (armored) {
  return armored.replace(/=3D=3D\s*$/m, "==").replace(/=3D\s*$/m, "=").replace(/=3D(\S{4})\s*$/m, "=$1");
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

mvelo.util.generateSecurityBackground = function ({ width, height, scaling = 1, angle = 0, colorId = 0 }) {
  const iconWidth = width * scaling;
  const iconHeight = height * scaling;
  const iconColor = mvelo.SECURE_COLORS[colorId];

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" id="secBgnd" version="1.1" width="${iconWidth}px" height="${iconHeight}px" viewBox="0 0 27 27"><path transform="rotate(${angle} 14 14)" style="fill: ${iconColor};" d="m 13.963649,25.901754 c -4.6900005,0 -8.5000005,-3.78 -8.5000005,-8.44 0,-1.64 0.47,-3.17 1.29,-4.47 V 9.0417546 c 0,-3.9399992 3.23,-7.1499992 7.2000005,-7.1499992 3.97,0 7.2,3.21 7.2,7.1499992 v 3.9499994 c 0.82,1.3 1.3,2.83 1.3,4.48 0,4.65 -3.8,8.43 -8.49,8.43 z m -1.35,-7.99 v 3.33 h 0 c 0,0.02 0,0.03 0,0.05 0,0.74 0.61,1.34 1.35,1.34 0.75,0 1.35,-0.6 1.35,-1.34 0,-0.02 0,-0.03 0,-0.05 h 0 v -3.33 c 0.63,-0.43 1.04,-1.15 1.04,-1.97 0,-1.32 -1.07,-2.38 -2.4,-2.38 -1.32,0 -2.4,1.07 -2.4,2.38 0.01,0.82 0.43,1.54 1.06,1.97 z m 6.29,-8.8699994 c 0,-2.7099992 -2.22,-4.9099992 -4.95,-4.9099992 -2.73,0 -4.9500005,2.2 -4.9500005,4.9099992 V 10.611754 C 10.393649,9.6217544 12.103649,9.0317546 13.953649,9.0317546 c 1.85,0 3.55,0.5899998 4.94,1.5799994 l 0.01,-1.5699994 z" /></svg>`;
};

mvelo.util.showSecurityBackground = function (port, isEmbedded) {
  if (isEmbedded) {
    $('.secureBgndSettingsBtn').on('mouseenter', () => {
      $('.secureBgndSettingsBtn').removeClass('btn-link').addClass('btn-default');
    });

    $('.secureBgndSettingsBtn').on('mouseleave', () => {
      $('.secureBgndSettingsBtn').removeClass('btn-default').addClass('btn-link');
    });
  }

  port.send('get-security-background').then(background => {
    const secBgndIcon = mvelo.util.generateSecurityBackground(background);
    const secureStyle = `\n.secureBackground {
      background-color: ${background.color};
      background-position: -20px -20px;
      background-image: url(data:image/svg+xml;base64,${btoa(secBgndIcon)});
    }`;

    const lockIcon = mvelo.util.generateSecurityBackground({ width: 28, height: 28, colorId: 2 });
    const lockButton = `\n.lockBtnIcon, .lockBtnIcon:active {
      margin: 0;
      width: 28px; height: 28px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url(data:image/svg+xml;base64,'}${btoa(lockIcon)});
    }`;

    mvelo.util.removeSecurityBackground();
    $('head').append($('<style>').attr('id', 'secBgndCss').text(secureStyle + lockButton));
  });
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

mvelo.util.mapError = function (error) {
  return { message: error.message, code: error.code || 'INTERNAL_ERROR' };
};

mvelo.util.PromiseQueue = class {
  constructor() {
    this.queue = [];
  }

  push(thisArg, method, args) {
    return new Promise((resolve, reject) => {
      this.queue.push({ resolve, reject, thisArg, method, args });
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
    const eventHandler = new mvelo.EventHandler(mvelo.runtime.connect({ name: sender }));
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
        Promise.resolve().then(() => handler.call(this, options)).then(result => this.emit('_reply', { result: result || null, _reply: options._reply })).catch(error => this.emit('_reply', { error: mvelo.util.mapError(error), _reply: options._reply }));
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
      this._reply.set(options._reply, { resolve, reject });
      this._port.postMessage(options);
    });
  }
};

if (true) {
  module.exports = mvelo;
}

/***/ }),
/* 4 */
/*!**************************************************!*\
  !*** ./src/components/action-menu/actionMenu.js ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ActionMenuWrapper__ = __webpack_require__(/*! ./components/ActionMenuWrapper */ 6);
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





document.addEventListener('DOMContentLoaded', init);

function init() {
  const root = document.createElement('div');
  __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_ActionMenuWrapper__["a" /* default */], null), document.body.appendChild(root));
}

/***/ }),
/* 5 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 6 */
/*!********************************************************************!*\
  !*** ./src/components/action-menu/components/ActionMenuWrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mvelo__ = __webpack_require__(/*! ../../../mvelo */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mvelo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mvelo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_l10n__ = __webpack_require__(/*! ../../../lib/l10n */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ActionMenuAnimated__ = __webpack_require__(/*! ./ActionMenuAnimated */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ActionMenuSetup__ = __webpack_require__(/*! ./ActionMenuSetup */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ActionMenu_less__ = __webpack_require__(/*! ../ActionMenu.less */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ActionMenu_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ActionMenu_less__);
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */








__WEBPACK_IMPORTED_MODULE_2__lib_l10n__["d" /* register */](['action_menu_help']);
__WEBPACK_IMPORTED_MODULE_2__lib_l10n__["c" /* mapToLocal */]();

class ActionMenuWrapper extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { isSetupDone: false };
    this.port = __WEBPACK_IMPORTED_MODULE_0__mvelo___default.a.EventHandler.connect('menu-59edbbeb9affc4004a916276');
  }

  componentWillMount() {
    this.port.send('get-is-setup-done').then(({ isSetupDone }) => this.setState({ isSetupDone }));
  }

  onMenuItemClick(e) {
    const itemClicked = e.currentTarget;
    if (itemClicked === '' || itemClicked.id === '') {
      return false;
    }
    this.port.emit('browser-action', { action: itemClicked.id });
    this.hide();
  }

  hide() {
    $(document.body).fadeOut(() => window.close());
  }

  render() {
    let actionMenuContent = null;
    if (this.state.isSetupDone) {
      actionMenuContent = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ActionMenuAnimated__["a" /* default */], { onMenuItemClickHandler: e => this.onMenuItemClick(e) });
    } else {
      actionMenuContent = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ActionMenuSetup__["a" /* default */], { onMenuItemClickHandler: e => this.onMenuItemClick(e) });
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: `action-menu ${this.state.isSetupDone ? '' : 'action-menu-setup'}` },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'action-menu-wrapper' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'action-menu-header clearfix' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'mailvelope-logo settings-logo' },
            'Mailvelope'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'nav-right' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: 'https://www.mailvelope.com/help', target: '_blank', rel: 'noopener noreferrer' },
              __WEBPACK_IMPORTED_MODULE_2__lib_l10n__["b" /* map */].action_menu_help
            )
          )
        ),
        actionMenuContent
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ActionMenuWrapper);

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./src/components/action-menu/components/ActionMenuAnimated.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActionMenuBase__ = __webpack_require__(/*! ./ActionMenuBase */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionMenuAdvanced__ = __webpack_require__(/*! ./ActionMenuAdvanced */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(/*! jquery */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */







class ActionMenuAnimated extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  showBaseOptions() {
    __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.action-menu-container-slide').animate({ marginLeft: "0px" }, 200);
    __WEBPACK_IMPORTED_MODULE_4_jquery___default()('div.action-menu').css('height', 300);
  }

  showAdvancedOptions() {
    __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.action-menu-container-slide').animate({ marginLeft: "-230px" }, 200);
    const realHeight = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('div.action-menu')[0].scrollHeight;
    __WEBPACK_IMPORTED_MODULE_4_jquery___default()('div.action-menu').css('height', realHeight);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'action-menu-container-slide-container' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'action-menu-container-slide' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionMenuBase__["a" /* default */], { onMenuItemClickHandler: this.props.onMenuItemClickHandler, onShowAdvancedOptionsHandler: this.showAdvancedOptions }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActionMenuAdvanced__["a" /* default */], { onMenuItemClickHandler: this.props.onMenuItemClickHandler, onShowBaseOptionsHandler: this.showBaseOptions })
      )
    );
  }
}

ActionMenuAnimated.propTypes = {
  onMenuItemClickHandler: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (ActionMenuAnimated);

/***/ }),
/* 8 */
/*!*****************************************************************!*\
  !*** ./src/components/action-menu/components/ActionMenuBase.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_l10n__ = __webpack_require__(/*! ../../../lib/l10n */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





__WEBPACK_IMPORTED_MODULE_1__lib_l10n__["d" /* register */](['action_menu_dashboard', 'action_menu_keyring', 'action_menu_file_encryption', 'action_menu_advanced_options', 'action_menu_primary_menu_aria_label']);

function ActionMenuBase(props) {
  const strong = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong', { key: '0' })];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'primary' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'action-menu', role: 'menu', 'aria-label': __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_primary_menu_aria_label },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'item-big', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'options', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__lib_l10n__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_dashboard, components: strong })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-tachometer', role: 'presentation' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'item-big', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'manage-keys', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__lib_l10n__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_keyring, components: strong })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-key', role: 'presentation' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'item-big', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'encrypt-file', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__lib_l10n__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_file_encryption, components: strong })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-files-o', role: 'presentation' })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { onClick: props.onShowAdvancedOptionsHandler, role: 'button' },
        __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_advanced_options,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon glyphicon-chevron-right', role: 'presentation' })
      )
    )
  );
}

ActionMenuBase.propTypes = {
  onShowAdvancedOptionsHandler: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMenuItemClickHandler: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (ActionMenuBase);

/***/ }),
/* 9 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 10);
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 11);
var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 12);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
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
/* 10 */
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 12 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
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
/* 13 */
/*!*********************************************************************!*\
  !*** ./src/components/action-menu/components/ActionMenuAdvanced.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_l10n__ = __webpack_require__(/*! ../../../lib/l10n */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





__WEBPACK_IMPORTED_MODULE_1__lib_l10n__["d" /* register */](['action_menu_back', 'action_menu_all_options', 'action_menu_review_security_logs', 'action_menu_manage_email_providers', 'action_menu_edit_security_settings', 'action_menu_reload_extension_scripts', 'action_menu_activate_current_tab', 'action_menu_advanced_menu_aria_label']);

function ActionMenuAdvanced(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'advanced' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'header' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { onClick: props.onShowBaseOptionsHandler, role: 'button' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon glyphicon-chevron-left', role: 'presentation' }),
        __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_back
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'action-menu', role: 'menu', 'aria-label': __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_advanced_menu_aria_label },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'with-icon', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'security-logs', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_review_security_logs
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-eye', role: 'presentation' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'with-icon', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'email-providers', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_manage_email_providers
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-server', role: 'presentation' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'with-icon', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'security-settings', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_edit_security_settings
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lock', role: 'presentation' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'with-icon', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'reload-extension', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_reload_extension_scripts
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-refresh', role: 'presentation' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'with-icon', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'activate-tab', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_activate_current_tab
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', role: 'presentation' })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { id: 'options', onClick: props.onMenuItemClickHandler, role: 'button' },
        __WEBPACK_IMPORTED_MODULE_1__lib_l10n__["b" /* map */].action_menu_all_options
      )
    )
  );
}

ActionMenuAdvanced.propTypes = {
  onShowBaseOptionsHandler: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMenuItemClickHandler: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (ActionMenuAdvanced);

/***/ }),
/* 14 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 15 */
/*!******************************************************************!*\
  !*** ./src/components/action-menu/components/ActionMenuSetup.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_l10n__ = __webpack_require__(/*! ../../../lib/l10n */ 1);
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





__WEBPACK_IMPORTED_MODULE_2__lib_l10n__["d" /* register */](['action_menu_configure_mailvelope', 'action_menu_more_options', 'action_menu_setup_menu_aria_label']);

function ActionMenuSetup(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'primary' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'action-menu', role: 'menu', 'aria-label': __WEBPACK_IMPORTED_MODULE_2__lib_l10n__["b" /* map */].action_menu_setup_menu_aria_label },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'item-big', role: 'menuitem' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'clearfix', id: 'setup-keys', onClick: props.onMenuItemClickHandler, role: 'button' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__lib_l10n__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_2__lib_l10n__["b" /* map */].action_menu_configure_mailvelope, components: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong', { key: '0' })] })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-gear', role: 'presentation' })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { id: 'options', onClick: props.onMenuItemClickHandler, role: 'button' },
        __WEBPACK_IMPORTED_MODULE_2__lib_l10n__["b" /* map */].action_menu_more_options
      )
    )
  );
}

ActionMenuSetup.propTypes = {
  onMenuItemClickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (ActionMenuSetup);

/***/ }),
/* 16 */
/*!****************************************************!*\
  !*** ./src/components/action-menu/ActionMenu.less ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./ActionMenu.less */ 17);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./ActionMenu.less", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./ActionMenu.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/components/action-menu/ActionMenu.less ***!
  \*********************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ 18);
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 19)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Courgette';\n  src: url(" + escape(__webpack_require__(/*! ../../res/fonts/Courgette-Regular.woff2 */ 20)) + ") format('woff2');\n}\n.settings-logo {\n  font-family: 'Courgette', cursive;\n}\nbody {\n  padding: 0px !important;\n  margin: 0px !important;\n  width: 100%;\n}\ndiv.action-menu.action-menu-setup {\n  height: auto;\n}\ndiv.action-menu {\n  height: 300px;\n  overflow: hidden;\n  width: 230px;\n  padding: 0;\n}\ndiv.action-menu .action-menu-header {\n  padding: 3px 0;\n  height: 37px;\n}\ndiv.action-menu .action-menu-header .mailvelope-logo {\n  color: #777;\n  background-color: transparent;\n  font-size: 18px;\n  line-height: 20px;\n  float: left;\n  padding: 7px 0 6px 0.6em;\n}\ndiv.action-menu .action-menu-header .nav-right {\n  float: right;\n  padding: 7px 0.6em 6px 0;\n  font-size: 12.6px;\n}\ndiv.action-menu .action-menu-header .nav-right a {\n  color: #555555;\n  outline: none;\n  text-decoration: none;\n}\ndiv.action-menu .action-menu-header .nav-right a:hover {\n  text-decoration: underline;\n}\ndiv.action-menu .action-menu-container-slide-container {\n  position: relative;\n  overflow: hidden;\n  width: 230px;\n}\ndiv.action-menu .action-menu-container-slide-container .action-menu-container-slide {\n  width: 460px;\n}\ndiv.action-menu .action-menu-container-slide-container .action-menu-container-slide .primary {\n  float: left;\n  display: inline-block;\n  width: 230px;\n}\ndiv.action-menu .action-menu-container-slide-container .action-menu-container-slide .advanced {\n  display: inline-block;\n  width: 230px;\n}\ndiv.action-menu ul.action-menu {\n  padding: 0;\n  margin: 0;\n}\ndiv.action-menu ul.action-menu li {\n  list-style-type: none;\n  margin: 0;\n  font-size: 1em;\n  /** Version of the advanced menu with icon **/\n}\ndiv.action-menu ul.action-menu li.item-big {\n  height: 76px;\n}\ndiv.action-menu ul.action-menu li.item-big a {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  padding: 0 0.6em;\n}\ndiv.action-menu ul.action-menu li.item-big a p {\n  float: left;\n  padding: 0.23em 1em 0.23em 1%;\n  width: 85%;\n}\ndiv.action-menu ul.action-menu li.item-big a i.fa {\n  text-align: center;\n  float: right;\n  width: 10%;\n  font-size: 2em;\n  color: #888;\n  margin-top: .125em;\n}\ndiv.action-menu ul.action-menu li.with-icon a {\n  padding: 7px 0.6em;\n  display: flex;\n  align-items: center;\n}\ndiv.action-menu ul.action-menu li.with-icon a p {\n  float: left;\n  padding: 0.23em .5em 0.23em 1%;\n  width: 90%;\n}\ndiv.action-menu ul.action-menu li.with-icon a i.fa {\n  text-align: center;\n  float: right;\n  width: 10%;\n  font-size: 1.3em;\n  color: #888;\n  margin-top: .125em;\n}\ndiv.action-menu ul.action-menu li a {\n  padding: 0.72em 0.6em;\n  border-top: 1px solid #e7e7e7;\n  display: block;\n  color: #555555;\n  transition: background-color 0.2s ease;\n}\ndiv.action-menu ul.action-menu li a p {\n  padding: 0 1em 0 0;\n  margin: 0;\n  font-size: 13px;\n}\ndiv.action-menu ul.action-menu li a:hover {\n  color: #333333;\n  background-color: #f8f8f8;\n  text-decoration: none;\n}\ndiv.action-menu ul.action-menu li a:hover i.fa {\n  color: #333333;\n}\ndiv.action-menu .footer a,\ndiv.action-menu .header a {\n  height: 33px;\n  border-top: 1px solid #e7e7e7;\n  background-color: #f8f8f8;\n  display: block;\n  padding: 7px 0.6em;\n  text-align: center;\n  font-size: 12.6px;\n  color: black;\n  transition: background-color 0.2s ease;\n}\ndiv.action-menu .footer a:hover,\ndiv.action-menu .header a:hover {\n  background-color: #e7e7e7;\n  text-decoration: none;\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 19 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
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
/* 20 */
/*!***********************************************!*\
  !*** ./src/res/fonts/Courgette-Regular.woff2 ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "00744c5a3539f19e7c7c9d1fb40a58fa.woff2";

/***/ }),
/* 21 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
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

var	fixUrls = __webpack_require__(/*! ./urls */ 22);

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 22 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
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


/***/ })
/******/ ]);