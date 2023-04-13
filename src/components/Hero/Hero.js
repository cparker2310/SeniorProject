import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Castle from '../../images/castle.jpg';
import Button from '../Button';
import Footer from '../Footer/Footer';
import { FaPaw } from 'react-icons/fa';
import { GiFlatPawPrint } from "react-icons/gi";

const Section= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    overflow: scroll;
`;

const Title= styled.h1`
    font-size: 72px;
    color: #fdfdfd;
    position: relative;
    z-index: 1;
    margin: 325px;
    text-align: center;
    text-shadow: 1.5px 1.5px 2.5px #030000;
    margin-bottom: 3.75rem;
`;

const Hero = () => {
  const [hover, setHover]= useState(false);

  const onHover= () => {
    setHover(!hover);
  }

  return (
    <>
    <Section>
       <Title>Maryvale Alumnae Network
            <a href="/consent" css={`text-decoration: none;`}>
              <Button css={`font-size: 28px; 
                            background: linear-gradient(90deg, #60000D, #a32738); 
                            color: #fdfdfd; 
                            margin: auto; 
                            margin-top: 32px;
                            height: 60px;
                            width: 280px;
                            cursor: pointer;`} 
                        onMouseEnter={onHover} onMouseLeave={onHover}>
                  JOIN NETWORK {hover ? <GiFlatPawPrint /> : <FaPaw />}
              </Button>
            </a>
        </Title>
        <Footer />
    </Section>
    </>
  );
}

export default Hero;
