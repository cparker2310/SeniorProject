import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import Castle from '../../images/castle.jpg';
import { FaPaw } from 'react-icons/fa';
//import api from '../../../server/models/user-model'
import axios from 'axios'
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
  margin-left: 20px;
  margin-top: 20px;
  text-decoration: none;
  color: #a32738;
  font-weight: 800;
  font-size: 34px;
  text-shadow: 1.5px 1.5px 0.5px #a32738;
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
  border-radius: 4px;
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

class signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
        name: '',
        email: '',
        password: '',
    }
}

handleChangeInputName = async event => {
    const name = event.target.value
    this.setState({ name })
}

handleChangeInputEmail = async event => {
    const email = event.target.validity.valid
        ? event.target.value
        : this.state.email

    this.setState({ email })
}

handleChangeInputPassword = async event => {
    const password = event.target.value
    this.setState({ password })
}

handleIncludeUser = async () => {
    const { name, email, password } = this.state
    const payload = { name, email, password }

    await api.insertUser(payload).then(res => {
        window.alert(`User inserted successfully`)
        this.setState({
            name: '',
            email: '',
            password: '',
        })
    })
}
render() {
  const { name, email, password } = this.state
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MARYVALE</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Register</FormH1>
              <FormLabel htmlFor='for'>Full Name</FormLabel>
                <FormInput
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />
              <FormButton type='submit' onClick={this.handleIncludeUser}>Submit <FaPaw /></FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
  
}
}

export default signup;