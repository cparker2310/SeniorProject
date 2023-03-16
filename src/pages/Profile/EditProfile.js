import React, { useEffect, useState } from 'react';
import useHistory from 'react-router-dom';
import NavBarLogIn from '../../components/NavBarAfterLogIn/NavBarLogIn';
import api from '../../api/index';
import {
     Row,
     Col,
     Button,
     Form,
} from "react-bootstrap";
import styled from 'styled-components';

export const FormLabel= styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #030000;
  margin-right: 125px;
`;

const EditProfile = () => {

    // temporary before we can store a user session
    const [user, setUser]= useState({});

   
   

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

    const GetUser = async () =>{
        //const u = await api.getUserById('640400f25c94a051edc5ade2')
        /*setUser(u.data.data);
        useEffect(() => {
    
    
            setFormData(user.firstName);
            setFormData(user.maidenName);
            setFormData(user.marriedName);
            setFormData(user.classYear);
            setFormData(user.currentCity);
            setFormData(user.currentState);
            setFormData(user.universityName);
            setFormData(user.degree);
            setFormData(user.areaStudy);
            setFormData(user.gradYear);
            setFormData(user.position);
            setFormData(user.companyName);
            setFormData(user.industry);
        
    }, [user]);*/
    }

   const submitHandler= async (e) => {
        e.preventDefault();
        //GetUser();
        /* Connect to backend */
        let id = '641211e75f717e6191b9a571';
        const { email, password, firstName, maidenName, lastName,
            classYear, currentCity, currentState, universityName, degree,
              areaStudy, gradYear, position, companyName, industry, email2, phone } = formData
      
          const payload = { email, password, firstName, maidenName, lastName,
            classYear, currentCity, currentState, universityName, degree,
              areaStudy, gradYear, position, companyName, industry, email2, phone }

        await api.updateUserById(id, payload).then(res => {
            alert(`User updated successfully`)

        })
        
    
   }
   //GetUser();
    // for the placeholders, should be the current variable value - need to fix
  return (
    <>
    <NavBarLogIn />
    <div>
      <h1>Edit Profile</h1>
        <div>
            <Row className= "profile-container">
                <Col md={6}>
                    <Form >
                        <Form.Group controlId="fistName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit First Name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="maidenName">
                            <Form.Label>Maiden Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Maiden Name"
                                value={formData.maidenName}
                                onChange={(e) => setFormData({...formData, maidenName: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="marriedName">
                            <Form.Label>Married Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Married Name"
                                value={formData.marriedName}
                                onChange={(e) => setFormData({...formData, marriedName: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="classYear">
                            <Form.Label>Class Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Class Year"
                                value={formData.classYear}
                                onChange={(e) => setFormData({...formData, classYear: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="currentCity">
                            <Form.Label>Current City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Current City"
                                value={formData.currentCity}
                                onChange={(e) => setFormData({...formData, currentCity: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="currentState">
                            <Form.Label>Current State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Current State"
                                value={formData.currentState}
                                onChange={(e) => setFormData({...formData, currentState: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="universityName">
                            <Form.Label>Name of Institution</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Name of Institution"
                                value={formData.universityName}
                                onChange={(e) => setFormData({...formData, universityName: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="degree">
                            <Form.Label>Degree Earned</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Degree Earned"
                                value={formData.degree}
                                onChange={(e) => setFormData({...formData, degree: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="areaStudy">
                            <Form.Label>Area of Study</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Area of Study"
                                value={formData.areaStudy}
                                onChange={(e) => setFormData({...formData, areaStudy: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="gradYear">
                            <Form.Label>Graduation Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Graduation Year"
                                value={formData.gradYear}
                                onChange={(e) => setFormData({...formData, gradYear: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="position">
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Position"
                                value={formData.position}
                                onChange={(e) => setFormData({...formData, position: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit First Name"
                                value={formData.companyName}
                                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="industry">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit First Name"
                                value={formData.industry}
                                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" onClick={submitHandler}>Submit</Button>
                    </Form>
                </Col>
                
                <Col
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >Profile Picture will go here
                </Col>
            </Row>
        </div>
    </div>
    </>
  );
}

export default EditProfile;