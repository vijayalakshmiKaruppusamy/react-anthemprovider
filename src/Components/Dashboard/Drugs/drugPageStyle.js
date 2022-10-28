import styled from "styled-components"

export const DrugHeader = styled.h4`
margin:0;
padding:1rem 4rem;`

export const Search = styled.div`
background-color:#033280;
color:white;
padding:2rem 4rem;`

export const AreaPlan = styled.div`
column-gap:2%;
margin-bottom:1.5rem;
display:flex;
@media (max-width: 420px) {
    flex-direction:column;
    row-gap:10px;
 }`

export const Plan = styled.div`
display:flex;`

export const Query = styled.h1`
margin-top:0;
@media (max-width: 420px) {
    font-size:18px;
    margin:1rem 0;
 }`

export const Input = styled.input`
border:none;
outline:none;
`
export const SearchBar =styled.div`
display:flex;
justify-content:space-between;
background-color:white;
border-radius:8px;
padding:5px;
@media (max-width: 420px) {
   width:100%;
 }`

export const Button = styled.button`
background-color:blue;
color:white;
border:1px solid blue;
border-radius:0.5rem;
padding:0.5rem 1rem;
`
export const YearPlan = styled.select`
margin:0 5px;
height:30px;
border:1px solid white;
padding:5px;
border-radius:0.5rem;`

export const Invalid = styled.h1`
text-align:center;`

export const SearchItems = styled.div`
display:flex;
flex-direction:column;
align-items:center;`