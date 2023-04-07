import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { FaPaw } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import { 
    Button,
    Grid,
    FilledInput,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    makeStyles
} from '@material-ui/core';
import api from '../../../api/index';

const useStyles= makeStyles(theme => ({
    categoryChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: '14.5px',
        borderRadius: '5px',
        transition: '.3s',
        fontWeight: 600,
        border: '.5px solid #60000d',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fdfdfd'
        },
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fdfdfd'  
    }
}));

const initState= {
    author_id: sessionStorage.getItem('user'),
    dateCreated: Date.now,
    title: "",
    description: "",
    categories: [],
    comments: []   
}

export default (props) => {
    const classes= useStyles();
    const [messageDetails, setMessageDetails]= useState(initState);
    

    const handleChange= event => {
        event.persist();
        setMessageDetails(oldState => ({...oldState, [event.target.name] : event.target.value}));
    }
    
    const handleSubmit= async() => {
        for (const field in messageDetails) {
            
            if (typeof messageDetails[field] === 'string' && !messageDetails[field])
                
             return;
        }

        if (!messageDetails.categories.length)             
        return;
        closeNewMessage();

        if(!sessionStorage.getItem('user')){
            alert('You must be logged in to comment on this post')
            return
        }
        const { author_id, dateCreated, comments} = messageDetails
      
        const payload = { author_id, dateCreated, comments}
            
          await api.insertMessage(payload).then(res => {
            //window.alert('Job Created')
          })
          window.location.reload(true)

    }

    const closeNewMessage= () => {
        setMessageDetails(initState);
        props.closeNewMessage();
    }
    
    return (
        <Dialog open={props.newMessage} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Reply
                    <IconButton onClick={closeNewMessage}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name='comments' value={messageDetails.comments} autoComplete='off' placeholder='Add a Comment' disableUnderline fullWidth />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box alignItems='center' color='#60000d' width='100%' display='flex' justifyContent='space-between'>
                    <Button variant='contained' color='primary' onClick={handleSubmit}>Submit <FaPaw /></Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}
