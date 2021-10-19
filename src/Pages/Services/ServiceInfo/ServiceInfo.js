import React from 'react';
import { useParams } from 'react-router';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import services from "./serviceData"


const ServiceInfo = () => {
    const { id } = useParams()
    const service = services.find(item => item.id === parseInt(id))
    const { img, name, info } = service
    return (
        <div className="w-75 mx-auto pb-5 pt-3 service-info">
            <div className="bg-white p-4 pt-1 rounded shadow text-center">
                <img src={img} alt="" className="img-fluid serviceInfo-img" style={{ height: "300px" }} />
                <div>
                    <h5 className="fw-bold my-2 text-danger border-bottom border-danger border-2 pb-2">{name}</h5>
                    <p className="text-secondary">{info}</p>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default ServiceInfo;