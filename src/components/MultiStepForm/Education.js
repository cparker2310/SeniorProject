import React from 'react';
import './MultiForm.css';
import styled from 'styled-components/macro';

export const FormLabel= styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #030000;
  margin-right: 125px;
`;

const Education = ({ formData, setFormData }) => {
  return (
    <div className="education-container">
    <FormLabel htmlFor='for' css={`margin-left: 78px;`}>Name of Institution</FormLabel>
    <input type="text"
        value={formData.school1} onChange={(event) => 
          setFormData({...formData, school1: event.target.value})}
    />

    <FormLabel htmlFor='for' css={`margin-left: 44px;`}>Degree Earned</FormLabel>
    <input type="text"
        value={formData.degree1} onChange={(event) => 
          setFormData({...formData, degree1: event.target.value})}
    />

    <FormLabel htmlFor='for' css={`margin-left: 33px;`}>Area of Study</FormLabel>
    <input type="text"
        value={formData.major1} onChange={(event) => 
          setFormData({...formData, major1: event.target.value})}
    />

    <FormLabel htmlFor='for' css={`margin-left: 47px;`}>Graduation Year</FormLabel>
    <input type="text"
        value={formData.grad1} onChange={(event) => 
          setFormData({...formData, grad1: event.target.value})}
    />
  </div>
  );
}

export default Education;
