import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
//import LinearProgress from '@mui/material/LinearProgress';

export default (props, onChange) => {
    const [searched, setSearched]= useState("");
    const [names, setNames]= useState(users);

    const cancelSearch= () => {
        setSearched("");
    };

    const filterNames= event => {
        const search= event.target.value.toLowerCase();
        const filterNames= users.filter(names => names.toLowerCase().includes(search));
        setNames(filterNames);
    }

    return (
        <Box py={10}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={6} md={3}>
                    <Box display='flex' justifyContent='center'>
                        <SearchBar 
                            fullWidth
                            value={searched} 
                            onCancelSearch={() => cancelSearch()}
                            onChange={(event) => filterNames(event)}
                        />
                        <ul>
                            {names.map(user => {
                                return <li key={user._id}>{user.firstName}</li>
                            })}
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}