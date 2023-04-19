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



export default (props) => {
    
    
    
    const [message, setMessage] = useState("")
    const [messageDetails, setMessageDetails]= useState([]);
    const handleChange= event => {
        event.persist();
        //setMessageDetails(oldState => ({...oldState, [event.target.name] : event.target.value}));
        setMessage(event.target.value)
    }
    
    const handleSubmit= async() => {
        /*
        for (const field in messageDetails) {
            
            if (typeof messageDetails[field] === 'string' && !messageDetails[field])
                
             return;
        }

        if (!messageDetails.categories.length)             
        return;
        closeNewMessage();
        */
        const user = sessionStorage.getItem('user')
        if(!user){
            alert('You must be logged in to comment on this post')
            return
        }
        //props.comments.push([user, messageDetails])
        //const { comments} = messageDetails
        
        //setMessageDetails(messageDetails.push([user, message]))
        console.log(messageDetails)
        const comments = [user, message]
        const payload = {comments}
        console.log(payload)
          await api.updateMessageById(props.id, payload).then(res => {
            window.alert('Replied')
          })
          window.location.reload(true)

    }

    const closeNewComment= () => {
        setMessageDetails([]);
        props.closeNewComment();
    }
    return (
        <Dialog open={props.newComment} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Reply
                    <IconButton onClick={closeNewComment}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name='comments' autoComplete='off' placeholder='Add a Comment' disableUnderline fullWidth />
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
