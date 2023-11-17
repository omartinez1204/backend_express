const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jajexiu.mongodb.net/?retryWrites=true&w=majority`

const connection = mongoose.createConnection(url)
    .on('open',
        ()=>{console.log("Conectado a nova");
    })
    .on('error',
        ()=>{ console.log("MongoDB Connection error");
    });

module.exports = connection;
