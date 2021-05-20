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
    findOne: async (req, res) => {
            try {
                const idUser = req.params.idUser;
                const user = await User.findById(idUser);
                return res.status(200).json({ message: 'user found', user })
            }
            catch (error) {
                return res.status(500).json({ error });
            }
    },
    update: async (req, res) => {
        try {
            const idUser = req.params.idUser;
            const user = await User.findByIdAndUpdate(idUser, req.body, { new: true });
            return res.status(200).json({ message: 'user updated', user: updateUser })
        } catch (error) {
            return res.status(500).json({ error})
        }
        },
    }

