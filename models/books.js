var mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title :{ 
        type: String
    },
    author: String,
    genre: {
        type: String,
        enum: ['fiction', 'leadership', 'self-help', 'history']
    },
    description : String,
    createdAt : { type : Date, default : Date.now }
});

module.exports = mongoose.model('Books', BookSchema);