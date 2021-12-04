import GSAP from 'gsap'
// import { getMousePos, lerp } from 'utils/utils'

import Component from 'classes/Component'

export default class Hover extends Component {
  constructor ({ element }) {
    super({
      element
    })

    this.addEventListeners()

    this.DOM = this.element
    this.element.image = element.getAttribute('data-src')

    // create the image structure
    this.layout(this.element)
    // initialize some events
    this.initEvents()

    // console.log(this.element)
  }

  layout (el) {
    this.DOM = { el: el }
    // this is the element that gets its position animated (and perhaps other properties like the rotation etc..)
    this.DOM.reveal = document.createElement('div')
    this.DOM.reveal.className = 'image-reveal'
    // the next two elements could actually be only one, the image element
    // adding an extra wrapper (revealInner) around the image element with overflow hidden, gives us the possibility to scale the image inside
    this.DOM.revealInner = document.createElement('div')
    this.DOM.revealInner.className = 'image-reveal__inner'
    this.DOM.revealImage = document.createElement('div')
    this.DOM.revealImage.className = 'image-reveal__img'
    // this.DOM.revealShape = document.createElement('div')
    // this.DOM.revealShape.className = 'image-reveal__shape'
    this.DOM.revealImage.style.backgroundImage = `url(${this.element.image})`

    this.DOM.revealInner.appendChild(this.DOM.revealImage)
    // this.DOM.revealInner.appendChild(this.DOM.revealShape)
    this.DOM.reveal.appendChild(this.DOM.revealInner)
    this.DOM.el.appendChild(this.DOM.reveal)
  }

  initEvents (ev) {
    this.positionElement = (ev) => {
      const left = GSAP.utils.random(10, 90)
      const top = GSAP.utils.random(10, 90)
      const width = GSAP.utils.random(30, 300)
      const height = GSAP.utils.random(20, 400)

      this.DOM.revealImage.style.left = `${left}%`
      this.DOM.revealImage.style.top = `${top}%`

      this.DOM.revealImage.style.width = `${width}px`
      this.DOM.revealImage.style.height = `${height}px`

      // this.DOM.revealShape.style.width = `${width}rem`
      // this.DOM.revealShape.style.height = `${height}rem`
    }
    this.mouseenterFn = (ev) => {
      this.positionElement()
      this.showImage()
    }
    this.mousemoveFn = ev => requestAnimationFrame(() => {
      // this.positionElement()
    })
    this.mouseleaveFn = () => {
      this.hideImage()
    }

    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn)
    this.DOM.el.addEventListener('mousemove', this.mousemoveFn)
    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn)
  }

  // show the image element
  showImage () {
    // kill any current tweens
    GSAP.killTweensOf(this.DOM.revealInner)
    GSAP.killTweensOf(this.DOM.revealImage)

    this.tl = GSAP.timeline({
      onStart: () => {
        // show the image element
        this.DOM.reveal.style.opacity = 1
        // set a high z-index value so image appears on top of other elements
        GSAP.set(this.DOM.el, { zIndex: 1000 })
        GSAP.set(this.DOM.revealImage, { scale: 1.01 })
      }
    })
    // animate the image wrap
      .to(this.DOM.revealInner, {
        autoAlpha: 1,
        duration: 0.7,
        ease: 'expo.inOut',
        // rotate: 5,
        // startAt: { x: '-100%', autoAlpha: 0 },
        // x: '0%'
      })
    // animate the image element
      .to(this.DOM.revealImage, {
        duration: 0.7,
        ease: 'expo.inOut',
        // startAt: { x: '100%' },
        // x: '0%'
      }, 0)
      .to(this.DOM.revealImage, {
        ease: 'sine.inOut',
        scale: 1
      }, 0.3)
  }

  // hide the image element
  hideImage () {
    // kill any current tweens
    GSAP.killTweensOf(this.DOM.revealInner)
    GSAP.killTweensOf(this.DOM.revealImage)

    this.tl = GSAP.timeline({
      onStart: () => {
        GSAP.set(this.DOM.el, { zIndex: 999 })
      },
      onComplete: () => {
        GSAP.set(this.DOM.reveal, { zIndex: ' ' })
        GSAP.set(this.DOM.reveal, { opacity: 0 })
      }
    })
      .fromTo(this.DOM.revealInner, {
        autoAlpha: 1,
        duration: 0.7,
        ease: 'expo.inOut'
      }, {
        autoAlpha: 0,
        duration: 0.7,
        ease: 'expo.inOut'
      }, 2)
      .to(this.DOM.revealImage, {
        // scale: 3
      })
  }
}
