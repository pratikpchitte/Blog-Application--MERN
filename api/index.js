const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const userValid=require("./routes/valid");
const postRoute=require("./routes/posts");
const categoryRoute=require("./routes/category");
const cookieParser = require('cookie-parser');

const multer=require("multer");

dotenv.config();
app.use(express.json());
app.use(cookieParser());
//Db connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
}).then(console.log("connected to mongo")).catch((err)=> console.log(err));
   app.get("/",(req,res)=>{
       res.end("welcome");
   });

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb) =>{
        cb(null,req.body.name);
    },
});

const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploded");
});

 app.use("/api/auth",authRoute);
 app.use("/api/user",userRoute);
 app.use("/api/post",postRoute);
 app.use("/api/category",categoryRoute);
 app.use("/api/valid",userValid);

app.listen(5001,()=>{
    console.log("running on 5000");
});