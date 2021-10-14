import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background-color: #e3e0c3;
    border-top: 3px solid #6d5555;
    border-bottom: 3px solid #6d5555;
`

export const Bars = styled(FaBars)`
    display: none;
    width: 100%;
    color: #6e5656;
    font-size: 3rem;
    padding-top: 0.6em;
    padding-bottom: 0.5em;
    
    @media screen and (max-width: 780px){
        display: block;
        margin: 0 auto;
        cursor: pointer;
    }
    
    &:hover{
        background-color: #c2bfa7;
    }
    &:active {
        color: #594646;
        background-color: #b5b39e;
    }
`

export const NavDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;

    @media screen and (max-width: 780px){
        grid-template-columns: 1fr;
        display: ${({ dropdown }) => (dropdown ? 'block' : 'none')};
    }
`

export const NavLink = styled(Link)`
    display: flex;
    justify-self: stretch;
    text-decoration: none;
    cursor: pointer;
`

export const NavBox = styled.div`
    width: 100%;
    text-align: center;
    color: #6e5656;
    &:hover{
        background-color: #c2bfa7;
    }
    &:active {
        color: #594646;
        background-color: #b5b39e;
    }
`

export const NavP = styled.p`
    font-size: 2rem;
`