const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'Quotes';
const TABLE_COLUMNS = ['quote_id', 'quote_currency', 'quote_advance', 'gig_id', 'user_id',];
const TABLE_ID = 'quote_id';

const Quote = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);
console.log('antes...', Quote);
Quote.findOneByIdWithUser = (idQuote) => {
    return knex
        .select()
        .from(TABLE)
        .join('Gigs', 'Gigs.gig_id', '=', 'Quotes.gig_id')
        .where({
            [TABLE_ID]: idQuote
        })
}
console.log("despues...", Quote)

module.exports = Quote