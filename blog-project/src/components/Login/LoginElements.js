import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContent = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0d5;
`

export const LoginForm = styled.form`
    width: 70%;
    min-width: 400px;
    min-height: 60vh;
    max-height: 80vh;
    padding: 20px;
    margin-top: 20px;
    border: 3px solid #a89494;
    border-radius: 25px;
    background-color: #e8e7d5;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const LoginLabel = styled.label`
    margin-left: 50px;
    color: #5e4646;
    font-size: 1.6rem;
    width: 75%;
`

export const LoginInput = styled.input`
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 15px;
    font-size: 1.4rem;
    border-radius: 10px;
    border: 2px solid #a89494;
`

export const LoginButton = styled.input`
    margin-bottom: 20px;
    padding: 10px 15px;
    font-size: 1.5rem;
    border-radius: 10px;
    border: 2px solid #a89494;
    color: #5e4646;
    width: 130px;
    margin-left: 50px;

    &:hover{
        background-color: #dddddd;
    }
    &:active {
        background-color: #cccccc;
    }
`

export const LoginLink = styled(Link)`
    color: #5e4646;
    &:hover{
        color: #403030;
    }
    &:active {
        color: #302020;
    }
`