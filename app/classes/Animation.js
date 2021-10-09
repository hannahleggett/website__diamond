import Component from 'classes/Component'

export default class Animation extends Component {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })

    this.isVisible = false

    if ('IntersectionObserver' in window) {
      this.createObserver()

      this.animateOut()
    } else {
      this.animateIn()
    }
  }

  createObserver () {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    })

    this.observer.observe(this.element)
  }

  animateIn () {
    this.isVisible = true
  }

  animateOut () {
    this.isVisible = false
  }

  onResize () {

  }
}
