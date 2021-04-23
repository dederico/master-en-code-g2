const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'users';
const TABLE_COLUMNS = ['user_id', 'first_name', 'last_name', 'email', 'phone', 'biography', 'is_active', 'created_at'];
const TABLE_ID = 'user_id';

const User = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID)

/*
const create = (bodyUser) => {
    return knex('users').insert(bodyUser);
}

const findAll = () => {
    return knex
        .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'biography', 'is_active', 'created_at'])
        .from('users');
}

const findOneById = (id) => {
    return knex
        .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'biography', 'is_active', 'created_at'])
        .from('users')
        .where({ user_id: id, is_active: true });
}

const updateOneById = (id, updateBody) => {
    return knex
        .update(updateBody)
        .from('users')
        .where({ user_id: id });
}

// Borrado Lógico (desactivar)
const deleteOneById = (id) => {
    return knex
        .update({ is_active: false })
        .from('users')
        .where({ user_id: id });
}

module.exports = {
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById,
}
*/
module.exports = User