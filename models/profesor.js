const mongoose = require('mongoose')
const db = require('../database/db')
const Schema = mongoose.Schema;

const ProfesorSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos:{
        type: String,
        required: true,
    },
    carrera: String,
    materias:{
        type:String
    },
    linea_investigacion: String,
})
const SomeModel = mongoose.model("Profesor", ProfesorSchema);
module.exports = SomeModel