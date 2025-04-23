const shortid = require('shortid')
const URL = require('../models/url')
async function handleGenerateShortId(req, res) {
  const body = req.body

  if (!body.url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  const generatedShortId = shortid()

  await URL.create({
    shortId: generatedShortId,
    redirectURL: body.url,
    visitHistory: [],
  })

  return res.render('home', {
    id: generatedShortId,
  })
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId
  const result = await URL.findOne({ shortId })

  if (!result) {
    return res.status(404).json({ error: 'Short URL not found' })
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  })
}

async function handleUrlRedirect(req, res) {
  const shortId = req.params.shortId

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  )

  if (!entry) {
    return res.status(404).json({ error: 'Short URL not found' })
  }
  //entry is null - bug
  return res.redirect(entry.redirectURL)
}

module.exports = {
  handleGenerateShortId,
  handleGetAnalytics,
  handleUrlRedirect,
}
