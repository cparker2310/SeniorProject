import React, { useEffect, useState } from 'react';
import './api.css';
import api from '../../api/index'

const DirectoryApi = () => {
    const [users, setUsers]= useState([]);

    const getUsers = async () => {
        //this.setState({ isLoading: true })
        //alert("works")
        await api.getAllUsers().then(users => {
            setUsers(users.data.data);
        })
        //alert(users)
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <>
      <div>
        <div>
            {
                users.map((currentElement) => {
                    const {id, firstName, maidenName, marriedName, classYear}= currentElement;

                    return (
                            <div key={id}>
                                <div className="card">
                                    <span className="title">{firstName} {maidenName} {marriedName}</span>
                                    <br />
                                    <span className="classYear">Class of {classYear}</span>
                                </div>
                            </div>
                                        
                    )
                })
            }
        </div>
    </div>
    </>
  );
}

export default DirectoryApi;
