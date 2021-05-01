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
                <h1 className="text-center text-white">THESE ARE SOME OF MY PROJECTS</h1>
                <div className="w-75 d-block m-auto">

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img style={{height:'300px', borderRadius:'10px'}}
                                className="d-block w-100"
                                src={test}
                                alt="First slide"
                            />
                            
                            <Carousel.Caption>
                                <h2 className="text-primary">Internet Service Provider</h2>
                                <p className="text-primary">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height:'300px', borderRadius:'10px'}}
                                className="d-block w-100"
                                src={test1}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h2 className="text-primary">Super Shop</h2>
                                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height:'300px', borderRadius:'10px'}}
                                className="d-block w-100"
                                src={test2}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2 className="text-primary">Riders Service</h2>
                                <p className="text-primary">
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                               </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        );
    };

    export default Projects;