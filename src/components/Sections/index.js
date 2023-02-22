import React from 'react';
import { Button } from '../../ButtonElement';
import {
    SectionContainer,
    SectionWrapper,
    SectionRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
} from './SectionElements';

const Section = ({
    lightBg, 
    id, 
    imgStart, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    primary,
    dark,
    dark2
}) => {
  return (
    <>
      <SectionContainer lightBg={lightBg} id={id}>
        <SectionWrapper>
            <SectionRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            {buttonLabel}
                        </Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                </Column2>
            </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
}

export default Section;