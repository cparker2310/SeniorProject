import theme from './theme/theme';
//import avatar from "./assets/profile.png"

import { FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img from "../../images/female-icon.png"
import './index.css'

import { 
    Box, 
    Card, 
    CardContent,
    Typography,
    CardActions,
    Button,
    ThemeProvider,
} from '@mui/material';

import api from '../../api/index';


export default ({props, openEdit}) => {
  const [user, setUser] = useState({})
  const [fileName, setFileName] = useState("")
  const [state, setState] = useState(false)
  const getUser = async () =>{
    await api.getUserById(props._id).then(user=>{
      setUser(user.data)
      setFileName(user.data.profileFinal)
    })
  }
  useEffect(() => {

    getUser()
    //console.log("inside")
  }, [openEdit])
  
  useEffect(() => {
    getUser()
    console.log("getting")
  }, [])
  const show = sessionStorage.getItem('user') === props._id || props.isAdmin

      
    
  

  const onSubmit = async() =>{
    //console.log(fileName)
    const profileFinal = fileName
    const payload = {profileFinal}
    await api.updateUserById(user._id, payload).then(res=>{
      setState(!state)
    })
    console.log(state)
  }

  


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
      <Box p={8} sx={{width: 1430, height: 1500}} alignItems='center'>
        <Card alignItems='center'>
        <div className="App">
      <form action={("http://localhost:8000/api/upload/" + fileName)} method="POST" encType="multipart/form-data"
      /*onSubmit={handleSubmit}*/>

        <label htmlFor="myFile" className='custom-file-upload'>
          <img src={fileName ? "http://localhost:8000/api/image/" +fileName : img} alt="" style={{width: "450px", height: "450px", margin: "auto", display: "block", marginBottom: "20px"}} />
        </label>

        <div className="photo-container">
          <input 
            type="file"
            lable="Image"
            name="myFile"
            id='file-upload'
            accept='.jpeg, .png, .jpg'
            onChange={(e) => {
              e.preventDefault();
              setFileName(e.target.files[0].name );
            }} 
            
            className=""
          />
        </div>
         <button type='submit' onClick={onSubmit}>Submit</button>
      </form>
    </div>
            <CardContent>
                <Typography fontWeight= 'bolder' gutterBottom variant='h4' component='div' color='#030000'>{props.firstName} {props.maidenName} {props.marriedName}</Typography>
                <Typography fontWeight= 'bolder' variant='h4' color='#a32738'>Class of {user.classYear}</Typography>
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
                <Typography variant='h6' color='#030000'>Phone: {user.phone}</Typography>
                <br />
                <Typography variant='h6' color='#030000'>Email: {user.email2} </Typography>
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


