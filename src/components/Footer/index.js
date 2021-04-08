import React from 'react';
//assets
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
//styled
import {
    FooterContainer,
    FooterWrap,
    FooterLegal,
    SocialMedia,
    SocialLink,
} from './styled';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLegal>
                    Powered with React
                </FooterLegal>
                <SocialMedia>
                    <SocialLink to="#">
                        <FaFacebook />
                    </SocialLink>
                    <SocialLink to="#">
                        <FaInstagram />
                    </SocialLink>
                    <SocialLink to="#">
                        <FaYoutube />
                    </SocialLink>
                    <SocialLink to="#">
                        <FaTwitter />
                    </SocialLink>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
