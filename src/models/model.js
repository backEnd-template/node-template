const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    password:String,
    age:Number
    
})

const productSchema = mongoose.Schema({
    name:String,
    password:String,
    age:Number
    
})

const user = mongoose.model('users',userSchema);
const product = mongoose.model('products', productSchema);

module.exports = {
    user,
    product
};