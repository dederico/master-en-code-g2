const { Quote } = require('../models');

const create = (req, res) => {
    // const newUser = {
    //     user_name: req.body.user_name,
    //     user_email: req.body.user_email,
    //     user_password: req.body.user_password,
    // }

    // utilizando knex, insertar el objeto en la base datos
        
    const newUser = req.body;

    return Quote
        .create(newUser)
        .then((resDB) => {
            return res.status(200).json({
                message: 'Quote created',
                rental: resDB,
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err,
            })
        })
}

const findAll = async (req, res) => {
    try {
        const response = await Quote.findAll();

        return res.status(200).json({
            message: 'Successfully obtained list of users',
            response,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error obtaining list of users',
            error,
        });
    }
}

const findOneById = async (req, res) => {
    const { idUser } = req.params;

    try {
        const response = await Quote.findOneByIdWithUser(idUser);
        if (response.length === 0) return res.status(404).json({ message: "provided Quote doesn't exist" });
        return res.status(200).json({
            message: 'Successfully obtained Quote by id',
            response,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
}

const updateOneById = async (req, res) => {
    const { idUser } = req.params;

    try {
        const response = await Quote.updateOneById(idUser, req.body);
        return res.status(200).json({
            message: 'Successfully updated Quote by id',
            response,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
}

const deleteOneById = async (req, res) => {
    const { idUser } = req.params;

    try {
        await Quote.deleteOneById(idUser);
        return res.status(204).json();

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
}

module.exports = {
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById,
}