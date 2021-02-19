const express = require("express");
const router = express.Router();
const Pedido=require("../models/Pedido");
const {validarAutenticado}=require("../middleware/ValidarAutenticado");


router.post("/pedidos",validarAutenticado,async (req,res)=>{
  const pedido =req.body;
  const now=Date.now();
  const idUsuario =req.userId;
   
  await Pedido.create({...pedido,usuario:idUsuario,fechaPedido:now});
  res.status(201).json({mensaje:"pedido creado"})

})
router.get("/pedidos",validarAutenticado,async (req,res)=>{
   const idUsuario =req.userId;
   res.status(200).json(await Pedido.find({usuario:idUsuario}))
 
 });

 module.exports=router;