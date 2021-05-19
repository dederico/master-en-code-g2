const express = require('express');

const router = express.Router();

router.post('/users', (req, res) => {
    res.status(201).json({ message: 'user created successfully' });
});
router.get('/users', (req, res) => {
    res.status(200).json({ message: 'user list obtained', users: [] });
});

module.exports = router;