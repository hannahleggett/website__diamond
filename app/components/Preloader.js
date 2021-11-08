// import each from 'lodash/each'
import GSAP from 'gsap'

import { Texture } from 'ogl'

import { split } from 'utils/text'

import Component from 'classes/Component'

export default class Preloader extends Component {
  constructor ({ canvas }) {
    super({
      element: '.preloader',
      elements: {
        animatingIcon: '.preloader__animation',
        number: '.preloader__indicator__number__text',
        link: '.preloader__indicator__link'
        // images: document.querySelectorAll('img')
      }
    })

    this.canvas = canvas

    window.TEXTURES = {}

    split({
      element: this.elements.number
    })
    split({
      element: this.elements.number
    })

    this.elements.numberSpans = this.elements.number.querySelectorAll('span span')

    this.length = 0

    // console.log(this.element, this.elements)

    this.createLoader()
  }

  createLoader () {
    // each(this.elements.images, element => {
    //   element.onload = _ => this.onAssetLoaded(element)
    //   element.src = element.getAttribute('data-src')
    // })

    window.ASSETS.forEach(image => {
      const texture = new Texture(this.canvas.gl, {
        generateMipmaps: false
      })

      const media = new window.Image()

      media.crossOrigin = 'anonymous'
      media.src = image
      media.onload = _ => {
        texture.image = media

        this.onAssetLoaded()
      }

      window.TEXTURES[image] = texture
    })
  }

  onAssetLoaded (image) {
    this.length += 1

    // const percent = this.length / this.elements.images.length
    const percent = this.length / window.ASSETS.length

    this.elements.number.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    return new Promise(resolve => {
      this.animateOut = GSAP.timeline({
        delay: 2
      })

      this.animateOut.to(this.elements.animatingIcon, {
        autoAlpha: 0.5,
        duration: 1.5,
        ease: 'expo.out',
        y: '110%'
      })

      this.animateOut.to(this.elements.number, {
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      }, '-=1.4')

      this.animateOut.to(this.element, {
        duration: 1.5,
        ease: 'expo.out',
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, '-=1')

      this.animateOut.call(_ => {
        this.emit('completed')
      })
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
