import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({children}) => {
     const {user, loading} = useAuth();
     const location = useLocation()

     if(loading){
          return <LoadingSpinner></LoadingSpinner>
     }
     if(user){
          return children
     }
     return <Navigate to='/login' state={location.pathname} />
};

PrivateRoute.propTypes = {
     
};

export default PrivateRoute;