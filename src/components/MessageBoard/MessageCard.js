import React, {useState} from 'react';
import ReplyCard from './ReplyMessage/ReplyCard';
import Box from "@mui/material/Box";
import { FaPaw } from 'react-icons/fa';
import { MdOutlineEditNote } from 'react-icons/md';
import { GiTrashCan } from 'react-icons/gi';
import { BiCommentDetail } from 'react-icons/bi';
import CloseIcon from '@mui/icons-material/Close';
import { 
    Button,
    Grid,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    makeStyles
} from '@material-ui/core';
import api from '../../api/index';


const useStyles= makeStyles((theme) => ({
    wrapper: {
        border: '1px solid #63625d',
        backgroundColor: '#fdfdfd',
        display: 'flex',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '.3s',

        '&:hover': {
            boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)',
            borderLeft: '6px solid #a32738'
        }
    },
    title: {
        fontSize: '13.5px',
        backgroundColor: theme.palette.primary.main,
        color: '#fdfdfd',
        padding: theme.spacing(0.75),
        borderRadius: '5px',
        display: 'inline-block',
        fontWeight: 600
    },
    categoryChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: '14.5px',
        borderRadius: '5px',
        transition: '.3s',
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: '#fdfdfd'
    },
    edit: {
        maxHeight: '30px',
        maxWidth: '30px'
    }
}));

export default function MessageCard({props, openEditMessage, openComment}){
    const classes= useStyles();
    const categories= props.categories
    const element = sessionStorage.getItem('user') === props.author_id || props.isAdmin ? <GiTrashCan /> : <></>
    const element2 = sessionStorage.getItem('user') === props.author_id || props.isAdmin ?<MdOutlineEditNote/> : <></>
    const [messageDescription, setMessageDescription]= useState("");
    const [openMessageDetails, setOpenMessageDetails]= useState(false);
    const handleDelete = async () => {
        if(window.confirm("Are you sure you want to delete this message board post?")){
            await api.deleteMessageById(props._id).then(res => {
                
            })
            window.location.reload(true);
        }
    }

    const closeViewMessage= () => {
        setOpenMessageDetails(false);
    }

    const viewDetails= async () => {
        const response= await api.getMessageById(props._id);
        setMessageDescription(response.description);
        setOpenMessageDetails(true);
    }

    return (
        <>
        <Box p={2} className={classes.wrapper}>
            <Grid container>
                <Grid item xs alignItems='center'>
                    <Typography variant='subtitle1'>{props.title}</Typography>
                </Grid>
                <Grid item container xs>
                    {categories.map(category => <Grid key={category} className={classes.categoryChip} style={{height: '35px'}} item>{category}</Grid>)}
                </Grid>
                <Grid item container direction='column' alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant='caption'> {props.type} | {props.location}</Typography>
                    </Grid>
                    <Grid item>
                        <Box mt={2}>
                            <IconButton style={{marginRight: '-21px'}} onClick={openComment}> <BiCommentDetail /> </IconButton>
                            <IconButton style={{marginRight: '-21px'}} onClick={openEditMessage}> {element2} </IconButton>
                            <IconButton onClick={handleDelete}>{element}</IconButton>
                            <Button style={{backgroundColor: '#63625d', color: '#fdfdfd'}} onClick={viewDetails}>View Details <FaPaw /></Button>
                            <Dialog open={openMessageDetails} close={closeViewMessage} style={{ height: '1200px', width: '1200px', margin: 'auto'}}>
                                <IconButton onClick={closeViewMessage}>
                                    <CloseIcon style={{ position: 'absolute', top: 8, right: 8 }} />
                                </IconButton>
                                    <DialogTitle> 
                                        <Typography variant='h5' fontWeight='bold'>{props.title}</Typography>
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText style={{color: '#60000d', fontWeight: 'bold'}}>Categories: {props.categories}</DialogContentText>
                                    </DialogContent>
                                    <DialogContent>
                                        <DialogContentText>Posted By: {props.author_id}</DialogContentText>
                                    </DialogContent>
                                    <DialogContent>
                                        <DialogContentText>Description: {props.description}</DialogContentText>
                                    </DialogContent>
                                </Dialog>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
       {/*<Box p={2}>
            <ReplyCard />
    </Box>*/}
        </>
    );
}