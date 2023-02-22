import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button= styled(Link)`
    border-radius= 50px;
    background: ${({primary}) => (primary ? '#af2d38' : '#060102')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color:  ${({dark}) => (dark ? '#060102' : '#c4474b')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out; 
        background: ${({primary}) => (primary ? '#c4474b' : '#af2d38')};
    }
`;