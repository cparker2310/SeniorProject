import React from 'react';
import theme from '../ProfileCard/theme/theme';
import {useState} from 'react'
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



export const ProfileCard =  () => {
    //const classes= useStyles();
  const [user, setUser] = useState("");
  //setUser(sessionStorage.getItem('user'))
  
  const getUser = () =>{
    let u = sessionStorage.getItem('user')
    api.getUserById(u).then(user => {
      setUser(user.data.data)})
  }

  getUser();
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box p={8} sx={{width: 1290, height: 1200}} alignItems='center'>
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' color='#030000'>{user.firstName} {user.maidenName} {user.marriedName}</Typography>
                <Typography variant='h6' color='#a32738'>Class of {user.classYear}</Typography>
                <br />
                <Typography variant='h7' color='#030000'>Location</Typography>
                <br />
                <Typography variant='h8' color='#030000'>City: {user.currentCity} </Typography>
                <br />
                <Typography variant='h8' color='#030000'>State: {user.currentState}</Typography>
                <br />
                <br />
                <Typography variant='h8' color='#030000'>Education</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Name of Institution: {user.universityName}</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Degree Earned: {user.degree}</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Area of Study: {user.areaStudy}</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Graduation Year: {user.gradYear}</Typography>
                <br />
                <br />
                <Typography variant='h8' color='#030000'>Career</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Position: {user.position}</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Company Name: {user.companyName}</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Industry: {user.industry}</Typography>
                <br />
                <br />
                <Typography variant='h8' color='#030000'>Contact Information</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Phone: {user.phone}</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Email: {user.email2} </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' as="a" href='/editprofile'>Edit Profile</Button>
                <Button variant='contained' >Delete Profile</Button>
            </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
    </>
  );
}

export default ProfileCard;
