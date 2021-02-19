import React from 'react'
import {NavigationBar} from "./Navigation.styles";
import {NavigationButton} from "../NavigationButton";
import {useHistory} from "react-router"
import {useAuth} from "../../providers/Authentication";

export  function Navigation() {
   const {authenticated,logout} =useAuth();
   const history=useHistory();
   return (
      <NavigationBar>
         <ul className="navlist">
            <NavigationButton show={true} action={()=>history.push("/")}>
               Inicio
            </NavigationButton>

            <NavigationButton show={!authenticated} action={()=>history.push("/registrar")}>
               Registrarse
            </NavigationButton>
            <NavigationButton show={authenticated} action={()=>history.push("/carrito")}>
               Carrito
            </NavigationButton>
            <NavigationButton show={authenticated} action={()=>history.push("/pedidos")}>
               Historial de pedidos
            </NavigationButton>
            <NavigationButton show={authenticated} action={()=>logout()}>
               Logout
            </NavigationButton>
            

         </ul>

      </NavigationBar>
   )
}
