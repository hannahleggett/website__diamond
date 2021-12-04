import Page from 'classes/Page'

export default class Work extends Page {
  constructor () {
    super({
      id: 'work',

      element: '.work',
      elements: {
        wrapper: '.work__wrapper'
      }
    })
    // this.draw()
  }

  create () {
    super.create()

    // this.draw()
  }

  // draw () {
  //   const canvas = document.getElementById('artboard')
  //   const ctx = canvas.getContext('2d')
  //   const coord = { x: 0, y: 0 }

  //   window.addEventListener('mousemove', start)
  //   window.addEventListener('resize', resize)

  //   resize()
  //   start()

  //   function resize () {
  //     ctx.canvas.width = window.innerWidth
  //     ctx.canvas.height = window.innerHeight
  //   }
  //   function reposition (event) {
  //     coord.x = event.clientX - canvas.offsetLeft
  //     coord.y = event.clientY - canvas.offsetTop
  //   }
  //   function start (event) {
  //     document.addEventListener('mousemove', draw)
  //     reposition(event)
  //   }
  //   // function stop () {
  //   //   document.removeEventListener('mousemove', draw)
  //   // }
  //   function draw (event) {
  //     ctx.beginPath()
  //     ctx.lineWidth = 2
  //     ctx.lineCap = 'round'
  //     ctx.strokeStyle = 'black'
  //     ctx.moveTo(coord.x, coord.y)
  //     reposition(event)
  //     ctx.lineTo(coord.x, coord.y)
  //     ctx.stroke()
  //   }
  // }
}
