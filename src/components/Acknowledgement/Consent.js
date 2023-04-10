import React from 'react';
import './Consent.css';
import { MdClose } from "react-icons/md";
import Castle from '../../images/castle.jpg';
import Footer from '../Footer/Footer';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    overflow: scroll;
`;

export const Icon= styled(Link)`
  margin-left: 28px;
  margin-top: 28px;
  text-decoration: none;
  color: #d12626;
  font-weight: 800;
  font-size: 34px;
  text-shadow: 1.5px 1.5px 2.5px #030000;
`;


const Consent = () => {
  return (
    <>
    <Background>
    <Icon to='/'>MARYVALE</Icon>
    <div className="modalContainer">
        <div className="titleCloseBtn">
            <a href="/">
                <button> <MdClose /> </button>
            </a>
        </div>

        <div className="title">
            <h1>Acknowledgment</h1>
        </div>

        <div className="body">
            <p> By wishing to proceed, 
                I acknowledge that 
                I have read, understand, 
                and agree to sharing my personal 
                information on the Maryvale Alumnae Network.
            </p>
        </div>

        <div className="footer">
            <a href="/">
                <button id="cancelBtn">Cancel</button>
            </a>
            <a href="/signup">
                <button>Proceed</button>
            </a>
        </div>
    </div>
    <Footer />
    </Background>
    </>
  );
}

export default Consent;
