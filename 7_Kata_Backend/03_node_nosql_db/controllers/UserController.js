const User = require('../models/User');
const { Post } = require('../models/Post');


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
            /**
             * Lo de arriba, seria equivalente a hacer
             * const newUser = new User(req.body);
             * newUser.save();
             */
        } catch (error) {
            res.status(400).json({ message: 'error creating users' });
        }
    },
    findAll: async (req, res) => {
        try {
            const users = await User.find({ is_active: true });
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
            return res.status(500).json({ error })
        }
    },
    delete: async (req, res) => {
        try {
            const idUser = req.params.idUser;
            await User.deleteOne(idUser, { is_active: false }, { new: true });
            return res.status(204).json()
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    createPost: async (req, res) => {
        try {
            const idUser = req.params.idUser;
            const user = await User.findOne({ _id: idUser, is_active: true });
            if (!user) return res.status(404).json({ message: 'user not found' });
            // Primero quiero crear una instancia de POST,
            // aprovechando el schema asociado al modelo.
            const newPost = new Post(req.body);
            // newPost.save(), // Si haceemos esto el documento newPost se guarda en su propia coleccion

            user.posts.push(newPost);
            await user.save();
            res.status(201).json({ message: 'user post created', user });
        } catch (error) {
            res.status(400).json({ message: 'error creating user post' });
        }
    },
    findOnePost: async (req, res) => {
        console.log(User)
         try {
             const idUser = req.params.idUser;
             const user = await User.findOne({ _id: idUser, is_active: true });
             if (!user.posts) return res.status(404).json({ message: 'post not found' });
             await user.save();
             res.status(200).json({ message: 'post found'})
         } catch (error) {
            return res.status(500).json({ error });
        }
    },
}
