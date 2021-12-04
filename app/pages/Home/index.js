// import each from 'lodash/each'

import Page from 'classes/Page'

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
    // console.log(this.element.workLinks)

    // this.elements.playToggle.addEventListener('click', _ => console.log('Oh, you clicked me'))
  }
}
