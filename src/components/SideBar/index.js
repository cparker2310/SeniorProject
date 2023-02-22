import React from 'react';
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute
} from './SideBarElements';

const SideBar = (isOpen, toggle) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='conduct' onClick={toggle}>Site Conduct</SideBarLink>
                <SideBarLink to='directory' onClick={toggle}>Directory</SideBarLink>
                <SideBarLink to='jobs' onClick={toggle}>Career Center</SideBarLink>
                <SideBarLink to='messages' onClick={toggle}>Message Board</SideBarLink>
                <SideBarLink to='signup' onClick={toggle}>Register</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/login'>Log In</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>

  );
};

export default SideBar;