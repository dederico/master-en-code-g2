const express = require('express');
const router = express.Router();

const { QuoteController } = require('../controllers');

// Create
router.post('/quotes', QuoteController.create);

// Read All
router.get('/quotes', QuoteController.findAll);

// Read One
router.get('/quotes/:idQuotes', QuoteController.findOneById);

// Update One
router.patch('/quotes/:idQuotes', QuoteController.updateOneById);

// Delete One (borrado lógico)
router.delete('/quotes/:idQuotes', QuoteController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;