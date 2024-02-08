const express = require("express");
const { ProductModel } = require("../Models/productModel");

const productController = express.Router();


productController.get("/",async(req,res)=>{
    const products = await ProductModel.find({category:"food"});
    res.json({message:"All products are here",data:products})
})


module.exports = {productController}