import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/SVG/logo-white.svg';

import {
    Nav,
    NavLogo,
    NavItem,
    NavIcon
} from './styled';

const Navbar = ({ showMenu }) => {
    const history = useHistory();

    return (
        <Nav>
            <NavLogo onClick={() => history.push('/')}>
                <img src={logo} alt="Hot Pizza Delivery" />   
            </NavLogo>
            <NavItem onClick={showMenu}>
                <span>Menu</span>
                <NavIcon />
            </NavItem>
        </Nav>
    )
}

export default Navbar;
