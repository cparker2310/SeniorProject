import theme from './theme/theme';
//import avatar from "./assets/profile.png"

import { FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img from "../../images/female-icon.png"
import axios from 'axios'
import './index.css'

import { 
    Box, 
    Card, 
    CardContent,
    Typography,
    CardActions,
    Button,
    ThemeProvider,
    CardMedia,
    Dialog
    /* CardMedia - Use for Profile Picture */
} from '@mui/material';

import api from '../../api/index';


export default ({props, openEdit}) => {
  const [postImage, setPostImage] = useState( { myFile : ""})
  const show = sessionStorage.getItem('user')

  const createPost = async (newImage) => {

    
    const profileFinal = newImage
    await api.updateUserById(props._id, { profileFinal }).then(res=>{
      alert("profile updated")
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage)
    console.log("Uploaded")
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, myFile : base64 })
  }


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
      <Box p={8} sx={{width: 1430, height: 1500}} alignItems='center'>
        <Card alignItems='center'>
        <div className="App">
      <form action="http://localhost:8000/api/upload" method="POST" encType="multipart/form-data"
      /*onSubmit={handleSubmit}*/>

        <label htmlFor="myFile" className='custom-file-upload'>
          <img src={postImage.myFile || img} alt="" style={{width: "450px", height: "450px", margin: "auto", display: "block", marginBottom: "20px"}} />
        </label>

        <div className="photo-container">
          <input 
            type="file"
            lable="Image"
            name="myFile"
            id='file-upload'
            accept='.jpeg, .png, .jpg'
            onChange={(e) => handleFileUpload(e)}
            className=""
          />
        </div>
         <button type='submit'>Submit</button>
      </form>
    </div>
            <CardContent>
                <Typography fontWeight= 'bolder' gutterBottom variant='h4' component='div' color='#030000'>{props.firstName} {props.maidenName} {props.marriedName}</Typography>
                <Typography fontWeight= 'bolder' variant='h4' color='#a32738'>Class of {props.classYear}</Typography>
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
                <Typography variant='h6' color='#030000'>Phone: {props.phone}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Email: {props.email2} </Typography>
            </CardContent>
            <CardActions style={{justifyContent: "center"}}>
            {show && <><Button variant='contained' onClick={openEdit} style={{ backgroundColor: "#a32738", fontSize: "15px", fontWeight: "bold", color: "#fdfdfd",  height: "50px", width: "200px", borderRadius: "8px" }}>Edit Profile <FaPaw /></Button>
            <Button variant='contained' style={{ backgroundColor: "#a32738", fontSize: "15px", fontWeight: "bold", color: "#fdfdfd",  height: "50px", width: "200px", borderRadius: "8px" }} onClick={handleDelete}>Delete Profile <FaPaw /></Button> </>
            }
            </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
    </>
  );
}

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
