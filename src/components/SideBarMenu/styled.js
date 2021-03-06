import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../GlobalStyle';

export const SidebarContainer = styled.aside`
    width: 350px;
    height: 100%;
    background-color: #ffc500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: ${( props ) => props.isOpen ? '0' : '-1000px'};
    z-index: 100;
    transition: all 300ms ease-in-out;  

    @media screen and (max-width: 650px) {
        width: 100%
    } 
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
    font-size: 3rem;
    color: #000;
`;

export const SidebarContent = styled.div`
    margin-bottom: 5vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
`;

export const MenuItem = styled.aside`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 200ms ease-in-out; 

    &:hover {
        color: #e31837;
        transition: all 200ms ease-in-out; 
    }
`;

export const SidebarBtn = styled(Button)`
    width: 80%;

    &:hover {
        transition: all 200ms ease-in-out;
        background: #fff;
    }
`;

export const SidebarRoute = styled.aside`
    
`;