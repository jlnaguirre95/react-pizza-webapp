import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-scroll';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarContent,
    MenuItem,
    SidebarBtn,
} from './styled';

const SidebarMenu = ({ orders, hideMenu, isOpenMenu}) => {
    const history = useHistory();

    return (
        <SidebarContainer isOpen={isOpenMenu}>
            <Icon onClick={hideMenu}>
                <CloseIcon />
            </Icon>
            <SidebarContent>
                <MenuItem>
                    <Link to="pizzas" smooth={true}>
                        Pizzas
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="desserts" smooth={true}>
                        Desserts
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="hero" smooth={true}>
                        Full Menu
                    </Link>
                </MenuItem>
            </SidebarContent>
            <SidebarBtn onClick={() => history.push('/order')}>
                Order Now
            </SidebarBtn>
        </SidebarContainer>
    );
};

export default SidebarMenu;
