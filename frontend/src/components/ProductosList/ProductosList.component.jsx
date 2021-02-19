import React from 'react'
import {Grid} from "./ProductosList.styles"

export  function ProductosList({children}) {
   return (
      <Grid>
         {children}
      </Grid>
   )
}
