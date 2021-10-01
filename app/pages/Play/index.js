import Page from 'classes/Page'

export default class Play extends Page {
  constructor () {
    super({
      id: 'play',

      element: '.play',
      elements: {
        navigation: document.querySelector('.navigation')
      }
    })
  }
}
