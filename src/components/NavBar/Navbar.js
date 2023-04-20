import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import api from '../../api/index';
import { SlUserFemale } from "react-icons/sl";

export const NavbarContainer= styled.div`
  width: 100%;
  height: 80px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 100%;
  background: linear-gradient(90deg, #60000D, #a32738);
`;

export const NavbarWrap= styled.div`
  width: 100%;
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
const u = sessionStorage.getItem('user')

const [user, setUser] = useState({})
const [admin, setAdmin] = useState(false)
  const getUser = async () => {
    if(u){
      await api.getUserById(u).then(user => {
        setUser(user.data)
        setAdmin(user.data.isAdmin)
      })
      //console.log(newUser)
        //console.log(user)
      }
    
  }

  const logOut = () => {
    if(sessionStorage.getItem("user") && window.confirm("Are you sure you want to log out?")){
      sessionStorage.clear();
      window.location.reload(false)
    }
  }

  useEffect(()=>{
    getUser()
  }, [])
    

  
  return (
    <>
    <NavbarContainer>
      <NavbarWrap>
        <Nav>
          <NavLink to="/">MARYVALE</NavLink>
          <NavLink to="/conduct">Site Conduct</NavLink>
          <NavLink to="/directory">Directory</NavLink>
          <NavLink to="/jobs">Career Center</NavLink>
          <NavLink to="/messages">Message Board</NavLink>
          {admin && <NavLink to="/pending">Pending Users</NavLink>}
          
        </Nav>
          <ButtonContainer> 
            <Link state={{props:user}} style={{ textDecoration: 'none' }}>
          <Button css={`color: #e6e1e1; background: inherit;`} to={u ? "/profile" : "/consent"} state={{props:user}}>
            {u ? <SlUserFemale style={{height: '40px', width: '40px', color: '#e6e1e1',  marginRight: '30px', marginTop: '10px'}}/> : "Register"}
          </Button>
          </Link>
          <Button onClick={logOut} to={u ? "/" : "/login"}>
            {u ? "Log Out" : "Log In"}
          </Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
    </>
  );
}

export default Navbar;
