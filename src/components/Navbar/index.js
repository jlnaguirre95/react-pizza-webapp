import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/SVG/logo-white.svg';

import {
    Nav,
    Logo,
    NavItem,
    NavIcon
} from './styled';

const Navbar = () => {
    const history = useHistory()
    return (
        <Nav>
            <Logo onClick={() => history.push('/')}>
                <img src={logo} alt="Hot Pizza Delivery" />   
            </Logo>
            <NavItem>
                <span>Menu</span>
                <NavIcon />
            </NavItem>
        </Nav>
    )
}

export default Navbar;
