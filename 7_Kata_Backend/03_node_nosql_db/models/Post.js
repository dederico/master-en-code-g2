const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now(),
    },
    img: {
        type: String,
        default:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspectrumconsultants.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fstock-photo-typewriter-header-704430556.png&f=1&nofb=1'
        }
});

const Post = mongoose.model('User', UserSchema);

module.exports = { PostSchema, Post };