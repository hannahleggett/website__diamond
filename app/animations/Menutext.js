import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Menutext extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })
  }

  animateIn () {
    this.timelineIn = GSAP.timeline({
    })
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    })

    this.timelineIn.fromTo(this.element, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: 'expo.out'
    }, 0)
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  onResize () {

  }
}
