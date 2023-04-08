import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
import api from '../../../api/index';
import UserCard from '../UserCard/UserCard';
import Filter from '../Filter/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactSpinner from 'react-bootstrap-spinner';

export default function SearchUser({ props }) {
    const [searched, setSearched]= useState("");
    const [users, setUsers]= useState([]);
    const [searchedUsers, setSearchedUsers]= useState([]);
    const [page, setPage]= useState(1);

    useEffect(() => {
        const searchUsers= async () => {
            const result = await api.getAllUsers();
            setUsers(result.data);
            setSearchedUsers(result.data);
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
            user.firstName.toLowerCase().includes(search) || user.maidenName.toLowerCase().includes(search) || user.marriedName.toLowerCase().includes(search)
        );
        setSearchedUsers(searchedNames);
    };

    const [elements, setElements] = useState([]);
    /*
    useEffect(() => {
      const getUsers = async () => {
        const response = await api.getAllUsers();
        const fetchedUsers = response.data;
        setUsers(fetchedUsers);
      };
  
      getUsers();
    }, []);*/
  
    useEffect(() => {
      const generateElements = () => {
        const rows = [];
  
        for (let i = 0; i < searchedUsers.length; i += 3) {
          const row = [];
  
          for (let j = i; j < i + 3 && j < searchedUsers.length; j++) {
            row.push(
              <Grid item xs={4} key={searchedUsers[j]._id}>
                <UserCard props={searchedUsers[j]} />
              </Grid>
            );
          }
  
          rows.push(
            <Grid container spacing={4} key={i} justifyContent="center">
              {row}
            </Grid>
          );
        }
  
        setElements(rows);
      };
  
      generateElements();
    }, [searchedUsers]);

    return (
      <InfiniteScroll
        dataLength={searchedUsers.length} 
        next={() => setPage(page+1)} 
        hasMore={true}
        loader={<ReactSpinner animation="border" role="status" color="#a32738" />}
      >
        <Box py={10}>
         <Filter />
        <Grid container justifyContent='center'>
            <Grid item xs={12} sm={6} md={3}>
                <Box display='flex' justifyContent='center'>
                    <SearchBar 
                        value={searched} 
                        onCancelSearch={() => cancelSearch()}
                        onChange={(event) => searchNames(event)}
                        style={{ width:  '2000px' }}
                    />
                </Box>
            </Grid>
        </Grid>
            <Box py={4}>
                <Grid container justifyContent='center' alignItems='center' spacing={4} style={{ marginLeft: '45px'}}>
                {searchedUsers.map((user) => {
                    return (
                    <Grid item xs={12} sm={6} md={4} key={user._id}>
                        <UserCard props={user}/>
                    </Grid>
                    );
                })}
                </Grid>
            </Box>
        </Box>
        </InfiniteScroll>
    );
};
