const mongoose=require("mongoose");
require("dotenv").config();



async function connection(){
   const url=process.env.MONGO;
   try{
   await mongoose.connect( url,{useUnifiedTopology: true, useNewUrlParser: true} )
   console.log("connected");
   }catch(error){
      console.error("errro getting connection");
      console.error(error);
   }
}
module.exports=connection;