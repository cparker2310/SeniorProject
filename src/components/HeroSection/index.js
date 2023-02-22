import React, { useState } from 'react';
import { Button } from '../../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    ImageBg,
    HeroContent, 
    HeroBtnWrapper, 
    FaPaw1, 
    GiFlatPawPrint1
} from './HeroElements'; 

const HeroSection= () => {

  const [hover, setHover]= useState(false)

  const onHover= () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <ImageBg/>
      </HeroBg>
      <HeroContent>
        <HeroBtnWrapper>
            <Button 
              to="signup" 
              onMouseEnter={onHover} 
              onMouseLeave={onHover} 
              primary='true' 
              dark='true'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
            >
                Join Network {hover ? <FaPaw1 /> : <GiFlatPawPrint1 />}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;