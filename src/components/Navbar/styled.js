import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
//assets
import { FaPizzaSlice } from "react-icons/fa";


export const Nav = styled.nav`
    height: 100px;
    padding: 1rem 3rem;
    background-color: transparent;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    min-width: 100px;
    cursor: pointer;

    img {
        width: 100%;
        transition: 400ms ease-out;

        &:hover {
            transform: scale(1.2)
        }
    }
`;

export const NavItem = styled.div`
    font-size: 2rem;

    span {
        margin-right: 0.5rem;
    }
`;

export const NavIcon = styled(FaPizzaSlice)`
    font-size: 2rem;
    /* transform: translate(-50%, -15%); */
`;