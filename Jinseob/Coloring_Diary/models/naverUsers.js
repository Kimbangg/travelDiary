const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
let naverUser = new Schema({

    id: { type: String /*, required: true*/ },
    emails:{type: String},
    displayName:{type: String},
    nickname: { type: String },
    age: { type: String },  
    birthday:{type: String},

    
});

module.exports = mongoose.model('naverUser', naverUser);
