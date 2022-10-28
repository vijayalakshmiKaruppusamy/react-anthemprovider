import styled from "styled-components";
import { Link } from "react-router-dom";

export const HydroHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;`

export const Heading = styled.h3`
font-size:24px;
@media (max-width: 768px) {
    font-size : 10px;
    }`

export const Generic = styled.p`
margin:0;
height:2%;
border:none;
color:white;
padding:5px;
font-size:10px;
background-color:#27039e`

export const Hydrocodone = styled.div`
padding:3rem 4rem;
@media (max-width: 420px) {
    padding:1rem 1.5rem;
 }`

export const Hydro = styled.div`
padding:2rem;
border-radius:1rem;
box-shadow:2px 2px 4px 2px grey;
@media (max-width: 420px) {
    padding:1rem;
 }`

export const AlertMessages = styled.div`
display:flex;
gap:1rem;`

export const Img = styled.img`
object-fit:contain;`

export const HydroContent = styled.div`
display:flex;
@media (max-width: 420px) {
    flex-direction:column;
}`

export const Alerts = styled.div`
width:65%;
@media (max-width: 420px) {
    width:100%;
}
`

export const Inputs = styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;
width:40%;
background-color:whitesmoke;
border-radius:1rem;
padding:3rem;
@media (max-width: 768px) {
    padding:1rem;
    }
    @media (max-width: 420px) {
        width:90%;
    }`

export const AlertText = styled.p`
width:85%;
@media (max-width: 768px) {
    font-size : 8px;
    }`

export const InputLabel = styled.h4`
margin:0;`

export const Note = styled.p`
margin:0;
@media (max-width: 768px) {
    font-size : 8px;
    }`

export const Count = styled.input`
margin:8px 0;
width:100%;
outline:none;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;
color:blue;
@media (max-width: 768px) {
    width:90%;
    }`

export const Select = styled.select`
margin:8px 0;
width:100%;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;
`

export const ButtonContent = styled.div`
display:flex;
gap:6px;`

export const Buttons = styled.button`
width:50%;
margin:8px 0;
background-color:white;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;
&:hover{
    border:1px solid blue;
}`

export const Button = styled.button`
background-color:blue;
color:white;
border:1px solid blue;
border-radius:0.5rem;
padding:10px;
&:hover{
    background-color:white;
    color:blue;
    border:none;
}`

export const GenericLink = styled(Link)`
text-decoration:none;
color:blue;`

export const Information = styled.div`
padding-left:4rem;`

export const TherapyInfo = styled.p`
width:80%;
@media (max-width: 768px) {
    font-size : 8px;
    }`