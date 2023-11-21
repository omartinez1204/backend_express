const express = require('express')
const bodyParser = require("body-parser")
const ProfesorRoute = require('./routes/routes')
const morgan = require("morgan");

const app = express()
app.use(bodyParser.json())
app.use(express.json());
app.use(morgan('common'));
// app.get('/', (req, rep)=>{
//     rep.send('Homa page APP')
// })

app.use('/profesor', ProfesorRoute)

module.exports = app;