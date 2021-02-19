import React, { useEffect } from 'react'
import { PedidoMetaData } from "../../components/PedidoMetaData";
import {constants} from "../../config/consts";
import {useGlobalStateContext} from "../../providers/State"
import actions from '../../reducer/actions';

export function Pedidos() {
   const {state,dispatch}=useGlobalStateContext();

   useEffect(() => {

      async function getPedidos() {
         const response=await fetch(`${constants.BASE_URL}/pedidos`,{headers:{"Authorization":state.user.authorization}})
         let data = [];
         
         data=await   response.json();
         console.log(data);
         dispatch({type:actions.SET_PEDIDOS,payload:data})



      }

      getPedidos();
      console.log(state.pedidos);


   },[]);

   return (
      <main>
         {state.pedidos&&state.pedidos.length>0?state.pedidos.map((pedido)=><PedidoMetaData pedido={pedido} key={pedido._id} />):null}

      </main>
   )
}
