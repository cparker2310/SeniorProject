import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Castle from '../images/castle.jpg';
import styled from 'styled-components';
import Box from "@mui/material/Box";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../components/CareerCenter/theme/theme';
import Header from '../components/CareerCenter/Header';
import Search from '../components/CareerCenter/Search';

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const CareerCenter = () => {
  return (
    <>
      <Navbar />
      <Background>
        <ThemeProvider theme={theme}>
          <Header />
          <Grid container justifyContent='center'>
            <Grid item xs={10}>
              <Search />
            </Grid>
          </Grid>
        </ThemeProvider>
      </Background>
    </>
  )
}

export default CareerCenter;