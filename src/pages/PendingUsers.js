//import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import AdminVerify from '../components/AdminVerify/AdminVerify';
import Navbar from '../components/NavBar/Navbar';
import api from '../api/index';
import './PendingUsers.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PendingUsers = () => {
    const [open, setOpen]= useState(false);
    const [state, setState]= useState(true);
    const [pending, setPendings]= useState([]);
    const [denyUser, setDenyUser]= useState({});
    const [element, setElement]= useState(<></>);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#2e2d2c',
            color: '#fdfdfd',
            fontFamily: "Lora, serif"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            fontFamily: "Lora, serif"
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // Should retrieve users after they register
    
    const getPendings = async() => {
        await api.getAllPendings().then((pendings) => {
            setPendings(pendings.data.data);
            const ele = pending.map((pendings, index)=>{
              return <>
              <StyledTableRow key={pendings._id}>
                <StyledTableCell align="right">{index+1}</StyledTableCell>
                <StyledTableCell align="right">{pendings.firstName}</StyledTableCell>
                <StyledTableCell align="right">{pendings.maidenName}</StyledTableCell>
                <StyledTableCell align="right">{pendings.marriedName}</StyledTableCell>
                <StyledTableCell align="right">{pendings.classYear}</StyledTableCell>
                <StyledTableCell align="right">{pendings.email}</StyledTableCell>
                <StyledTableCell align="right">
                      <Link className='accept' onClick={() => handleAccept(pendings)}> Accept </Link>
                      <Link className='deny' onClick={() => handleDeny(pendings._id)}>Deny</Link>
                </StyledTableCell>
              </StyledTableRow>
              </>
            })
            setElement(ele)})
        }
    
    
    const handleDeny = async(id) => {
        await api.deletePending(id).then((res) => {
            setOpen(false);
            alert("User Updated")
            
        })
        
        window.location.reload(true)
        
    }
    
    function confirmDenyUser(data) {
        setOpen(true);
        setDenyUser(data);
    }

    const handleAccept = async(data) => {
        await api.insertUser(data).then(res => {
            
        })
        handleDeny(data._id)
    }

    
    
    useEffect(() =>{
      getPendings();
    }, [])
    
    

  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Newly Registered Users</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Maiden Name</StyledTableCell>
            <StyledTableCell align="right">Married Name</StyledTableCell>
            <StyledTableCell align="right">Class Year</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {element}
        </TableBody>
      </Table>
    </TableContainer>      
    </>
  )
}

export default PendingUsers;
 