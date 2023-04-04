import theme from './theme/theme';
//import avatar from "./assets/profile.png"

import { FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img from "../../images/castle.jpg"
import axios from 'axios'

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
  const [pf, setProfileFinal] = useState("")
  const show = sessionStorage.getItem('user')

  const createPost = async () => {

    const { profileFinal } = pf
    const payload = { profileFinal }
    console.log(payload)
    await api.updateUserById(props._id, payload).then(res=>{
      alert("Profile Updated")
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost()
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, myFile : base64 })
    setProfileFinal(base64)
    console.log(postImage.myFile)
  }


  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete your profile?")){

      await api.deleteUserById(props._id).then(res => {
        sessionStorage.clear()
        window.location.href = '/';
      })
    }
  }


  useEffect(()=>{
    if(show){
      //console.log(props.profileFinal)
      setPostImage({...postImage, myFile : props.profileFinal})
    }
    
  },[])

  return (
    <>
    <ThemeProvider theme={theme}>
      <Box p={8} sx={{width: 1290, height: 1500}} alignItems='center'>
        <Card>
        <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile || img} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />


         <button type='submit'>Submit</button>
      </form>
    </div>
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