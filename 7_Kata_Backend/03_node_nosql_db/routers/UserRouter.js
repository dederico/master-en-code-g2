const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

// Create
router.post('/users', UserController.create);

//Read(All)
router.get('/users', UserController.findAll);

// Read(One)
router.get('/users/:idUser', UserController.findOne);

// Update (One)
// PUT -> VAMOS A REEMPLAZAR TODO EL OBJETO
router.patch('/users/:idUser', UserController.update)

module.exports = router;