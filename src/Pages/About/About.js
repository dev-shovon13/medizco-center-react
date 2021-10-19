import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import aboutImg from '../../images/about.png'
import './About.css'

const About = () => {
    return (
        <div className="bg">
            <div className="py-5 container ms-0 ps-0">
                <Row className="align-items-center">
                    <Col xs={12} md={5} lg={6}>
                        <img src={aboutImg} alt="" className="img-fluid py-4" />
                    </Col>
                    <Col xs={12} md={7} lg={6}>
                        <div className="p-3 mt-5 ps-5 text-center">
                            <div className="text-center text-md-start ">
                                <h5 className="color">ABOUT US</h5>
                                <h1 className="">Award Winning Hospital Since 2001</h1>
                                <p className="text-secondary">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.</p>
                            </div>
                            <div className="mt-4 text-start">
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>Specialised Support Service</h5>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>Laser Vision Correction</h5>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>The Three Stages of a Disease</h5>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>Difficult Cystic Fibrosis Diagnosis</h5>
                                </div>
                            </div>
                            <Button variant="outline-primary" className="fs-5 py-1 px-5 mt-4">More About Us</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;