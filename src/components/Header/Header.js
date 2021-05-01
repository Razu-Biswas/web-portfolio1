import React from 'react';
import Img from '../../images/sat.jpg'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <main style={{ height: '450px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h3 style={{ color: 'white' }}>HELLO,  I AM</h3>
                <h1 style={{ color: 'white' }}>RAZU BISWAS</h1>
                <h5 style={{ color: 'white' }}>Web Developer</h5>
                <p className="text-white">I'm a Front-end Developer and Familiar with work's Backend. I enjoy working with Team as a leader or member.I Always learning New technology. I enjoy it..</p>
                <a className="btn btn-primary"href="https://drive.google.com/file/d/1USliY0T9aY_G2RmF7oJ-bRV8K_fcgvg7/view?usp=sharing" download="proposed_file_name">Download Resume</a>
                {/* <Link to="/appointment" className="btn btn-primary">Download Resume</Link> */}
            </div>
            <div className="col-md-6 col-sm-6 col-12 img-style">
                <img src={Img} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default Header;