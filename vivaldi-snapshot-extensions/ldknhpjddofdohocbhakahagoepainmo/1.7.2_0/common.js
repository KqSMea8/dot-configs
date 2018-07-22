if (typeof browser === 'undefined') {
  window.browser = window.chrome
}

class Util {
  static fetch(urlString, params, conf) {
    const url = new URL(urlString)
    Object.keys(params || {}).forEach(key =>
      url.searchParams.append(key, params[key])
    )
    return fetch(url, conf)
  }

  static async domFetch(urlString, params) {
    const r = await fetch(urlString, params)
    const text = await r.text()
    const doc = await new DOMParser().parseFromString(text, 'text/html')
    // so linkElement.href etc will work like the current DOM
    const baseElement = doc.createElement('base')
    baseElement.href = urlString
    Util.q(doc, 'head').appendChild(baseElement)
    return doc
  }

  static isString(variable) {
    return typeof variable === 'string' || variable instanceof String
  }

  static qa(parent, selector) {
    return Util._q(true, parent, selector)
  }

  static q(parent, selector) {
    return Util._q(false, parent, selector)
  }

  static _q(all, parent, selector) {
    if (!selector) {
      selector = parent
      parent = document
    } else {
      parent = Util.isString(parent) ? document.querySelector(parent) : parent
    }

    if (all) {
      return parent.querySelectorAll(selector)
    } else {
      return parent.querySelector(selector)
    }
  }

  static size(obj) {
    return Object.keys(obj || []).length
  }

  static createFragmentElement(htmlString) {
    return document.createRange().createContextualFragment(htmlString)
      .firstElementChild
  }

  static createFragment() {
    return document.createDocumentFragment()
  }

  static map(iterable, callback) {
    if (iterable.map) {
      return iterable.map(callback)
    } else if (Util.size(Object.entries(iterable))) {
      return Object.entries(iterable).map(([key, value]) =>
        callback(value, key)
      )
    } else {
      return Array.prototype.map.call(iterable, callback)
    }
  }

  static each(iterable, callback) {
    if (iterable.forEach) {
      iterable.forEach(callback)
    } else {
      Object.entries(iterable).forEach(([key, value]) => callback(value, key))
    }
  }

  static debounce(func, wait) {
    var timeout
    return function() {
      var args = arguments
      window.clearTimeout(timeout)
      timeout = window.setTimeout(() => {
        timeout = null
        func.apply(this, args)
      }, wait)
    }
  }

  static contains(item, testItem) {
    return item.indexOf(testItem) > -1
  }

  static matches(item, selector) {
    if (item.matches) {
      return item.matches(selector)
    }
  }

  static onElementsAdded(target, selector, callback) {
    const elements = Util.qa(target, selector)
    var isDisconnected = false
    var observer = null
    const disconnect = () => {
      isDisconnected = true
      if (observer) {
        observer.disconnect()
      }
    }
    if (elements) {
      Util.each(elements, element => {
        if (isDisconnected) {
          return
        }
        if (Util.matches(element, selector)) {
          callback(element, disconnect)
        }
      })
    }

    observer = new MutationObserver(mutations => {
      Util.each(mutations, mutation => {
        if (isDisconnected) {
          return
        }
        Util.each(mutation.addedNodes, node => {
          if (isDisconnected) {
            return
          }
          if (Util.matches(node, selector)) {
            callback(node, disconnect)
          }
        })
      })
    })

    observer.observe(target, {
      childList: true,
      subtree: true
    })
  }

  static onElementAdded(target, selector, callback) {
    Util.onElementsAdded(target, selector, (element, disconnect) => {
      disconnect()
      callback(element)
    })
  }

  static loadElement(target, selector) {
    return new Promise(resolve => {
      Util.onElementsAdded(target, selector, (element, disconnect) => {
        disconnect()
        resolve(element)
      })
    })
  }
}

class Storage {
  static get OPTIONS_KEY() {
    return 'extensionOptions'
  }

  static get DEFAULT_OPTIONS() {
    return {
      [Storage.OPTIONS_KEY]: {
        showMagInPage: true,
        showTorInPage: true,
        showExpandoInPage: true,
        showImdbInList: false,
        showMagInList: true,
        showTorInList: true,
        infiniteScroll: false
      }
    }
  }

  static get OMDB_CACHE_KEY() {
    return 'omdbCache'
  }

  static async loadOptions() {
    return new Promise((resolve, reject) => {
      browser.storage.sync.get(Storage.DEFAULT_OPTIONS, options => {
        window.setTimeout(() => reject(new Error('Timed out')), 5000)
        if (browser.runtime.lastError) {
          reject(browser.runtime.lastError)
        } else {
          resolve(options[Storage.OPTIONS_KEY])
        }
      })
    })
  }

  static saveOptions(options) {
    return new Promise((resolve, reject) => {
      browser.storage.sync.set(
        {
          [Storage.OPTIONS_KEY]: options
        },
        () => {
          if (browser.runtime.lastError) {
            reject(browser.runtime.lastError)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static loadCache() {
    return new Promise((resolve, reject) => {
      browser.storage.local.get(Storage.OMDB_CACHE_KEY, cache => {
        if (browser.runtime.lastError) {
          reject(browser.runtime.lastError)
        } else {
          resolve(cache[Storage.OMDB_CACHE_KEY])
        }
      })
    })
  }

  static saveCache(cache) {
    return new Promise((resolve, reject) => {
      browser.storage.local.set(
        {
          [Storage.OMDB_CACHE_KEY]: cache
        },
        () => {
          if (browser.runtime.lastError) {
            reject(browser.runtime.lastError)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static onCacheChange(callback) {
    browser.storage.onChanged.addListener((changes, areaName) => {
      const cacheChanges = changes[Storage.OMDB_CACHE_KEY]
      if (areaName === 'local' && cacheChanges) {
        callback(cacheChanges.newValue, cacheChanges.oldValue)
      }
    })
  }

  static offCacheChange(callback) {
    browser.storage.onChanged.removeListener(callback)
  }
}

window.Util = Util
window.Storage = Storage
