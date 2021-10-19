import React from 'react';
import Slider from '../Carousel/Slider';
import About from '../About/About';
import Services from '../Services/Services';
import Review from '../Review/Review';
import './Home.css'
import ScrollButton from '../../components/ScrollButton/ScrollButton';

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
            <Review />
            <ScrollButton />
        </>
    );
};

export default Home;