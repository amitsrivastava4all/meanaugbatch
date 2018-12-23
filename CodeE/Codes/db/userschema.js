const mongoose = require("mongoose");
const connection = require("./connection");
var Schema  = mongoose.Schema;
var userSchema = new Schema({userid:String,password:{default:'abcd',type:String}});
var User = mongoose.model("users",userSchema);
module.exports = User;
