const express = require('express')
const URL = require('../models/url')

const router = express.Router()

router.get('/', async (req, res) => {
  const allUrls = await URL.find({})
  return res.render('home', {
    urls: allUrls,
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/signup', (req, res) => {
  res.render('signup')
})

module.exports = router
