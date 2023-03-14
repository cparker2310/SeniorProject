import React, { useEffect, useState, Component } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import Navbar from '../components/NavBar/Navbar';
import styled from 'styled-components';
import './directory.css';
import api from '../api/index';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

function DirectoryPage(){
  /*
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
  */

  const [users, setUsers]= useState({});
  const [isLoading, setLoading]= useState(false);

    const displayAll = async () => {
        setLoading(true);

        await api.getAllUsers().then(users => {
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

    
    const getColumns = () => {
    let columns = [
      {
          Header: 'First Name',
          accessor: 'firstName',
          filterable: true,
      },
      {
          Header: 'Maiden Name',
          accessor: 'maidenName',
          filterable: true,
      },
      {
          Header: 'Class Year',
          accessor: 'classYear',
          filterable: true,
      },
      {
        Header: 'Class Year',
        accessor: 'email',
        filterable: true,
    },
    {
        Header: 'Class Year',
        accessor: 'password',
        filterable: true,
    },
    {
        Header: 'Class Year',
        accessor: 'marriedName',
        filterable: true,
    },
    {
        Header: 'Class Year',
        accessor: 'degree',
        filterable: true,
    },
    {
        Header: 'Class Year',
        accessor: 'industry',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'currentCity',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'currentState',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'gradYear',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'position',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'companyName',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'email2',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'areaStudy',
        filterable: true,
    },
    {
        Header: 'Maiden Name',
        accessor: 'universityName',
        filterable: true,
    },
          ]
          return columns
        }
    displayAll();
  let showTable = true
  if (!users.length) {
      //showTable = false
  }

  return (
    <>
      <Navbar />
      <Wrapper>
                {(showTable &&
                    <ReactTable
                        data={getAllUsers}
                        columns={getColumns}
                        loading={getLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                
        </Wrapper>    
    </>
  )
}

export default DirectoryPage;