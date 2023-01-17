const user=require("../models/User");
const jwt=require('jsonwebtoken');
const Validate= async(req,res,next)=>{
try {
    const token=req.cookies.jwtoken;
    const verify=jwt.verify(token,process.env.SECRET_KEY);

    const rootUser=await user.findOne({_id:verify._id,"tokens.token":token});
   
    if(!rootUser) {throw new Error('User Not Found')}

    req.token=token;
    req.rootUser=rootUser;
    req.userId=rootUser._id;
    req.username=rootUser.username;

    next();

} catch (error) {
    res.status(401).send('Invalide Token Provided');
    console.log(error);
}
}

module.exports=Validate;