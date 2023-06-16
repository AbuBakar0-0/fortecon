import React from 'react'
import Header from '../components/Home/Header';
import AboutUs from '../components/Home/AboutUs';
import Projects from '../components/Home/Projects';
import Services from '../components/Home/Services';
import Clients from '../components/Home/Clients';
import Footer from '../components/Home/Footer';
import Team from '../components/Home/Team';
import Hero from '../components/Home/Hero';



function Home() {

    return (
        <>
            <Header />
            <Hero/>
            <AboutUs />
            <Services />
            <Projects />
            <Team />
            <Clients />
            <Footer />
        </>
    )
}


export default Home;
