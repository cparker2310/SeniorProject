import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar/Navbar';
import UserDetails from '../components/UserDetails';
import styled from 'styled-components';
import Castle from '../images/castle.jpg';
import './directory.css';

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const DirectoryPage = () => {
  const [users, setUsers]= useState(null)

  useEffect(() => {
    const fetchUsers= async () => {
      const response= await fetch('/api/users')
      const json= await response.json()
  
      if (response.ok) {
        setUsers(json)
      }
    }
    fetchUsers()
  }, [])

  return (
    <>
      <Navbar />
      <Background>
        <div className="directory">
          <div className= "users">
            {users && users.map((user) => (
                <UserDetails key={user._id} user={user}/>
            ))}
          </div>
        </div>
      </Background>
    </>
  )
}

export default DirectoryPage;
