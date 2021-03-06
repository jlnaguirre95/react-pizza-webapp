import React from 'react'
//components
import Navbar from '../Navbar';
//assets
import { Button } from '../../GlobalStyle';
import { HeroContainer, HeroContent, HeroItems } from './styled';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
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
