import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../../components/Directory/theme/theme';
import Header from '../../components/Directory/Header';
import Filter from '../../components/Directory/Filter';
import UserCard from '../../components/Directory/UserCard/UserCard';
import api from '../../api/index';

const Directory = () => {

  const [users, setUsers] = useState([]);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.getAllUsers();
      const fetchedUsers = response.data.data;
      setUsers(fetchedUsers);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const generateElements = () => {
      const rows = [];

      for (let i = 0; i < users.length; i += 3) {
        const row = [];

        for (let j = i; j < i + 3 && j < users.length; j++) {
          row.push(
            <Grid item xs={4} key={users[j]._id}>
              <UserCard props={users[j]} />
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
  }, [users]);

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Filter />
            {elements}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Directory;