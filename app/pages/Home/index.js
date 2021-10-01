import Page from 'classes/Page'

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',

      element: '.home',
      elements: {
        navigation: document.querySelector('.navigation'),
        playToggle: '.home__toggle'
      }
    })
  }

  create () {
    super.create()

    this.elements.playToggle.addEventListener('click', _ => console.log('Oh, you clicked me'))
  }
}
