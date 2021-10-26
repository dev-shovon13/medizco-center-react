import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Service from './Service/Service';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>Services | Medizco Center</title>
                <meta name="This is the services page of Medizco Center" content="Medizco Center- Hospital Website" />
            </Helmet>
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
            <ScrollButton />
        </div>
    )
};

export default Services;