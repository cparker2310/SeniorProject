import React from 'react';
import './MultiForm.css';
import styled from 'styled-components/macro';

export const FormLabel= styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #030000;
  margin-right: 125px;
`;

const Career = ({ formData, setFormData }) => {
  return (
  <div className="career-container">
    <FormLabel htmlFor='for' css={`margin-left: 1px;`}>Position</FormLabel>
    <input type="text"
        value={formData.job} onChange={(event) => 
          setFormData({...formData, job: event.target.value})}
    />

    <FormLabel htmlFor='for' css={`margin-left: 53px;`}>Company Name</FormLabel>
    <input type="text"
        value={formData.companyName} onChange={(event) => 
          setFormData({...formData, companyName: event.target.value})}
    />

    <FormLabel htmlFor='for' css={`margin-left: -6px;`}>Industry</FormLabel>
    <input type="text"
        value={formData.industry} onChange={(event) => 
          setFormData({...formData, industry: event.target.value})}
    />
  </div>
  );
}

export default Career;
