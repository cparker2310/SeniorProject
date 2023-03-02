import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Castle from '../images/castle.jpg';
import styled from 'styled-components';

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const CareerCenter = () => {
  return (
    <>
      <Navbar />
      <Background>

      </Background>
    </>
  )
}

export default CareerCenter;