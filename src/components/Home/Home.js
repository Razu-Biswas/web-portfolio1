import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactUs from '../ContactUs/ContactUs';

import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'


const Home = () => {
    return (
        // <div className="row"> 
        //     <div className="col-md-6 textA">
        //         <h1 className="text-white">Hey I am <br/>Razu Biswas</h1>
        //         <h6 className="text-white">a web developer</h6>
        //     </div>
        //     <div className="col-md-6 abPic">
        //         <img src={Img} alt=""/>
        //     </div>
        // </div>
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