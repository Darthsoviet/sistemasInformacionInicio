const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const Producto=new Schema({
   color:String,
   nombre:String,
   tipo:String
});
exports.Producto=mongoose.model("Producto",Producto);
exports.ProductoSchema=Producto;