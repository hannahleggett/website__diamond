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

    this.galleryElement = document.querySelector('.play__gallery')
    this.mediasElements = document.querySelectorAll('.play__gallery__media__image')

    // console.log(this.galleryElement)

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.scrollCurrent = {
      x: 0,
      y: 0
    }

    this.scroll = {
      x: 0,
      y: 0
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
    // if (!this.play) return

    this.galleryBounds = this.galleryElement.getBoundingClientRect()

    this.sizes = event.sizes

    this.gallerySizes = {
      height: this.galleryBounds.height / window.innerHeight * this.sizes.height,
      width: this.galleryBounds.width / window.innerWidth * this.sizes.width
    }

    this.scroll.x = this.x.target = 0
    this.scroll.y = this.y.target = 0

    map(this.medias, media => media.onResize(event, this.scroll))
  }

  onTouchDown ({ x, y }) {
    this.scrollCurrent.x = this.scroll.x
    this.scrollCurrent.y = this.scroll.y
  }

  onTouchMove ({ x, y }) {
    const xDistance = x.start - x.end
    const yDistance = y.start - y.end

    this.x.target = this.scrollCurrent.x - xDistance
    this.y.target = this.scrollCurrent.y - yDistance

    // console.log(this.x.target, this.y.target)
  }

  onTouchUp ({ x, y }) {

  }

  onWheel ({ pixelX, pixelY }) {
    this.x.target += pixelX
    this.y.target += pixelY
  }

  /**
   * Update.
   */
  update () {
    if (!this.galleryBounds) return

    this.x.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp)
    this.y.current = GSAP.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

    if (this.scroll.x < this.x.current) {
      this.x.direction = 'right'
    } else if (this.scroll.x > this.x.current) {
      this.x.direction = 'left'
    }

    if (this.scroll.y < this.y.current) {
      this.y.direction = 'top'
    } else if (this.scroll.y > this.y.current) {
      this.y.direction = 'bottom'
    }

    this.scroll.x = this.x.current
    this.scroll.y = this.y.current

    map(this.medias, (media, index) => {
      const scaleX = media.mesh.scale.x / 2

      if (this.x.direction === 'left') {
        const x = media.mesh.position.x + scaleX

        if (x < -this.sizes.width / 2) {
          media.extra.x += this.gallerySizes.width

          // this.media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.01, Math.PI * 0.01)
        }
      } else if (this.x.direction === 'right') {
        const x = media.mesh.position.x - scaleX

        if (x > this.sizes.width / 2) {
          media.extra.x -= this.gallerySizes.width

          // this.media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.01, Math.PI * 0.01)
        }
      }

      const scaleY = media.mesh.scale.y / 2

      if (this.y.direction === 'top') {
        const y = media.mesh.position.y + scaleY

        if (y < -this.sizes.height / 2) {
          media.extra.y += this.gallerySizes.height

          // this.media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.01, Math.PI * 0.01)
        }
      } else if (this.y.direction === 'bottom') {
        const y = media.mesh.position.y - scaleY

        if (y > this.sizes.height / 2) {
          media.extra.y -= this.gallerySizes.height

          // this.media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.01, Math.PI * 0.01)
        }
      }

      media.update(this.scroll)
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
