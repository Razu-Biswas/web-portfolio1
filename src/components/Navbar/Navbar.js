import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light row">
                <div className=" navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav-item active">
                       <Link to="/"><img src={logo} className='logoImg' alt="" /></Link>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 text-white" to="/aboutMe">About Me</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 text-white" to="/portfolio">Skills</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 text-white" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 text-white" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 text-white" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;