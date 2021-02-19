const mongoose=require("mongoose");
const Schema=mongoose.Schema;



const Usuario=new Schema({

   nombre: String,
   email: {
      type:String,
      trim: true,
      unique:true
   },
   password:String,

});


module.exports=mongoose.model("Usuario",Usuario)