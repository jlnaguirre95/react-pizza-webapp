import styled from 'styled-components';

import { Button } from '../../GlobalStyle';
import FeatureImg from '../../assets/featured-3.jpg'

export const FeatureContainer = styled.div`
    height: 100vh;
    max-height: 500px;
    background: linear-gradient(
        to right,
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.1)
    ), url(${FeatureImg});
    background-position: center;
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: clamp(3.5rem, 5vw, 6rem);
    }

    p {
        font-size: clamp(1.6rem, 2vw, 3rem);
        margin-bottom: 2rem;
    }  
`;

export const FeatureBtn = styled(Button)`
    color: #000;
    background-color: #ffc500;

    &:hover {
        color: #fff;
        background-color: #e31837; 
    }
`;