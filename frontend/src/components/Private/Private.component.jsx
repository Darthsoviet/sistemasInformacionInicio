import React from 'react'
import {useAuth} from "../../providers/Authentication";
import {Redirect,Route} from "react-router-dom";

export function Private({children,...rest}) {
   const {authenticated}=useAuth();
   return (
      <Route {...rest} render={()=>(authenticated?children:<Redirect to="/login"/>)}/>
   )
}
