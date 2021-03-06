import React, { useState } from 'react';
//components
import Navbar from '../Navbar';
import SidebarMenu from '../SideBarMenu';
//assets
import { Button } from '../../GlobalStyle';
import { HeroContainer, HeroContent, HeroItems } from './styled';

const Hero = () => {
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <HeroContainer>
            <Navbar showMenu={toggleMenu} />
            <SidebarMenu isOpenMenu={isOpenMenu} hideMenu={toggleMenu} />
            <HeroContent>
                <HeroItems>
                    <h1>Greatest<br />pizza ever</h1>
                    <h3>Ready in 60 seconds</h3>
                    <Button>Place Order</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
