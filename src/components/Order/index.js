import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
//assets
import { Button } from '../../GlobalStyle';
import deliveryImg from '../../assets/delivery.png';

const Order = () => {
    const history = useHistory();

    return (
        <StyledOrder>
            <div className="order__image">
                <img src={deliveryImg} alt="delivery man" />
            </div>
            <OrderBtn onClick={() => history.push('/')}>Back to Home</OrderBtn>
        </StyledOrder>
    );
};

export default Order;

const StyledOrder = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e31837;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;

    @media screen and (max-width: 960px) {
        align-items: center;
    }

    .order__image {
        width: 70%;

        @media screen and (max-width: 960px) {
            width: 100vw;
        }

        img {
            width: 100%;
        }
    }
`;

export const OrderBtn = styled(Button)`
    background: #ffc500;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`;
