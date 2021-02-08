const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name :  {type : String, required : true},
    quantity :  {type : String, required : true},
    price : {   L_price :  {type : Number, required : true},
                H_price :  {type : Number, required : true}},
    description :  {type : String},
    picture :  {type : String, required : true},
    date : {type : Date, default: Date.now},
})

module.exports = mongoose.model('Product',productSchema,'Product');