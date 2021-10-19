import React from 'react';
import { useParams } from 'react-router';
import services from "./serviceData"


const ServiceInfo = () => {
    const { id } = useParams()
    const service = services.find(item => item.id === parseInt(id))
    console.log(service);
    const { img, name, info } = service
    return (
        <div className="w-75 mx-auto pb-5 pt-3">
            <div className="bg-white p-4 rounded shadow text-center">
                <img src={img} alt="" className="img-fluid" style={{ height: "300px" }} />
                <div>
                    <h5 className="fw-bold my-2 text-danger border-bottom border-danger border-2 pb-2">{name}</h5>
                    <p className="text-secondary">{info}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceInfo;