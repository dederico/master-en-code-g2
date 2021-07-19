const express = require('express');
const router = express.Router();

const { GigController } = require('../controllers');

// Create
router.post('/gigs', GigController.create);

// Read All
router.get('/gigs', GigController.findAll);

// Read One
router.get('/gigs/:idGigs', GigController.findOneById);

// Update One
router.patch('/gigs/:idGigs', GigController.updateOneById);

// Delete One (borrado lógico)
router.delete('/gigs/:idGigs', GigController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;