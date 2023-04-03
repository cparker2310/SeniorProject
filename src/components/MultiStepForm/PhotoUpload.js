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

const PhotoUpload= () => {
    const [image, setImage]= useState('');

    function handleImage(e) {
        setImage(e.target.files[0]);
    }

    return (
    <div className="photo-container">
      <input type="file" name='file'
          onChange={handleImage}
      />
    </div>
    );
}

export default PhotoUpload;
