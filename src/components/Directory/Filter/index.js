import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import { 
    Button,
    Select,
    MenuItem,
    makeStyles
} from '@material-ui/core';
import api from '../../../api/index';

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
    
    const [users, setUsers]= useState([]);
    const [classYears, setClassYears] = useState([]);

    const [userSearch, setUserSearch]= useState({
        years: '2022'
    });

    useEffect(() => {
        const getClassYears= async () => {
            const response= await api.getAllUsers();
            const years= response.data.map(user => user.classYear);
            const allYears= Array.from(new Set(years));
            setClassYears(allYears);//setClassYears(years.sort((a, b) => b-a));
        };
        getClassYears();
    }, []);

    const filterUsers= async(filterSettings) => {
        await api.getAllUsers().then((response) => {
            const filteredYears= response.data.filter(
                (users) => users.classYear=== filterSettings.classYear
            );
            setUsers(filteredYears);
        })
    }


    const handleChange= event => {
        event.persist();
        setUserSearch(oldState => ({...oldState, [event.target.name] : event.target.value}));
    }

    return (
        <Box p={1} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} name='years' value={userSearch.years} disableUnderline variant='filled'>
                {classYears.map(year=> <MenuItem key={year} value={year}>{year}</MenuItem>)}
            </Select>
            <Button variant='contained' color='primary' onClick={filterUsers}>Filter</Button>
        </Box>
    );
}