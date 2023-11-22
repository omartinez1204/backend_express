const Profesor = require('../models/profesor')

class ProfesorController {
    static async getAllProfesor(){
        try {
            const con = await Profesor.find({});
            return con;
        } catch (error) {
            throw new Error('Error al obtener los profesores ')
        }
    }
    static async insertAProfesor(req){
        try {
            const p = new Profesor(req.body)
            const respuesta = await p.save()
            return respuesta;
        } catch (error) {
            throw new Error('Error al insertar un profesor')
        }
    }
}

module.exports = ProfesorController