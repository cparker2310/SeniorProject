import React from 'react';
import { 
    Container, 
    FormButton, 
    FormContent, 
    FormInput, 
    FormLabel,
    FormWrap, 
    Icon, 
    FormH1, 
    Form 
} from './LogInElements';

const LogIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>MARYVALE</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Log In</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Submit</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LogIn;
