import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/Navbar';
import EditProfile from '../../components/ProfileCard/EditProfile/EditProfile';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import api from '../../api/index'
import { useLocation } from 'react-router-dom'


const ProfilePage = () => {
  const [edit, setEdit]= useState(false);
  const location = useLocation()
  const { props } = location.state
  

  
  return (
    <>
        <NavBar />
        <EditProfile closeEdit={() => setEdit(false)} edit={edit}/>
        <ProfileCard props={props} openEdit={() => setEdit(true)}/>
    </>
  );
}

export default ProfilePage;
