import {
   constants
} from "../config/consts";



export async function loginService(email, password){

   let url = constants.BASE_URL;
   const response = await fetch(`${url}/login`, {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
         email,
         password
      })
   });
   if (response.status == 200) {
      return await response.json();
   } else {
      throw new Error("invalido");
   }


}
