import styled from 'styled-components';
import Image from '../../images/castle.jpg';
import { FaPaw } from 'react-icons/fa';
import { GiFlatPawPrint } from 'react-icons/gi';

export const HeroContainer= styled.div`
    background: #0000;
    backgroundImage: ${Image};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rbga(0, 0, 0, 0.6) 100%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg= styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg= styled.image`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #342323;
`;

export const HeroContent= styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

export const HeroBtnWrapper= styled.div`
    margin-top: 302px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FaPaw1= styled(FaPaw)`
    margin-left: 8px;
    font-size: 20px;
`;

export const GiFlatPawPrint1= styled(GiFlatPawPrint)`
    margin-left: 8px;
    font-size: 20px;
`;