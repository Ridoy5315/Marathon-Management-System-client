import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import LoadingSpinner from "./LoadingSpinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

const MarathonSection = (props) => {
  const axiosSecure = useAxiosSecure()
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  if(loading){
      <LoadingSpinner></LoadingSpinner>
    }
  useEffect(() => {
    setLoading(true)
    const fetchAllMarathons = async () => {
      const { data } = await axiosSecure.get(`/home_marathons`);
      setMarathons(data);
      setLoading(false)
    };
    fetchAllMarathons();
  }, [axiosSecure]);
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto">
      <div className="text-center lg:space-y-3 space-y-1 mt-16">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold overflow-hidden">
          On the {' '}
          <span className="text-secondary-color">
            <Typewriter 
            words={['Run!', 'Move!', 'Go!', 'Race!', 'Journey!']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            >

            </Typewriter>
          </span>
        </h2>
        <p className="lg:px-44 md:px-32 lg:text-base md:text-sm text-xs font-light">
          Marathons aren't just races, we are celebrations of resilience, unity,
          and the joy of movement
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 md:mt-8 mt-6 overflow-hidden">
        {marathons.map((marathon) => (
          <Fade key={marathon._id} delay={100}
          duration={1000}
          triggerOnce
          direction="up">
            <div
            className="rounded-xl shadow-inner  shadow-blue-800/20 hover:shadow-rose-500/20 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="lg:h-56 md:h-52 w-full p-3">
              <img
                className="w-full h-full rounded-lg"
                src={marathon.marathon_image}
                alt=""
              />
            </div>

            <div className="lg:p-6 md:p-6 p-3 pt-0">
              <h4 className="font-semibold lg:text-xl md:text-xl text-lg text-center">
                {marathon.marathon_title}
              </h4>
              <p className="font-light lg:text-sm md:text-sm text-xs text-center">
                Location:{" "}
                <span className="lg:text-base md:text-base text-sm font-medium">
                  {marathon.location}
                </span>
              </p>
              <div className="font-light lg:text-sm md:text-sm text-xs rounded-md space-y-2 shadow-custom-full shadow-lg  shadow-gray-400/60 p-4 lg:mt-2 md:mt-2">
                <p>
                  Registration start date:{" "}
                  {marathon.start_registration_date && (
                    <span className="bg-[#90c5e6] font-semibold text-white py-0.5 px-2 rounded-xl">
                      {format(new Date(marathon.start_registration_date), "P")}
                    </span>
                  )}
                </p>
                <p>
                  Registration end date:{" "}
                  {marathon.end_registration_date && (
                    <span className="bg-[#90c5e6] font-semibold text-white py-0.5 px-2 rounded-xl">
                      {format(new Date(marathon.end_registration_date), "P")}
                    </span>
                  )}
                </p>
              </div>
              <div className="divider"></div>
              <div className="flex justify-end ">
                <Link
                  to={`/marathon-details/${marathon._id}`}
                  className="bg-primary-color g:text-base md:text-base text-sm text-white py-1 px-6 rounded-xl"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

MarathonSection.propTypes = {};

export default MarathonSection;
