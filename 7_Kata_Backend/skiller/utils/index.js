const createKnexModel = require('./createKnexModel');
const hashPassword = require('./hashPassword');
const comparePasswords = require('./comparePasswords');
const generateToken = require('./generateToken');
// const { JWT_SECRET } = process.env;

module.exports = {
    createKnexModel,
    hashPassword,
    comparePasswords,
    generateToken,
}