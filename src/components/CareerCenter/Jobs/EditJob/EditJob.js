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

export default (props) => {
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
    }

    const closeEditJob= () => {
        setEditJobDetails(initState);
        props.closeEditJob();
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
        <Dialog open={props.editJob} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Edit Job
                    <IconButton onClick={closeEditJob}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='title' value={editJobDetails.title} autoComplete='off' placeholder='Job Title *' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <Select onChange={handleChange} name='type' value={editJobDetails.type} fullWidth disableUnderline variant='filled'>
                            <MenuItem value='Full Time'>Full Time</MenuItem>
                            <MenuItem value='Part Time'>Part Time</MenuItem>
                            <MenuItem value='Internship'>Internship</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='companyName' value={editJobDetails.companyName} autoComplete='off' placeholder='Company Name *' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='contactName' value={editJobDetails.contactName} autoComplete='off' placeholder='Your Name *' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <Select onChange={handleChange} name='location' value={editJobDetails.location} fullWidth disableUnderline variant='filled'>
                            <MenuItem value='Onsite'>Onsite</MenuItem>
                            <MenuItem value='Remote'>Remote</MenuItem>
                            <MenuItem value='Remote'>Hybrid</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name='contactInfo' value={editJobDetails.contactInfo} autoComplete='off' placeholder='Your Email or Phone *' disableUnderline fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name='description' value={editJobDetails.description} autoComplete='off' placeholder='Description *' disableUnderline fullWidth multiline rows={4}/>
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