import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
import { getUsers, getUserBySearch } from '../actions/users';
/*function useQuery() {
    return new URLSearchParams(useLocation().search);
}*/

export default (props) => {
    const [profiles, setProfiles]= useState(/*{originalProfiles}*/);
    const [searched, setSearched]= useState("");
    const query= useQuery();
    //const history= useHistory();
    const searchQuery= query.get('searchQuery');

    /*const requestSearch= (searchValue= String) => {
        const filteredProfiles= originalProfiles.filter(profile => {
            return profile.firstName.toLowerCase().includes(searchValue.toLowerCase())
        });
        setProfiles(filteredProfiles);
    };*/

    useEffect(() => {
        dispatch(getUsers());
    }, [userId], dispatch);

   const handleKeyPress= (e) => {
        if (e.keyCode== 13) {
            requestSearch();
        }
    }

    const requestSearch= () => {
        if (searched.trim()) {
            dispatch(getUserBySearch({ searched }));
        } else {
            cancelSearch();
        }
    };

    const cancelSearch= () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Box py={10}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={6} md={3}>
                    <Box display='flex' justifyContent='center'>
                        <SearchBar 
                            fullWidth
                            onKeyPress={handleKeyPress}
                            value={searched} 
                            onChange={(e) => setSearched(e.target.value)}
                            onCancelSearch={() => cancelSearch()}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}