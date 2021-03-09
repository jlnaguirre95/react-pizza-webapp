import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Kanit', sans-serif;
        font-size: 1.6rem;
        color: #fff;
        background-color: #150f0f;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    button {
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
    }

    h1,
    h2,
    h3 {
        font-weight: 700;
    }
`;

export const Button = styled.button`
    font-size: 1.7rem;
    padding: 1.5rem 4.5rem;
    background-color: #e31837;
    color:#fff;
    transition: 0.2s ease-out;

    &:hover {
        color: #000;
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;