import React, { useState } from 'react';
import { 
    NavbarContainer, 
    RightContainer, 
    LeftContainer, 
    NavbarInnerContainer, 
    NavbarExtendedContainer, 
    NavbarLinkContainer,
    NavbarLink,
    NavbarExtendedLink,
    Logo,
    OpenLinksButton
} from '../styles/Navbar.style';
import LogoImg from '../images/maryvalelogo.png';

const Navbar = () => {
    const [extendNavbar, setExtendNavbar]= useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <Logo src={LogoImg}></Logo>
            </LeftContainer>
            <RightContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/conduct">Site Conduct</NavbarLink>
                    <NavbarLink to="/directory">Directory</NavbarLink>
                    <NavbarLink to="/jobs">Career Center</NavbarLink>
                    <NavbarLink to="/messages">Message Board</NavbarLink>
                    <OpenLinksButton 
                        onClick={() => {
                            setExtendNavbar((current) => !current);
                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinksButton>
                </NavbarLinkContainer>
            </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
            <NavbarExtendedContainer>
                        <NavbarExtendedLink to="/conduct">Site Conduct</NavbarExtendedLink>
                        <NavbarExtendedLink to="/directory">Directory</NavbarExtendedLink>
                        <NavbarExtendedLink to="/jobs">Career Center</NavbarExtendedLink>
                        <NavbarExtendedLink to="/messages">Message Board</NavbarExtendedLink>
            </NavbarExtendedContainer>
    )}
    </NavbarContainer>
  );
}

export default Navbar;
