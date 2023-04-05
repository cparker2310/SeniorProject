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
        width: '800px',
        marginLeft: '320px',
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

export default props => {
    const classes= useStyles();
    
    const [userSearch, setUserSearch]= useState({
        years: '2022'
    });


    const handleChange= event => {
        event.persist();
        setUserSearch(oldState => ({...oldState, [event.target.name] : event.target.value}));
    }

    return (
        <Box p={1} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} name='years' value={userSearch.type} disableUnderline variant='filled'>
                <MenuItem value='2022'>2022</MenuItem>
                <MenuItem value='2021'>2021</MenuItem> 
                <MenuItem value='2020'>2020</MenuItem>
            </Select>
            <Button variant='contained' color='primary'>Filter</Button>
        </Box>
    );
}