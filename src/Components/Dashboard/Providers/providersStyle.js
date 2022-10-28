import styled from "styled-components";

export const ProviderPage = styled.div`
position:relative`

export const Home = styled.div`
display:flex;
align-items:center;
padding-left:4rem;`

export const Img = styled.img`
width:18px;
height:18px;
object-fit:contain;
margin-right:5px;`

export const About = styled.div`
padding:2rem 4rem;
background-color:#14006b;
color:white;`

export const Information = styled.div`
padding-left:4rem;
margin-top:4rem;
@media (max-width: 420px) {
   margin-top:4rem;
 }`

export const Purpose = styled.p`
margin:0 0 8px 0;
@media (max-width: 420px) {
  font-size:8px;
  margin-bottom:8px;
}`

export const Query = styled.h1`
margin:0 0 12px 0;
@media (max-width: 420px) {
    font-size:13px;
  }`

export const Zipcode = styled.div`
position:absolute;
top:10rem;
margin-top:1rem;
width:90%;
padding:1rem;
box-shadow:1px 1px 1px 1px grey;
color:black;
background-color:white;
align-items:center;
display:flex;
row-gap:4px;
border-radius:8px;
justify-content:space-between;
@media (max-width:768px){
    width:80%;
}
@media (max-width: 420px) {
   top:20%;
   font-size:13px;
   width:60%;
   padding:4px;
   flex-direction:column;
   row-gap:10px;
}`

export const InfoHead = styled.h3`
@media (max-width: 420px) {
    margin:0;
 }`

export const Input = styled.div`
display:flex;
flex-direction:column;
row-gap:5px;
`
export const Button = styled.button`
background-color:#818281;
width:120px;
border:none;
padding:8px 0;
border-radius:10px;
@media (max-width: 420px) {
   padding:3px 0;
 }
`
export const ButtonTag = styled.div`

`