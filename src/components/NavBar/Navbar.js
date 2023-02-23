import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavbarContainer= styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: linear-gradient(90deg, #60000D, #a32738);
`;

const NavbarWrap= styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Nav= styled.div`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink= styled(Link)`
  color: #fdfdfd;
  padding: 0 17px;
  font-size: 20px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;

const ButtonContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button= styled.div`
  width: 110px;
  color: #e6e1e1;
  cursor: pointer;
  height: 36px;
  font-size: 20px;
  box-sizing: border-box;
  background: #63625d;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Nav>
          <NavLink to="/">MARYVALE</NavLink>
          <NavLink to="/conduct">Site Conduct</NavLink>
          <NavLink to="/directory">Directory</NavLink>
          <NavLink to="/jobs">Career Center</NavLink>
          <NavLink to="/messages">Message Board</NavLink>
        </Nav>
        <ButtonContainer>
          <Button css={`color: #e6e1e1; background: inherit;`}>
            Register
          </Button>
          <Button>
            Log In
          </Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
}

export default Navbar;
