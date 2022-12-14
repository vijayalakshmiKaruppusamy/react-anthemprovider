import styled from "styled-components";

export const Heading = styled.div`
background-color:#033280`

export const Input = styled.div`
display:grid;
grid-template-columns:35% 35% 35%;
margin:0 4rem;
row-gap:1.5rem;
background-color:white;
color:black;
padding:1rem;
border-radius:6px;
@media (max-width: 420px) {
    display:flex;
    flex-direction:column;
    margin:0 2rem;
    row-gap:1rem;
}`

export const InputType = styled.div`
display:flex;
flex-direction:column;
row-gap:4px;`

export const Inputs = styled.input`
width:60%;
@media (max-width: 420px) {
   width:90%;
}
`
export const Select = styled.select`
width:60%;
@media (max-width: 420px) {
    width:95%;
 }
`
export const Label = styled.label`
@media (max-width: 420px) {
    margin:0 auto;
 }`
export const Choose = styled.div`
display:flex;
align-items:center;
column-gap:5px;
@media (max-width: 420px) {
    margin:0 auto;
 }
`
export const Cost = styled.div`
display:flex;
flex-wrap:wrap;
@media (max-width: 420px) {
    flex-direction:column;
 }`

export const Button = styled.button`
width: 50%;
margin-left:10%;
height: 40px;
background-color: rgb(33,101,219);
padding: 1%;
border-radius: 6px;
border-color: rgb(33,101,219);
@media (max-width: 420px) {
    width:90%;
}`

export const Blue = styled.p`
background-color:red;`

export const Box = styled.div`
background-color:white;
margin:0;`

export const PharmacyCount = styled.p`
margin:0;
padding:1rem 4rem;
color:white;
@media (max-width: 420px) {
    padding:1rem 2rem;
  }`

export const Invalid = styled.h1`
text-align:center;`


