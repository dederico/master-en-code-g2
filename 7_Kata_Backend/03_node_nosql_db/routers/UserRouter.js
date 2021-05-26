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
router.patch('/users/:idUser', UserController.update);

// Delete(Logical, One)
router.delete('./users/:idUser', UserController.delete);

// Delete(physical)

/**
 * USER POSTS
 */

// CREATE
router.post('/users/:idUser/posts', UserController.createPost);
// READ ONE
router.get('/users/:idUser/posts/:idPost', UserController.findOnePost);

// READ ALL
// UPDATE
// DELETE



module.exports = router;