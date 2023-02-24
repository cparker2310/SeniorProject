import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const NavbarContainer= styled.div`
  width: 100%;
  height: 80px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 1400px;
  background: linear-gradient(90deg, #60000D, #a32738);
`;

export const NavbarWrap= styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

export const Nav= styled.div`
  position: sticky;
  padding-left: 50px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
`;

export const NavLink= styled(Link)`
  color: #fdfdfd;
  padding: 0 17px;
  font-size: 20px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #2e2d2c;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4f0202;
    box-sizing: border-box;
    line-height: 36px;
    border-radius: 21px;
  }
`;

export const ButtonContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button= styled(Link)`
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
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #60000D;
  }
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
          <Button to="/consent" css={`color: #e6e1e1; background: inherit;`}>
            Register
          </Button>
          <Button to="/login">
            Log In
          </Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
}

export default Navbar;
