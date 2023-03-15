import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { FaPaw } from 'react-icons/fa';
import { ThemeProvider } from "@material-ui/core";
import theme from '../../Directory2/theme/theme';
import "@fontsource/lora";

export default function UserCard() {
  return (
    <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="profile picture"
            />
            <CardContent>
            <Typography gutterBottom variant="h6">
            FirstName MaidenName LastName
            </Typography>
            <Typography variant="body1" color="#a32738">
                Class of 20XX
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" variant="contained" justifyContent="center">
            View Profile<FaPaw />
            </Button>
        </CardActions>
        </Card>
    </ThemeProvider>
  );
}