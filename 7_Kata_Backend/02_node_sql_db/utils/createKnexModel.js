function createKnexModel(knex, tableName, tableColumns, tableId) {
    const create = (body) => {
        return knex(tableName).insert(body);
    }

    const findAll = () => {
        return knex
            .select(tableColumns)
            .from(tableName);
    }
    // query -> {email:'fede@gmail.com'}
    const find = (query, columns) => {
        return knex
            .select(columns)
            .from(tableName)
            .where(query);
    }
    const findOneById = (id) => {
        return knex
            .select(tableColumns)
            .from(tableName)
            .where({ [tableId]: id, is_active: true });
    }

    const updateOneById = (id, updateBody) => {
        return knex
            .update(updateBody)
            .from(tableName)
            .where({ [tableId]: id });
    }

    // Borrado Lógico (desactivar)
    const deleteOneById = (id) => {
        return knex
            .update({ is_active: false })
            .from(tableName)
            .where({ [tableId]: id });
    }

    return {
        find,
        create,
        findAll,
        findOneById,
        updateOneById,
        deleteOneById,
    }

}

module.exports = createKnexModel;