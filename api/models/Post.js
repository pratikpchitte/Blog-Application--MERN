const mongoose=require("mongoose");


const PostSchema=new mongoose.Schema({
   title:{
       type:String,
       required:true,
   },
   desc:{
       type:String,
       required:true,
   },
   photo:{
       type:String,
       required:false,
   },
   username:{
       type:String,
       required:true,
   },
   categories:{
       type:Array,
      required:false
   },
   likes:{
     type:Number,
     required:false
   },
   comments:[
    {
        comment:{
            type:String,
            required:false
        },
        username:{
            type:String,
            required:false,
        },
    }
]

},{timestamps:true});

module.exports=mongoose.model("Post",PostSchema);