const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

// Create
router.post('/users', UserController.create);

// Read All
router.get('/users', UserController.findAll);

// Read One
router.get('/users/:idUsers', UserController.findOneById);

// Update One
router.patch('/users/:idUsers', UserController.updateOneById);

// Delete One (borrado lógico)
router.delete('/users/:idUsers', UserController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;