import React from 'react';
import { FaLinkedin,FaGithub,FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="col-md-12 d-flex justify-content-center footer-design">
                <Link id="home" to="/"><FaHome></FaHome></Link>
                <a target="_blank" href={`https://www.linkedin.com/in/razu-biswas-5907a8183/}`} rel="noreferrer">
                    <FaLinkedin></FaLinkedin> </a>
                <a target="_blank" href={`https://github.com/Razu-Biswas`} rel="noreferrer">
                    <FaGithub></FaGithub> </a>
            </footer>
        </div>
    );
};

export default Footer;