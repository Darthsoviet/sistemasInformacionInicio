import styled from "styled-components";

const CardBody= styled("div")`
display:block;
max-width:300px;
max-height:350px;
min-height:200px;
background-color:  ${({ theme }) => theme.navBg};

div.container{
   display:flex;
   justify-content: space-evenly;
}


`

const CardTitle=styled("h3")`
margin:0;
text-align:center;
background-color:  ${({ theme }) => theme.secondaryColor};

`

const CardText=styled("p")`
text-align:center;

`

const ButtonMini=styled("button")`
text-align:center;
color:white;
margin:auto 0;
border: none;
outline:none;
background-color: ${({color})=>color};
cursor:pointer;


`

const ButtonAgregar=styled("button")`
text-align:center;
width:80%;
border-radius:3px;
color:white;
margin: 10px auto;
border: none;
outline:none;
background-color: ${({theme})=>theme.secondaryColor};
cursor:pointer;

`
export {CardBody,CardTitle,CardText,ButtonMini,ButtonAgregar}