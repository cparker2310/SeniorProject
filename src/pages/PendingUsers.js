//import axios from 'axios';
import './PendingUsers.css';
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
//import AdminVerify from '../components/AdminVerify/AdminVerify';
import Navbar from '../components/NavBar/Navbar';
import api from '../api/index'

const PendingUsers = () => {
    const [open, setOpen]= useState(false);
    const [users, setUsers]= useState([]);
    const [denyUser, setDenyUser]= useState({});
    const [element, setElement]= useState(<></>);

    // Should retrieve users after they register
    
    const getUsers = async() => {
        await api.getAllUsers().then((users) => {
            setUsers(users.data.data);
        });
    }
    
    function denyUserEntry(id) {
        api.deleteUserById(id).then((res) => {
            getUsers();
            setOpen(false);
        })
    }
    
    function confirmDenyUser(data) {
        setOpen(true);
        setDenyUser(data);
    }


   

    const dataElement = () =>{
        const ele = (users.map((data, index) => (
            <>
            <tr>
                <td>{index + 1}</td>
                <td>{data.firstName} {data.maidenName} {data.marriedName}</td>
                <td>{data.classYear}</td>
                <td>{data.email}</td>

                <td>
                </td>
                </tr>
            </>
        )))
        setElement(ele);
    }

    getUsers()
    

  return (
    <>
      <Navbar />
      <h1 className='h1'>Newly Registered Users</h1>
      <table className='table'>
        
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Class Year</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            {(users.map((data, index) => (
            
            <tr key={index} className='th'>
                <td>{index + 1}</td>
                <td>{data.firstName} {data.maidenName} {data.marriedName}</td>
                <td>{data.classYear}</td>
                <td>{data.email}</td>

                <td>
                    <Link className='accept'>Accept </Link>
                    <Link className='deny'>Deny</Link>
                </td>
                </tr>
            )))}
        
      </table>
      
      
    </>
  )
}

export default PendingUsers;