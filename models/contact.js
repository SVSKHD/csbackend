const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:10,
        max:30,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    phone:{
        type:Number,
        min:10,
        unique:true
    },
    description:{
        type:String,
        min:20,
        max:200,
    }
},{timestamps:true})
module.exports = mongoose.model("Contact",contactSchema)