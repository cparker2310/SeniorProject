import React, { useEffect, useState } from 'react';
import api from '../../../api/index';
import { FaPaw } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import { 
    Grid,
    FilledInput,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton
} from "@material-ui/core";


const initState= {
    firstName: "",
    maidenName: "",
    marriedName: "",
    classYear: "",
    currentCity: "",
    currentState: "",
    universityName: "",
    degree: "",
    areaStudy: "",
    gradYear: "",
    position: "",
    companyName: "",
    industry: "",
    email2: "",
    phone: "",
}
    
export default ({props, closeEdit, edit, newProps}) => {
    const [editDetails, setEditDetails]= useState(initState);
    
        const closeEditProfile= () => {
            setEditDetails(initState);
            closeEdit()
        }
        
    
    

    const [formData, setFormData]= useState({
        email: "", 
        password: "", 
        firstName: "", 
        maidenName: "", 
        marriedName: "",
        classYear: "", 
        currentCity: "", 
        currentState: "", 
        universityName: "",
        degree: "",
        areaStudy: "",
        gradYear: "",
        position: "",
        companyName: "",
        industry: "",
        email2: "",
        phone: ""
    });


   const submitHandler= async (e) => {
    e.preventDefault();
    const { email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree,
          areaStudy, gradYear, position, companyName, industry, email2, phone } = formData
  
      const payload = { email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree,
          areaStudy, gradYear, position, companyName, industry, email2, phone }

    await api.updateUserById(props._id, payload).then(res => {
        alert(`User updated successfully`)
        
        })
        closeEdit()
        //window.location.reload()
    }
    

    return (
        <Dialog open={props.edit} style={{fontFamily: "Lora, serif"}}>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Edit Profile
                    <IconButton onClick={closeEditProfile}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent style={{fontFamily: "Lora, serif"}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="First Name" disableUnderline fullWidth
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Maiden Name" disableUnderline fullWidth
                            value={formData.maidenName}
                            onChange={(e) => setFormData({...formData, maidenName: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Married Name" disableUnderline fullWidth
                            value={formData.marriedName}
                            onChange={(e) => setFormData({...formData, marriedName: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Class Year" disableUnderline fullWidth
                            value={formData.classYear}
                            onChange={(e) => setFormData({...formData, classYear: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Current City" disableUnderline fullWidth
                            value={formData.currentCity}
                            onChange={(e) => setFormData({...formData, currentCity: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Current State" disableUnderline fullWidth
                            value={formData.currentState}
                            onChange={(e) => setFormData({...formData, currentState: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Name of Institution" disableUnderline fullWidth
                            value={formData.universityName}
                            onChange={(e) => setFormData({...formData, universityName: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Degree Earned" disableUnderline fullWidth
                            value={formData.degree}
                            onChange={(e) => setFormData({...formData, degree: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Area of Study" disableUnderline fullWidth
                            value={formData.areaStudy}
                            onChange={(e) => setFormData({...formData, areaStudy: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Graduation Year" disableUnderline fullWidth
                            value={formData.gradYear}
                            onChange={(e) => setFormData({...formData, gradYear: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Position" disableUnderline fullWidth
                            value={formData.position}
                            onChange={(e) => setFormData({...formData, position: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Company Name" disableUnderline fullWidth
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Industry" disableUnderline fullWidth
                            value={formData.industry}
                            onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Phone" disableUnderline fullWidth
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput style={{fontFamily: "Lora, serif"}} placeholder="Email" disableUnderline fullWidth
                            value={formData.email2}
                            onChange={(e) => setFormData({...formData, email2: e.target.value})}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box>
                    <Button variant= "contained" style={{ fontWeight: "bold", backgroundColor: "#a32738", color: "#fdfdfd", fontFamily: "Lora, serif"}} onClick={submitHandler}>Submit <FaPaw /></Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}
