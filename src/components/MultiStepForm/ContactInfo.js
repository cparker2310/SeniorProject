import React from 'react';
import './MultiForm.css';
import styled from 'styled-components/macro';

export const FormLabel= styled.label`
  margin-bottom: 6px;
  font-size: 18px;
  color: #030000;
  margin-right: 125px;
`;

const ContactInfo = ({ formData, setFormData }) => {
  return (
  <div className="contact-container">
    <FormLabel htmlFor='for' css={`margin-left: -12px;`}>Phone</FormLabel>
    <input type="text"
        value={formData.phone} onChange={(event) => 
          setFormData({...formData, phone: event.target.value})}
    />

    <FormLabel htmlFor='for' css={`margin-left: -23px;`}>Email</FormLabel>
    <input type="text"
      value={formData.email2} onChange={(event) => 
        setFormData({...formData, email2: event.target.value})}
    />
  </div>
  );
}

export default ContactInfo;
