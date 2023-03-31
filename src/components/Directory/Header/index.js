import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
import { getUsers, getUserBySearch } from '../actions/users';

export default (props) => {
    const [searched, setSearched]= useState("");
    /*const query= useQuery();
    const navigate= useNavigate();
    const searchQuery= query.get('searchQuery');

    useEffect(() => {
        dispatch(getUsers());
    }, [userId], dispatch);

   const handleKeyPress= (e) => {
        if (e.keyCode== 13) {
            requestSearch();
        }
    }*/

    const requestSearch= () => {
        /*if (searched.trim()) {
            dispatch(getUserBySearch({ searched }));
            navigate.push(`/users/search?searchQuery=${searched || 'none'}`);
        } else {
            navigate.push('/directory');
        }*/
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
                            //onKeyPress={handleKeyPress}
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