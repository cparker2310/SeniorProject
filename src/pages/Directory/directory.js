import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../../components/Directory/theme/theme';
import Header from '../../components/Directory/Header';
import Filter from '../../components/Directory/Filter';
import Footer from '../../components/Footer/Footer';

const Directory = () => {
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container justifyContent="center">
          <Grid item xs={10}>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Directory;