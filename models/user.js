const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // name of the user
    name: {
        type: String,
        minLength: 2,
        maxLength: 30,
        trim: true,
        required: true
    },

    // username of the user
    username: {
        type: String,
        minLength: 2,
        maxLength: 15,
        required: true,
        trim: true,
        required: true
    },

    // email address of the user
    email: {
        type: String,
        minLength: 7,
        required: true,
        trim: true,
        required: true
    },

    // password of the user
    password: {
        type: String,
        minLength: 8,
        maxLength: 16,
        required: true
    }

}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
