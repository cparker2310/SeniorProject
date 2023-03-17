import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { FaPaw } from 'react-icons/fa';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../Directory2/theme/theme';
import "@fontsource/lora";
import { maxHeight } from '@mui/system';

 export default function UserCard() {
   return (
     <ThemeProvider theme={theme}>
         <Card sx={{ maxWidth: 325, maxHeight: 355}}>
         <CardActionArea>
             <CardMedia
             component="img"
             image=""
             alt="profile picture"
             />
             <CardContent>
             <Typography gutterBottom variant="h6" style={{ textAlign: "center", fontFamily: "Lora, serif" }}>
             FirstName MaidenName LastName
             </Typography>
             <Typography variant="body1" color="#a32738" style={{ textAlign: "center", fontFamily: "Lora, serif" }}>
                 Class of 20XX
             </Typography>
             </CardContent>
         </CardActionArea>
         <CardActions style={{justifyContent: "center"}}>
            <Button size="small" variant="contained" style={{ backgroundColor: "#a32738", fontFamily: "Lora, serif" }}>
              View Profile<FaPaw />
            </Button>
         </CardActions>
         </Card>
     </ThemeProvider>
   );
 }