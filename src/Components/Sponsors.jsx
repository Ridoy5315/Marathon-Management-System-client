import React from 'react';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import sponsor1 from '../assets/sponsors/Gatorade.png'
import sponsor2 from '../assets/sponsors/Monster Energy.png'
import sponsor4 from '../assets/sponsors/Nuun Hydration.png'
import sponsor6 from '../assets/sponsors/Sports Medicine Clinics2.png'
import sponsor7 from '../assets/sponsors/Strava.png'
import sponsor8 from '../assets/sponsors/Asics.png'

const Sponsors = props => {
     return (
          <div>
               <div className='lg:mt-5 mt-3 lg:px-16 md:px-10 px-8 rounded-md flex justify-center items-center'>
               <Marquee pauseOnHover={true} className='lg"space-x-5 md:space-x-2 lg:py-10 md:py-4 py-2 lg:text-lg md:text-base text-sm font-semibold'>
                    <div className='lg:h-20 md:h-14 h-8 lg:w-28 md:w-20 w-10 lg:mr-44 md:mr-28 mr-16 flex items-center'>
                         <img className='w-full' src={sponsor1} alt="" />
                    </div>
                    <div className='lg:h-20 md:h-14 h-8 lg:w-28 md:w-20 w-10 lg:mr-44 md:mr-28 mr-16  flex items-center'>
                         <img src={sponsor2} alt="" />
                    </div>
                    <div className='lg:h-20md:h-14 h-8 lg:w-28 md:w-20 w-10 lg:mr-44 md:mr-28 mr-16  flex items-center'>
                         <img src={sponsor4} alt="" />
                    </div>
                    
                    <div className='lg:h-20 md:h-14 h-8 lg:w-28 md:w-20 w-10 lg:mr-44 md:mr-28 mr-16 flex items-center'>
                         <img src={sponsor6} alt="" />
                    </div>
                    <div className='lg:h-20 md:h-14 h-8 lg:w-28 md:w-20 w-10 lg:mr-44 md:mr-28 mr-16 flex items-center'>
                         <img src={sponsor7} alt="" />
                    </div>
                    <div className='lg:h-20 md:h-14 h-8 lg:w-28 md:w-20 w-10 lg:mr-44 md:mr-28 mr-16 flex items-center'>
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