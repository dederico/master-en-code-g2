const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'GUEST',
        enum: ['GUEST','ADMIN'],
    },
    profile_pic: {
        type: String,
        default: 'https://ca.slack,edge.com'
    },
    is_active: {
    type: Boolean,
        default: true
    }
});

/**
 El modelo es el objeto que nos permite interactuar
 con una coleccion dadada
 
 en este caso, el modelo 'User' nos permitira interactuar
 con la coleccion 'Users'.

**/
const User = mongoose.model('User', UserSchema);

module.exports = User;