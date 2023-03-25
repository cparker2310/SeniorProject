//import axios from 'axios';
import './PendingUsers.css';
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
//import AdminVerify from '../components/AdminVerify/AdminVerify';
import Navbar from '../components/NavBar/Navbar';
import api from '../api/index'

const PendingUsers = () => {
    const [open, setOpen]= useState(false);
    const [pendings, setPendings]= useState([]);
    const [denyUser, setDenyUser]= useState({});
    const [element, setElement]= useState(<></>);

    // Should retrieve users after they register
    
    const getPendings = async() => {
        await api.getAllPendings().then((pendings) => {
            setPendings(pendings.data.data);
        });
    }
    
    const handleDeny = async(id) => {
        await api.deletePending(id).then((res) => {
            setOpen(false);
        })
    }
    
    function confirmDenyUser(data) {
        setOpen(true);
        setDenyUser(data);
    }

    const handleAccept = async(data) => {
        await api.insertUser(data).then(res => {
            alert("accepted")
        })
        handleDeny(data._id)
    }


    getPendings()
    

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
            {(pendings.map((data, index) => (
            
            <tr key={index} className='th'>
                <td>{index + 1}</td>
                <td>{data.firstName} {data.maidenName} {data.marriedName}</td>
                <td>{data.classYear}</td>
                <td>{data.email}</td>

                <td>
                    <Link className='accept' onClick={handleAccept(data)}> Accept </Link>
                    <Link className='deny' onClick={handleDeny(data._id)}>Deny</Link>
                </td>
                </tr>
            )))}
        
      </table>
      
      
    </>
  )
}

export default PendingUsers;