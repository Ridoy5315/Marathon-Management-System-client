import React from 'react';
import PropTypes from 'prop-types';
import errorPage from '../assets/lottie/ErrorPage.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const ErrorPage = props => {
     return (
          <div className='w-7/12 mx-auto mt-32 grid grid-cols-2 justify-center items-center'>
               <div className='flex flex-col gap-7'>
                    <h2 className='text-7xl font-bold text-secondary-color'>Oops!!!</h2>
                    <p className='text-[#f13835a2]'>
                    The page you're looking for doesn't exist
                    </p>
                    <div>
                    <Link to='/' className='text-white bg-primary-color py-1.5 px-8 rounded-3xl '>Go To Homepage</Link>
                    </div>
               </div>
               <div className='text-secondary-color'>
                    <Lottie animationData={errorPage} className='text-secondary-color'></Lottie>
               </div>
          </div>
     );
};

ErrorPage.propTypes = {
     
};

export default ErrorPage;