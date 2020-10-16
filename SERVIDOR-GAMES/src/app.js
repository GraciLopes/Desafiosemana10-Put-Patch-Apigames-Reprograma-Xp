const express = require('express')

const app = express()

const router = require('./routes/gamesroutes')

app.use(express.json())
app.use('/', router)

module.exports = app