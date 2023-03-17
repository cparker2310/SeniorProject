import React, { useState } from 'react';
import Navbar from '../components/NavBar/Navbar';
import Castle from '../images/castle.jpg';
import styled from 'styled-components';
import Box from "@mui/material/Box";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../components/CareerCenter/theme/theme';
import Header from '../components/CareerCenter/Header';
import Search from '../components/CareerCenter/Search';
import JobCard from '../components/CareerCenter/Jobs/JobCard';
import NewJob from '../components/CareerCenter/Jobs/NewJob';
import EditJob from '../components/CareerCenter/Jobs/EditJob/EditJob';
import { useDispatch } from 'react-redux';
import { getJobs } from '../components/CareerCenter/Jobs/actions/actions';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-thunk';
import reducers from '../components/CareerCenter/Jobs/reducers';

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
  const [newJob, setNewJob]= useState(false);
  const [editJob, setEditJob]= useState(false);
  const [jobId, setJobId]= useState(0);
  
  const dispatch= useDispatch();
  const store= configureStore(reducers, compose(applyMiddleware(thunk)));

  useEffect(() => {
    dispatch(getJobs());
  }, [jobId, dispatch]);

  /*const fetchSearchJobs= jobSearch => {
    where("location", '==', jobSearch.location).where("type", '==', jobSearch.type)
  }*/

  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Background>
        <ThemeProvider theme={theme}>
          <Header openNewJob={() => setNewJob(true)} />
          <NewJob closeNewJob={() => setNewJob(false)} newJob={newJob} />
          <Box mb={3}>
            <Grid container justifyContent='center'>
              <Grid item xs={10}>
                <Search />
                <JobCard jobId={jobId} setJobId={setJobId} openEditJob={() => setEditJob(true)} />
                <EditJob closeEditJob={() => setEditJob(false)} editJob={editJob} />
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Background>
      </Provider>
    </>
  )
}

export default CareerCenter;