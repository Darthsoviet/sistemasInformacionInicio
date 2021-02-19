import React from 'react'
import {useGlobalStateContext} from "../../providers/State";

import {ProductosList} from "../../components/ProductosList";
import {ProductosCard} from "../../components/ProductosCard";
import {crearPedido} from "../../services/CrearPedido"
import actions from "../../reducer/actions";

export function Carrito() {



   const {state,dispatch}=useGlobalStateContext();
  

   async function  crear(){
     await crearPedido(state.carrito,state.user.authorization);
     dispatch({type:actions.SET_CARRITO,payload:[]});
   }

   return (
      <main>
         <ProductosList>
      
            {state.carrito.map((item)=><ProductosCard key={item.producto._id} producto={item.producto}/>)}
            
         </ProductosList>
         <button onClick={crear}>
            crear pedido
         </button>
         
         
      </main>
   )
}
