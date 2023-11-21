const express = require('express')
const router = express.Router()
const ProfesorController = require('../controllers/profesor_controller')

router.get('/',(req, res) =>{
    const respuesta = ProfesorController.getAllProfesor()
    res.send(respuesta)
});

module.exports = router