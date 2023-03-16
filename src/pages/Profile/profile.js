import React, { useState } from 'react';
import NavBar from '../../components/NavBarAfterLogIn/NavBarLogIn';
import EditProfile from '../../components/ProfileCard/EditProfile/EditProfile';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const ProfilePage = () => {
  const [edit, setEdit]= useState(false);

  return (
    <>
        <NavBar />
        <EditProfile closeEdit={() => setEdit(false)} edit={edit}/>
        <ProfileCard openEdit={() => setEdit(true)}/>
    </>
  );
}

export default ProfilePage;
