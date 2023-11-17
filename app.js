const express = require('express')
const bodyParser = require("body-parser")
const ProfesorRoute = require('./routes/routes')

const app = express()
app.use(bodyParser.json())

app.use('/', ProfesorRoute)

module.exports = app;