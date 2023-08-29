let connection=require('../connection')
let mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    fname:String,
    lname:String,
    mobile:Number,
    email:String,
    gender:String,
    pancard:String,
    dob:String,
    pincode:String,
    profession:String,
    income:Number,
    imei:String,
    rid:String,
    company:String,
    campaign:String,
    key1:String,
    key2:String
})

let userModule=mongoose.model('userCollection',userSchema)
module.exports=userModule