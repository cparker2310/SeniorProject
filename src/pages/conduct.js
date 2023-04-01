import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import styled from 'styled-components';
import Castle from '../images/castle.jpg';


const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const BoxWrapper= styled.div`
    border-radius: 10px;
    width: 1200px;
    height: 620px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: rgba(253, 253, 253, 0.5);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-color: #fdfdfd;
    color: #030000;
    display: flex;
    top: 60px;
    right: 100px;
    left: 130px;
    position: relative;
    z-index: 10;
`;

const Content= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.8;
    color: #030000;
    margin-bottom: 1rem;
    left: 130px;
    font-size: 19px;
    position: relative;
    text-align: center;
`;


const SiteConduct = () => {
  return (
    <>
      <NavBar />
      <Background>
        
          <BoxWrapper>
            <Content>
              Site Conduct<br />
              Members will provide accurate information in all materials posted or shared via the Maryvale Alumnae Network. <br />
              This commitment to dignity & inclusivity will continue in all professional interactions <br />developed through network participation. <br />
              <br />
              Members will communicate and present themselves professionally that is guided by the teachings  <br />of the Sisters of Notre Dame de Namur and St. Julie Billiart. <br />
              <br />Maryvale Alumnae Network administrators will remove content and profiles deemed inappropriate.
              <br />This site is for professional networking and alumnae communication.  <br />Solicitation involving the sale of goods or services is prohibited.
            </Content>
          </BoxWrapper>
        
      </Background>
    </>
  );
}

export default SiteConduct;