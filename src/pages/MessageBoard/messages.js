import React, { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Castle from '../../images/castle.jpg';
import styled from 'styled-components';
import Box from "@mui/material/Box";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from '../../components/MessageBoard/theme/theme';
import Header from '../../components/MessageBoard/Header/index';
import MessageCard from '../../components/MessageBoard/MessageCard';
import NewMessage from '../../components/MessageBoard/NewMessage';
import EditMessage from '../../components/MessageBoard/EditMessage/EditMessage';
import ReplyMessage from '../../components/MessageBoard/ReplyMessage/ReplyMessage';
import Footer from '../../components/Footer/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TailSpin } from  'react-loader-spinner';
import api from '../../api/index';

const Background= styled.section`
    background-image: url(${Castle});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    overflow: scroll;
`;

const MessageBoard = () => {
  const [newMessage, setNewMessage]= useState(false);
  const [newComment, setNewComment]= useState(false);
  const [editMessage, setEditMessage]= useState(false);
  const [theMessage, setMessages] = useState([]);
  const [elements, setElements] = useState(<></>);
  const [page, setPage]= useState(1);

  
  
  useEffect(() => {

    const getMessages = async() => {
      let messages = await api.getAllMessages()
        setMessages(messages.data)
        }
    

    getMessages()
  }, [])

  const getNextMessages= async () => {
    const nextPage= page+1;
    await api.getAllMessages(nextPage).then((response) => {
      const nextMessages= response.data.filter((theMessage) => !messageAlreadyPosted(theMessage, theMessage));
      setMessages([...theMessage, ...nextMessages]);
      setPage(nextPage);
    });
};
  
const messageAlreadyPosted= (theMessage, messages) => {
    return messages.some((m) => m._id=== theMessage._id);
};

useEffect(() => {
  const generateElements = () => {
    const rows = [];

    for (let i = 0; i < elements.length; i += 2) {
      const row = [];

      for (let j = i; j < i + 2 && j < elements.length; j++) {
        row.push(
          <Grid item xs={4} key={elements[j]._id}>
            <MessageCard props={elements[j]} />
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
}, []);
  
  return (
    <>
      <Navbar />
      <Background>
        <ThemeProvider theme={theme}>
          <Header openNewMessage={() => setNewMessage(true)} />
          <NewMessage closeNewMessage={() => setNewMessage(false)} newMessage={newMessage} />
          <ReplyMessage closeNewComment={() => setNewComment(false)} newComment={newComment} />
          <Box mb={3}>
            <Grid container justifyContent='center'>
              <Grid item xs={10}>
              <InfiniteScroll
                    dataLength={theMessage.length} 
                    next={getNextMessages} 
                    hasMore={true}
                    loader={<TailSpin
                      height="30"
                      width="30"
                      color="#a32738"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      alignItems="center"
                    />}
                >
                {theMessage.map((msg)=>{
          return (<><MessageCard props={msg} openEditMessage={() => setEditMessage(true)} openComment={() => setNewComment(true)}/>
          <EditMessage _id={msg._id} closeEditMessage={() => setEditMessage(false)} editMessage={editMessage}></EditMessage>
          <ReplyMessage closeNewComment={() => setNewComment(false)} newComment={newComment} id={msg._id} message={msg} />
          </>)})}
          </InfiniteScroll>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
        <Footer />
      </Background>
    </>
  )
}

export default MessageBoard;
