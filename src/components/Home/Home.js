import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactUs></ContactUs>
            
        </div>

    );
};

export default Home;