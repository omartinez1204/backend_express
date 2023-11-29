const express = require('express')
const router = express.Router()
const ProfesorController = require('../controllers/profesor_controller')

router.get('/',ProfesorController.getAllProfesor)

router.post('/', ProfesorController.insertAProfesor)

router.put('/:id',ProfesorController.updateAProfesor)

module.exports = router