const router=require("express").Router();
const User=require("../models/User");
const Post=require("../models/Post");

router.put("/:id",async(req,res)=>{
  if(req.body.userId===req.params.id){
  try{
     const updateUser=await User.findByIdAndUpdate(req.params.id,{
       $set:req.body,
     },{new:true});
     res.status(200).json(updateUser);
  }catch(err){
res.status(500).json(err);
  }}
  else{
    res.status(401).json("you can't update account");
  }
});

router.delete("/:id",async(req,res)=>{
  if(req.body.userId===req.params.id){
    try{
     const user=await User.findById(req.params.id);
      try{
        await Post.deleteMany({username:user.username})
        await User.findByIdAndDelete(req.params.id)
         res.status(200).json("userDeleted");
      }catch(err){
    res.status(500).json(err);
      }}catch(err){
        res.status(404).json("user not found")
      }
    }
 
  else{
    res.status(401).json("you can't delete account");
  }
});

router.get("/:id",async(req,res)=>{
  try{
const user=await User.findById(req.params.id);
  const{password,...others}=user._doc;
  res.status(200).json(others);
  }
  catch(err){
      res.status(500).json(err);
  }
});



module.exports=router;

