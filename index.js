const express = require('express')
const urlRoute = require('./routes/url')
const URL = require('./models/url')
const { connectMongoDb } = require('./connection')

const app = express()
const PORT = 5001

connectMongoDb('mongodb://127.0.0.1:27017/shortner').then(() => {
  console.log('MongoDb Connected')
})

app.use(express.json())

app.use('/url', urlRoute)

app.listen(PORT, () => {
  console.log(`Server started at PORT:${PORT}`)
})
