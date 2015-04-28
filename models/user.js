var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    phone: String,
    info: String,
    isVisibleForAll: Boolean,
    photoUrl: String
});
