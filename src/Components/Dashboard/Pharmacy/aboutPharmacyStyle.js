import styled from "styled-components";
export const PharmacyName = styled.h1`
margin:14px 0;
color:black;`

export const Pharm = styled.div`
padding:0.5rem 2rem;
color:black;
@media (max-width: 768px) {
    padding: 2px;
    width: 80%;
}
@media (max-width: 420px) {
    padding:0 2rem;
}
`

export const Planing = styled.div`
display:flex;
column-gap:1rem;
margin:1.5rem 0;
`
export const Tag = styled.div`
display:flex;
column-gap:1rem;
`
export const TagContent = styled.p`
background-color:#b4b5b8;
padding:4px;
font-size:11px;
margin:0
`
export const PreferOptions = styled.ul`
display:grid;
font-size:14px;
grid-template-columns:300px 300px;
padding-left:1.5rem;
@media (max-width: 768px) {
    grid-template-columns:270px 270px;
}
@media (max-width: 420px) {
    grid-template-columns:270px;
}`

export const StandardOptions = PreferOptions

export const Fillup = styled.ul`
font-size:14px;
padding-left:1.5rem;
@media (max-width: 768px) {
    font-size:12px;
}`

export const Div = styled.div``
export const Information = styled.div`
width:70%;
@media (max-width: 768px) {
  width:100%;
}`

export const P = styled.p`
font-size:14px;
margin:5px;`

export const H4 = styled.h4`
margin:5px;`

export const Box = styled.div`
display:flex;`

export const Due = styled.div`
@media (max-width: 768px) {
    width:100%;
    font-size:13px;
}`

export const List = styled.li`
@media (max-width: 768px) {
    font-size:13px;
    }`




