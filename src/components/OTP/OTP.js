import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Castle from '../../images/castle.jpg';
import Footer from '../Footer/Footer';
import { FaPaw } from 'react-icons/fa';
import api from '../../api';
import axios from 'axios';

export const Container= styled.div`
  background-image: url(${Castle});
  height: 100%;
  width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  overflow: scroll;
`;

export const FormWrap= styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const FormContent= styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form= styled.form`
  background: #fdfdfd;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormH1= styled.h1`
  margin-bottom: 40px;
  color: #030000;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  font-weight: bold;
`;

export const FormLabel= styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #030000;
`;

export const FormInput= styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-color: #030000;
  border-radius: 2px;
  max-width: 100px;
`;

const OTPContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin: 0 auto;
`;

export const FormButton= styled.button`
  background: linear-gradient(90deg, #60000D, #a32738);
  padding: 16px 0;
  border-radius: 4px;
  color: #fdfdfd;
  font-size: 20px;
  font-family: 'Lora', serif;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-weight: bolder;
  max-width: 400px;
  margin-left: 175px;
  border: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(90deg, #2e2d2c, #63625d);
  }
`;

export default function Login() {
    /*const { email, otp, setPage } = useContext(RecoveryContext);
    const [timerCount, setTimer] = React.useState(60);
    const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
    const [disable, setDisable] = useState(true);
  
    function verfiyOTP() {
      if (parseInt(OTPinput.join("")) === otp) {
        setPage("reset");
        return;
      }
      alert(
        "The code you have entered is not correct.  Please try again."
      );
      return;
    }
  
   useEffect(() => {
      let interval = setInterval(() => {
        setTimer((lastTimerCount) => {
          lastTimerCount <= 1 && clearInterval(interval);
          if (lastTimerCount <= 1) setDisable(false);
          if (lastTimerCount <= 0) return lastTimerCount;
          return lastTimerCount - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, [disable]);*/

  return (
    <>
      <Container>
        <FormWrap >
          <Icon to="/">MARYVALE</Icon>
          <FormContent >
            <Form action='#'>
              <FormH1>Check Your Email for a One-Time Passcode</FormH1>
                <OTPContainer>
                    <FormInput type='password' />
                    <FormInput type='password' />
                    <FormInput type='password' />
                    <FormInput type='password' />
                </OTPContainer>
              <FormButton type="submit">
                  Submit <FaPaw />
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
        <Footer />
      </Container>
    </>
  );
}
