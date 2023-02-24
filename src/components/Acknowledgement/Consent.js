import React from 'react';
import styled from 'styled-components';
import Castle from '../../images/castle.jpg';

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
    font-size: 55px;
    color: #030000;
    font-weight: 400;
    position: relative;
    z-index: 1;
    margin-bottom: -80px;
    text-align: center;
`;

const Paragraph= styled.p`
    font-size: 55px;
    color: #030000;
    font-weight: 200;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const Consent = () => {
  return (
    <Section>
        <Title>Acknowledgment</Title>
        <Paragraph>    
            By wishing to proceed, 
            I acknowledge that 
            I have read, understand, 
            and agree to sharing my personal 
            information on the Maryvale Alumnae Network.
        </Paragraph>
    </Section>
  );
}

export default Consent;
