import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';

export default (props) => {
    const [profiles, setProfiles]= useState(/*{originalProfiles}*/);
    const [searched, setSearched]= useState("");

    /*const requestSearch= (searchValue= String) => {
        const filteredProfiles= originalProfiles.filter(profile => {
            return profile.firstName.toLowerCase().includes(searchValue.toLowerCase())
        });
        setProfiles(filteredProfiles);
    };*/

    const requestSearch= () => {};

    const cancelSearch= () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Box py={10}>
            <Grid container justifyContent='center'>
                <Grid item xs={10}>
                    <Box display='flex' justifyContent='center'>
                        <SearchBar 
                            value={searched} 
                            onChange={(searchValue) => requestSearch(searchValue)}
                            onCancelSearch={() => cancelSearch()}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}