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

router.post('/', async(req, res)=>{
    const respuesta = await ProfesorController.insertAProfesor(req)
    res.send(respuesta)
})

router.put('/:id', async (req, res)=>{
    const id  = req.params.id
    const newData = req.body;
    const respuesta = await ProfesorController.updateAProfesor(id, newData)
    res.send(respuesta)
})

module.exports = router