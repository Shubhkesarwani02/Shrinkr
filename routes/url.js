const express = require('express')
const {
  handleGenerateShortId,
  handleGetAnalytics,
  handleUrlRedirect,
} = require('../controllers/url')
const router = express.Router()

router.post('/', handleGenerateShortId)

router.get('/analytics/:shortId', handleGetAnalytics)

router.get('/:shortId', handleUrlRedirect)

module.exports = router
