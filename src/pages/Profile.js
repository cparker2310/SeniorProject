import React, { useEffect, useState } from 'react';
import useHistory from 'react-router-dom';
import NavBarLogIn from '../components/NavBarAfterLogIn/NavBarLogIn';
import api from '../api/index';
import {
     Row,
     Col,
     Button,
     Form
} from "react-bootstrap";

const Profile = () => {
   const history= useHistory();

   useEffect(() => {
        if (!user)
            history.push("/");
        else 
        {
            setFirstName(user.firstName);
            setMaidenName(user.maidenName);
            setMarriedName(user.marriedName);
            setClassYear(user.classYear);
            setCurrentCity(user.currentCity);
            setCurrentState(user.currentState);
            setUniversityName(user.universityName);
            setDegree(user.degree);
            setAreaStudy(user.areaStudy);
            setGradYear(user.gradYear);
            setPosition(user.position);
            setCompanyName(user.companyName);
            setIndustry(user.industry);
        }
   }, [history, user]);

   const [firstName, setFirstName]= useState("");
   const [maidenName, setMaidenName]= useState("");
   const [marriedName, setMarriedName]= useState("");
   const [classYear, setClassYear]= useState("");
   const [currentCity, setCurrentCity]= useState("");
   const [currentState, setCurrentState]= useState("");
   const [universityName, setUniversityName]= useState("");
   const [degree, setDegree]= useState("");
   const [areaStudy, setAreaStudy]= useState("");
   const [gradYear, setGradYear]= useState("");
   const [position, setPosition]= useState("");
   const [companyName, setCompanyName]= useState("");
   const [industry, setIndustry]= useState("");

   const submitHandler= (e) => {
        e.preventDefault();
        /* Connect to backend */
        updateUser({
            firstName,
            maidenName,
            marriedName,
            classYear,
            currentCity,
            currentState,
            universityName,
            degree,
            areaStudy,
            gradYear,
            position,
            companyName,
            industry
        });
    }

  return (
    <>
    <NavBarLogIn />
    <div>
      <h1>Edit Profile</h1>
        <div>
            <Row className= "profile-container">
                <Col md={6}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="fistName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="maidenName">
                            <Form.Label>Maiden Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Maiden Name"
                                value={maidenName}
                                onChange={(e) => setMaidenName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="marriedName">
                            <Form.Label>Married Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Married Name"
                                value={marriedName}
                                onChange={(e) => setMarriedName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="classYear">
                            <Form.Label>Class Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Class Year"
                                value={classYear}
                                onChange={(e) => setClassYear(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="currentCity">
                            <Form.Label>Current City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Current City"
                                value={currentCity}
                                onChange={(e) => setCurrentCity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="currentState">
                            <Form.Label>Current State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Current State"
                                value={currentState}
                                onChange={(e) => setCurrentState(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="universityName">
                            <Form.Label>Name of Institution</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Name of Institution"
                                value={universityName}
                                onChange={(e) => setUniversityName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="degree">
                            <Form.Label>Degree Earned</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Degree Earned"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="areaStudy">
                            <Form.Label>Area of Study</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Area of Study"
                                value={areaStudy}
                                onChange={(e) => setAreaStudy(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="gradYear">
                            <Form.Label>Graduation Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Graduation Year"
                                value={gradYear}
                                onChange={(e) => setGradYear(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="position">
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit Position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit First Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="industry">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Edit First Name"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
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

export default Profile;