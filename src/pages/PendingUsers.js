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


    function denyUserEntry() {
        axios.delete(`http://localhost:8000/users/user/${id}`).then((res) => {
            getUsers();
            setOpen(false);
        }).catch((error) => {
            console.log(error);
        })
    }

    function confirmDenyUser(data) {
        setOpen(true);
        setDenyUser(data);
    }

  return (
    <>
      <Navbar />
      <h1>Newly Registered Users</h1>
      <table>
        <thread>
            <tr>
                <th>Name</th>
                <th>Class Year</th>
                <th>Email</th>
            </tr>
        </thread>
        <tbody>
            {users.map((data, index) => 
                <>
                    <tr key={index}></tr>
                    <td>{index + 1}</td>
                    <td>{data.firstName} {data.maidenName} {data.lastName}</td>
                    <td>{data.classYear}</td>
                    <td>{data.email}</td>

                    <td>
                        <Link>Accept</Link>
                        <Link onClick={() => confirmDenyUser(data)}>Deny</Link>
                    </td>
                </>
            )}
        </tbody>
      </table>
      <AdminVerify 
        open={open} close={() => setOpen(false)} 
        title={denyUser?.name}
        denyFunction={denyUserEntry}
      />
    </>
  )
}

export default PendingUsers;
