import React from 'react';
import styled from 'styled-components';
import { MdLocalDining } from "react-icons/md"

const OrderCount = ({ count }) => {
    return (
        <StyledCount>
            <span>{count}</span> <MdLocalDining className="count-icon" />
        </StyledCount>
    )
}

export default OrderCount;

const StyledCount = styled.div`
    padding: 1rem;
    background-color: #e31837;
    color: #fff;
    position: fixed;
    bottom: 9rem;
    right: 4rem;
    display: flex;
    align-items: center;
    z-index: 200;

    .count-icon {
        font-size: 2rem;
    }
`;
