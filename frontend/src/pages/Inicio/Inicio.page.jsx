import React, { useRef, useEffect } from 'react'
import { useGlobalStateContext } from "../../providers/State";
import { constants } from "../../config/consts"
import actions from "../../reducer/actions";
import { ProductosList } from "../../components/ProductosList";
import { ProductosCard } from "../../components/ProductosCard";

export function Inicio() {



   const { state, dispatch } = useGlobalStateContext();
   useEffect(() => {

      async function loadProductos() {
         const response = await fetch(`${constants.BASE_URL}/productos`, { headers: { "Authorization": state.user.authorization } });
         const json = await response.json();
         dispatch({ type: actions.SET_PRODUCTOS, payload: json });

      }
      loadProductos();

   }, []);
   return (
      <main>
         <ProductosList>

            {state.productos.map((producto) => <ProductosCard key={producto._id} producto={producto} />)}



         </ProductosList>


      </main>
   )
}
