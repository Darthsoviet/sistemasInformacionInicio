import {
   constants
} from "../config/consts";



export async function singService(email, password,nombre){

   let url = constants.BASE_URL;
   const response = await fetch(`${url}/sing-in`, {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
         email,
         password,
         nombre
      })
   });
   if (response.status == 201) {
      return await response.json();
   } else {
      throw new Error("invalido");
   }


}
