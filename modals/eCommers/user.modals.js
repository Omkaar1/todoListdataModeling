import mongooes from "mongoose";

const userSchema = new mongooes.Schema({
    username:{
        type:String,
        requried: true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        requried: true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        requried: true,
        unique:true,
    },
},{timestamps:true});

export const User = mongooes.model("User",userSchema);