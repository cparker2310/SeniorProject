import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer= styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: #a32738;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer= styled.div`
   flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const NavbarInnerContainer= styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer= styled.div`
    display: flex;
`;

export const NavbarLink= styled(Link)`
    color: #fdfdfd;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedLink= styled(Link)`
    color: #fdfdfd;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;


export const Logo= styled.img`
    margin: 20px;
    max-width: 180px;
    height: auto;
`;

export const OpenLinksButton= styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
