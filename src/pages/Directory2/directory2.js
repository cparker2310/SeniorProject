import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import api from '../../api/index';

const DirectoryPage = () => {
     const [object, setObject]= useState({});
     const [users, setUsers]= useState({});
     const [filterClassYear, setFilterClassYear]= useState({});
     const [page, setPage]= useState(1);
     const [search, setSearch]= useState("");
     const [isLoading, setLoading]= useState(false);

     const displayAll = async () => {
         setLoading(true);
 
         await api.getAllUsers().then(users => {
             const url= `page= ${page} & filterClassYear= ${filterClassYear.toString()} & search= ${search}`;
             setUsers(users.data.data);
             //setLoading(true);
     })
     alert(users.data.data.length)
 }
 
     const getAllUsers = () =>{
         return users
     }
     const getLoading = () =>{
         return isLoading
     }

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
            <div className="body">
                <div className="table-container"></div>
                <div className="filter-container"></div>
            </div>
        </div>
      </div>
    </>
  );
}

export default DirectoryPage;
