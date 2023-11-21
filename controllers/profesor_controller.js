const Profesor = require('../models/profesor')

class ProfesorController {
    static async getAllProfesor(){
        try {
            const profesor = await Profesor.findOne();
            return profesor;
        } catch (error) {
            throw new Error('Error al obtener los profesores ', error)
        }
    }
}

module.exports = ProfesorController