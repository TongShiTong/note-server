const mongoose = require('mongoose');

const category = new mongoose.Schema({
    name: {
        type: String,
        unoque: true
    }
}, {versionKey: false})

module.exports = mongoose.model('category', category)