const Profesor = require('../models/profesor')

class ProfesorController {
    static async getAllProfesor(){
        try {
            console.log('Obteniendo profesores')
            const con = await Profesor.find();
            console.log(con)
            console.log('Termino de obtener')
            return con;
        } catch (error) {
            throw new Error('Error al obtener los profesores ')
        }
    }
}

module.exports = ProfesorController