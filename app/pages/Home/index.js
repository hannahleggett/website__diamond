// import Button from 'animations/Button'
import Page from 'classes/Page'

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',

      element: '.home',
      elements: {
        wrapper: '.home__wrapper',
        navigation: document.querySelector('.navigation'),
        link: '.home__link'
      }
    })
  }

  // create () {
  //   super.create()

  // this.link = new Button({
  //   element: this.elements.link
  // })
  // }

  destroy () {
    super.destroy()

    this.removeEventListeners()
  }
}