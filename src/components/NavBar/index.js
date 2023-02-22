import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

const NavBar= ({toggle}) => {
    const [scrollNav, setScrollNav]= useState(false)

    const changeNav= () => {
        if (window.scrollY>= 80) {
           setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome= () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to='/' onClick={toggleHome}>MARYVALE</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='conduct'
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                            >
                                Site Conduct
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='directory'
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                            >
                                Directory
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='jobs'
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                            >
                                Career Center
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='messages'
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                            >
                                Message Board
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                            >
                                Register
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Log In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
            </IconContext.Provider>
        </> 
    );
};

export default NavBar;