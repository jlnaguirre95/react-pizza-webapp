import styled from 'styled-components';

import ImgBg from '../../assets/pizza-3.jpg';

export const HeroContainer = styled.div`
    height: 100vh;
    background: linear-gradient(
        to right,
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.1)
    ), url(${ImgBg});
    background-position: center;
    background-size: cover; 
`;

export const HeroContent = styled.div`
    height: calc(100vh - 100px);
    max-height: 100%;
    width: 100vw;
    padding: 0 calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2.5rem;
    width: 650px;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media only screen and (max-width: 650px) {
        width: 100%;
    }

    h1 {
        font-size: clamp(3rem, 12vw, 6rem);
        padding-right: calc(100vh - 650px);
        margin-bottom: 1.5rem;
        border-bottom: 5px solid #e9ba23;
        letter-spacing: 3px;
    }

    h3 {
        font-size: clamp(2.5rem, 3vw, 3.5rem);
        margin-bottom: 2rem
    }
`;

