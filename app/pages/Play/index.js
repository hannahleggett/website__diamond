/* eslint-disable no-unused-expressions */
import Page from 'classes/Page'
import GSAP from 'gsap'
import { each } from 'lodash'

export default class Play extends Page {
  constructor () {
    super({
      id: 'play',

      element: '.play',
      elements: {
        navigation: document.querySelector('.navigation'),
        outer: '.play__gallery__media',
        inner: '.play__gallery__media__images'
      }
    })
  }

  create () {
    super.create()

    each(this.elements.outer, (el, index) => {
      const random = GSAP.utils.random(0, 5)
      el.style.marginRight = random + 'rem'

      el.addEventListener('mouseenter', _ => {
        // console.log('enter' + index)

        const image = el.querySelector('img')

        this.tlOpen = GSAP.timeline({
          delay: 0,
          duration: 0.4,
          ease: 'expo.out'
        })

        this.tlOpen.set(el, {
          zIndex: 100
        })

        this.tlOpen.to(el, {
          width: '80rem'
        })

        this.tlOpen.fromTo(image, {
          autoAlpha: 0
        }, {
          autoAlpha: 1
        }, 0.4)
      })

      el.addEventListener('mouseleave', _ => {
        // console.log('leave' + index)
        this.tlOpen.reverse()
      })
    })
  }
}
