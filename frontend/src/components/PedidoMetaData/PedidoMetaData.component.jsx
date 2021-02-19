import React, { useEffect } from 'react'
import {ProductosList} from "../../components/ProductosList"
import {useGlobalStateContext} from "../../providers/State";
import {ItemCard} from "../ItemCard";

export  function PedidoMetaData({pedido}) {

  

   return (
      <div>
         <h1>Fecha Pedido {pedido.fechaPedido}</h1>
         <ProductosList>
            {pedido.items?pedido.items.map(item=><ItemCard item={item} key={item.producto._id}/>):null}

         </ProductosList>
      </div>
   );
}
