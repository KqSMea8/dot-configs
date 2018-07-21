if (typeof browser === 'undefined') {
  window.browser = window.chrome
}

class OptionsApp {
  constructor(doc) {
    this.doc = doc
    this.formFieldset = null
    this.form = null
  }

  async run() {
    this.setBrowserEntry()

    Promise.all([
      Storage.loadOptions().then(options => {
        this.options = options
      }).catch(e => {
        this.handleLoadError(e)
        this.options = {}
      }),
      Util.loadElement(this.doc, '#form').then(element => {
        this.form = element
      }),
      Util.loadElement(this.doc, '#form-fieldset').then(element => {
        this.formFieldset = element
      })
    ]).then(() => {
      this.initForm()
    })
  }

  async setBrowserEntry() {
    const body = await Util.loadElement(this.doc, 'body')
    if (Util.contains(window.navigator.userAgent, 'Chrome')) {
      body.classList.add('browser-chrome')
    } else {
      body.classList.add('browser-firefox')
    }
  }

  async initForm() {
    this.enableFormFields()
    Util.each(this.options, async(value, key) => {
      const input = key && await Util.loadElement(this.doc, `input[value=${key}]`)
      if (input) {
        input.checked = value
      }
    })
    this.form.addEventListener('change', e => {
      this.updateOption(e.target.value, e.target.checked)
    })
  }

  async updateOption(optionName, optionValue) {
    this.disableFormFields()
    this.options[optionName] = optionValue

    try {
      await Storage.saveOptions(this.options)
      this.handleSaveSuccess()
    } catch (e) {
      this.handleSaveError(e)
    }
    this.enableFormFields()
  }

  async handleSaveSuccess() {
    const successAlert = await Util.loadElement(this.doc, '#success-message')

    successAlert.classList.remove('message-container__message--highlight')
    window.requestAnimationFrame(() => {
      successAlert.classList.add('message-container__message--highlight')
    })
  }

  async handleSaveError(e) {
    const errorAlert = await Util.loadElement(this.doc, '#error-message')

    errorAlert.classList.remove('message-container__message--highlight')
    window.requestAnimationFrame(() => {
      errorAlert.innerText = `Unable to save settings (${e})`
      errorAlert.classList.add('message-container__message--highlight')
    })
  }

  async handleLoadError(e) {
    const errorAlert = await Util.loadElement(this.doc, '#error-message')

    errorAlert.classList.remove('message-container__message--highlight')
    window.requestAnimationFrame(() => {
      errorAlert.innerText = `Unable to load settings (${e})`
      errorAlert.classList.add('message-container__message--highlight')
    })
  }

  enableFormFields() {
    this.formFieldset.removeAttribute('disabled')
  }

  disableFormFields() {
    this.formFieldset.setAttribute('disabled', 'disabled')
  }
}

new OptionsApp(document).run()