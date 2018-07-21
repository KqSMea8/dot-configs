if (typeof browser === 'undefined') {
  window.browser = window.chrome
}

class Trackers {
  constructor(doc, addedClassName) {
    this.doc = doc
    this.addedClassName = addedClassName
  }

  amendSearchResultRow(row, container, url, title, hash) {
    Util.q(this.doc, 'body').classList.add('option--list-trackers')

    const linkElement = Util.createFragmentElement(`
      <a class="results-icon magnet" href></a>
    `)

    var self = this
    linkElement.addEventListener('click', async function linkClickHandler(
      event
    ) {
      event.preventDefault()
      linkElement.classList.remove('error')
      linkElement.classList.add('loading')
      linkElement.removeAttribute('title')

      try {
        const el = await Util.domFetch(url)

        const trackers = self.getTrackers(el)
        const magnetUri = self.getMagnetUri(hash, trackers, title)

        linkElement.removeEventListener('click', linkClickHandler)
        linkElement.setAttribute('href', magnetUri)
        linkElement.classList.add('success')
        window.location = magnetUri
      } catch (error) {
        linkElement.classList.add('error')
        linkElement.setAttribute('title', error)
      }

      linkElement.classList.remove('loading')
    })

    container.appendChild(linkElement)
  }

  amendDownloadPage(container) {
    const title = Util.q(container, 'h2 > span').textContent
    const hash = window.location.href.match(/\/([a-f0-9]{40})/)[1]
    const trackers = this.getTrackers(this.doc)
    const magnetUri = this.getMagnetUri(hash, trackers, title)

    const linkElement = Util.createFragmentElement(`
      <dl class="${this.addedClassName}">
        <dt>
          <a href="${magnetUri}">
            <span class="download-icon magnet j"></span>
            <span class="u">magnet</span>
            <span class="n">${title}</span> with trackers
          </a>
        </dt>
        <dd><span>Content Hash</span></dd>
      </dl>
    `)

    container.insertBefore(linkElement, Util.q(container, 'dl:first-of-type'))
  }

  getTrackers(downloadPage) {
    const trackerRows = Util.qa(downloadPage, '.trackers > dl > dt')
    return Util.map(trackerRows, dt => dt.textContent)
  }

  getMagnetUri(hash, trackers, title) {
    return `magnet:?xt=urn:btih:${hash}&dn=${title}&tr=${trackers.join('&tr=')}`
  }
}

class TorCache {
  constructor(doc, addedClassName) {
    this.doc = doc
    this.addedClassName = addedClassName
  }

  amendDownloadPage(container) {
    // TODO: duplicate
    const hash = window.location.href.match(/\/([a-f0-9]{40})/)[1]
    const torCacheUrl = `http://itorrents.org/torrent/${hash.toUpperCase()}.torrent"`

    const linkElement = Util.createFragmentElement(`
      <dl class="${this.addedClassName}"><dt>
        <a href="${torCacheUrl}" target="_blank">
          <span class="download-icon torcache j"></span>
          <span class="u">itorrents.org</span>
          <span class="n">${hash}.torrent</span>
        </a>
      </dt><dd><span>Torrent Cache</span></dd></dl>
    `)

    container.insertBefore(linkElement, Util.q(container, 'dl:first-of-type'))
  }

  amendSearchResultRow(row, container, hash) {
    Util.q(this.doc, 'body').classList.add('option--list-torcache')
    const torCacheUrl = `http://itorrents.org/torrent/${hash.toUpperCase()}.torrent"`
    const linkElement = Util.createFragmentElement(`
      <a class="results-icon torcache" href="${torCacheUrl}" target="_blank"></a>
    `)

    container.appendChild(linkElement)
  }
}

class Parser {
  static parse(title) {
    const p = new Parser(title)
    p.run()
    return p.parts
  }

