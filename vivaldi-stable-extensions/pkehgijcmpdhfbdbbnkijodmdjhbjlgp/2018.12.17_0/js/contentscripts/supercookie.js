/*
 * This file is part of Privacy Badger <https://www.eff.org/privacybadger>
 * Copyright (C) 2015 Electronic Frontier Foundation
 *
 * Derived from Chameleon <https://github.com/ghostwords/chameleon>
 * Copyright (C) 2015 ghostwords
 *
 * Privacy Badger is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Privacy Badger is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Privacy Badger.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Generate script to inject into the page
 *
 * @returns {string}
 */
function getScPageScript() {
  // code below is not a content script: no chrome.* APIs /////////////////////

  // return a string
  return "(" + function () {

    try {
      localStorage; // eslint-disable-line no-unused-expressions
    } catch (ex) {
      // abort when we can't access localStorage
      // such as when "Block third-party cookies" is enabled in Chrome
      return;
    }

    (function (DOCUMENT, dispatchEvent, CUSTOM_EVENT, LOCAL_STORAGE, OBJECT, keys) {

      var event_id = DOCUMENT.currentScript.getAttribute('data-event-id-super-cookie');

      /**
       * send message to the content script
       *
       * @param {*} message
       */
      var send = function (message) {
        dispatchEvent.call(DOCUMENT, new CUSTOM_EVENT(event_id, {
          detail: message
        }));
      };

      /**
       * Read HTML5 local storage and return contents
       * @returns {Object}
       */
      let getLocalStorageItems = function () {
        let lsItems = {};
        for (let i = 0; i < LOCAL_STORAGE.length; i++) {
          let key = LOCAL_STORAGE.key(i);
          lsItems[key] = LOCAL_STORAGE.getItem(key);
        }
        return lsItems;
      };

      if (event_id) { // inserted script may run before the event_id is available
        let localStorageItems = getLocalStorageItems();
        if (keys.call(OBJECT, localStorageItems).length) {
          // send to content script
          send({ localStorageItems });
        }
      }

    // save locally to keep from getting overwritten by site code
    } (document, document.dispatchEvent, CustomEvent, localStorage, Object, Object.keys));

  } + "());";

  // code above is not a content script: no chrome.* APIs /////////////////////

}

// END FUNCTION DEFINITIONS ///////////////////////////////////////////////////

(function () {

// don't inject into non-HTML documents (such as XML documents)
// but do inject into XHTML documents
if (document instanceof HTMLDocument === false && (
  document instanceof XMLDocument === false ||
  document.createElement('div') instanceof HTMLDivElement === false
)) {
  return;
}

// don't bother asking to run when trivially in first-party context
if (window.top == window) {
  return;
}

// TODO race condition; fix waiting on https://crbug.com/478183
chrome.runtime.sendMessage({
  checkEnabledAndThirdParty: window.FRAME_URL
}, function (enabledAndThirdParty) {
  if (!enabledAndThirdParty) {
    return;
  }

  var event_id_super_cookie = Math.random();

  // listen for messages from the script we are about to insert
  document.addEventListener(event_id_super_cookie, function (e) {
    // pass these on to the background page (handled by webrequest.js)
    chrome.runtime.sendMessage({
      superCookieReport: e.detail,
      frameUrl: window.FRAME_URL
    });
  });

  window.injectScript(getScPageScript(), {
    event_id_super_cookie: event_id_super_cookie
  });

});

}());