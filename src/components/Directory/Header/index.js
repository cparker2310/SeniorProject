import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
import appStore from '../appStore';
import LinearProgress from '@mui/material/LinearProgress';

export default (props) => {
    const [searched, setSearched]= useState("");

    const cancelSearch= () => {
        setSearched("");
    };

    return (
        <Box py={10}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={6} md={3}>
                    <Box display='flex' justifyContent='center'>
                        <SearchBar 
                            fullWidth
                            value={searched} 
                            onRequestSearch={appStore.getAllUsers}
                            onCancelSearch={() => cancelSearch()}
                            placeholder="Search"
                        />
                        {appStore.isLoading && <LinearProgress color="#a32738" />}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}