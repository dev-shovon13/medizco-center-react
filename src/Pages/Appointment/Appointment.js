import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import appointment from '../../images/appointment.png'
import doctors from './doctorsData'

const Appointment = () => {
    const formControl = (e) => {
        e.preventDefault()
    }
    const [date, setDate] = useState("new Date()");
    const { id } = useParams()
    const doctor = doctors.find(item => item.id === parseInt(id))
    const { img, name, department } = doctor
    return (
        <Container className="pt-3 pb-5">
            <Row className="g-4 align-items-center">
                <Col sm={12} md={6}>
                    <img src={appointment} alt="" className="img-fluid" />
                </Col>
                <Col sm={12} md={6} className="p-4 text-center">
                    <div className="mb-3 border">
                        <h5 className="border-bottom py-2 bg-light">Appointment of</h5>
                        <div className="d-flex align-items-center">
                            <img src={img} alt="" height="120px" className="me-3 rounded-circle p-3" />
                            <div>
                                <h5 className="fw-light">{name}</h5>
                                <p>Specialty: <span className="text-success fw-bold">{department}</span></p>
                            </div>
                        </div>
                    </div>
                    <Form >
                        <div className="d-flex">
                            <Form.Select aria-label="Default select example" className="mb-3 me-3">
                                <option>Select Your Time</option>
                                <option value="1">8:00 PM</option>
                                <option value="2">8:30 PM</option>
                                <option value="3">9:00 PM</option>
                            </Form.Select>
                            <Form.Control type="date" className="mb-3" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <Form.Control type="text" placeholder="Enter Your Name" className="mb-3" />
                        <Form.Control type="number" placeholder="Enter Your Phone Number" className="mb-3" />
                        <Form.Control type="email" placeholder="Enter Your Email" className="mb-3" />

                        <Button variant="outline-primary" type="submit" className="mt-3" onClick={formControl}>
                            Book Appointment
                        </Button>
                    </Form>
                </Col>
            </Row>
            <ScrollButton />
        </Container>
    );
};

export default Appointment;