import React from 'react';
import { 
    Box, 
    Card, 
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles
    /* CardMedia - Use for Profile Picture */
} from '@mui/material';


/*const useStyles= makeStyles({
    wrapper: {
        border: '1px solid #63625d',
        backgroundColor: '#fdfdfd',
        display: 'flex',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '.3s',
        alignItems: 'center'
    }
});*/

export const ProfileCard = () => {
    //const classes= useStyles();

  return (
    <>
      <Box width='500px' p={2}>
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' color='#030000'>FirstName MaidenName MarriedName</Typography>
                <Typography variant='h6' color='#a32738'>Class of 20XX</Typography>
                <br />
                <Typography variant='h7' color='#030000'>Loaction</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Current City: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Current State: </Typography>
                <br />
                <br />
                <Typography variant='h8' color='#030000'>Education</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Name of Institution: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Degree Earned: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Area of Study: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Graduation Year: </Typography>
                <br />
                <br />
                <Typography variant='h8' color='#030000'>Career</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Position: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Company Name: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Industry: </Typography>
                <br />
                <br />
                <Typography variant='h8' color='#030000'>Contact Information</Typography>
                <br />
                <Typography variant='h8' color='#030000'>Phone: </Typography>
                <br />
                <Typography variant='h8' color='#030000'>Email: </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained'>Edit Profile</Button>
                <Button variant='contained'>Delete Profile</Button>
            </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default ProfileCard;
