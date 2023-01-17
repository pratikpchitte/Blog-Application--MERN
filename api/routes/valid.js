const Validate = require("../middleware/validate");

const router=require("express").Router();
router.get('/check',Validate,(req,res)=>{
            res.send(req.rootUser);
});
router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('user logout');
});
module.exports=router;