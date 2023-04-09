import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    overflow: scroll;
`;

function Home() {
  return (
    <>
    <Wrapper>
        <Navbar />
        <Hero />
        <Footer />
     </Wrapper>
    </>
  );
}

export default Home;