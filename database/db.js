const mongoose = require('mongoose');

//const url = `mongodb://omar1204:omar1204@cluster0.jajexiu.mongodb.net/nova?retryWrites=true&w=majority`
const url = `mongodb+srv://omar1204:omar1204@cluster0.jajexiu.mongodb.net/nova?retryWrites=true&w=majority`
const connectMongo = async() =>{
    try {
        const connection = await mongoose.connect(url)
        console.log('Conectado a mongodb')
        return connection;
    } catch (error) {
        throw new Error('Error al conectar mongo db')
    }
}
connectMongo()
module.exports = connectMongo;
