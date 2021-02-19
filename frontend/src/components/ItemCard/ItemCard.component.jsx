import React from 'react';
import { CardBody, CardTitle, CardText } from "./ItemCard.styles";


export function ItemCard({ item
}) {
   let { producto, cantidad } = item;
   return (
      <CardBody>
         <CardTitle>
            {producto.nombre}

         </CardTitle>
         <CardText>
            {producto.color}
         </CardText>
         <CardText>{producto.tipo}</CardText>
         <div className="container">

            <CardText>
               cantidad: {cantidad}
            </CardText>
         </div>
      </CardBody>
   )
}
