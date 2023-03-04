import React, { useState, useEffect } from 'react';

const DeleteProfile = () => {

    const [users, setUser]= useState([])
    useEffect(() => {
        getUsers()
    }, [])
    console.warn(users)

    function getUsers()
    {
        fetch("http://localhost:3000/user").then((result) => {
            result.json().then((response) => {
                setUser(response)
            })
        })
    }

    function deleteUser(email)
    {
        fetch(`http://localhost:3000/user/${email}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((response) => {
                console.warn(response)
                getUsers()
            })
        })
    }
    
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
                        <td>Industry</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {
                        users.map((item, i) => 
                            <tr key={i}>
                                <td>{item.user.firstName}</td>
                                <td>{item.user.maidenName}</td>
                                <td>{item.user.marriedName}</td>
                                <td>{item.user.classYear}</td>
                                <td>{item.user.currentCity}</td>
                                <td>{item.user.currentState}</td>
                                <td>{item.user.universityName}</td>
                                <td>{item.user.degree}</td>
                                <td>{item.user.areaStudy}</td>
                                <td>{item.user.gradYear}</td>
                                <td>{item.user.position}</td>
                                <td>{item.user.companyName}</td>
                                <td>{item.user.industry}</td>
                                <td>{item.user.email2}</td>
                                <td>{item.user.phone}</td>
                                <td><button onClick= {() => deleteUser(item.email2)}>Delete Profile</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DeleteProfile;
