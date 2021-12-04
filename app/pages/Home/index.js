// import each from 'lodash/each'

import Page from 'classes/Page'
import GSAP from 'gsap'
export default class Home extends Page {
  constructor () {
    super({
      id: 'home',

      element: '.home',
      elements: {
        navigation: document.querySelector('.navigation'),
        playToggle: '.home__toggle',
        wrapper: '.home__wrapper',
        workLinks: '.home__list__link'
      }
    })
  }

  create () {
    super.create()
    // this.elements.playToggle.addEventListener('click', _ => console.log('Oh, you clicked me'))

    // this.bgimage = this.background.getAttribute('data-bgimage')

    this.elements.workLinks.forEach(item => {
      const widths = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      const heights = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

      const random1 = Math.floor(GSAP.utils.random(0, 9))
      const random2 = Math.floor(GSAP.utils.random(0, 9))

      const height = heights[random1]
      const width = widths[random2]

      console.log(random1, random2, height, width)

      GSAP.set(item, {
        height: height + 'rem',
        width: width + 'rem'
      })
    })
  }
}
