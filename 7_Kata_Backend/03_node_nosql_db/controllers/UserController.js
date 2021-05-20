const User = require('../models/User')


module.exports = {
    create: async (req, res) => {
        /** 
         * Opcion 1: Generar una instancia con "new"
        */
        //const newUser = new User(req.body);
        //const response = await newUser.save();
        try {
            const newUser = User.create(req.body);
            res.status(201).json({ message: 'user created successfully' });
        } catch (error) {
             res.status(400).json({ message: 'error creating users' });
        }
},
    findAll: async (req, res) => {
        try {
            const users = await User.find();
                res.status(200).json({ message: 'user list obtained', users });
        } catch (error) {
                            res.status(400).json({ message: 'error fetching users', error });

        }
},
}