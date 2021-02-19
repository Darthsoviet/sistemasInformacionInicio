const {
   verificarToken
} = require("../services/CifradoService");


function validarAutenticado(req, res, next) {
   const token = req.header("Authorization")
   if (!token) {
      return res.status(401).json({
         mensaje: "sin autenticar"
      });
   }
   let decoded ;

   try{
      decoded = verificarToken(token); 
   }catch(error){
      res.status(401).json({mensaje:"get the hell outa here"});
   }
   
   req.userId=decoded.id;
   next();
}
exports.validarAutenticado=validarAutenticado;