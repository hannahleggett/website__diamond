import Page from 'classes/Page'

export default class Info extends Page {
  constructor () {
    super({
      id: 'info',

      element: '.info',
      elements: {
        navigation: document.querySelector('.navigation')
      }
    })
  }
}
