import React from 'react';
import './MultiForm.css';

const ContactInfo = ({ formData, setFormData }) => {
  return (
  <div className="sign-up-container">
    <input type="text" placeholder="Phone"
        value={formData.phone} onChange={(event) => 
          setFormData({...formData, phone: event.target.value})}
    />

    <input type="text" placeholder="Email"
      value={formData.email2} onChange={(event) => 
        setFormData({...formData, email2: event.target.value})}
    />
  </div>
  );
}

export default ContactInfo;
