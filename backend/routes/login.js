const express=require('express');
const router=express.Router();
const user=require("../models/user");

router.post('/',async (req,res)=>{
    const data=req.body
    const findUser=await user.findOne({email:data.email})
    if(findUser){
        if(findUser.password===data.password) {
            const dataSend={
                _id:findUser._id,
                firstname:findUser.firstname,
                lastname:findUser.lastname,
                email:findUser.email,
                image:findUser.image
            }
            res.send({message:'Login scussfully',alert:true,data:dataSend});
        }else{
            res.send({message:'entered wrong password',alert:false})
        }
    }else{
        res.send({message:"Email is not registered",alert:false});
    }
})
module.exports=router;