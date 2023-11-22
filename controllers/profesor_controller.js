const Profesor = require('../models/profesor')

class ProfesorController {
    static async getAllProfesor(){
        try {
            const con = await Profesor.find();
            return con;
        } catch (error) {
            throw new Error('Error al obtener los profesores ')
        }
    }
}

module.exports = ProfesorController