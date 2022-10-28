import styled from "styled-components";

export const Header = styled.h4`
margin:0;
background-color:white;
padding:1rem 4rem;`

export const SearchBar = styled.div`
background-color:#033280;
color:white;
padding:1.5rem 4rem;`

export const AreaPlan = styled.div`
margin-bottom:1.5rem;
display:flex;
column-gap:2%;
@media (max-width: 420px) {
    flex-direction:column;
    row-gap:8px;
}`

export const Query = styled.h1`
@media (max-width: 420px) {
    font-size:15px;
    margin-bottom:0;
}`

export const Plan = styled.div`
display:flex;`

export const YearPlan = styled.select`
margin:0 5px;
height:30px;
border:1px solid white;
padding:5px;
border-radius:0.5rem;`

