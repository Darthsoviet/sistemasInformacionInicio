import React from 'react';
import {Navigation} from "../components/Navigation";

export function Layout({children}) {
   return (
      <div className="page">
                  <Navigation/>

      <main className="container">


         {children}
      </main>
      </div>
         
   );
}

