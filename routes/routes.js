const express = require('express')
const router = express.Router()
const ProfesorController = require('../controllers/profesor_controller')

router.get('/',async(req, res) =>{
    const respuesta =  await ProfesorController.getAllProfesor()
    const resp = {
        "data": respuesta,
        "hasError": null
    }
    res.send(resp)
});

router.post('/', (req, res)=>{
    const respuesta = ProfesorController.insertAProfesor(req)
    res.send(respuesta)
})

module.exports = router