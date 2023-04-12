import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { Grid } from '@material-ui/core';
import api from '../../../api/index';
import UserCard from '../UserCard/UserCard';
import Filter from '../Filter/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactSpinner from 'react-bootstrap-spinner';
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

export default function SearchUser({ props }) {
  const classes= useStyles();
    const [searched, setSearched]= useState("");
    const [users, setUsers]= useState([]);
    const [userSearch, setUserSearch]= useState({
      years: ''
  });
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
    const filterUsers= async(filterSettings) => {
      console.log(filterSettings)
      
      if (!filterSettings || filterSettings.years === "") {
          await api.getAllUsers().then((response) => {
            setSearchedUsers(response.data);
          });
      }
    
      else {
          await api.getAllUsers().then((response) => {
              const filteredYears= response.data.filter(
                  (users) => users.classYear=== filterSettings.years
              );
              setSearchedUsers(filteredYears);
          })
      }
  }
  const [classYears, setClassYears] = useState([]);

    

    useEffect(() => {
        const getClassYears= async () => {
            const response= await api.getAllUsers();
            const years= response.data.map(user => user.classYear);
            let allYears= Array.from(new Set(years));
            allYears = allYears.reverse()
            setClassYears(allYears);
        };
        getClassYears();
    }, []);
  
  
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

    const reset= async () => {
      setUserSearch({years: ''});
      await filterUsers({years: ''});
  }


  const handleChange= event => {
      event.persist();
      setUserSearch(oldState => ({...oldState, [event.target.name] : event.target.value}));
      //console.log(userSearch)
  }

    return (
      <InfiniteScroll
        dataLength={searchedUsers.length} 
        next={() => setPage(page+1)} 
        hasMore={true}
        loader={<ReactSpinner animation="border" role="status" color="#a32738" />}
      >
        <Box py={10}>
        <Box p={1} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} name='years' value={userSearch.years} disableUnderline variant='filled'>
                {classYears.map(year=> <MenuItem key={year} value={year}>{year}</MenuItem>)}
            </Select>
            <Button variant='contained' color='primary' onClick={() => filterUsers(userSearch)}>Filter</Button>
            <Button variant='contained' color='secondary' onClick={reset}>Reset</Button>
        </Box>
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
