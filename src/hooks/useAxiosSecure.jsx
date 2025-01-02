import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axios from 'axios';

const axiosSecure = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     withCredentials: true,
})

const useAxiosSecure = props => {
     const  navigate = useNavigate()
     const {logOutUser} = useAuth()
     useEffect(() => {
          axiosSecure.interceptors.response.use(
               res => {
                    return res
               },
               async error => {
                    error.response
                    if(error.response.status === 401 || error.response.status === 403) {
                         logOutUser()
                         navigate('/login')
                    }
               }
          )
     }, [logOutUser, navigate])
     return axiosSecure
};

useAxiosSecure.propTypes = {
     
};

export default useAxiosSecure;