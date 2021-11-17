const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const api = require('./routes/api')

const PORT = process.env.PORT

const app = express()

app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(process.env.MONGO_INSTANCE_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
})

// routes
app.use('/api', api)

app.get('/', (req, res) => {
  res.end('app loaded')
})

app.get('*', (req, res) => {
  res.end('app loaded')
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
