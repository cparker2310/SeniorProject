import React from 'react';
import './MultiForm.css';

const Career = ({ formData, setFormData }) => {
  return (
  <div className="sign-up-container">
    <input type="text" placeholder="Position"
        value={formData.job} onChange={(event) => 
          setFormData({...formData, job: event.target.value})}
    />

    <input type="text" placeholder="Company Name"
        value={formData.companyName} onChange={(event) => 
          setFormData({...formData, companyName: event.target.value})}
    />

    <input type="text" placeholder="Industry"
        value={formData.industry} onChange={(event) => 
          setFormData({...formData, industry: event.target.value})}
    />
  </div>
  );
}

export default Career;
