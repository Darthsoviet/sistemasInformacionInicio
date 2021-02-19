import React from 'react'
import {NavLinkContainer,NavListItem} from "./NavigationButton.styles"

export function NavigationButton({ action,  children, show = true }) {
   return (
      <>
         {show ? (
            <NavListItem role="listitem" onClick={action}>
               <NavLinkContainer>{children}</NavLinkContainer>
               
            </NavListItem>
         ) : null}
      </>
   );
}