  constructor(torrent) {
    this.torrent = {
      name: torrent
    }
    this.start = 0
    this.end = undefined
    this.raw = torrent
    this.groupRaw = ''

    /**
     * Pattern should contain either none or two capturing groups.
     * In case of two groups - 1st is raw, 2nd is clean.
     */
    this.patterns = {
      season: /([Ss]?([0-9]{1,2}))[Eex]/,
      episode: /([Eex]([0-9]{2})(?:[^0-9]|$))/,
      year: /([[(]?((?:19[0-9]|20[01])[0-9])[\])]?)/,
      resolution: /(([0-9]{3,4}p))[^M]/,
      quality: /(?:PPV\.)?[HP]DTV|(?:HD)?CAM|B[rR]Rip|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|[Bb]lu[Rr]ay|DvDScr|hdtv/,
      codec: /xvid|x264|h\.?264/i,
      audio: /MP3|DD5\.?1|Dual[- ]Audio|LiNE|DTS|AAC(?:\.?2\.0)?|AC3(?:\.5\.1)?/,
      group: /(- ?([^-]+(?:-={[^-]+-?$)?))$/,
      region: /R[0-9]/,
      extended: /EXTENDED/,
      hardcoded: /HC/,
      proper: /PROPER/,
      repack: /REPACK/,
      container: /MKV|AVI/,
      widescreen: /WS/,
      website: /^(\[ ?([^\]]+?) ?\])/,
      language: /rus\.eng/,
      garbage: /1400Mb|3rd Nov| ((Rip))/
    }
    this.types = {
      season: 'integer',
      episode: 'integer',
      year: 'integer',
      extended: 'boolean',
      hardcoded: 'boolean',
      proper: 'boolean',
      repack: 'boolean',
      widescreen: 'boolean'
    }

    this.parts = {}
  }

  run() {
    this.parse()
    this.parseEnd()
  }

  parse() {
    var key, match, index, clean, part

    for (key in this.patterns) {
      if (this.patterns.hasOwnProperty(key)) {
        if (!(match = this.torrent.name.match(this.patterns[key]))) {
          continue
        }

        index = {
          raw: match[1] ? 1 : 0,
          clean: match[1] ? 2 : 0
        }

        if (this.types[key] && this.types[key] === 'boolean') {
          clean = true
        } else {
          clean = match[index.clean]

          if (this.types[key] && this.types[key] === 'integer') {
            clean = parseInt(clean, 10)
          }
        }

        if (key === 'group') {
          if (
            clean.match(this.patterns.codec) ||
            clean.match(this.patterns.quality)
          ) {
            continue
          }

          if (clean.match(/[^ ]+ [^ ]+ .+/)) {
            key = 'episodeName'
          }
        }

        part = {
          name: key,
          match: match,
          raw: match[index.raw],
          clean: clean
        }

        if (key === 'episode') {
          this.parseMap(this.torrent.name.replace(part.raw, '{episode}'))
        }

        this.parsePart(part)
      }
    }

    this.parseCommon()
  }

