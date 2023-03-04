import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Castle from '../../images/castle.jpg';
import { FaPaw } from 'react-icons/fa';
import api from '../../api'

export const Container= styled.div`
  background-image: url(${Castle});
  height: 100%;
  width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
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
`;

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: '',
        users:[],
      isLoading: false,
    }
  }

  handleChangeEmail = async event => {
    const email = event.target.value
    this.setState({ email })
}

handleChangePassword = async event => {
    const password = event.target.validity.valid
        ? event.target.value
        : this.state.password

    this.setState({ password })
}

validLogin = async () => {

  this.setState({ isLoading: true })
  await api.getAllUsers().then(users => {
      this.setState({
          users: users.data.data,
          isLoading: false,
      })
  })
  for(let i = 0; i<this.state.users.length; i++){
    let user = this.state.users[i]
    if(user.email === this.state.email && user.password === this.state.password){
      return alert("true")
    }
  }
  
  return alert("false")
}
  
  
    
  
  render(){
    const { email, password, movies, isLoading } = this.state
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MARYVALE</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Log In</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' value={email}
                    onChange={this.handleChangeEmail}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' value={password}
                    onChange={this.handleChangePassword}/>
              <FormButton type='submit'onClick={(this.validLogin)}>Submit <FaPaw /></FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
}
export default LogIn;