let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        minLength:5,
        maxLength:255
    },
    lastname:{
        type:String,
        require:true,
        minLength:5,
        maxLength:255
    },
    username:{
        type:String,
        require:true,
        minLength:5,
        maxLength:255
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        maxLength:255
    },
    password:{
        type:String,
        require:true,
        minLength:5,
        maxLength:255
    }
})
module.exports = mongoose.model("User",userSchema);
