import styled from 'styled-components';
//assets

import { Logo } from '../../GlobalStyle';
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

export const NavLogo = styled(Logo)`
    width: 10rem;
`;

export const NavItem = styled.div`
    font-size: 2rem;
    cursor: pointer;

    span {
        margin-right: 0.5rem;
    }
`;

export const NavIcon = styled(FaPizzaSlice)`
    font-size: 2rem;
`;