import { each } from 'lodash'

import Navigation from 'components/Navigation'
import Preloader from 'components/Preloader'

import Info from 'pages/Info'
import Home from 'pages/Home'
import Play from 'pages/Play'
import Work from 'pages/Work'

class App {
  constructor () {
    this.createContent()

    this.createPreloaders()
    this.createNavigation()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.update()
  }

  // create components
  createNavigation () {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPreloaders () {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  // initialise content
  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  // map of pages
  createPages () {
    this.pages = {
      info: new Info(),
      home: new Home(),
      play: new Play(),
      work: new Work()
    }

    this.page = this.pages[this.template]
    this.page.create()

    // console.log(this.page)
  }
  /**
   * Preloader.
   */

  onPreloaded () {
    this.preloader.destroy()

    this.onResize()

    this.page.show()

    // console.log('Preloaded!')
  }

  onPopState () {
    this.onChange({
      url: window.location.pathname,
      push: false
    })
  }

  async onChange ({ url, push = true }) {
    await this.page.hide()

    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      if (push) {
        window.history.pushState({}, '', url)
      }

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]

      this.page.create()
      this.onResize()
      this.page.show()

      this.addLinkListeners()

      // console.log(div)
    } else {
      console.log('Error')
    }
  }

  onResize () {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }

  /**
   * Frames.
   */
  update () {
    if (this.page && this.page.update) {
      this.page.update()
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /**
   * Listeners.
   */
  addEventListeners () {
    window.addEventListener('popstate', this.onPopState.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, link => {
      link.onclick = event => {
        const { href } = link
        event.preventDefault()

        this.onChange({ url: href })
      }
    })
  }
}

// eslint-disable-next-line no-new
new App()
