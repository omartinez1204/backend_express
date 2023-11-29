const Profesor = require('../models/profesor')

class ProfesorController {
    static async getAllProfesor(req, res){
        try {
            const con = await Profesor.find({});
            return res.send({
                    'data': con,
                    'hasError': null   
            })
        } catch (error) {
            return res.send({
                'data': null,
                'hasError': error
            })
        }
    }
    static async insertAProfesor(req, res){
        try {
            const p = new Profesor(req.body)
            const respuesta = await p.save()
            return res.send({
                'data': respuesta,
                'hasError': null
            })
        } catch (error) {
            res.send({
                'data': null,
                'hasError': error
            })
        }
    }

    static async updateAProfesor( req, res ){
        const id = req.params.id
        const profesor = req.body
        try {
            
            const resp = await Profesor.updateOne( { _id: id }, profesor )
            return res.send({
                'data': resp,
                'hasError': null
            })
        } catch (error) {
            return res.send({
                'data': null,
                'hasError': error
            })
        }
        return
    }
}

module.exports = ProfesorController