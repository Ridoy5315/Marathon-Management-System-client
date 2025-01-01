import React from 'react';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import sponsor1 from '../assets/sponsors/Gatorade.png'
import sponsor2 from '../assets/sponsors/Monster Energy.png'
import sponsor4 from '../assets/sponsors/Nuun Hydration.png'
import sponsor6 from '../assets/sponsors/Sports Medicine Clinics2.png'
import sponsor7 from '../assets/sponsors/Strava.png'
import sponsor8 from '../assets/sponsors/Asics.png'

const Sponsors = props => {
     return (
          <div>
               <div className=' mt-5 px-16 rounded-md flex justify-center items-center'>
               <Marquee pauseOnHover={true} className='space-x-5 py-10 text-lg font-semibold'>
                    <div className='h-20 w-28 mr-44 flex items-center'>
                         <img className='w-full' src={sponsor1} alt="" />
                    </div>
                    <div className='h-20 w-20 mr-44 flex items-center'>
                         <img src={sponsor2} alt="" />
                    </div>
                    <div className='h-20 w-20 mr-44 flex items-center'>
                         <img src={sponsor4} alt="" />
                    </div>
                    
                    <div className='h-20 w-20 mr-44 flex items-center'>
                         <img src={sponsor6} alt="" />
                    </div>
                    <div className='h-20 w-20 mr-44 flex items-center'>
                         <img src={sponsor7} alt="" />
                    </div>
                    <div className='h-20 w-20 mr-44 flex items-center'>
                         <img src={sponsor8} alt="" />
                    </div>
                   
               </Marquee>
          </div>
          </div>
     );
};

Sponsors.propTypes = {
     
};

export default Sponsors;