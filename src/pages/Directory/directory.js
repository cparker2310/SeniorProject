import React, {useState} from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Box from "@mui/material/Box";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../../components/Directory/theme/theme';
import Header from '../../components/Directory/Header';
import Filter from '../../components/Directory/Filter';
import UserCard from '../../components/Directory/UserCard/UserCard';
import api from '../../api/index'
const Directory = () => {

  const [use, setUsers] = useState({});
  const [elements, setElements] = useState(0);

  const getUsers = async() => {

    await api.getAllUsers().then(users => {
      setUsers(users.data.data)
    })

    const ele = await use.map((user)=>{
      return <UserCard props={user}/>;
      })

    setElements(ele)
    }
  


  
    
      
  
    getUsers()
  

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container justifyContent='center'>
          <Grid item xs={10}>
            <Filter />
            {elements}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Directory;

