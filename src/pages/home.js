import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;