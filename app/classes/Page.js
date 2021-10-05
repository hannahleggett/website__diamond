import each from 'lodash/each'
import map from 'lodash/map'
import GSAP from 'gsap'
import NormalizeWheel from 'normalize-wheel'
import Prefix from 'prefix'

import Title from 'animations/Title'

import Hover from 'classes/Hover'
export default class Page {
  constructor ({
    element,
    elements,
    id
  }) {
    this.selector = element
    this.selectorChildren = {
      ...elements,

      animationsTitles: '[data-animations="title"]',
      hoverItems: '[data-animations="hover"]'
    }

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    this.id = id

    this.transformPrefix = Prefix('transform')

    this.onMouseWheelEvent = this.onMouseWheel.bind(this)
  }

  /**
   * Create pages and content.
   */
  create () {
    if (this.selector instanceof window.HTMLElement) {
      this.element = this.selector
    } else {
      this.element = document.querySelector(this.selector)
    }
    this.elements = {}

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    // managing selector types
    each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = this.element.querySelector(entry)
        }
      }
    })

    this.createAnimations()

    // console.log(this.elements)
    // console.log('Create', this.id, this.element)
  }

  /**
   * Element Animations.
   */
  createAnimations () {
    console.log(this.elements.animationsTitles)

    this.animationsTitles = map(this.elements.animationsTitles, element => {
      return new Title({
        element
      })
    })

    this.hoverItems = map(this.elements.hoverItems, element => {
      return new Hover({
        element
      })
    })

    console.log(this.animationsTitles)
  }

  /**
   * Page Animations.
   */

  show () {
    return new Promise(resolve => {
      this.animationIn = GSAP.timeline()

      this.animationIn.fromTo(this.element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      })

      this.animationIn.call(_ => {
        this.addEventListeners()

        resolve()
      })
    })
  }

  hide () {
    return new Promise(resolve => {
      this.removeEventListeners()

      this.animationOut = GSAP.timeline()

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  /**
   * Smooth scroll.
   */

  onMouseWheel (event) {
    const { pixelY } = NormalizeWheel(event)

    this.scroll.target += pixelY
  }

  onResize () {
    if (this.elements.wrapper) {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
    }

    each(this.animationsTitles, animation => animation.onResize())
  }

  update () {
    this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    // console.log(this.scroll.current)

    if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`
    }
  }

  /**
   * Listeners.
   */

  addEventListeners () {
    window.addEventListener('mousewheel', this.onMouseWheelEvent)
  }

  removeEventListeners () {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent)
  }
}
