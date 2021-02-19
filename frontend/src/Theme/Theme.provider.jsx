import React from 'react'
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from "./Theme.styles";
import darkTheme, {} from "./darkTheme";

export  function Theme({children}){
   return (
      <ThemeProvider theme={darkTheme}>
         <GlobalStyles/>
         {children}
      </ThemeProvider>
   )
}
