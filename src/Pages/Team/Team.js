import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Team.css'

const Team = () => {
    // rendering data into UI 
    const [doctors, setDoctors] = useState([])

    // loading data from local json file 
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Container className="py-3 text-center">
                <div className="text-center pb-5">
                    <h5 className="text-primary pt-5">OUR TEAM</h5>
                    <h1 className="service-txt">Our Expert Doctors</h1>
                    <p className="border-bottom shadow-sm mt-3 mb-0"></p>
                </div>
                <Row className="g-4">
                    {
                        doctors.map(doctor => {
                            return <Col xs={12} md={6} lg={3}>
                                <div className="border rounded">
                                    <img src={doctor.img} alt="" className="img-fluid" />
                                    <div className="p-2 pb-3">
                                        <h5 className="mt-3 fw-light">{doctor.name}</h5>
                                        <p className="text-secondary fs-5 fw-light">Speciality: <span className="text-success fw-normal">{doctor.department}</span></p>
                                        <div className="btn btn-outline-success btn-sm">Get Appointment</div>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
                <Button variant="primary" className="fs-5 py-1 px-5 mt-5">More Doctors</Button>
            </Container>
        </div>
    );
};

export default Team;