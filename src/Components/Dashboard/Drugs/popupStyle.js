import styled from "styled-components";

export const Modal = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
@media (max-width: 768px) {
    font-size:10px;
    }`

export const Overlay = styled(Modal)`
background: rgba(49,49,49,0.8);`

export const ModalContent = styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
line-height: 1.4;
background: #f1f1f1;
color:black;
// padding: 14px 10px;
background-color:white;
border-radius: 8px;
max-width: 600px;
min-width: 300px;`

export const Popuphead = styled.h3`
 margin:0;`
  
export const ButtonTag = styled.div`
display: flex;
column-gap: 2px;
justify-content:center;
margin:0;
border-top:1px solid grey;
padding:1rem;`

export const H4 = styled.h4`
margin-bottom:5px;`

export const Close = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
background-color:whitesmoke;
padding:10px;
border-radius:8px;
margin:0`

export const Buttons = styled.button`
width:23%;
padding: 1.5%;;
background-color: blue;
border-radius: 6px;
border: none;
color: #f1f1f1;
&:hover{
    background-color:white;
    color:blue;
    border:1px solid #c4c3c0;
}`

export const PopupContent = styled.div`
padding:2% 10%;
text-align: center;`
  