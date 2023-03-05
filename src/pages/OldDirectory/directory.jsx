import React, { useEffect, useState, Component } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import Navbar from '../../components/NavBar/Navbar';
import styled from 'styled-components';
import Castle from '../images/castle.jpg';
import './directory.css';
import api from '../../api/index';


/*
const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class DirectoryPage extends Component{

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

  constructor(props) {
    super(props)
    this.state = {
        users: [],
        columns: [],
        isLoading: false,
    }
}

displayAll = async () => {
    this.setState({ isLoading: true })

    await api.getAllUsers().then(users => {
        this.setState({
            users: users.data.data,
            isLoading: false,
        })
    })
}
  render(){
    this.displayAll()
    const { users, isLoading } = this.state

    const columns = [
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
      }
          ]

  let showTable = true
  if (!users.length) {
      showTable = false
  }
  return (
    <>
      <Navbar />
      <Wrapper>
                {showTable && (
                    <ReactTable
                        data={users}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                
        </Wrapper>    
    </>
  )
}}

export default DirectoryPage;
*/

