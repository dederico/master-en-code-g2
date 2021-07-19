const { Company } = require('../models');

const create = (req, res) => {
    // const newRental = req.body;
    const newCompany = {
        company_id: req.body.company_id,
        company_name: req.body.company_name,
        company_email: req.body.company_email,
        company_password: req.body.company_password,
    }

    // utilizando knex, insertar el objeto en la base datos
    return Company
        .create(newCompany)
        .then((resDB) => {
            return res.status(200).json({
                message: 'company created',
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
        const response = await Company.findAll();

        return res.status(200).json({
            message: 'Successfully obtained list of companies',
            response,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error obtaining list of companies',
            error,
        });
    }
}

const findOneById = async (req, res) => {
    const { idCompany } = req.params;

    try {
        const response = await Company.findOneByIdWithUser(idCompany);
        if (response.length === 0) return res.status(404).json({ message: "provided company doesn't exist" });
        return res.status(200).json({
            message: 'Successfully obtained company by id',
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
    const { idCompany } = req.params;

    try {
        const response = await Company.updateOneById(idCompany, req.body);
        return res.status(200).json({
            message: 'Successfully updated company by id',
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
    const { idCompany } = req.params;

    try {
        await Company.deleteOneById(idCompany);
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