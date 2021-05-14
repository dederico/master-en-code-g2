const express = require('express');
const router = express.Router();

const { CompanyController } = require('../controllers');

// Create
router.post('/companies', CompanyController.create);

// Read All
router.get('/companies', CompanyController.findAll);

// Read One
router.get('/companies/:idCompany', CompanyController.findOneById);

// Update One
router.patch('/companies/:idCompany', CompanyController.updateOneById);

// Delete One (borrado lógico)
router.delete('/companies/:idCompany', CompanyController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;