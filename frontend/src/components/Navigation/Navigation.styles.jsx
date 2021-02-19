import styled from "styled-components";

const NavigationBar = styled("nav")`
width:100vw;
min-height:10vh;
display:block;
box-shadow: 2px 2px 2px ${({ theme }) => theme.shadows};
background-color: ${({ theme }) => theme.header};
ul.navlist {
   height: 10vh;
   display: flex;
   align-items: center;
   align-content: center;
   width: 100%;
   max-width: 100vw;
   box-shadow: 1px 1px 3px 4px ${({ theme }) => theme.shadows};
   background-color: ${({ theme }) => theme.header};
   margin:0;
   padding:0;

   }


`
export {NavigationBar}
