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
import api from '../api/index';
/*import { useDispatch } from 'react-redux';
import { getJobs } from '../components/CareerCenter/Jobs/actions/actions';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-thunk';
import reducers from '../components/CareerCenter/Jobs/reducers';
*/

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
  //const [jobId, setJobId]= useState(0);
  const [job, setJobs] = useState({});
  const [elements, setElements] = useState(0);

  api.getAllJobs().then(jobs => {
      setJobs(jobs.data)
      const ele = job.map((job)=>{
        return (<><JobCard props={job} openEditJob={() => setEditJob(true)}/>
        <EditJob _id={job._id} closeEditJob={() => setEditJob(false)} editJob={editJob}></EditJob>
        </>)
      })
      setElements(ele)})

      const filterJobs = (filterSettings) => {
          api.getAllJobs().then((response) => {
            const filteredJobs= response.filter(
              (job) => job.type=== filterSettings.type && job.location=== filterSettings.location
            );
        
            const ele= filteredJobs.map((job) => (
              <>
                <JobCard props={job} openEditJob={() => setEditJob(true)} />
                <EditJob _id={job._id} closeEditJob={() => setEditJob(false)} editJob={editJob} />
              </>
            ));
            setJobs(filteredJobs);
            setElements(ele);
        }); 
      }    

  return (
    <>
      <Navbar />
      <Background>
        <ThemeProvider theme={theme}>
          <Header openNewJob={() => setNewJob(true)} />
          <NewJob closeNewJob={() => setNewJob(false)} newJob={newJob} />
          <Box mb={3}>
            <Grid container justifyContent='center'>
              <Grid item xs={10}>
                <Search filterJobs={filterJobs}/>
                {elements}
                
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Background>
    </>
  )
}

export default CareerCenter;



