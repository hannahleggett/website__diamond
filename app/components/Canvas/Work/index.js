import { Plane, Transform } from 'ogl'
import GSAP from 'gsap'

import { map } from 'lodash'

import Media from './Media'

export default class {
  constructor ({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()

    // this.galleryElement = document.querySelector('.work__gallery__wrapper')
    // this.mediasElements = document.querySelectorAll('.work__gallery__media')

    // console.log(this.galleryElement)

    this.scroll = {
      current: 0,
      start: 0,
      target: 0,
      lerp: 0.1,
      velocity: 1
    }

    this.createGeometry()
    this.createGallery()

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry () {
    this.geometry = new Plane(this.gl)
  }

  createGallery () {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        gl: this.gl,
        index,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  /**
   * Animations.
   */
  show () {
    map(this.medias, media => media.show())
  }

  hide () {
    map(this.medias, media => media.hide())
  }

  /**
   * Events.
   */
  onResize (event) {
    this.sizes = event.sizes

    this.bounds = this.galleryElement.getBoundingClientRect()

    // console.log(this.medias[0].element.clientWidth)

    this.scroll.last = this.scroll.target = 0

    // - this.medias[0].element.clientWidth

    const rect = this.medias[0].element.getBoundingClientRect()
    const offset = rect.left

    if (this.bounds.width > window.innerWidth) {
      // this.scroll.limit = this.bounds.width - window.innerWidth
      this.scroll.limit = this.bounds.width - window.innerWidth + offset
    } else {
      this.scroll.limit = 0
    }

    // console.log(this.bounds.width)
    console.log(offset)
    // console.log(window.innerWidth)
    // console.log(this.scroll.limit)
    // console.log(this.medias[0].element.offsetLeft)

    map(this.medias, media => media.onResize(event, this.scroll))
  }

  onTouchDown ({ x, y }) {
    this.scroll.last = this.scroll.current
  }

  onTouchMove ({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.last - distance
  }

  onTouchUp ({ x, y }) {

  }

  onWheel ({ pixelY }) {
    this.scroll.target += pixelY
  }

  /**
   * Update.
   */
  update () {
    if (!this.bounds) return

    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

    if (this.scroll.last < this.scroll.current) {
      this.scroll.direction = 'right'
    } else if (this.scroll.last > this.scroll.current) {
      this.scroll.direction = 'left'
    }

    this.scroll.last = this.scroll.current

    map(this.medias, (media, index) => {
      media.update(this.scroll.current)
    })
  }

  /**
   * Destroy.
   */
  destroy () {
    // map(this.medias, media => media.destroy())
    this.scene.removeChild(this.group)
  }
}
