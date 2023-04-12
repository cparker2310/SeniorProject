import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import { 
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core';
import api from '../../../api/index';

const useStyles= makeStyles(theme => ({
    commentBox: {
        padding: theme.spacing(1),
        borderRadius: '5px',
        transition: '.3s',
        fontWeight: 600,
        border: '.5px solid #60000d',
        cursor: 'pointer',
        backgroundColor: '#fdfdfd'
    },
    author: {
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    },
    comment: {
        fontSize: '11.5px',
        lineHeight: 1.2
    }
}));

export default (props) => {
    const classes= useStyles();
    const [comments, setComments]= useState([]);
  
    useEffect(() => {
        async function getComments() {
            const response= await api.getMessageById(props.id);
            if (response && response.comments) {
                setComments(response.comments);
            }
        }
        getComments();
    }, []);

    if(!sessionStorage.getItem('user')){
        alert('You must be logged in to post a comment')
        return
    }

   /* const { author_id, dateCreated, title, categories, description, comments} = comments
    const payload = { author_id, dateCreated, title, categories, description, comments}
        
      await api.insertMessage(payload).then(res => {
        //window.alert('Job Created')
      })
      window.location.reload(true)*/
    
    return (
        <>
            {comments.map((comment) => (
                <Box key={comment.id} className={classes.commentBox}>
                    <Grid container>
                        <Grid item className={classes.author}>
                            <Typography></Typography>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography className={classes.comment}>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </>
    );
         
}
