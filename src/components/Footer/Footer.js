import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export const FooterContainer= styled.footer`
    background-color: linear-gradient(90deg, #60000D, #a32738);
    height: 100px;
`;

export const FooterWrap= styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    margin: 0 auto;
`;

export const SocialMedia= styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
`;

export const SocialLogo= styled(Link)`
    color: #fdfdfd;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const Address= styled.div`
    color: #b5aaaa;
    margin-bottom: 16px;
`;

export const SocialIcons= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink= styled.a`
    color: #fdfdfd;
    font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>MARYVALE</SocialLogo>
                    <Address>11300 Falls Road Lutherville, MD 21093</Address>
                    <SocialIcons>
                        <SocialIconLink href="//https://www.facebook.com/MaryvaleLions" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//https://twitter.com/MaryvaleLions" target="_blank" aria-label="Twitter">
                            <AiFillTwitterCircle />
                        </SocialIconLink>
                        <SocialIconLink href="//https://www.linkedin.com/school/maryvale-preparatory-school/" target="_blank" aria-label="LinkedIn">
                            <TiSocialLinkedinCircular />
                        </SocialIconLink>
                        <SocialIconLink href="//https://www.instagram.com/maryvalelions/" target="_blank" aria-label="Instagram">
                            <AiFillInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="//https://www.youtube.com/@maryvalepreparatoryschool7140/featured" target="_blank" aria-label="YouTube">
                            <AiFillYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap> 
    </FooterContainer>
  );
}

export default Footer;
