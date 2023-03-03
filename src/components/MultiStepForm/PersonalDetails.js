import React from 'react';
import './MultiForm.css';

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div className="personal-container">
        <input
          type="text" placeholder="First Name"
          value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} />

        <input
          type="text" placeholder="Maiden Name"
          value={formData.maidenName} onChange={(event) => setFormData({ ...formData, maidenName: event.target.value })} />

        <input
          type="text" placeholder="Married Name"
          value={formData.marriedName} onChange={(event) => setFormData({ ...formData, marriedName: event.target.value })} />

        <input type="text" placeholder="Class Year"
          value={formData.classYear} onChange={(event) => setFormData({ ...formData, classYear: event.target.value })} />

        <input type="text" placeholder="Email"
          value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />

        <input type="text" placeholder="Password"
          value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
      </div>
  );
}

export default PersonalDetails;
