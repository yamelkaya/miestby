var mongoose = require('mongoose');

module.exports = mongoose.model('Mult',{
    name: String,
    description: String,
    link: String,
    linkSource: String,
    linkId: String,
    date: { type: Date, default: Date.now },
    participants: String,
    photos: [String]
});
