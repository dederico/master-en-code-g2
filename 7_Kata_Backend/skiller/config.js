const env = process.env.NODE_ENV; // development
const knexfile = require('./knexfile');
const knex = require('knex');

const knexInstance = knex

    (knexfile[env]);
console.log(knexfile[env]);
module.exports = knexInstance;