const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'rentals';
const TABLE_COLUMNS = ['rental_id', 'title', 'address', 'guests', 'details', 'is_active', 'created_at', 'fk_user'];
const TABLE_ID = 'rental_id';

const Rental = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);
console.log('antes...', Rental);
Rental.findOneByIdWithUser = (idRental) => {
    return knex
        .select()
        .from(TABLE)
        .join('users', 'users.user_id', '=', 'rentals.fk_user')
        .where({
            [TABLE_ID]: idRental
        })
}
console.log("despues...", Rental)

module.exports = Rental