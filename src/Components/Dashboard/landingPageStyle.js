import styled from "styled-components"

export const LandingPageHeader = styled.p`
margin:0;
padding:1rem 4rem;
background-color:grey;
color:white;`

export const Search = styled.div`
background-color:#033280;
padding:2rem 4rem;`

export const SearchBarHeader = styled.h1`
color:white;
margin:0;
@media (max-width: 420px) {
  text-align:center;
  font-size:18px;
}`

export const SearchBarContent = styled.div`
display:flex;
padding:2rem 0rem;
gap:1.5rem;
@media (max-width: 420px) {
  flex-direction:column;
}`

export const ContentWrapper = styled.div`
width:31%;
border-radius:0.5rem;
background-color:white;
text-align:center;
padding:2rem 4rem;
@media (max-width: 768px) {
  width:40%;
  padding:0.5rem 1.5rem;
  }
  @media (max-width: 420px) {
   width:90%;
  }`

export const ButtonTag = styled.div`
display:flex;
flex-direction:row;
`
export const Img = styled.img`
width:32px;
height:32px;
object-fit:contain;`

export const H3 = styled.h3`
margin:0;`

export const Button = styled.button`
width:50%;
background-color:#033280;
color:white;
border:1px solid blue;
border-radius:4px;
padding:0.5rem 1rem;
margin:4px;
@media (max-width: 768px) {
    width:50%;
    font-size:10px;
    padding:6px ;
    }`

export const SearchContentHead = styled.div`
display:flex;
align-items:center;
justify-content:center;`



