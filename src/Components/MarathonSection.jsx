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
    <div className="w-10/12 mx-auto">
      <div className="text-center space-y-3 mt-16">
        <h2 className="text-4xl font-semibold overflow-hidden">
          On the {' '}
          <span className="text-secondary-color">
            <Typewriter 
            words={['Run!', 'Move!', 'Go!', 'Race!', 'Journey!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            >

            </Typewriter>
          </span>
        </h2>
        <p className="px-44 font-light">
          Marathons aren't just races, we are celebrations of resilience, unity,
          and the joy of movement
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 overflow-hidden">
        {marathons.map((marathon) => (
          <Fade key={marathon._id} delay={100}
          duration={1000}
          triggerOnce
          direction="up">
            <div
            className="rounded-xl shadow-inner  shadow-blue-800/20 hover:shadow-rose-500/20 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="lg:h-56 w-full p-3">
              <img
                className="w-full h-full rounded-lg"
                src={marathon.marathon_image}
                alt=""
              />
            </div>

            <div className="p-6 pt-0">
              <h4 className="font-semibold text-xl text-center">
                {marathon.marathon_title}
              </h4>
              <p className="font-light text-sm text-center">
                Location:{" "}
                <span className="text-base font-medium">
                  {marathon.location}
                </span>
              </p>
              <div className="font-light text-sm rounded-md space-y-2 shadow-custom-full shadow-lg  shadow-gray-400/60 p-4 mt-2">
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
                  className="bg-primary-color text-white py-1 px-6 rounded-xl"
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
