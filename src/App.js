import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
    return (
        <>  
            <Navbar />
            <Hero />
        </>
    );
}

export default App;