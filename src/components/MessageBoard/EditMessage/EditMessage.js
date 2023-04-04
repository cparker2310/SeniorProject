import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { FaPaw } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import api from '../../../api/index';
import { 
    Button,
    Typography,
    Grid,
    FilledInput,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    makeStyles
} from '@material-ui/core';

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
    dateCreated: "",
    title: "",
    description: "",
    categories: [],
    comments: []   
}

export default (props) => {
    const classes= useStyles();
    const [editMessageDetails, setEditMessageDetails]= useState(initState);

    const handleChange= event => {
        event.persist();
        setEditMessageDetails(oldState => ({...oldState, [event.target.name] : event.target.value}));
    }

    const addRemoveCategory= category => editMessageDetails.categories.includes(category)
        ? setEditMessageDetails(oldState => ({...oldState, categories: oldState.categories.filter(c => c != category),
            }))
        : setEditMessageDetails(oldState => ({...oldState, categories: oldState.categories.concat(category)
        }));
    
    const handleSubmit= async() => {

       const { author_id, dateCreated, title, categories, description, comments }= editMessageDetails
      
          const payload = { author_id, dateCreated, title, categories, description, comments }
    
        await api.updateMessageById(props._id, payload).then(res => {
            alert(`Message updated successfully`)
        })
    }

    const closeEditMessage= () => {
        setEditMessageDetails(initState);
        props.closeEditMessage();
    }

    const categories= [
        "Events",
        "Life Updates",
        "News",
        "Memories",
        "Reunions"
    ];

    return (
        <Dialog open={props.editMessage} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Edit Message
                    <IconButton onClick={closeEditMessage}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='title' value={editMessageDetails.title} autoComplete='off' placeholder='Message Title *' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name='description' value={editMessageDetails.description} autoComplete='off' placeholder='Description *' disableUnderline fullWidth/>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Categories *</Typography>
                    <Box display='flex'>
                        {categories.map(category => <Box onClick={() => addRemoveCategory(category)} className={`${classes.categoryChip} ${editMessageDetails.categories.includes(category) && classes.included}`} key={category}>{category}</Box>)}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box alignItems='center' color='#60000d' width='100%' display='flex' justifyContent='space-between'>
                    <Typography variant='caption'>*Required Fields</Typography>
                    <Button variant='contained' color='primary' onClick={handleSubmit}>Submit <FaPaw /></Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}