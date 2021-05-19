module.exports = {
    create: (req, res) => {
    res.status(201).json({ message: 'user created successfully' });
},
    findAll: (req, res) => {
    res.status(200).json({ message: 'user list obtained', users: [] });
},
}