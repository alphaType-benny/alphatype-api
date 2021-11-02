const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const express = require('express')
require('express-async-errors')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const usersRouter = require('./controllers/users')
const resultsRouter = require('./controllers/results')
const loginRouter = require('./controllers/login')

const app = express()

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.reqLogger)

//What is this:
app.use(express.urlencoded({extended: true}));
app.use(express.json())
//app.use(express.static('build'))

app.use('/api/users', usersRouter)
app.use('/api/results', resultsRouter)
app.use('/api/login', loginRouter)

module.exports = app