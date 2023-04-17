import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Consent from './components/Acknowledgement/Consent';
import LogInPage from './components/LogIn/login';
import SiteConduct from './pages/conduct';
import Directory from './pages/Directory/directory';
import CareerCenter from './pages/jobs';
import MessageBoard from './pages/messages';
import Form from './components/MultiStepForm/Form';
//import EditProfile from './pages/Profile/EditProfile';        
import ProfilePage from './pages/Profile/profile';
import PendingUsers from './pages/PendingUsers';
import OTP from './components/OTP/OTP';

export const RecoveryContext= createContext();

function App() {
    const [page, setPage]= useState(<LogInPage />);
    const [email, setEmail]= useState();
    const [otp, setOTP]= useState();

    return (
        <>
            <RecoveryContext.Provider value={{ page, setPage, otp, setOTP, email, setEmail }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/consent" element={<Consent/>} exact />
                        <Route path="/signup" element={<Form />} exact />
                        <Route path="/login" element={<LogInPage />} exact />
                        <Route path="/conduct" element={<SiteConduct />} exact />
                        <Route path="/directory" element={<Directory />} exact />
                        <Route path="/jobs" element={<CareerCenter />} exact />
                        <Route path="/messages" element={<MessageBoard />} exact />
                        <Route path="/otp" element={<OTP />} exact />
                        <Route path="/profile" element={<ProfilePage />} exact />
                        <Route path="/pending" element={<PendingUsers />} exact />
                    </Routes>
                </Router>
            </RecoveryContext.Provider>
        </>
    );
}

export default App;