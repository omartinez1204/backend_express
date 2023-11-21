const mongoose = require('mongoose');

//const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jajexiu.mongodb.net/?retryWrites=true&w=majority`
const url = `mongodb://atlas-sql-65245338e127da689ae50e91-9ojha.a.query.mongodb.net/nova?ssl=true&authSource=admin`
const connection = mongoose.createConnection(url)
    .on('open',
        ()=>{console.log("Conectado a nova");
    })
    .on('error',
        ()=>{ console.log("MongoDB Connection error");
    });

module.exports = connection;
