import React, { useEffect, useState } from 'react';
import { CardBody, CardTitle, CardText, ButtonMini, ButtonAgregar } from "./ProductosCard.styles";
import actions from "../../reducer/actions";
import { useGlobalStateContext } from "../../providers/State"

export function ProductosCard({ producto
}) {
   const { state, dispatch } = useGlobalStateContext();

   const [cantidad, setCantidad] = useState(1);
   const [enCarrito, setEnCarrito] = useState(false);





   useEffect(() => {
      setEnCarrito(state.carrito.some(i => i.producto._id === producto._id))
      let itemCarrito=state.carrito.find(i => i.producto._id === producto._id);
      setEnCarrito(itemCarrito?true:false);
      setCantidad(itemCarrito?itemCarrito.cantidad:1);

   }, []);



   function aumentar() {
      
      let nuevo=cantidad+1
      setCantidad(nuevo)
      dispatch({type:actions.UPDATE_CARRITO,payload:{ producto: producto, cantidad: nuevo }})
   }

   function disminuir() {
      let actual=cantidad>=1?cantidad-1:cantidad;
      setCantidad(actual)
      dispatch({type:actions.UPDATE_CARRITO,payload:{ producto: producto, cantidad: actual }})
   }

   function agregarCarrito() {

      const item = { producto: producto, cantidad: cantidad };

      setEnCarrito(!enCarrito);

      dispatch({ type: actions.TOGGLE_CARRITO, payload: item });


   }


   let { nombre, color, tipo } = producto;
   return (
      <CardBody>
         <CardTitle>
            {nombre}

         </CardTitle>
         <CardText>
            {color}
         </CardText>
         <CardText>{tipo}</CardText>
         <div className="container">
            <ButtonMini color="blue" onClick={disminuir}>
               -
         </ButtonMini>
            <CardText>
               cantidad: {cantidad}
            </CardText>
            <ButtonMini color="crimson" onClick={aumentar}>
               +
         </ButtonMini>
         </div>
         <div className="container">
            <ButtonAgregar onClick={agregarCarrito} color="greenyellow">
               {(enCarrito ? "quitar de carrito" : "Agregar a Carrito")}

            </ButtonAgregar>
         </div>





      </CardBody>
   )
}
