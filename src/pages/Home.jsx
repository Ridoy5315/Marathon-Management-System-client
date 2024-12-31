import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Components/Banner';
import MarathonSection from '../Components/MarathonSection';

const Home = props => {
     return (
          <div>
               <Banner></Banner>
               <MarathonSection></MarathonSection>
          </div>
     );
};

Home.propTypes = {
     
};

export default Home;