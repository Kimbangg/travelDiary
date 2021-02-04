const mongoose = require("mongoose");

// Schema
let naverUser = mongoose.Schema({

    id: { type: String /*, required: true*/ },
    email:{type: String},
    displayName:{type: String},
    nickname: { type: String },
    profile_image: { type: Image },
    age: { type: Number },
    birthday:{type: Number},

    
});

module.exports = mongoose.model("nUsers", naverUser);
