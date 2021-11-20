import { each } from 'lodash'
import NormalizeWheel from 'normalize-wheel'

import Canvas from 'components/Canvas'

import Navigation from 'components/Navigation'
import Preloader from 'components/Preloader'

import Info from 'pages/Info'
import Home from 'pages/Home'
import Play from 'pages/Play'
import Work from 'pages/Work'

class App {
  constructor () {
    this.createContent()

    this.createCanvas()
    this.createPreloaders()
    this.createNavigation()

    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.onResize()

    this.update()
  }

  // create components
  createNavigation () {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPreloaders () {
    this.preloader = new Preloader({
      canvas: this.canvas
    })

    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createCanvas () {
    this.canvas = new Canvas({
      template: this.template
    })
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
    this.onResize()

    this.canvas.onPreloaded()
    // this.preloader.destroy()

    this.page.show()

    // console.log('Preloaded!')
  }

  /**
   * History API.
   */
  onPopState () {
    this.onChange({
      url: window.location.pathname,
      push: false
    })
  }

  async onChange ({ url, push = true }) {
    this.canvas.onChangeStart(this.template)
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

      this.background = divContent.getAttribute('data-background')
      this.color = divContent.getAttribute('data-color')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.canvas.onChangeEnd(this.template)

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

  /**
   * Events.
   */
  onResize () {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }

    window.requestAnimationFrame(_ => {
      if (this.canvas && this.canvas.onResize) {
        this.canvas.onResize()
      }
    })
  }

  onTouchDown (event) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event)
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchDown(event)
    }
  }

  onTouchMove (event) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event)
    }

    if (this.page && this.page.onTouchMove) {
      this.page.onTouchMove(event)
    }
  }

  onTouchUp (event) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event)
    }

    if (this.page && this.page.onTouchUp) {
      this.page.onTouchUp(event)
    }
  }

  onWheel (event) {
    const normalizedWheel = NormalizeWheel(event)

    if (this.canvas && this.canvas.update) {
      this.canvas.onWheel(normalizedWheel)
    }

    if (this.page && this.page.update) {
      this.page.onWheel(normalizedWheel)
    }
  }

  /**
   * Frames.
   */
  update () {
    if (this.page && this.page.update) {
      this.page.update()
    }

    if (this.canvas && this.canvas.update) {
      this.canvas.update(this.page.scroll)
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /**
   * Listeners.
   */
  addEventListeners () {
    window.addEventListener('mousewheel', this.onWheel.bind(this))

    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))

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