  static escapeRegex(string) {
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  parseEnd() {
    var clean, groupPattern, episodeNamePattern

    // clean up excess
    clean = this.raw.replace(/(^[-. ]+)|([-. ]+$)/g, '')
    clean = clean.replace(/[()/]/g, ' ')
    clean = clean.split(/\.\.+| +/).filter(Boolean)

    if (clean.length !== 0) {
      groupPattern =
        Parser.escapeRegex(clean[clean.length - 1] + this.groupRaw) + '$'

      if (this.torrent.name.match(new RegExp(groupPattern))) {
        this.parseLate({
          name: 'group',
          clean: clean.pop() + this.groupRaw
        })
      }

      if (this.torrent.map && clean[0]) {
        episodeNamePattern =
          '{episode}' + Parser.escapeRegex(clean[0].replace(/_+$/, ''))

        if (this.torrent.map.match(new RegExp(episodeNamePattern))) {
          this.parseLate({
            name: 'episodeName',
            clean: clean.shift()
          })
        }
      }
    }

    if (clean.length !== 0) {
      this.parsePart({
        name: 'excess',
        raw: this.raw,
        clean: clean.length === 1 ? clean[0] : clean
      })
    }
  }

  parseLate(part) {
    if (part.name === 'group') {
      this.parsePart(part)
    } else if (part.name === 'episodeName') {
      part.clean = part.clean.replace(/[._]/g, ' ')
      part.clean = part.clean.replace(/_+$/, '').trim()
      this.parsePart(part)
    }
  }

  parsePart(part) {
    this.parts[part.name] = part.clean

    if (!part.match) {
      return
    }

    if (part.match.index === 0) {
      this.start = part.match[0].length
      return
    }

    if (!this.end || part.match.index < this.end) {
      this.end = part.match.index
    }

    if (part.name === 'excess') {
      return
    } else if (part.name === 'group') {
      this.groupRaw = part.raw
    }

    // remove known parts from the excess
    this.raw = this.raw.replace(part.raw, '')
  }

  parseMap(map) {
    this.torrent.map = map
  }

  parseCommon() {
    var raw = this.end
      ? this.torrent.name
          .substr(this.start, this.end - this.start)
          .split('(')[0]
      : this.torrent.name
    var clean = raw.replace(/^ -/, '')

    if (clean.indexOf(' ') === -1 && clean.indexOf('.') !== -1) {
      clean = clean.replace(/\./g, ' ')
    }

    clean = clean.replace(/_/g, ' ')
    clean = clean.replace(/([(_]|- )$/, '').trim()

    this.parsePart({
      name: 'title',
      raw: raw,
      clean: clean
    })
  }
}

class Omdb {
  constructor(doc) {
    this.doc = doc
  }

  run() {}

  amendSearchResultRow(row, container, title) {
    Util.q(this.doc, 'body').classList.add('option--list-omdb-rating')

    const titleInfo = this._getTitleInfo(row, title)
    if (!titleInfo) {
      return
    }

    const linkElement = Util.createFragmentElement(`
      <a class="results-icon-link" href>
        <span class="results-icon imdb"></span>
      </a>
    `)

    this._setSearchLink(linkElement, titleInfo, 'n')

    container.appendChild(linkElement)
  }

  _getTitleInfo(row, title) {
    const tagString = Util.q(row, 'dt')
      .lastChild.textContent.replace('»', '')
      .trim()
      .split(' ')
    const titleInfo = Parser.parse(title)

    if (
      !titleInfo ||
      !(
        tagString.includes('movie') ||
        tagString.includes('video') ||
        tagString.includes('tv')
      )
    ) {
      return
    }

    return titleInfo
  }

  _setSearchLink(linkElement, titleInfo, errorMessage) {
    const icon = Util.q(linkElement, '.results-icon')
    icon.classList.add('unavailable')
    linkElement.setAttribute(
      'href',
      `http://www.imdb.com/search/title?title=${titleInfo.title ||
        ''}&year=${titleInfo.year || ''}`
    )
    linkElement.setAttribute('target', '_blank')
    // linkElement.setAttribute('title', `Error: ${errorMessage} Click for IMDB search page`)
    linkElement.setAttribute(
      'title',
      `Search IMDb for ${titleInfo.title} (${titleInfo.year || 'unknown year'})`
    )
  }
}

class ExpandLink {
  constructor(doc, addedClassName) {
    this.doc = doc
    this.addedClassName = addedClassName
  }

  async run() {
    const body = await Util.loadElement(this.doc, 'body')
    body.classList.add('option--expand-link')
  }

  amendDownloadPage(container) {
    const numberOfLocations = Util.size(
      Util.qa(container, `dl:not(.${this.addedClassName})`)
    )

    container.classList.add('expand-parent')

    const linkElement = Util.createFragmentElement(`
      <dl class="${this.addedClassName}"><dt>
        <a href>
          <span class="download-icon expand j"></span>
          <span class="u">other</span>
          <span class="n">${numberOfLocations} more locations...</span>
        </a>
      </dt><dd><span>Expand Link</span></dd></dl>
    `)

    const linkElementIcon = Util.q(linkElement, '.expand')

    linkElement.addEventListener('click', event => {
      event.preventDefault()

      linkElementIcon.classList.toggle('expand--active')
      container.classList.toggle('expand-parent--expanded')
    })

    container.insertBefore(linkElement, Util.q(container, 'dl:first-of-type'))
  }
}

class InfiniteScroll {
  constructor(doc) {
    this.doc = doc
    this.isBusy = false
    this.nextPageLink = null
    this.currentPage = 0
  }

  run() {
    this.scrollWayPoint = this.getScrollWayPoint(this.doc)

    if (!this.scrollWayPoint) {
      return
    }

    this.statusMessage = Util.createFragmentElement(
      '<div class="scroll-msg"></div>'
    )
    this.scrollWayPoint.appendChild(this.statusMessage)

    this.nextPageLink = this.getNextPageLink(this.doc)
    this.doc.addEventListener(
      'scroll',
      Util.debounce(this.handleScroll.bind(this), 100)
    )
    this.doc.addEventListener(
      'resize',
      Util.debounce(this.handleScroll.bind(this), 100)
    )
    this.handleScroll()
  }

  async handleScroll() {
    if (this.isBusy || this.getDistanceFromViewPort() > 20) {
      return
    }

    this.isBusy = true
    this.statusMessage.textContent = 'loading next page...'

    try {
      const newDoc = await Util.domFetch(this.nextPageLink)

      this.currentPage = this.currentPage + 1
      this.nextPageLink = this.getNextPageLink(newDoc)

      this.handleResult(newDoc)
      if (!this.nextPageLink) {
        this.statusMessage.textContent = 'no more pages'
      } else {
        this.statusMessage.textContent = ''
        this.isBusy = false
      }
    } catch (error) {
      this.statusMessage.textContent = `error: ${error}`
      this.statusMessage.appendChild(this._getRetryButton())
      throw error
    }
  }

  _getRetryButton() {
    const retryButton = Util.createFragmentElement(`
      <a href class="retry-button">Retry</a>
    `)
    retryButton.addEventListener('click', event => {
      event.preventDefault()
      this.isBusy = false
      this.handleScroll()
    })
    return retryButton
  }

  handleResult(newDoc) {
    var newScrollWayPoint = this.getScrollWayPoint(newDoc)

    Util.q(this.scrollWayPoint, 'span').replaceWith(
      Util.q(newScrollWayPoint, 'span')
    )

    const contentsToAppend = Util.qa(newDoc, '.results > dl')

    const fragment = Util.createFragment()

    Util.each(contentsToAppend, fragment.appendChild.bind(fragment))
    Util.q('.results').insertBefore(fragment, Util.q('.results > p'))
  }

  getNextPageLink(doc) {
    try {
      if (!this.currentPage) {
        return Util.q(doc, '.results > p a:first-of-type').href
      } else {
        return Util.q(doc, '.results > p a:nth-of-type(3)').href
      }
    } catch (e) {
      return null
    }
  }

  getScrollWayPoint(doc) {
    return Util.q(doc, '.results > p')
  }

  getDistanceFromViewPort() {
    var rect = this.scrollWayPoint.getBoundingClientRect()
    var elTopFromWindowBottom = rect.top - window.innerHeight
    var elBottomFromWindowTop = rect.bottom - 0

    if (elTopFromWindowBottom > 0) {
      return elTopFromWindowBottom
    } else if (elBottomFromWindowTop < 0) {
      return elBottomFromWindowTop
    }
    return 0
  }
}

class App {
  constructor(options, doc) {
    this.doc = doc
    this.options = options

    if (this.options.infiniteScroll) {
      this.infiniteScroll = new InfiniteScroll(doc)
    }

    if (this.options.showImdbInList) {
      this.omdb = new Omdb(doc)
    }

    const addedClassName = 'tz-magnet-ext-added'

    if (this.options.showMagInList || this.options.showMagInPage) {
      this.trackers = new Trackers(doc, addedClassName)
    }

    if (this.options.showTorInPage || this.options.showTorInList) {
      this.torCache = new TorCache(doc, addedClassName)
    }

    if (this.options.showExpandoInPage) {
      this.expandLink = new ExpandLink(doc, addedClassName)
    }
  }

  run() {
    this.setBrowserEntry()

    if (this.expandLink) {
      this.expandLink.run()
    }

    if (this.omdb) {
      this.omdb.run()
    }

    Util.loadElement(this.doc, '.downlinks').then(el =>
      this.amendDownloadPage(el)
    )

    if (this.infiniteScroll) {
      Util.loadElement(this.doc, '.results').then(() =>
        this.infiniteScroll.run()
      )
    }

    Util.onElementsAdded(this.doc, '.results > dl', el =>
      this.amendSearchResultRow(el)
    )
  }

  async setBrowserEntry() {
    const body = await Util.loadElement(this.doc, 'body')

    if (Util.contains(window.navigator.userAgent, 'Chrome')) {
      body.classList.add('browser-chrome')
    } else {
      body.classList.add('browser-firefox')
    }
  }

  amendDownloadPage(downloadSection) {
    if (this.options.showExpandoInPage) {
      this.expandLink.amendDownloadPage(downloadSection)
    }

    if (this.options.showTorInPage) {
      this.torCache.amendDownloadPage(downloadSection)
    }

    if (this.options.showMagInPage) {
      this.trackers.amendDownloadPage(downloadSection)
    }
  }

  amendSearchResultRow(row) {
    const resultLink = Util.q(row, 'dt > a')

    if (!resultLink) {
      return
    }

    const container = Util.createFragmentElement(
      '<div class="results-link-container"></div>'
    )

    if (
      this.options.showImdbInList ||
      this.options.showMagInList ||
      this.options.showTorInList
    ) {
      row.appendChild(container)
    }

    const url = resultLink.href
    const title = resultLink.textContent
    const hash = url.match('[^/]+$')[0]

    if (this.options.showImdbInList) {
      this.omdb.amendSearchResultRow(row, container, title)
    }
    if (this.options.showMagInList) {
      this.trackers.amendSearchResultRow(row, container, url, title, hash)
    }
    if (this.options.showTorInList) {
      this.torCache.amendSearchResultRow(row, container, hash)
    }
  }

  amendSearchResultPage(rows) {
    Util.each(rows, row => this.amendSearchResultRow(row))
  }
}

Storage.loadOptions().then(options => new App(options, document).run())
