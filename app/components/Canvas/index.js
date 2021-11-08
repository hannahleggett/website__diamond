import { Camera, Renderer, Transform } from 'ogl'

import Play from './Play'
import Work from './Work'

export default class Canvas {
  constructor ({ template }) {
    this.template = template

    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()
  }

  createRenderer () {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true
    })

    this.gl = this.renderer.gl

    document.body.appendChild(this.gl.canvas)
  }

  createCamera () {
    this.camera = new Camera(this.gl)
    this.camera.position.z = 5
  }

  createScene () {
    this.scene = new Transform()
  }

  /**
   * Play.
   */

  createPlay () {
    this.play = new Play({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    })
  }

  destroyPlay () {
    if (!this.play) return

    this.play.destroy()
    this.play = null
  }

  /**
   * Work.
   */

  createWork () {
    this.work = new Work({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    })
  }

  destroyWork () {
    if (!this.work) return

    this.work.destroy()
    this.work = null
  }

  /**
   * Events.
   */
  onPreloaded () {
    // if (this.play) {
    //   this.play.onPreloaded()
    // }

    // if (this.work) {
    //   this.work.onPreloaded()
    // }

    this.onChangeEnd(this.template)
  }

  onChangeStart () {
    if (this.play) {
      this.play.hide()
    }

    if (this.work) {
      this.work.hide()
    }
  }

  onChangeEnd (template) {
    if (template === 'work') {
      this.createWork()
    } else if (this.work) {
      this.destroyWork()
    }

    if (template === 'play') {
      this.createPlay()
    } else {
      this.destroyPlay()
    }
  }

  onResize () {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.sizes = {
      height,
      width
    }

    const values = {
      sizes: this.sizes
    }

    if (this.play) {
      this.play.onResize(values)
    }

    if (this.work) {
      this.work.onResize(values)
    }
  }

  onTouchDown (event) {
    this.isDown = true

    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.play) {
      this.play.onTouchDown(values)
    }

    if (this.work) {
      this.work.onTouchDown(values)
    }
  }

  onTouchMove (event) {
    if (!this.isDown) return

    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.play) {
      this.play.onTouchMove(values)
    }

    if (this.work) {
      this.work.onTouchMove(values)
    }
  }

  onTouchUp (event) {
    this.isDown = false

    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.play) {
      this.play.onTouchUp(values)
    }

    if (this.work) {
      this.work.onTouchUp(values)
    }
  }

  onWheel (event) {
    if (this.play) {
      this.play.onWheel(event)
    }

    if (this.work) {
      this.work.onWheel(event)
    }
  }

  /**
   * Loop.
   */
  update () {
    if (this.play) {
      this.play.update()
    }

    if (this.work) {
      this.work.update()
    }

    this.renderer.render({
      camera: this.camera,
      scene: this.scene
    })
  }
}
