const express=require('express')
const router =express.Router()
const user=require('../models/user')

router.post('/',async (req,res)=>{
        const data=req.body
        const {email}=data;
        const userData=await user.findOne({email: email})
         if (userData) {
             res.send({message:'email already registered',alert:false});
         }else{
        const newUser=new user(data)
        const savedUser=await newUser.save()
        console.log('data saved');
        res.send({message:'Data is successfully added',alert:true})
        }
})
module.exports=router