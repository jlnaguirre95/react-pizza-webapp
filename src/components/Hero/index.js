import React, { useState } from 'react';
import { useHistory } from 'react-router';
//components
import Navbar from '../Navbar';
import SidebarMenu from '../SideBarMenu';
//assets
import { Button } from '../../GlobalStyle';
import { HeroContainer, HeroContent, HeroItems } from './styled';

const Hero = () => {
    const history = useHistory();
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <HeroContainer id="hero">
            <Navbar showMenu={toggleMenu} />
            <SidebarMenu isOpenMenu={isOpenMenu} hideMenu={toggleMenu} />
            <HeroContent>
                <HeroItems>
                    <h1>Greatest<br />pizza ever</h1>
                    <h3>Ready in 60 seconds</h3>
                    <Button onClick={() => history.push('/order')}>Place Order</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
