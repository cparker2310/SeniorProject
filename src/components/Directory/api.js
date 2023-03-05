import React, { useEffect, useState } from 'react';
import './api.css';

const DirectoryApi = () => {
    const [users, setUsers]= useState([]);

    const getUsers= async () => {
        const response= await fetch('http://localhost:3000/users');
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <>
      <h2>Directory</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
            {
                users.map((currentElement) => {
                    const {id, firstName, maidenName, marriedName, classYear}= currentElement;

                    return (
                            <div className= "col-10 col-md-4 mt-5" key={id}>
                                <div class="card p-2">
                                    <div class="d-flex align-items-center">
                                        <div className="ml-3 w-100">
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="title">{firstName} {maidenName} {marriedName}</span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="classYear">{classYear}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
