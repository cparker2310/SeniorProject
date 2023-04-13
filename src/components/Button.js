import styled from 'styled-components';

export const Button= styled.button`
  border-radius: 50px;
  background: '#a32738';
  color: '#fdfdfd';
  cursor: pointer;
  white-space: nowrap;
  padding: '14px 48px';
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: '20px';
  font-family: 'Lora', serif;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: '#fdfdfd';
  }
`;

export default Button;