import Page from 'classes/Page'

export default class Work extends Page {
  constructor () {
    super({
      id: 'work',

      element: '.work',
      elements: {
        wrapperX: '.work__wrapper'
      }
    })
  }

  create () {
    super.create()

    console.log(this.elements.wrapperX)

    this.elements.wrapperX.addEventListener('wheel', _ => console.log('Oh, you scrolled'))
  }
}
