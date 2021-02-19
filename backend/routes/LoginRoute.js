const express = require("express");
const router = express.Router();
const {
   compararPasswords,
   getToken,
   encryptPassword} = require("../services/CifradoService");
const Usuario = require("../models/Usuario");






router.post("/sing-in", async (req, res) => {
   let usuario = req.body;
   let existe = await Usuario.exists({
      email: usuario.email
   })
   if (existe) {
      returnres.status(400).json({
         mensaje: "el usuario ya existe"
      })
   }
   usuario.password = await encryptPassword(usuario.password);
   usuario = await Usuario.create(usuario);
   const token = getToken(usuario);



   res.setHeader("Authorization", "Bearer " + token);
   return res.status(201).json({
      user: {
         email: usuario.email,
         nombre: usuario.nombre,
         id: usuario._id
      },
      authorization: "Bearer " + token
   });


})

router.post("/login", async (req, res) => {
   const {
      email,
      password
   } = req.body;
   

   console.log(req.body);
   const usuario = await Usuario.findOne({
      email: email
   })
   if (!usuario) {
      return res.status(404).json({
         mensaje: "usuario no encontrado"
      })
   }
   const coinciden = await compararPasswords(usuario.password, password)
   if (!coinciden) {
      return res.status(401).json({
         mensaje: "no autorizado"
      });
   }
   const token = getToken(usuario);
   res.setHeader("Authorization", "Bearer " + token)
   res.status(200).json({
      user: {
         email,
         nombre: usuario.nombre,
         id: usuario._id
      },
      authorization: "Bearer " + token
   });



})
module.exports = router;