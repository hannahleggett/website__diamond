import Component from 'classes/Component'
import GSAP from 'gsap'
import { getMousePos } from 'utils/utils'

export default class Animation extends Component {
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
  }

  layout (el) {
    this.DOM = { el: el }
    // this is the element that gets its position animated (and perhaps other properties like the rotation etc..)
    this.DOM.reveal = document.createElement('div')
    this.DOM.reveal.className = 'hover-reveal'
    // the next two elements could actually be only one, the image element
    // adding an extra wrapper (revealInner) around the image element with overflow hidden, gives us the possibility to scale the image inside
    this.DOM.revealInner = document.createElement('div')
    this.DOM.revealInner.className = 'hover-reveal__inner'
    this.DOM.revealImage = document.createElement('div')
    this.DOM.revealImage.className = 'hover-reveal__img'
    this.DOM.revealImage.style.backgroundImage = `url(${this.element.image})`

    this.DOM.revealInner.appendChild(this.DOM.revealImage)
    this.DOM.reveal.appendChild(this.DOM.revealInner)
    this.DOM.el.appendChild(this.DOM.reveal)
  }

  initEvents (ev) {
    this.positionElement = (ev) => {
      const mousePos = getMousePos(ev)
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop
      }
      // this.DOM.reveal.style.mixBlendMode = 'overlay'
      // this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
      // this.DOM.reveal.style.top = `${mousePos.y-20-docScrolls.top}px`;
      // this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
    }
    this.mouseenterFn = (ev) => {
      this.positionElement(ev)
      this.showImage()
    }
    this.mousemoveFn = ev => requestAnimationFrame(() => {
      this.positionElement(ev)
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
      }
    })
    // animate the image wrap
      .to(this.DOM.revealInner, {
        duration: 0.7,
        ease: 'expo.inOut',
        startAt: { x: '-100%' },
        x: '0%'
      })
    // animate the image element
      .to(this.DOM.revealImage, {
        duration: 0.7,
        ease: 'expo.inOut',
        startAt: { x: '100%' },
        x: '0%'
      }, 0)
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
      .to(this.DOM.revealInner, {
        duration: 0.7,
        ease: 'expo.inOut',
        x: '100%'
      })
      .to(this.DOM.revealImage, {
        duration: 0.7,
        ease: 'expo.inOut',
        x: '-100%'
      }, 0)
  }

  // addEventListeners () {
  //   // update mouse position when moving the mouse
  //   window.addEventListener('mousemove', ev => mousepos = getMousePos(ev))

  //   this.element.addEventListener('mouseenter', this.mouseEnter)
  //   this.element.addEventListener('mouseleave', this.mouseLeave)
  // }

  // removeEventListeners () {

  // }
}
