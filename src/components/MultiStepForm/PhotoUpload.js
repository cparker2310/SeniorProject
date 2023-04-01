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

    function handleApi() {
        const formData= new FormData;
        formData.append('image', image);

        /*api.uploadImage(formData).then((res) => {
            console.log(res);
        });*/
    }

  return (
  <div className="photo-container">
    <input type="file" name='file'
        onChange={handleImage}
    />
    <button className="upload" onClick={handleApi}>Upload <FaPaw /></button>
  </div>
  );
}

export default PhotoUpload;
