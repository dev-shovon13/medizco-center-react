import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({ service, slug }) => {
    const { id, img, name, info } = service
    console.log(id);
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="bg-white p-4 rounded shadow h-100">
                <img src={img} alt="" className="img-fluid service-img" />
                <h5 className="fw-bold my-2">{name}</h5>
                <p className="text-secondary">{info}</p>
                <Link to={`/${id}/${slug}`}>
                    <div className="btn btn-outline-primary">See More</div>
                </Link>
            </div>
        </Col>
    );
};

export default Service;