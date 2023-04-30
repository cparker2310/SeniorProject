import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { FaPaw } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import api from '../../../../api/index'
import { 
    Button,
    Typography,
    Grid,
    FilledInput,
    Select,
    MenuItem,
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
    title: "",
    type: "",
    companyName: "",
    location: "",
    contactName: "",
    contactInfo: "",
    description: "",
    isAvailable: false,
    categories: []   
}

export default ({props, index, closeEditJob, editJob}) => {
    console.log(props)
    const classes= useStyles();
    const [editJobDetails, setEditJobDetails]= useState(initState);

    const handleChange= event => {
        event.persist();
        setEditJobDetails(oldState => ({...oldState, [event.target.name] : event.target.value}));
    }

    const addRemoveCategory= category => editJobDetails.categories.includes(category)
        ? setEditJobDetails(oldState => ({...oldState, categories: oldState.categories.filter(c => c != category),
            }))
        : setEditJobDetails(oldState => ({...oldState, categories: oldState.categories.concat(category)
        }));
    
    const handleSubmit= async() => {

        const { title, type, companyName, location, contactName,
            contactInfo, description, isAvailable, categories} = editJobDetails
        
          const payload = { title, type, companyName, location, contactName,
            contactInfo, description, isAvailable, categories}
    
        await api.updateJobById(props._id, payload).then(res => {
            alert(`Job updated successfully`)
        })
        closeEditJob()
    }

    const callCloseEditJob= () => {
        setEditJobDetails(initState);
        closeEditJob();
    }

    const categories= [
        "Medical",
        "STEM",
        "Education",
        "Business",
        "Arts",
        "Legal",
        "Government"
    ];

    return (
        <Dialog open={editJob} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Edit Job
                    <IconButton onClick={callCloseEditJob}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} placeholder={props.title || 'Job Title *'} name='title' value={editJobDetails.title} autoComplete='off'  disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <Select onChange={handleChange} name='type' value={editJobDetails.type} fullWidth disableUnderline variant='filled'>
                            <MenuItem value='Full Time'>Full Time</MenuItem>
                            <MenuItem value='Part Time'>Part Time</MenuItem>
                            <MenuItem value='Internship'>Internship</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='companyName' placeholder={props.companyName || 'Company Name *'} value={editJobDetails.companyName} autoComplete='off' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='contactName' placeholder={props.contactName || 'Your Name *'} value={editJobDetails.contactName} autoComplete='off' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <Select onChange={handleChange} name='location' value={editJobDetails.location} fullWidth disableUnderline variant='filled'>
                            <MenuItem value='Onsite'>Onsite</MenuItem>
                            <MenuItem value='Remote'>Remote</MenuItem>
                            <MenuItem value='Remote'>Hybrid</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='contactInfo' placeholder={props.contactInfo || 'Your Email or Phone *'} value={editJobDetails.contactInfo} autoComplete='off' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name='description' placeholder={props.description || 'Description *'} value={editJobDetails.description} autoComplete='off' disableUnderline fullWidth multiline rows={4}/>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Categories *</Typography>
                    <Box display='flex'>
                        {categories.map(category => <Box onClick={() => addRemoveCategory(category)} className={`${classes.categoryChip} ${editJobDetails.categories.includes(category) && classes.included}`} key={category}>{category}</Box>)}
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