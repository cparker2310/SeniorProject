import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Castle from '../../images/castle.jpg';

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const Proceed= styled(Link)`
    padding: 3px 18px;
    justify-content: center;
    border-radius: 4px;
    font-family: 'Lora', serif;
    border: none;
    background: #a32738;
    color: #fdfdfd;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background: #60000D;
        transition: all 0.2s ease-in-out;
    }
`;

const Cancel= styled(Link)`
    padding: 3px 18px;
    justify-content: center;
    border-radius: 4px;
    font-family: 'Lora', serif;
    border: none;
    background: #63625d;
    color: #fdfdfd;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background: #2e2d2c;
        transition: all 0.2s ease-in-out;
    }
`;

const Container= styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lora', serif;
    align-items: center;
`;

const BoxWrapper= styled.div`
    border-radius: 10px;
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fdfdfd;
    color: #030000;
    display: flex;
    top: 100px;
    right: 300px;
    left: 300px;
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
    top: 5px;
    right: 100px;
    left: 70px;
    font-size: 18px;
    position: relative;
    text-align: center;
`;

const Consent = () => {
  return (
    <Background>
        <Container>
            <BoxWrapper>
                <Content>
                    Acknowledgment <br />
                    By wishing to proceed, 
                    I acknowledge that 
                    I have read, understand, 
                    and agree to sharing my personal 
                    information on the Maryvale Alumnae Network.
                    <Cancel to="/">Cancel</Cancel>
                    <Proceed to="/signup">Proceed</Proceed>
                </Content>
            </BoxWrapper>
        </Container>
    </Background>
  );
}

export default Consent;