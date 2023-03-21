import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Consent from './components/Acknowledgement/Consent';
import LogInPage from './components/LogIn/login';
import SiteConduct from './pages/conduct';
import Directory from './pages/Directory/directory';
import CareerCenter from './pages/jobs';
import MessageBoard from './pages/messages';
import Form from './components/MultiStepForm/Form';
import EditProfile from './pages/Profile/EditProfile';        
import ProfilePage from './pages/Profile/profile';

function App() {
    return (
         
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
                    <Route path="/editprofile" element={<EditProfile />} exact />
                    <Route path="/profile" element={<ProfilePage />} exact />
                </Routes>
            </Router>


        
    );
}

export default App;