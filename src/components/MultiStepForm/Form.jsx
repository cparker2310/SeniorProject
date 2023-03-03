import React, { useState }from 'react';
import PersonalDetails from './PersonalDetails';
import Location from './Location';
import Education from './Education';
import Career from './Career';
import ContactInfo from './ContactInfo';
import './MultiForm.css';
import api from '../../api'

// should make a back button in case user doesn't want to register
// should make required UI for the user to know + better alerts for a field being empty

const Form = () => {
  const [page, setPage]= useState(0);
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
  });

  const FormTitles= ["Personal Details", "Location", "Education", "Career", "Contact Information"];
  
  const PageDisplay= () => {
    if (page=== 0) 
      return <PersonalDetails formData={formData} setFormData={setFormData}/>;
    else if (page=== 1)
      return <Location formData={formData} setFormData={setFormData}/>;
    else if (page=== 2)
      return <Education formData={formData} setFormData={setFormData}/>;
    else if (page=== 3)
      return <Career formData={formData} setFormData={setFormData}/>;
    else 
      return <ContactInfo formData={formData} setFormData={setFormData}/>;
  }

  const pageOneMissing= (formData) => {
     if(!formData.firstName || !formData.maidenName || !formData.classYear || !formData.email || !formData.password){
      return alert(formData.marriedName)
     }
     return setPage((currentPage) => currentPage+1)

  }

  const handleIncludeUser = async () => {

    const { email, password, firstName, maidenName, lastName,
      classYear, currentCity, currentState, universityName, degree,
        areaStudy, gradYear, position, companyName, industry, email2 } = formData

    const payload = { email, password, firstName, maidenName, lastName,
      classYear, currentCity, currentState, universityName, degree,
        areaStudy, gradYear, position, companyName, industry, email2 }

    await api.insertUser(payload).then(res => {
        window.alert(`User inserted successfully`)
    })
}

  return (
    <div className="form">
        <div className="progressbar">
          <div style={{ 
            width: page=== 0 ? "20%" : 
            page===1 ? "40%" :
             page===2 ? "60%" :
             page=== 3 ? "80%" : 
             "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
                <button
                    disabled={page=== 0}
                    onClick={() => {
                      setPage((currentPage) => currentPage-1)
                    }}
                >Previous</button>
                <button 
                  onClick={() => {
                    if (page=== FormTitles.length-1){
                      alert("Your Profile was Sucessfully Created")
                      handleIncludeUser()
                    }
                    else if(page=== 0){
                      
                        pageOneMissing(formData)
                      }
                    else{                      
                      setPage((currentPage) => currentPage+1)
                    
                      //alert("All fields required to register")
                  }
                }}
                >
                  {page=== FormTitles.length-1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>     
    </div>
  );
}

export default Form;
