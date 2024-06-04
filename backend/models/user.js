const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    },
    image:{
        type:String
    }
})

const user=mongoose.model("users",userSchema)
module.exports = user;