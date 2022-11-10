import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import SampleWorks from '../SampleWorks/SampleWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SampleWorks></SampleWorks>
            <Services></Services>
        </div>
    );
};

export default Home;