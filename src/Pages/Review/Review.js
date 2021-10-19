import { faQuoteRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import './Review.css'

const Review = () => {
    return (
        <div className="bg">
            <Container className="py-5">
                <div className="py-5 text-center text-md-start">
                    <h5 className="color">TESTIMONIAL</h5>
                    <h1 className="service-txt w-50 mx-auto mx-md-0 review-txt">What Says Our Happy Patients</h1>
                </div>
                <Row className="g-4">
                    <Col xs={12} md={6} className="">
                        <div className="p-4 pb-1 bg-white rounded shadow h-100">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="https://i.ibb.co/rfRWmLd/developer-1.jpg" alt="" style={{ height: "70px" }} className="rounded-circle me-4" />
                                    <div className="">
                                        <h4>ইসলাম মাহিম</h4>
                                        <p className="text-secondary mb-0">Patient</p>
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStarHalfAlt} className="me-2 text-warning" />
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "55px", color: "#EEEEEE" }} />
                            </div>
                            <p className="text-secondary mt-2 px-4">The doctor who treated me was extremely patience and kind to me. I truly appreciate the service I got from the hospital in particular to doctors</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="">
                        <div className="p-4 pb-1 bg-white rounded shadow h-100">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="https://i.ibb.co/7kzyfTL/developer-2.jpg" alt="" style={{ height: "70px" }} className="rounded-circle me-4" />
                                    <div className="">
                                        <h4>Raiyan Ahmed</h4>
                                        <p className="text-secondary mb-0">Patient</p>
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "55px", color: "#EEEEEE" }} />
                            </div>
                            <p className="text-secondary mt-2 px-4">Dr. Castañeda is a confident, caring, informative provider that I have complete faith and trust in.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="">
                        <div className="p-4 pb-1 bg-white rounded shadow h-100">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="https://i.ibb.co/F6mwj7D/developer-6.jpg" alt="" style={{ height: "70px" }} className="rounded-circle me-4" />
                                    <div className="">
                                        <h4>রাহাত আহমেদ</h4>
                                        <p className="text-secondary mb-0">Patient</p>
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStarHalfAlt} className="me-2 text-warning" />
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "55px", color: "#EEEEEE" }} />
                            </div>
                            <p className="text-secondary mt-2 px-4">Excellent visit. This was for a second opinion and an attempt to see what help an injection would do. I would have happily had him do the surgery if I lived closer.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ScrollButton />
        </div>
    );
};

export default Review;