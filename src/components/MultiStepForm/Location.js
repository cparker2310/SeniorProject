import React from 'react';
import './MultiForm.css';
import styled from 'styled-components/macro';

export const FormLabel= styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #030000;
  margin-right: 125px;
`;

const Location = ({ formData, setFormData }) => {
  return (
    <div className="location-container">
      <FormLabel htmlFor='for'>Current City</FormLabel>
      <input type="text"
          value={formData.currentCity} onChange={(event) => 
            setFormData({...formData, currentCity: event.target.value})}
      />

      <FormLabel htmlFor='for' css={`margin-left: -57px;`}>State</FormLabel>
      <input type="text"
          value={formData.state} onChange={(event) => 
            setFormData({...formData, state: event.target.value})}
      />
  </div>
  );
}

export default Location;
