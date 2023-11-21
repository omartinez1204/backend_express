const express = require('express')
const bodyParser = require("body-parser")
const ProfesorRoute = require('./routes/routes')

const app = express()
app.use(bodyParser.json())

// app.get('/', (req, rep)=>{
//     rep.send('Homa page APP')
// })

app.use('/profesor', ProfesorRoute)

module.exports = app;