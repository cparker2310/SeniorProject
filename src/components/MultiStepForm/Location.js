import React from 'react';
import './MultiForm.css';
import styled from 'styled-components/macro';

export const FormLabel= styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #030000;
  margin-right: 105px;
`;

const Location = ({ formData, setFormData }) => {
  const states= [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  return (
    <div className="location-container">
      <FormLabel htmlFor='for'>Current City</FormLabel>
      <input type="text"
          value={formData.currentCity} onChange={(event) => 
            setFormData({...formData, currentCity: event.target.value})}
      />

      <FormLabel htmlFor='for' css={`margin-left: -57px;`}>State</FormLabel>
      <select className="select" value={formData.state} onChange={(event) => setFormData({...formData, state: event.target.value})} style={{ width: '250px', height: '140px' }}>
        {states.map((state) => (
          <option className="select-menu" key={state} value={state}>{state}</option>
        ))}
      </select>
  </div>
  );
}

export default Location;
