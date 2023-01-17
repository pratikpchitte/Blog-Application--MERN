const router=require("express").Router();
const jwt = require('jsonwebtoken');
const User=require("../models/User");

router.post("/register",async(req,res)=>{
  try{
      const newUser= new User({
          username:req.body.username,
          email:req.body.email,
          password:req.body.password,
      });
      const user=await newUser.save();
      res.status(200).json(user);
  }catch(err){
res.status(500).json(err);
  }
});

router.post("/login",async(req,res)=>{
    try{
      let token;
     const user=await User.findOne({username:req.body.username});
     !user&&res.status(400).json("User Not Exits");

  const validate=await (req.body.password==user.password);
  !validate&&res.status(400).json("Password NotMatch");

   token= await user.generateAuthToken();
  console.log(token);
     
      res.status(200). cookie("jwtoken",token,{
        expires:new Date(Date.now()+2589200000),
        httpOnly:true
      }).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;

