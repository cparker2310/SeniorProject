import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar, IconButton } from '@mui/material';
import { FaPaw } from 'react-icons/fa';
import { SlUserFemale } from "react-icons/sl";
import { GiTrashCan } from 'react-icons/gi';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../Directory/theme/theme';
import "@fontsource/lora";
import { maxHeight } from '@mui/system';
import { Link } from 'react-router-dom';
import api from '../../../api/index';

 export default function UserCard({props}) {
    //const user= store({ props: false });

  const u = sessionStorage.getItem('user')
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    async function getUser() {
      if (u) {
        const user= await api.getUserById(u).then((user) => {
          setUser(user.data);
          setAdmin(user.data.isAdmin);
        });
      }
    }
    getUser();
  }, [u]);

  const deleteUser= async () => {
    if (admin && window.confirm("Are you sure you want to delete this user?")) {
      await api.deleteUserById(props._id);
      window.location.reload(true);
    }
  }  

   return (
    <>
     <ThemeProvider theme={theme}>
         <Card sx={{ width: 325, height: 215}}
          /*onClick={() => {
            user.props= !user.props;
          }}*/
         >
       {admin && (<IconButton onClick={deleteUser} style={{ position: 'absolute' }}><GiTrashCan/></IconButton>)}
      <CardActionArea>
          {/*<CardMedia
            component="img"
            image={`http://localhost:8000/api/image/`}
            // image={`http://localhost:8000/api/image/${props.image}`}
            alt="profile picture"
            width={70}
            height={70}
        />*/}
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ bg: [500], mb: 1, width: 60, height: 60 }}>
              <SlUserFemale style={{ height: '40px', width: '40px' }}/>
          </Avatar>
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