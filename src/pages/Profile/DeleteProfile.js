import React, { useState, useEffect } from 'react';

const DeleteProfile = () => {

    const [users, setUser]= useState([])
    useEffect(() => {
        fetch("http://localhost:3000/user").then((result) => {
            result.json().then((response) => {
                setUser(response)
            })
        })
    }, [])
    console.warn(users)
  
  return (
    <div>
      <h1>Delete Your Profile</h1>
        <table>
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>Maiden Name</td>
                    <td>Married Name</td>
                    <td>Class Year</td>
                    <td>Current City</td>
                    <td>State</td>
                    <td>First Name</td>
                    <td>Name of Institution</td>
                    <td>Degree Earned</td>
                    <td>Area of Study</td>
                    <td>Graduation Year</td>
                    <td>Position</td>
                    <td>Company Name</td>
                    <td>First Name</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default DeleteProfile;
