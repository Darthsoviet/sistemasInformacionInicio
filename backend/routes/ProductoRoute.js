const express = require("express");

const router= express.Router();
const {validarAutenticado}=require("../middleware/ValidarAutenticado");
const {Producto}=require("../models/Producto")



router.post("/productos",validarAutenticado,async (req,res)=>{
   const producto=req.body;
   await Producto.create(producto);
   return res.status(201).json()

});

router.get("/productos",validarAutenticado,async (req,res)=>{
   let filter={}
   if(req.query.tipo){
      filter={tipo:{"$regex":req.query.tipo}}
   }
   if(req.query.color){
      filter={...filter,color:{"$regex":req.query.color}}
   }
   const productos=await Producto.find(filter);
   return res.status(200).json(productos);
})

module.exports=router