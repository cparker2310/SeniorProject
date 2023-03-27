import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default (props) => {
    const [profiles, setProfiles]= useState(/*{originalProfiles}*/);
    const [searched, setSearched]= useState("");
    const query= useQuery();
    const history= useHistory();
    const searchQuery= query.get('searchQuery');

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
                <Grid item xs={12} sm={6} md={9}>
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