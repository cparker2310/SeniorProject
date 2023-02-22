import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Section from '../components/Sections';
import { 
  homeObjOne, 
  homeObjTwo, 
  homeObjThree, 
  homeObjFour, 
  homeObjFive 
} from '../components/Sections/Data';

const Home = () => {
  const [isOpen, setIsOpen]= useState(false)

  const toggle= () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <HeroSection />
        <Section {...homeObjOne}/>
        <Section {...homeObjTwo}/>
        <Section {...homeObjThree}/>
        <Section {...homeObjFour}/>
        <Section {...homeObjFive}/>
    </>
  );
};

export default Home;