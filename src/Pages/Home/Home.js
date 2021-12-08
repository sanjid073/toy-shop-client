import React from 'react';
import Banner from '../Banner/Banner';
import HowitWorks from '../HowItWorks/HowitWorks';
import DisplayReview from '../Review/DisplayReview';
import SafeToys from '../SafeToys/SafeToys';
import Team from '../Team/Team';
import DisplayProducts from './DisplayProducts';

const Home = () => {
    return (
        <div className="my-section">
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <HowitWorks></HowitWorks>
            <SafeToys></SafeToys>
            {/* <Team></Team> */}
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;