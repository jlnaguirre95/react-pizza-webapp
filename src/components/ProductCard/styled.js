import styled from 'styled-components';

import { Button } from '../../GlobalStyle';

export const ProductWrapper = styled.div`
    max-width: 300px;
    padding-bottom: 3rem;
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImg = styled.div`
    background-image: url(${props => props.img_path});
    background-position: center;
    background-size: cover;
    width: 300px;
    max-width: 100%;
    height: 300px;
    margin-bottom: 3rem;
    box-shadow: 8px 8px #fdc500;

    @media screen and (max-width: 1000px) {
        width: 250px;
        height: 250px;
    }
`; 

export const ProductInfo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .product-name {
        font-size: clamp(2.5rem, 2.5vw, 3rem);
        line-height: 2rem;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid #e31837;
    }

    .product-description {
        height: 8rem;
        margin-bottom: 2rem;
    }

    .product-price {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
`; 

export const ProductBtn = styled(Button)`
    width: 100%;
`; 