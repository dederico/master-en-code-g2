const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController')

router.post('/users', UserController.create);
router.get('/users', UserController.findAll);

module.exports = router;