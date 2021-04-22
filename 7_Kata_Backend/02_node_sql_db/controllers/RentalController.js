const create = (req, res) => {
    console.log('mundo', req.body)
    // const newRental = req.body;
    const newRental = {
        title: req.body.title,
        address: req.body.address,
        guests: req.body.guests,
        description: req.body.description,
    }

    // utilizando knex, insertar el objeto en la base datos

    Rental.create(newRental).then((resDB) => {
        return res.status(200).json({
            message: 'rental created',
            rental: resDB,
        })
    }).catch((err) => {
        res.status(400).json({
            message: err,
        })
    })
    // responder al usuario lo que nos reponsa la base de datos
    return res.status(200).json({
        message: 'rental created',
        rental: newRental,
    })
}

module.exports = {
    create,
}