const express = require('express')
const urlRoute = require('./routes/url')
const path = require('path')
const staticRoute = require('./routes/staticRouter')

const { connectMongoDb } = require('./connection')

const app = express()
const PORT = 5001

connectMongoDb('mongodb://127.0.0.1:27017/shortner').then(() => {
  console.log('MongoDb Connected')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/url', urlRoute)
app.use('/', staticRoute)
app.listen(PORT, () => {
  console.log(`Server started at PORT:${PORT}`)
})
