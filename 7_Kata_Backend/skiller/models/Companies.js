const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'Companies';
const TABLE_COLUMNS = ['company_id', 'company_name', 'company_email', 'company_password'];
const TABLE_ID = 'company_id';

const Company = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);
console.log('antes...', Company);
Company.findOneByIdWithUser = (idCompany) => {
    return knex
        .select()
        .from(TABLE)
        .join('Gigs', 'Companies.company_id', '=', 'Gigs.company_id')
        .where({
            [TABLE_ID]: idCompany
        })
}
console.log("despues...", Company)

module.exports = Company