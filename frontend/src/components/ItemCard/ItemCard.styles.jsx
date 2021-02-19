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

export {CardBody,CardTitle,CardText}