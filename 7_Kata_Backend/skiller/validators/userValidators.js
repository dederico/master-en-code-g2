// https://joi.dev/api/

const { ENUM_ROLES } = require('../utils/const')
const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            first_name: Joi.string()
                .alphanum()
                .required(),
            last_name: Joi.string()
                .alphanum()
                .required(),
            email: Joi.string()
                .email()
                .required(),
            phone: Joi.string(),
            biography: Joi.string(),
            password: Joi.string()
                .required(),
            role: Joi.string()
                .valid(ENUM_ROLES.join(',')),




        })
    })
}
