const express = require('express')
const urlRoute = require('./routes/url')
const path = require('path')
const URL = require('./models/url')

const { connectMongoDb } = require('./connection')

const app = express()
const PORT = 5001

connectMongoDb('mongodb://127.0.0.1:27017/shortner').then(() => {
  console.log('MongoDb Connected')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())

app.get('/test', async (req, res) => {
  const allUrls = await URL.find({})
  return res.render('home', {
    urls: allUrls,
  })
})

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello from Shortner' })
})

app.use('/url', urlRoute)
app.listen(PORT, () => {
  console.log(`Server started at PORT:${PORT}`)
})
