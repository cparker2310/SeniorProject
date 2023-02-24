import React from 'react';
import styled from 'styled-components/macro';
import Castle from '../../images/castle.jpg';
import { FaPaw } from 'react-icons/fa';

const Section= styled.section`
    background-image: url(${Castle});
    height: 785px;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const Title= styled.h1`
    font-size: 55px;
    color: #fdfdfd;
    font-weight: 400;
    position: relative;
    z-index: 1;
    margin: 315px;
    margin-bottom: -80px;
`;

const Button= styled.section`
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
    margin: 305px;
    margin-left: 150px;
    margin-right: 150px;
`;

const Hero = () => {
  return (
    <Section>
       <Title>
            Maryvale Alumnae Network
        </Title>
        <Button>JOIN NETWORK <FaPaw /></Button>
    </Section>
  );
}

export default Hero;
