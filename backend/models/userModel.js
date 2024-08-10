const mongoose = require("mongoose");
//create Schema
const userSchema =new mongoose.Schema({ //here schema is the structure of our db and we have stored it inside  a constant called userSchema
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    },
},{timestamps:true}
);

//model work is to help us to interact with the database

//create Model
const User = mongoose.model('User', userSchema);

module.exports = User;