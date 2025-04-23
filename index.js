const express = require('express')
const path = require('path')
const { connectMongoDb } = require('./connection')

const staticRoute = require('./routes/staticRouter')
const urlRoute = require('./routes/url')
const userRoute = require('./routes/user')

const app = express()
const PORT = 5001

connectMongoDb('mongodb://127.0.0.1:27017/shortner').then(() => {
  console.log('MongoDb Connected')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', staticRoute)
app.use('/url', urlRoute)
app.use('/user', userRoute)
app.listen(PORT, () => {
  console.log(`Server started at PORT:${PORT}`)
})
