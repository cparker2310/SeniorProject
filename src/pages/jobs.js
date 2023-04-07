import React, { useEffect, useState } from 'react';
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
  const [job, setJobs] = useState([]);
  const [elements, setElements] = useState(<></>);


  const filterJobs = async(filterSettings) => {
    if (filterSettings.type=== "" && filterSettings.location=== "") {
      await api.getAllJobs().then((response) => {
        setJobs(response.data);
      });
    }

    else {
      await api.getAllJobs().then((response) => {
        const filteredJobs= response.data.filter(
          (job) => job.type=== filterSettings.type && job.location=== filterSettings.location
        );
          /*
        const ele= filteredJobs.map((job) => (
          <>
            <JobCard props={job} openEditJob={() => setEditJob(true)} />
            <EditJob _id={job._id} closeEditJob={() => setEditJob(false)} editJob={editJob} />
          </>
        ));*/
        setJobs(filteredJobs);
        })
      }
    }
      
      
    useEffect(() =>{
      const getJobs = async () =>{
        await api.getAllJobs().then(jobs => {
          setJobs(jobs.data)
          /*
          const ele = job.map((job)=>{
            return (<><JobCard props={job} openEditJob={() => setEditJob(true)}/>
            <EditJob _id={job._id} closeEditJob={() => setEditJob(false)} editJob={editJob}></EditJob>
            </>)
          })
        setElements(ele)*/})
        }

      getJobs()
    },[])
    
  

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
                {job.map((job)=>{
            return (<><JobCard props={job} openEditJob={() => setEditJob(true)}/>
            <EditJob _id={job._id} closeEditJob={() => setEditJob(false)} editJob={editJob}></EditJob>
            </>)})}
                
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Background>
    </>
  )
}

export default CareerCenter;



