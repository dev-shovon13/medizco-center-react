import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';


const Service = (props) => {
    const { user } = useAuth()
    const { id, img, name, info } = props.service

    const notify = () => {
        if (!user.uid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Log In to Continue!',
            })
        }
    }
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="bg-white p-4 rounded shadow h-100 service-item">
                <img src={img} alt="" className="img-fluid service-img" />
                <h5 className="fw-bold my-2">{name}</h5>
                <p className="text-secondary">{info}</p>
                <Link to={"/service/" + id}>
                    <div className="btn btn-outline-primary" onClick={notify}>See More</div>
                </Link>
            </div>
        </Col>
    );
};

export default Service;