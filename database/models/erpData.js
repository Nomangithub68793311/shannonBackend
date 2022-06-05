const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const erpShcema = new Schema({

    name: {
        type: String,

    },

    Phone: {
        type: Number,

    },

    Website: {
        type: String,

    },

    Company: {
        type: String,

    },

    Mobile: {
        type: Number,

    },
    Country: {
        type: String,

    },


    Address: {
        type: String,

    },
    Email: {
        type: String,

    },

    Work: {
        type: String,

    },
    City: {
        type: String,

    },
    Message: {
        type: String,

    },
    Subject: {
        type: String,

    },



}, { timestamps: true })
const Erpdata = mongoose.model('Erpdata', erpShcema);
module.exports = Erpdata; 