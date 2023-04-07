import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { 
    Button,
    Select,
    MenuItem,
    makeStyles
} from '@material-ui/core';

const useStyles= makeStyles({
    wrapper: {
        backgroundColor: '#fdfdfd',
        display: 'flex',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        '& > *': {
            flex: 1,
            height: '45px',
            margin: '8px'
        },
    },
});

export default (props) => {
    const classes= useStyles();
    
    const [jobSearch, setjobSearch]= useState({
        type: 'Full Time',
        location: 'Onsite'
    });

    const [filterSettings, setFilterSettings]= useState({type: "", location: ""});

    const handleChange= event => {
        event.persist();
        setjobSearch(oldState => ({...oldState, [event.target.name] : event.target.value}));
    }

    const search= async () => {
        await props.filterJobs(jobSearch);
    }

    const reset= async () => {
        setFilterSettings=({type: 'Full Time', location: 'Onsite'});
        await props.filterJobs(null);
    }

    return (
        <Box p={1} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} name='type' value={jobSearch.type} disableUnderline variant='filled'>
                <MenuItem value='Full Time'>Full Time</MenuItem>
                <MenuItem value='Part Time'>Part Time</MenuItem>
                <MenuItem value='Internship'>Internship</MenuItem>
            </Select>

            <Select onChange={handleChange} name='location' value={jobSearch.location} disableUnderline variant='filled'>
                <MenuItem value='Onsite'>Onsite</MenuItem>
                <MenuItem value='Remote'>Remote</MenuItem>
                <MenuItem value='Hybrid'>Hybrid</MenuItem>
            </Select>

            <Button variant='contained' color='primary' onClick={search}>Search</Button>
            <Button variant='contained' color='secondary' onClick={reset}>Reset</Button>
        </Box>
    );
}