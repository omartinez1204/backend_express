const express = require('express')
const bodyParser = require("body-parser")
const ProfesorRoute = require('./routes/routes')
const morgan = require("morgan");
var cors = require('cors')
const db = require('./database/db')

const app = express()
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('common'));
app.use(cors())
app.get('/', (req, rep)=>{
    rep.send('Homa page APP')
})

app.use('/profesores', ProfesorRoute)

module.exports = app;