import GSAP from 'gsap'

import Component from 'classes/Component'

import each from 'lodash/each'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        animation: '.preloader__animation',
        animationWrapper: '.preloader__animation__wrapper',
        button: '.preloader__indicator__link',
        images: document.querySelectorAll('img'),
        number: '.preloader__indicator__number',
        numberText: '.preloader__indicator__number__text'
      }
    })

    this.length = 0

    this.createLoader()
  }

  createLoader () {
    each(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')

      console.log(element)
    })
  }

  onAssetLoaded (image) {
    this.length += 1

    const percent = this.length / this.elements.images.length

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    return new Promise(resolve => {
      this.animateButton = GSAP.timeline({
        delay: 2
      })

      this.animateButton.fromTo(this.elements.numberText, {
        autoAlpha: 1,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%'
      }, {
        autoAlpha: 0,
        y: '100%'
      })

      this.animateButton.fromTo(this.elements.button, {
        autoAlpha: 0,
        delay: 1,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%'
      }, {
        autoAlpha: 1,
        y: '110%'
      })

      // this.animationButton.call(_ => {
      //   resolve()
      // })
    })
  }

  addEventListeners () {
    this.buttonClickEvent = this.buttonClick.bind(this)

    this.elements.button.addEventListener('click', this.buttonClickEvent)
  }

  removeEventListeners () {
    this.elements.button.removeEventListener('click', this.buttonClickEvent)
  }

  buttonClick () {
    return new Promise(resolve => {
      console.log('out')

      this.animateOut = GSAP.timeline({
        // delay: 2
      })

      this.animateOut.to(this.elements.animation, {
        autoAlpha: 0.5,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '110%'
      })

      this.animateOut.to(this.elements.numberText, {
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '110%'
      }, '-=1.4')

      this.animateOut.to(this.element, {
        duration: 1.5,
        ease: 'expo.out',
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, '-=1')

      this.animateOut.call(_ => {
        this.emit('completed')

        resolve()
      })
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)

    // this.removeEventListeners()
  }
}
