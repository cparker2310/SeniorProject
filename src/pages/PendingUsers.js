import axios from 'axios';
import React, { useState, useEffect } from 'react'
import AdminVerify from '../components/AdminVerify/AdminVerify';
import Navbar from '../components/NavBar/Navbar';

const PendingUsers = () => {
    const [open, setOpen]= useState(false);
    const [users, setUsers]= useState([]);
    const [denyUser, setDenyUser]= useState({});

    // Should retrieve users after they register
    function getUsers() {
        axios.get("http://localhost:8000/users").then((res) => {
            setUsers(res.data.reverse());
        });
    }

    useEffect(() => {
        getUsers();
    }, []);

    /*
    function denyUserFromEnter() {
        axios.delete(`http://localhost:8000/users/user/${id}`).then((res) => {
            getUsers();
            setOpen(false);
        }).catch((error) => {
            console.log(error);
        })
    }
    */
    function confirmDenyUser(data) {
        setOpen(true);
        setDenyUser(data);
    }

  return (
    <>
      <Navbar />
      <h1>Newly Registered Users</h1>
      <AdminVerify open={open} close={() => setOpen(false)} />
    </>
  )
}

export default PendingUsers;
