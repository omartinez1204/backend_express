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
    carrera,
    materias,
    linea_investigacion,
})

module.exports = ProfesorSchema