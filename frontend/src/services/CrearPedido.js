import {constants} from "../config/consts";

export async function crearPedido(pedidos,token){

   const response=await fetch(`${constants.BASE_URL}/pedidos`,
   {method: "POST",
      headers:{
         "Content-Type":"application/json",
         "Authorization":token
      },
      body: JSON.stringify({
         items:pedidos
      })
   }
   )
   if(response.status>201){
      console.log(await response.text());
   }





}