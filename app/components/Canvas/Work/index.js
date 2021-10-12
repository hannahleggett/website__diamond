import { Plane, Transform } from 'ogl'
import { map } from 'lodash'
// import GSAP from 'gsap'

import Gallery from './Gallery'

export default class {
  constructor ({ gl, scene, sizes }) {
    this.gl = gl
    this.sizes = sizes

    this.group = new Transform()

    this.createGeometry()
    this.createGalleries()

    this.group.setParent(scene)

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
  }

  createGeometry () {
    this.geometry = new Plane(this.gl)
  }

  createGalleries () {
    this.galleriesElements = document.querySelector('.work__gallery')

    this.galleries = map(this.galleriesElements, (element, index) => {
      return new Gallery({
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
   * Events.
   */
  onResize (event) {
    map(this.galleries, gallery => gallery.onResize(event))
  }

  onTouchDown (event) {
    map(this.galleries, gallery => gallery.onTouchDown(event))
  }

  onTouchMove (event) {
    map(this.galleries, gallery => gallery.onTouchMove(event))
  }

  onTouchUp (event) {
    map(this.galleries, gallery => gallery.onTouchUp(event))
  }

  onWheel ({ pixelX, pixelY }) {
    // this.x.target += pixelX
    // this.y.target += pixelY
  }

  /**
   * Update.
   */
  update () {
    map(this.galleries, gallery => gallery.update())
  }

  /**
   * Destroy.
   */
  destroy () {
    // this.group.setParent(null)
  }
}
