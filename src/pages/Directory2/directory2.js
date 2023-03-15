import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Box from "@mui/material/Box";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../../components/Directory2/theme/theme';
import Header from '../../components/Directory2/Header';
import Filter from '../../components/Directory2/Filter';
import UserCard from '../../components/Directory2/UserCard/UserCard';

const Directory = () => {
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container justifyContent='center'>
          <Grid item xs={10}>
            <Filter />
            <UserCard />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Directory;

