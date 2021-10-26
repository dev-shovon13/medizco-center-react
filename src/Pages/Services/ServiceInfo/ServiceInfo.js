import React from 'react';
import { useParams } from 'react-router';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import services from "./serviceData"
import { Helmet } from 'react-helmet';


const ServiceInfo = () => {
    const { id } = useParams()
    const service = services.find(item => item.id === parseInt(id))
    const { img, name, info, img1, img2, img3 } = service
    return (
        <div className="w-75 mx-auto pb-5 pt-3 service-info">
            <Helmet>
                <title>{name} | Medizco Center</title>
                <meta name="This is the service details page of Medizco Center" content="Medizco Center- Hospital Website" />
            </Helmet>
            <div className="bg-white p-4 pt-1 rounded shadow text-center">
                <img src={img} alt="" className="img-fluid serviceInfo-img" style={{ height: "300px" }} />
                <div>
                    <h5 className="fw-bold my-2 text-danger border-bottom border-danger border-2 pb-2">{name}</h5>
                    <p className="text-secondary">{info}</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                    <div className="col">
                        <img src={img1} alt="" className="img-fluid detail-img shadow border border-2" />
                    </div>
                    <div className="col">
                        <img src={img2} alt="" className="img-fluid detail-img shadow border border-2" />
                    </div>
                    <div className="col">
                        <img src={img3} alt="" className="img-fluid detail-img shadow border border-2" />
                    </div>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default ServiceInfo;