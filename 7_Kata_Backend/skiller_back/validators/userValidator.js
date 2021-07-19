// https://joi.dev/api/

const { ENUM_ROLES } = require('../utils/const')
const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user_name: Joi.string()
                .alphanum()
                .required(),
            user_email: Joi.string()
                .alphanum()
                .required(),
            user_password: Joi.string()
                .required(),
        
        })
    })
}

// user_id', 'user_speciality', 'user_level', 'user_last_name', 'user_first_name', 'user_email', 'user_password