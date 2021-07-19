const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'Gigs';
const TABLE_COLUMNS = ['gig_id', 'gig_name', 'gig_speciality', 'gig_description', 'gig_due_date', 'gig_timeload', 'company_id'];
const TABLE_ID = 'gig_id';

const Gig = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);
console.log('antes...', Gig);
Gig.findOneByIdWithUser = (idGig) => {
    return knex
        .select()
        .from(TABLE)
        .join('Quotes', 'Gigs.gig_id', '=', 'Quotes.gig_id')
        .where({
            [TABLE_ID]: idGig
        })
}
console.log("despues...", Gig)

module.exports = Gig