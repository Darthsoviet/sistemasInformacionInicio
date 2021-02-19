
const mongoose=require("mongoose");
const {ProductoSchema}=require("../models/Producto");
const Schema=mongoose.Schema;


const Pedido =new Schema({

   usuario:mongoose.Types.ObjectId,
   fechaPedido:Date,
   items:[new Schema({
      cantidad:Number,
      producto:ProductoSchema
   
   
   },{_id:false})]


});
module.exports=mongoose.model("Pedido",Pedido);
