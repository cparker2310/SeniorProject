import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
import api from '../../../api/index';

export default (props, onChange) => {
    const [searched, setSearched]= useState("");
    const [users, setUsers]= useState([]);
    const [searchedUsers, setSearchedUsers]= useState([]);

    useEffect(() => {
        const searchUsers= async () => {
            const result = await api.getAllUsers();
            setUsers(result.data.data);
            setSearchedUsers(result.data.data);
        };
        searchUsers();
    }, []);

    const cancelSearch = () => {
        setSearched("");
        setSearchedUsers(users);
    };

    const searchNames= (event) => {
        const search= event.toLowerCase();
        const searchedNames= users.filter((user) =>
            user.firstName.toLowerCase().includes(search)
        );
        setSearchedUsers(searchedNames);
    };

    return (
        <Box py={10}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={6} md={3}>
                    <Box display='flex' justifyContent='center'>
                        <SearchBar 
                            fullWidth
                            value={searched} 
                            onCancelSearch={() => cancelSearch()}
                            onChange={(event) => searchNames(event)}
                        />
                    </Box>
                </Grid>
            </Grid>
            <ul>
                {searchedUsers.map((user) => {
                    return <li key={user._id}>{user.firstName}</li>;
                })}
            </ul>
        </Box>
    );
};
