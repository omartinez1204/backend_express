const app = require('./app')
require('dotenv').config()
require('./database/db')
const port = 3000;

app.listen(port, () => {
    console.log('Servidor ')
    console.log(`http://localhost:${port}`)
})

