const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


async function encryptPassword(password) {
      const salt = await bcrypt.genSalt(8);
      return await bcrypt.hash(password, salt);
}

async function compararPasswords(passwordCifrada, password) {
      return await bcrypt.compare(password, passwordCifrada);
}

function getToken(usuario) {
      return jwt.sign({
                  id: usuario._id,
                  nombre: usuario.nombre
            },
            process.env.JWT_SECRET, {
                  expiresIn: 60 * 60 * 24
            }
      );
}

function verificarToken(token=""){
      partesToken=token.split("Bearer ");
      if(partesToken.length!==2){
            throw new Error("token invalido")
      }
      return jwt.verify(partesToken[1],process.env.JWT_SECRET);


}
exports.verificarToken=verificarToken;
exports.getToken = getToken;
exports.encryptPassword = encryptPassword;
exports.compararPasswords=compararPasswords;