import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Components/Banner';
import MarathonSection from '../Components/MarathonSection';
import UpcomingMarathon from '../Components/UpcomingMarathon';
import CustomerFeedback from '../Components/CustomerFeedback';
import NextMarathon from '../Components/NextMarathon';
import Sponsors from '../Components/Sponsors';
import Time from './time';

const Home = props => {
     return (
          <div>
               <Banner></Banner>
               <MarathonSection></MarathonSection>
               <UpcomingMarathon></UpcomingMarathon>
               <Sponsors></Sponsors>
               <NextMarathon></NextMarathon>
               <CustomerFeedback></CustomerFeedback>
               <Time></Time>
          </div>
     );
};

Home.propTypes = {
     
};

export default Home;