const mongoose = require('mongoose');
//mongoose.('mongodb://username:password@host:port/database?options...');
const url = `mongodb://${process.env.USER}:${process.env.PASSWORD}@cluster0.jajexiu.mongodb.net/nova?retryWrites=true&w=majority`
//const url = `mongodb://atlas-sql-65245338e127da689ae50e91-9ojha.a.query.mongodb.net/nova?ssl=true&authSource=admin`
const connection = mongoose.connect(url)
    .then( ()=> console.log('Conectado a nova') )
    .catch( ()=> console.log('Error al conectarse a nova'));
module.exports = connection;
