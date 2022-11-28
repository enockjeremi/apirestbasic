const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasicModelSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('BasicModel', BasicModelSchema);