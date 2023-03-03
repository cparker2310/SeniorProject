import React from 'react';
import './MultiForm.css';

const Education = ({ formData, setFormData }) => {
  return (
    <div className="education-container">
    <input type="text" placeholder="Name of Institution"
        value={formData.school1} onChange={(event) => 
          setFormData({...formData, school1: event.target.value})}
    />

    <input type="text" placeholder="Degree Earned"
        value={formData.degree1} onChange={(event) => 
          setFormData({...formData, degree1: event.target.value})}
    />

    <input type="text" placeholder="Area of Study"
        value={formData.major1} onChange={(event) => 
          setFormData({...formData, major1: event.target.value})}
    />

    <input type="text" placeholder="Graduation Year"
        value={formData.grad1} onChange={(event) => 
          setFormData({...formData, grad1: event.target.value})}
    />
  </div>
  );
}

export default Education;
