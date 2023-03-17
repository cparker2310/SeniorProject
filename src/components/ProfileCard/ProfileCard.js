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



export default (props) => {
    //const classes= useStyles();
  const [user, setUser] = useState({});
  let u = sessionStorage.getItem('user')
  
    api.getUserById(u).then(user => {
      setUser(user.data.data)})

  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete your profile?")){

      await api.deleteUserById(user._id).then(res => {
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
                <Typography gutterBottom variant='h4' component='div' color='#030000'>{user.firstName} {user.maidenName} {user.marriedName}</Typography>
                <Typography variant='h4' color='#a32738'>Class of {user.classYear}</Typography>
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Location</Typography>
                <br />
                <Typography variant='h6' color='#030000'>City: {user.currentCity} </Typography>
                <br />
                <Typography variant='h6' color='#030000'>State: {user.currentState}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Education</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Name of Institution: {user.universityName}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Degree Earned: {user.degree}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Area of Study: {user.areaStudy}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Graduation Year: {user.gradYear}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Career</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Position: {user.position}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Company Name: {user.companyName}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Industry: {user.industry}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#030000' style={{fontWeight: "bold"}}>Contact Information</Typography>
                <br />
                <Typography variant='h5' color='#030000'>Phone: {user.phone}</Typography>
                <br />
                <Typography variant='h5' color='#030000'>Email: {user.email2} </Typography>
            </CardContent>
            <CardActions style={{justifyContent: "center"}}>
                <Button variant='contained' onClick={props.openEdit} style={{fontWeight: "bold"}}>Edit Profile <FaPaw /></Button>
                <Button variant='contained' style={{fontWeight: "bold"}} onClick={handleDelete}>Delete Profile <FaPaw /></Button>
            </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
    </>
  );
}
