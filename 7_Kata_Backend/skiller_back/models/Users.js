const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'Users';
const TABLE_COLUMNS = ['user_id', 'user_speciality', 'user_level', 'user_last_name', 'user_first_name', 'user_email', 'user_password',];
const TABLE_ID = 'user_id';

const User = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);
console.log('antes...', User);
User.findOneByIdWithUser = (idUser) => {
    return knex
        .select()
        .from(TABLE)
        .join('Users-Skills', 'Users.user_id', '=', 'Users-Skills.user_id')
        .where({
            [TABLE_ID]: idUser
        })
}
console.log("despues...", User)

module.exports = User