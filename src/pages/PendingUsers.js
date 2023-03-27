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
    const [pendings, setPendings]= useState([]);
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

    function createData(index, firstName, maidenName, marriedName, classYear, email, actions) {
        return { index, firstName, maidenName, marriedName, classYear, email, actions };
    }

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


    const rows = [
        createData({/*data.*/firstName}, {/*data.*/maidenName}, {/*data.*/marriedName}, {/*data.*/classYear}, {/*data.*/email})
    ];


    getPendings()

    /* 
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
    */
    

  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Newly Registered Users</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Maiden Name&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Married Name&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Class Year&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Actionsl&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell component="th" scope="row">
                {row.index}
              </StyledTableCell>
              <StyledTableCell align="right">{row.index+1}</StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.maidenName}</StyledTableCell>
              <StyledTableCell align="right">{row.marriedName}</StyledTableCell>
              <StyledTableCell align="right">{row.classYear}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">
                    <Link className='accept' onClick={handleAccept(data)}> Accept </Link>
                    <Link className='deny' onClick={handleDeny(data._id)}>Deny</Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>      
    </>
  )
}

export default PendingUsers;
 