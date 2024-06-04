const express=require('express')
const product = require('../models/product')
const router=express.Router()

router.post('/',async (req,res)=>{
    try {
        const data=req.body
        const newProduct=new product(data)
        const saveProduct=await newProduct.save()
        console.log("product data saved..");
        res.send({message:"data saved successfully.."})
    } catch (error) {
            res.send({message:"internal server error."})
    }

})

router.get('/' ,async (req,res)=>{
    try {
        const data= await product.find({});
        res.send(JSON.stringify(data));
    } catch (error) {
        res.send("internal server error")   
    }
})

module.exports=router;