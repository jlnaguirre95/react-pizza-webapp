import React from 'react';
import { Button } from '../../GlobalStyle';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarContent,
    MenuItem,
    SidebarBtn
} from './styled';

const SidebarMenu = ({ hideMenu, isOpenMenu }) => {
    return (
        <SidebarContainer isOpen={isOpenMenu}>
            <Icon onClick={hideMenu}>
                <CloseIcon />
            </Icon>
            <SidebarContent>
                <MenuItem>Pizzas</MenuItem>
                <MenuItem>Desserts</MenuItem>
                <MenuItem>Full Menu</MenuItem>
            </SidebarContent>
            <SidebarBtn>Order Now</SidebarBtn>
        </SidebarContainer>
    );
};

export default SidebarMenu;
