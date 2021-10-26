import React from 'react';
import Slider from '../Carousel/Slider';
import About from '../About/About';
import Services from '../Services/Services';
import Review from '../Review/Review';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './Home.css'

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
            <Review />
            <ScrollButton />
            <Helmet>
                <title>Medizco Center</title>
                <meta name="This is the Home page of Medizco Center" content="Medizco Center- Hospital Website" />
            </Helmet>
        </>
    );
};

export default Home;