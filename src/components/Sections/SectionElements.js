import styled from 'styled-components';

export const SectionContainer= styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#060102')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const SectionWrapper= styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const SectionRow= styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
`;

export const Column1= styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2= styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper= styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading= styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: '#faf7f7';

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`; 

export const Subtitle= styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#060102' : "#fff")};
`;

export const BtnWrap= styled.div`
    display: flex;
    justify-content: flex-start;
`;