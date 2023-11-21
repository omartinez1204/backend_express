const express = require('express')
const router = express.Router()
const ProfesorController = require('../controllers/profesor_controller')

router.get('/',  ProfesorController.getAllProfesor)
//router.post('/',  ProfesorController.getAllProfesor)
//router.delete('/',  ProfesorController.getAllProfesor)
//router.update('/',  ProfesorController.getAllProfesor)

module.exports = router