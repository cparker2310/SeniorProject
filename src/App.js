import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"/>
                <Route path="/conduct"/>
                <Route path="/directory"/>
                <Route path="/jobs"/>
                <Route path="/messages"/>
            </Routes>
        </Router>
    );
}

export default App;