import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import DirectoryApi from '../../components/Directory/api';

const DirectoryPage = () => {
  return (
    <>
      <Navbar />
      <DirectoryApi />
    </>
  );
}

export default DirectoryPage;
