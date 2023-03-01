import React from 'react';
import styled from 'styled-components/macro';
import Castle from '../../images/castle.jpg';
//import { FaPaw } from 'react-icons/fa';

const Section= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const Title= styled.h1`
    font-size: 72px;
    color: #fdfdfd;
    font-weight: bold;
    position: relative;
    z-index: 1;
    margin: 375px;
    margin-bottom: -80px;
    text-align: center;
    text-shadow: 1.5px 1.5px 2.5px #030000;
`;

/*const Button= styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fdfdfd;
    cursor: pointer;
    background: linear-gradient(90deg, #60000D, #a32738);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);

    <Button>JOIN NETWORK <FaPaw /></Button>
`;*/

const Hero = () => {
  return (
    <Section>
       <Title>
            Maryvale Alumnae Network
        </Title>
    </Section>
  );
}

export default Hero;