import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../components/NavBar/Navbar';
import Castle from '../images/castle.jpg';
import styled from 'styled-components';
import Box from "@mui/material/Box";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../components/MessageBoard/theme/theme';
import Header from '../components/MessageBoard/Header/index';
import MessageCard from '../components/MessageBoard/MessageCard';
import NewMessage from '../components/MessageBoard/NewMessage';
import EditMessage from '../components/MessageBoard/EditMessage/EditMessage';
import api from '../api/index';

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
`;

const MessageBoard = () => {
  const [newMessage, setNewMessage]= useState(false);
  const [editMessage, setEditMessage]= useState(false);
  const [theMessage, setMessages] = useState([]);
  const [elements, setElements] = useState(<></>);

  
  
  useEffect(() => {

    const getMessages = async() => {
      let messages = await api.getAllMessages()
        setMessages(messages.data)
        }
    

    getMessages()
  }, [])
  
  

  return (
    <>
      <Navbar />
      <Background>
        <ThemeProvider theme={theme}>
          <Header openNewMessage={() => setNewMessage(true)} />
          <NewMessage closeNewMessage={() => setNewMessage(false)} newMessage={newMessage} />
          <Box mb={3}>
            <Grid container justifyContent='center'>
              <Grid item xs={10}>
                {theMessage.map((msg)=>{
          return (<><MessageCard props={msg} openEditMessage={() => setEditMessage(true)}/>
          <EditMessage _id={msg._id} closeEditMessage={() => setEditMessage(false)} editMessage={editMessage}></EditMessage>
          </>)})}
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Background>
    </>
  )
}

export default MessageBoard;