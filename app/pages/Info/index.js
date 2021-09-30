import Page from 'classes/Page'

export default class Info extends Page {
  constructor () {
    super({
      id: 'info',

      element: '.info',
      elements: {
        wrapper: '.info__wrapper',
        navigation: document.querySelector('.navigation')
      }
    })
  }
}
