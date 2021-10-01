import Info from 'pages/Info'
import Home from 'pages/Home'
import Play from 'pages/Play'
import Work from 'pages/Work'

class App {
  constructor () {
    this.createContent()
    this.createPages()
  }

  // initialise content
  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  // map of pages
  createPages () {
    this.pages = {
      info: new Info(),
      home: new Home(),
      play: new Play(),
      work: new Work()
    }

    this.page = this.pages[this.template]
    this.page.create()

    console.log(this.page)
  }
}

// eslint-disable-next-line no-new
new App()
