const app = require('./app')
require('dotenv').config()
const db = require('./database/db')
const port = 3000;

app.listen(port, () => {
    console.log('Servidor online')
    console.log(`http://localhost:${port}`)
})

