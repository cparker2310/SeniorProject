import theme from './theme/theme';
//import avatar from "./assets/profile.png"

import { FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img from "../../images/female-icon.png"
import './index.css'
import { MdLocationOn } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { FaBriefcase } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { BsCloudUpload } from 'react-icons/bs';
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
          <img src={fileName ? "http://localhost:8000/api/image/" +fileName : img} alt="" style={{width: "450px", height: "450px", margin: "auto", display: "block", marginTop: "50px", marginBottom: "20px", border: "20px solid #dd6868"}} />
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
         <button type='submit' className="submitBtn" onClick={onSubmit}>Upload<BsCloudUpload /></button>
      </form>
    </div>
            <CardContent>
                <Typography textAlign='center' fontWeight= 'bolder' gutterBottom variant='h3' component='div' color='#030000' style={{fontSize: '55px'}}>{props.firstName} {props.maidenName} {props.marriedName}</Typography>
                <Typography textAlign='center' fontWeight= 'bolder' variant='h3' color='#a32738' marginBottom='3rem' style={{fontSize: '55px'}}>Class of {user.classYear}</Typography>
                <br />
                <Typography variant='h5' color='#dd6868' style={{marginLeft: "425px", fontWeight: "bold", fontSize: "35px"}}>Location<MdLocationOn /></Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Current City: {user.currentCity} </Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Current State: {user.currentState}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#dd6868' style={{marginLeft: "425px", fontWeight: "bold", fontSize: "35px"}}>Education<GiGraduateCap /></Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Name of Institution: {user.universityName}</Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Degree Earned: {user.degree}</Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Area of Study: {user.areaStudy}</Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Graduation Year: {user.gradYear}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#dd6868' style={{marginLeft: "425px", fontWeight: "bold", fontSize: "35px"}}>Career <FaBriefcase /></Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Position: {user.position}</Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Company Name: {user.companyName}</Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Industry: {user.industry}</Typography>
                <br />
                <br />
                <Typography variant='h5' color='#dd6868' style={{marginLeft: "225px", fontWeight: "bold", fontSize: "35px"}}>Contact Information <AiFillPhone /></Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000'>Phone: {user.phone}</Typography>
                <br />
                <Typography textAlign='center' variant='h6' color='#030000' marginBottom='3rem'>Email: {user.email2} </Typography>
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


