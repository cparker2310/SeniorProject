import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Directory from './pages/Directory';
import Messages from './pages/Messages';
import Conduct from './pages/Conduct';
import Jobs from './pages/Jobs';
import Home from './pages/Home';

function App() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/conduct" element={<Conduct />} />
                  <Route path="/directory" element={<Directory />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/messages" element={<Messages />} />
                </Routes>
                
            </div>
        </>
    );
}

export default App;