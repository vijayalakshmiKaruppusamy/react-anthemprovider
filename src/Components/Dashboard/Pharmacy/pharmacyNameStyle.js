import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Available = styled.div`
padding-left:4rem;
width:30%;
@media (max-width: 768px) {
    width:40%;
    padding:0;
    };
 @media (max-width: 420px) {
        width:90%;
        padding:1rem;
}
`
export const AddressContact = styled.div`
font-size:14px;`

export const PharmacyName = styled.h4`
margin:14px 0;
color:black;`

export const ContactDistance = styled.div`
display:flex;
column-gap:10px;
`
export const Pharm = styled.div`
// width:60%;

border:1px solid grey;
padding:0.5rem 2rem;
&:hover{
    border-left:2px solid blue;
}`

export const Contact = styled.div`
display:flex;
align-items:center;
column-gap:2px;`

export const P = styled.p`
margin:0;`
export const Img = styled.img`
width:20px;
height:20px;
object-fit:contain;`

export const Heading = styled.h3`
border:1px solid grey;
margin-bottom:0;
padding:0.5rem 2rem;
// width:60%;`

export const TagContent = styled.div`
display:flex;
flex-wrap:wrap;
margin-right:0;
column-gap:8px;`

export const Tag = styled.div`
font-size:11px;
padding:2px;
margin:10px 0;
border:none;
background-color:#d9d3d2`

export const Links =styled(Link)`
text-decoration:none;
color:black;`

export const Division = styled.div`
display:flex;
flex-direction:row;`

export const SubDivision = styled.div`
width:70%;`

export const Page = styled.div`
display:flex;
@media (max-width: 420px) {
    flex-direction:column;
}`

