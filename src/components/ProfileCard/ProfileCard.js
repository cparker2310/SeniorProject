import React from 'react';
import theme from '../ProfileCard/theme/theme';
import { FaPaw } from 'react-icons/fa';
import { useState } from 'react';
import { 
    Box, 
    Card, 
    CardContent,
    Typography,
    CardActions,
    Button,
    ThemeProvider
    /* CardMedia - Use for Profile Picture */
} from '@mui/material';
import api from '../../api/index';



export default ({props, openEdit}) => {
    //const classes= useStyles();
  let u = sessionStorage.getItem('user')
  const show = u === props._id;


  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete your profile?")){

      await api.deleteUserById(props._id).then(res => {
        sessionStorage.clear()
        window.location.href = '/';
      })
    }
}
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box p={8} sx={{width: 1290, height: 1500}} alignItems='center'>
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h4' component='div' color='#030000'>{props.firstName} {props.maidenName} {props.marriedName}</Typography>
                <Typography variant='h4' color='#a32738'>Class of {props.classYear}</Typography>
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Location</Typography>
                <br />
                <Typography variant='h6' color='#030000'>City: {props.currentCity} </Typography>
                <br />
                <Typography variant='h6' color='#030000'>State: {props.currentState}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Education</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Name of Institution: {props.universityName}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Degree Earned: {props.degree}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Area of Study: {props.areaStudy}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Graduation Year: {props.gradYear}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Career</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Position: {props.position}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Company Name: {props.companyName}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Industry: {props.industry}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Contact Information</Typography>
                <br />
                <Typography variant='h5' color='#030000'>Phone: {props.phone}</Typography>
                <br />
                <Typography variant='h5' color='#030000'>Email: {props.email2} </Typography>
            </CardContent>
            <CardActions style={{justifyContent: "center"}}>
            {show && <><Button variant='contained' onClick={openEdit} style={{ fontWeight: "bold" }}>Edit Profile <FaPaw /></Button>
            <Button variant='contained' style={{ fontWeight: "bold" }} onClick={handleDelete}>Delete Profile <FaPaw /></Button> </>
            }
            </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
    </>
  );
}
