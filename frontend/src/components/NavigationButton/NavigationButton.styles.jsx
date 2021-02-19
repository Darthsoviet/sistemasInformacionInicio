import styled from 'styled-components';

const NavListItem = styled('li')`
   cursor: pointer;
   width: 10%;
   height: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
   &:hover {
   transition: 0.5s;
   background-color: #121212;
   }
   div {
      color: ${({ theme }) => theme.secondaryColor};
      font-size: larger;
   }
`;

const NavLinkContainer = styled('div')`
   display: block;
   height:100%;
   width:100%;
   margin: auto 0;
   text-align:center;
`;
export {  NavListItem, NavLinkContainer };