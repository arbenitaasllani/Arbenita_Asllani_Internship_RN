const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    }  
});

mongoose.model('User', userSchema);