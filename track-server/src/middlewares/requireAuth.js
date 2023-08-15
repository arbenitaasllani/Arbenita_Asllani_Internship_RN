const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const {authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({error: 'You must be logged in.'});
    }

    const token = authorization.replace('Bearer ', '');
    if (err) {
        return res.status(401).send({error: 'You must be logged in.'});
    }

    const user =  User.findById(userId)

    
}; 