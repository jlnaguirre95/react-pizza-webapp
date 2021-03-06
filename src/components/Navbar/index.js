import React from 'react';

import logo from '../../assets/SVG/logo-white.svg';

import {
    Nav,
    NavLink,
    NavItem,
    NavIcon
} from './styled';

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">
                <img src={logo} alt="Hot Pizza Delivery" width="100px" />   
            </NavLink>
            <NavItem>
                <span className="nav-item">Menu</span>
                <NavIcon />
            </NavItem>
        </Nav>
    )
}

export default Navbar;
