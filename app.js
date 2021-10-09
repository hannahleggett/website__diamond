/* eslint-disable no-trailing-spaces */
require('dotenv').config()

const logger = require('morgan')
const express = require('express')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// const find = require('lodash/find')

const app = express()
const path = require('path')
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')
// const { forEach } = require('lodash')
// const UAParser = require('ua-parser-js')

// Initialize the prismic.io api
const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  })
}

// Link Resolver
const handleLinkResolver = doc => {
  if (doc.type === 'work') {
    return `/work/${doc.uid}`
  }

  if (doc.type === 'play') {
    return '/play'
  }

  if (doc.type === 'info') {
    return '/info'
  }

  return '/'
}

// Middleware to inject prismic context - can put functions in here and ref in pug
app.use((req, res, next) => {  
  res.locals.Link = handleLinkResolver

  res.locals.Numbers = index => {
    // eslint-disable-next-line eqeqeq
    return index == 0 ? 'One' : index == 1 ? 'Two' : index == 2 ? 'Three' : index == 3 ? 'Four' : ''
  }
  
  res.locals.PrismicDOM = PrismicDOM

  next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest = async api => {
  const meta = await api.getSingle('meta')
  const navigation = await api.getSingle('navigation')
  const preloader = await api.getSingle('preloader')

  return {
    meta,
    navigation,
    preloader
  }
}

app.get('/', async (req, res) => {
  const api = await initApi(req)
  const defaults = await handleRequest(api)
  // const home = await api.getSingle('home')

  const { results: home } = await api.query(Prismic.Predicates.at('document.type', 'home'), {
    fetchLinks: 'work.title work.image'
  })

  // home.forEach(item => {
  //   console.log(item.data.projects[0].project)
  // })
  // home.forEach(item => {
  //   console.log(item.data.link)
  // })

  // Render your views here.
  res.render('pages/home', {
    ...defaults,
    home
  })
})

app.get('/info', async (req, res) => {
  const api = await initApi(req)
  const info = await api.getSingle('info')
  const defaults = await handleRequest(api)

  // Render your views here.
  res.render('pages/info', {
    ...defaults,
    info
  })
})

app.get('/play', async (req, res) => {
  const api = await initApi(req)
  const play = await api.getSingle('play')
  const defaults = await handleRequest(api)

  // Render your views here.
  res.render('pages/play', {
    ...defaults,
    play
  })
})

app.get('/work/:uid', async (req, res) => {
  const api = await initApi(req)
  const defaults = await handleRequest(api)

  const work = await api.getByUID('work', req.params.uid, {
    fetchLinks: 'work.title'
  })

  res.render('pages/work', {
    ...defaults,
    work
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
