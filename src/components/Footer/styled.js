import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #000;
`;

export const FooterWrap = styled.div`
    width: 90%;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterLegal = styled.p`
    font-weight: 300;
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SocialLink = styled(Link)`
    color: #fff;
    font-size: 2.5rem;
    margin-left: 1rem;
`;



