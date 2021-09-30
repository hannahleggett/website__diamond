// import Button from 'animations/Button'
import Page from 'classes/Page'

export default class Work extends Page {
  constructor () {
    super({
      id: 'work',

      element: '.work',
      elements: {
        button: '.work__button'
      }
    })
  }

  create () {
    super.create()

    // this.link = new Button({
    //   element: this.elements.button
    // })
    console.log(this.element)
  }

  destroy () {
    super.destroy()

    this.link.removeEventListeners()
  }
}
