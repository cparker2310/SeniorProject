import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Box from "@mui/material/Box";
import { ThemeProvider } from "@material-ui/core";
import theme from '../../components/Directory2/theme/theme';
import Header from '../../components/Directory2/Header';

const Directory = () => {
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default Directory;

