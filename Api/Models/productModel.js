const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_id:{type:String},
    product_name:{type:String},
    category:{type:String},
    rating:{type:String},
    quantity:{type:String},
    brand:{type:String},
    color:{type:String},
    size:{type:String},
    description:{type:String},
    image_url:{type:String}
})

const ProductModel = mongoose.model("dummy_product",productSchema);


module.exports = {ProductModel}