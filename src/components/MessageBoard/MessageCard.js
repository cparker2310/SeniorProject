import React, {useState} from 'react';
import ReplyCard from './ReplyMessage/ReplyCard';
import Box from "@mui/material/Box";
import { FaPaw } from 'react-icons/fa';
import { MdOutlineEditNote } from 'react-icons/md';
import { GiTrashCan } from 'react-icons/gi';
import { BiCommentDetail } from 'react-icons/bi';
import CloseIcon from '@mui/icons-material/Close';
import TestImg from '../../images/testimagemessage.jpg';
import api from '../../api/index';
import { 
    Button,
    Grid,
    Typography,
    IconButton,
    Dialog,
    DialogContent,
    DialogContentText,
    makeStyles
} from '@material-ui/core';

const useStyles= makeStyles((theme) => ({
    wrapper: {
        border: '1px solid #63625d',
        spacing: 8,
        backgroundColor: '#fdfdfd',
        display: 'flex',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '.3s',
        margin: theme.spacing(2),

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

export default function MessageCard({props, openEditMessage, openComment}) {
    const classes= useStyles();
    const categories= props.categories
    const element = sessionStorage.getItem('user') === props.author_id || props.isAdmin ? <GiTrashCan /> : <></>
    const element2 = sessionStorage.getItem('user') === props.author_id || props.isAdmin ?<MdOutlineEditNote/> : <></>
    const [user, setUser] = useState({})
    const [openMessageDetails, setOpenMessageDetails]= useState(false);
    const [comments, setComments] = useState([]);

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
        const message= await api.getMessageById(props._id);
        const u = await api.getUserById(props.author_id);
        setComments(message.comments);
        setUser(u.data);
        setOpenMessageDetails(true);
      }

      return (
        <>
            <Box p={2} className={classes.wrapper} width={600} height={700}>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} sm={6}>
                        <Box display='flex' alignItems='center' justifyContent='center' mb={2}>
                            <img src={TestImg} alt='Image' width={350} height={350} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} justifyContent='center'>
                        <Typography style={{fontWeight: 'bold'}} variant='subtitle1'>{props.title}</Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        {categories.map(category => <Grid key={category} className={classes.categoryChip} style={{height: '35px'}} item>{category}</Grid>)}
                    </Grid>
                    <Grid item xs={12} justifyContent='center'>
                        <Typography variant='subtitle1'>{props.description}</Typography>
                    </Grid>
                    <Grid item container direction='column' alignItems='flex-end' xs>
                        <Grid item>
                            <Box mt={2}>
                                <IconButton style={{marginRight: '-10px'}} onClick={openComment}> <BiCommentDetail /> </IconButton>
                                { (sessionStorage.getItem('user') === props.author_id || props.isAdmin) &&
                                <><IconButton style={{marginRight: '-21px'}} onClick={openEditMessage}> <MdOutlineEditNote/> </IconButton>
                                <IconButton onClick={handleDelete}><GiTrashCan /></IconButton></>}
                                <Button style={{backgroundColor: '#a32738', color: '#fdfdfd'}} onClick={viewDetails}>View Comments <FaPaw /></Button>
                                <Dialog open={openMessageDetails} close={closeViewMessage} style={{ height: '1200px', width: '1200px', margin: 'auto'}}>
                                    <IconButton onClick={closeViewMessage}>
                                        <CloseIcon style={{ position: 'absolute', top: 8, right: 8 }} />
                                    </IconButton>
                                        <DialogContent>
                                            <DialogContentText>{props.comments}</DialogContentText>
                                        </DialogContent>
                                        <DialogContent>
                                            <DialogContentText>Posted By: {user.firstName} {user.maidenName} {user.marriedName}</DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}