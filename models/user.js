const mongoose =require("mongoose")
var userSchema = mongoose.Schema({
 nom:{
 type:String,
 required:"nom is required"
 } ,

 email:{
 type:String,
 required:"Email is required",
 unique:true
 } ,
 password:{
 type:String,
 required:"password is required"
 } ,
 role:{
 type:Number,
 default:0
 } ,
});
module.exports=mongoose.model('User',userSchema) 