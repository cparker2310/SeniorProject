import React, { useState } from 'react';
import './MultiForm.css';
import styled from 'styled-components/macro';
import { FaPaw } from 'react-icons/fa';
import api from '../../api/index';

export const FormLabel= styled.label`
  margin-bottom: 6px;
  font-size: 18px;
  color: #030000;
  margin-right: 125px;
`;

const PhotoUpload= ({ formData, setFormData }) => {
    const [fileName, setFileName] = useState("")

    

    return (
    
    <form action={("http://localhost:8000/api/upload/" + formData.profileFinal)} method="POST" encType="multipart/form-data">
      <div className="photo-container">
      <input 
        type="file"
        lable="Image"
        name="myFile"
        
        onChange={(event) => 
          setFormData({...formData, profileFinal: event.target.files[0].name})}
        
        id='file-upload'
        accept='.jpeg, .png, .jpg'
      />
      </div>
      <button type='submit' className="submitBtn">Save</button>
    </form>
    
    );
}

export default PhotoUpload;
