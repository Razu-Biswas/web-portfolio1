import React from 'react';
import About from '../../images/Group 33080.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 className="text-center text-white">ABOUT ME</h1>
            <section className="features-service pb-0 pb-md-5 my-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <img className="img-fluid" src={About} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center text-white design">
                            <h3>I Am a Front-end Web Developer</h3>
                            <h6 className="text-white my-5">
                            I'm a Front-end Developer and Familiar with work's Backend. I enjoy working with Team as a leader or member.I Always learning New technology. I enjoy it...
                            </h6>
                            <a target="_blank" href={`https://www.linkedin.com/in/razu-biswas-5907a8183/}`} rel="noreferrer">
                               <FaLinkedin></FaLinkedin> </a>
                             <a target="_blank" href={`https://github.com/Razu-Biswas`} rel="noreferrer">
                            <FaGithub></FaGithub> </a><br/>
                            <a className="btn btn-primary"href="https://drive.google.com/file/d/1USliY0T9aY_G2RmF7oJ-bRV8K_fcgvg7/view?usp=sharing" download="proposed_file_name">GET HIRED</a>
                            {/* <button className="btn btn-primary">GET HIRED</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;