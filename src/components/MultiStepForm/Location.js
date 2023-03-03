import React from 'react';
import './MultiForm.css';

const Location = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <input type="text" placeholder="Current City"
          value={formData.currentCity} onChange={(event) => 
            setFormData({...formData, currentCity: event.target.value})}
      />

      <input type="text" placeholder="State"
          value={formData.state} onChange={(event) => 
            setFormData({...formData, state: event.target.value})}
      />
  </div>
  );
}

export default Location;
