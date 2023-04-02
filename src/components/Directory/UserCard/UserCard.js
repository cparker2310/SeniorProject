import React, { useState } from 'react';
import { store } from '@risingstack/react-easy-state';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { FaPaw } from 'react-icons/fa';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../Directory/theme/theme';
import "@fontsource/lora";
import { maxHeight } from '@mui/system';
import { Link } from 'react-router-dom';

 export default function UserCard({props}) {
    const user= store({ props: false });

   return (
    <>
     <ThemeProvider theme={theme}>
         <Card sx={{ maxWidth: 325, maxHeight: 355}}
          onClick={() => {
            user.props= !user.props;
          }}
         >
      <CardActionArea>
          <CardMedia
          component="img"
          image=""
          alt="profile picture"
          />
          <CardContent>
          <Typography gutterBottom variant="h6" style={{ textAlign: "center", fontFamily: "Lora, serif" }}>
            {props.firstName} {props.maidenName} {props.marriedName}
          </Typography>
          <Typography variant="body1" color="#a32738" style={{ textAlign: "center", fontFamily: "Lora, serif" }}>
              Class of {props.classYear}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: "center"}}>
        <Link to="/profile" state={{ props: props }} style={{ textDecoration: 'none' }}>
         <Button size="small" variant="contained" style={{ backgroundColor: "#a32738", fontFamily: "Lora, serif" }}>
           View Profile<FaPaw />
         </Button>
         </Link>
      </CardActions>
      </Card>
     </ThemeProvider>
     </>
   );
 }