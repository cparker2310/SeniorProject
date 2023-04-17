import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Castle from '../../images/castle.jpg';
import Footer from '../Footer/Footer';
import { FaPaw } from 'react-icons/fa';
import api from '../../api';

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
  max-width: 400px;
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

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(90deg, #2e2d2c, #63625d);
  }
`;

export const ForgotPassword= styled(Link)`
  margin-top: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #030000;
  font-weight: 800;
  text-align: center;
`;

export default function Login() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [users, setUsers]= useState({});
  const [pendings, setPendings]= useState({});
  const [link, setLink]= useState("");
  
  
  const getLists = async () => {

    await api.getAllUsers().then(users=> {
      setUsers(users.data)
    })
  
    await api.getAllPendings().then(pendings => {
      setPendings(pendings.data)})

    }

  const validate = async () => {
    var flag = false;
    for(let i = 0; i< users.length; i++){
      if(users[i].email === email && users[i].password === password){
        sessionStorage.setItem('user', users[i]._id)
        
        alert("Successful Login")
        setLink("/")
        flag = true;
        break;
      }
    }

    if(!flag){
      for(let i = 0; i< pendings.length; i++){
        if(pendings[i].email === email && pendings[i].password === password){
          alert('Account is pending verification') 
          flag = true
          break;
        } 
      } 
      if(!flag){
        alert('Invalid Credentials')
        setLink("/login")   
      }
  }
}

useEffect(()=>{
  getLists()
})

  
  return (
    <>
      <Container>
        <FormWrap >
          <Icon to="/">MARYVALE</Icon>
          <FormContent >
            <Form action='#'>
              <FormH1>Log In</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' 
                    onChange={(event) => setEmail( event.target.value )}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' 
                    onChange={(event) => setPassword( event.target.value )}/>
              <FormButton as="a" href={link} onClick={validate} type="submit">
                  Submit <FaPaw />
              </FormButton>
              <ForgotPassword href="#">Forgot Password?</ForgotPassword>
            </Form>
          </FormContent>
        </FormWrap>
        <Footer />
      </Container>
    </>
  );
}
