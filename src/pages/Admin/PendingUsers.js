import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import api from '../../api/index';
import './PendingUsers.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TailSpin } from  'react-loader-spinner';

const PendingUsers = () => {
    const [open, setOpen]= useState(false);
    const [pendingUsers, setPendings]= useState([]);
    const [denyUser, setDenyUser]= useState({});
    const [action, setAction] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [page, setPage]= useState(1);
    
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
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    const handleDeny = async(id) => {
      await api.deletePending(id).then((res) => {
          setOpen(false);
          alert("User Updated")
          
      })
      setAction(!action)
      
      
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
    
    const getPendings = async() => {
        await api.getAllPendings().then((pendings) => {
            const pendingUsers = pendings.data
            setPendings(pendingUsers)
            })
            if(sessionStorage.getItem('user')){
            await api.getUserById(sessionStorage.getItem('user')).then(user=>{
              setAdmin(user.data.isAdmin)
                
              }
            )
            }
            
            //setElement(ele)})
        }
    

    
    
    useEffect(()=>{
      getPendings();
    }, [action])
    
    const getNextPendings= async () => {
      const nextPage= page+1;
      await api.getAllPendings(nextPage).then((response) => {
        const nextPendings= response.data.filter((pendingUsers) => !pendingAlreadyPosted(pendingUsers, pendingUsers));
        setPendings([...pendingUsers, ...nextPendings]);
        setPage(nextPage);
      });
  };
    
  const pendingAlreadyPosted= (pendingUsers, allPendingUsers) => {
      return allPendingUsers.some((p) => p._id=== pendingUsers._id);
  };
    
  return (
    <>
      <Navbar />
      {admin &&
      <><TableContainer style={{ marginTop: '40px' }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Newly Registered Users</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <InfiniteScroll
                dataLength={pendingUsers.length}
                next={getNextPendings}
                hasMore={true}
                loader={<TailSpin
                  height="30"
                  width="30"
                  color="#a32738"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  alignItems="center" />}
              >
                {pendingUsers.map((user, index) => {
                  return <>
                    <StyledTableRow key={user._id} sx={{ minWidth: 700 }}>
                      <StyledTableCell sx={{ minWidth: 200, textAlign: 'center' }}>{index + 1}</StyledTableCell>
                      <StyledTableCell sx={{ minWidth: 220, textAlign: 'center' }}>{user.firstName}</StyledTableCell>
                      <StyledTableCell sx={{ minWidth: 220, textAlign: 'center' }}>{user.maidenName}</StyledTableCell>
                      <StyledTableCell sx={{ minWidth: 220, textAlign: 'center' }}>{user.marriedName}</StyledTableCell>
                      <StyledTableCell sx={{ minWidth: 200, textAlign: 'center' }}>{user.classYear}</StyledTableCell>
                      <StyledTableCell sx={{ minWidth: 220, textAlign: 'center' }}>{user.email}</StyledTableCell>
                      <StyledTableCell sx={{ minWidth: 220, textAlign: 'center' }}>
                        <><button className='accept' onClick={() => handleAccept(user)}> Accept </button></>
                        <><button className='deny' onClick={() => handleDeny(user._id)}>Deny</button></>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>;
                })}
              </InfiniteScroll>
            </TableBody>
          </Table>
        </TableContainer>
        <Footer />
        </>
}
    </>
  )
}

export default PendingUsers;
 