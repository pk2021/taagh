const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name : { type : String, required : true },
    username : { type : String, required : true  },
    password : { type : String, required : true },
    email: { type : String },
    phone:  { type : Number },
    picture :  { type : String },
    my_products :  { type : String },
    favorite :  { type : String },
  });

module.exports = mongoose.model('User',UserSchema,'User');
