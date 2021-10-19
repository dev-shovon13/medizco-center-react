import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="bg-service pb-5">
            <Container>
                <div className="text-center py-5">
                    <h5 className="color">WHAT WE DO</h5>
                    <h1 className="service-txt w-75 mx-auto">We Offer Different Services at Low Cost</h1>
                </div>
                <Row className="text-center g-4">
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Services;