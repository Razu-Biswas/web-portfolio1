import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Projects.css';
import test from '../../images/enTouch.jpg';
import test1 from '../../images/plent.jpg';
import test2 from '../../images/faster.jpg';




    const Projects = () => {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
        return (
            <div>
                <h1 className="text-center text-white">My Projects</h1>
                <div className="w-75 d-block m-auto">

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img style={{height:'350px', borderRadius:'10px'}}
                                className="d-block w-100"
                                src={test}
                                alt="First slide"
                            />
                            
                            <Carousel.Caption>
                                <h2 style={{color:'purple'}}>Internet Service Provider</h2>
                                <h6 style={{color:'purple'}}>Admin can see all order lists of the users.</h6>
                                <h6 style={{color:'purple'}}>Admin can add more services.</h6>
                                <h6 style={{color:'purple'}}>Admin can make a person 'Admin' by providing those person's email.</h6>
                                <h6 style={{color:'purple'}}>User can see his all orders and order's status..</h6>
                                <a className="btn btn-success"href="https://entouch-communication.web.app/" download="proposed_file_name">Live Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height:'350px', borderRadius:'10px'}}
                                className="d-block w-100"
                                src={test1}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h2 style={{color:'tomato'}}>Super Shop</h2>
                                <h6 style={{color:'tomato'}}>A more web page app with Orders and Admin where people can click the Buy Now button and  Customers Orders Confirm and the user sees all orders.</h6>
                                <h6 style={{color:'tomato'}}> Admin <span style={{color:'blue'}}> Handle Orders</span> and order delete.</h6>
                                <h6 style={{color:'tomato'}}>Admins Add Products and Products Manage or delete.</h6>
                                <a className="btn btn-success"href="https://plenty-fresh-server.web.app/" download="proposed_file_name">Live Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height:'350px', borderRadius:'10px'}}
                                className="d-block w-100"
                                src={test2}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2 style={{color:'purple'}}>Riders Service</h2>
                                <h6 style={{color:'purple'}}>
                                Faster Riders is a rider service provider website. A complete responsive minimum mobile and Desktop version.
                               </h6>
                                <h6 style={{color:'purple'}}>
                                Users can place destination locations by logging with email and password or google account and also register system.
                               </h6>
                                <h6 style={{color:'purple'}}>
                                Users select riders' service for going to a destination and are seen selecting pickup location
                               </h6>
                               <a className="btn btn-success"href="https://faster-riders.web.app/" download="proposed_file_name">Live Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        );
    };

    export default Projects;