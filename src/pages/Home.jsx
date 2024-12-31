import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Components/Banner';
import MarathonSection from '../Components/MarathonSection';
import UpcomingMarathon from '../Components/UpcomingMarathon';
import CustomerFeedback from '../Components/CustomerFeedback';

const Home = props => {
     return (
          <div>
               <Banner></Banner>
               <MarathonSection></MarathonSection>
               <UpcomingMarathon></UpcomingMarathon>
               <CustomerFeedback></CustomerFeedback>
          </div>
     );
};

Home.propTypes = {
     
};

export default Home;