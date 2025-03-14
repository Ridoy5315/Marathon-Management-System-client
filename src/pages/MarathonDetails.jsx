import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { MdOutlineSocialDistance } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt, FaFastBackward } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { compareAsc, format } from "date-fns";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MarathonDetails = (props) => {
  const navigate = useNavigate();
  const backLocation = useLocation();
  const axiosSecure = useAxiosSecure();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { user } = useAuth();
  const [details, setDetails] = useState({});
  const [size, setSize] = useState(130);

  //timer width size
  const updateSize = () => {
    const width = window.innerWidth;
    if (width < 642) {
      // Mobile devices
      setSize(80);
    } else if (width < 770) {
      // Tablet devices
      setSize(90);
    } else {
      // Laptop/desktop devices
      setSize(130);
    }
  };

  useEffect(() => {
    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize); // Update size on resize

    return () => {
      window.removeEventListener("resize", updateSize); // Cleanup listener
    };
  }, []);

  const { id } = useParams();
  // for countdown

  const {
    _id,
    user_email,
    marathon_image,
    marathon_title,
    location,
    description,
    running_distance,
    start_registration_date,
    end_registration_date,
    marathon_start_date,
    registration_count,
  } = details || {};

  useEffect(() => {
    const marathonDetails = async () => {
      const { data } = await axiosSecure.get(`/marathon/${id}`);
      const targetData = new Date(data.marathon_start_date);
      setDetails(data);

      const calculateTimeLeft = () => {
        const now = new Date();
        const distance = targetData - now;

        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      };
      const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(interval);
    };
    marathonDetails();
  }, [id]);

  const handleRegister = () => {
    if (user?.email === user_email) {
      return toast.error("You cant apply in your own competition");
    }

    if (compareAsc(new Date(), new Date(end_registration_date)) === 1) {
      return toast.error("Registration deadline is expired");
    }
    if (compareAsc(new Date(start_registration_date), new Date()) === 1) {
      return toast.error("Registration has not started yet");
    } else {
      navigate(`/registration-from/${_id}`);
    }
  };

  const handleBack = () => {
    // navigate(backLocation?.state ? backLocation.state : "/");
    navigate(backLocation?.state ? backLocation?.state : "/");
    console.log(backLocation.state);
  };

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto lg:pt-28 md:pt-24 pt-20">
      <div className="mb-10 flex lg:flex-row md:flex-row lg:justify-between md:justify-between gap-2 flex-col items-start">
        <button
          onClick={handleBack}
          className="bg-secondary-color lg:text-base md:text-base text-sm text-white lg:px-6 md:px-5 px-4 lg:py-1 md:py-1 py-0.5 rounded-xl flex items-center"
        >
          <FaFastBackward className="mr-2"></FaFastBackward>
          Back
        </button>
        <div className="bg-primary-color g:text-base md:text-base text-sm text-white lg:px-6 md:px-5 px-4 py-1  rounded-xl flex items-center gap-3">
          <p>Total Registration:</p>
          <span>{registration_count}</span>
        </div>
      </div>
      <div className="lg:space-y-16 md:space-y-12 space-y-8">
        {/* first part */}
        <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
          {/* image */}
          <div className="col-span-3">
            <img
              className="h-full w-full rounded-2xl"
              src={marathon_image}
              alt=""
            />
          </div>
          {/* title, subtitle, button */}
          <div className="col-span-2 flex flex-col justify-center lg:gap-7 md:gap-5 gap-2">
            <h3 className="lg:text-5xl md:text-3xl text-2xl font-semibold leading-snug">
              {marathon_title}
            </h3>
            <p className="font-light lg:text-xl md:text-base text-sm">{description}</p>
          </div>
        </div>

        {/* second part */}
        <div className="lg:grid lg:grid-cols-6 md:grid md:grid-cols-6 lg:gap-14 md:gap-8">
          <div className="col-span-2 flex flex-col justify-center lg:gap-8 gap-4">
            {/* running distance */}
            <div className=" lg:flex lg:flex-col md:flex md:flex-col lg:gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold lg:text-xl py-2 px-2 rounded-full">
                  <MdOutlineSocialDistance></MdOutlineSocialDistance>
                </span>
                <p className="font-medium lg:text-2xl ">
                  Running Distance{" "}
                </p>
              </div>
              <div className="lg:text-center md:text-center ml-16">
                <span className="text-xs">{running_distance}</span>
              </div>
            </div>
            {/* location */}
            <div className=" lg:flex lg:flex-col md:flex md:flex-col lg:gap-1">
              <div className="flex items-center  gap-2">
                <span className="text-white bg-secondary-color font-bold lg:text-xl py-2 px-2 rounded-full">
                  <FaLocationDot></FaLocationDot>
                </span>
                <p className="font-medium lg:text-2xl">Location </p>
              </div>
              <div className="lg:text-center md:text-center ml-16">
                <span className="text-xs">{location}</span>
              </div>
            </div>

            {/* registration start date */}
            <div className=" lg:flex lg:flex-col md:flex md:flex-col lg:gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold lg:text-xl py-2 px-2 rounded-full">
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="font-medium lg:text-2xl">
                  Registration start date{" "}
                </p>
              </div>
              <div className="lg:text-center md:text-center ml-16">
                {start_registration_date && (
                  <span className="text-xs">
                    {format(new Date(start_registration_date), "PPPP")}
                  </span>
                )}
              </div>
            </div>
            {/* registration end date */}
            <div className=" lg:flex lg:flex-col md:flex md:flex-col lg:gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold lg:text-xl py-2 px-2 rounded-full">
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="font-medium lg:text-2xl">
                  Registration deadline{" "}
                </p>
              </div>
              <div className="lg:text-center md:text-center ml-16">
                {end_registration_date && (
                  <span className="text-xs">
                    {format(new Date(end_registration_date), "PPPP")}
                  </span>
                )}
              </div>
            </div>
            {/* Competition start date */}
            <div className=" lg:flex lg:flex-col md:flex md:flex-col lg:gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold lg:text-xl py-2 px-2 rounded-full">
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="font-medium lg:text-2xl">
                  Marathon start date{" "}
                </p>
              </div>
              <div className="lg:text-center md:text-center ml-16">
                {marathon_start_date && (
                  <span className="text-xs">
                    {format(new Date(marathon_start_date), "PPPP")}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* countdown timer part */}
          <div className="mt-8 lg:mt-0 md:mt-0 col-span-4 flex flex-col justify-center items-center lg:gap-10 md:gap-10 gap-6">
            <div>
              <p className="lg:text-5xl md:text-3xl text-2xl text-primary-color font-semibold">
                Marathon is yet to begin
              </p>
            </div>

            {/* countdown timer */}
            <div className="flex flex-col lg:gap-20 md:gap-20 gap-10">
              <div className="flex justify-center lg:space-x-4 space-x-3">
                <div className="flex flex-col items-center">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.days * 24 * 3600}
                    size={size}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    strokeWidth={10}
                    onComplete={() => console.log("Days up")}
                  >
                    {() => (
                      <div className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                        {timeLeft.days}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Days</span>
                </div>

                <div className="flex flex-col items-center ">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.hours * 3600}
                    size={size}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    strokeWidth={10}
                    onComplete={() => console.log("Hours up")}
                  >
                    {() => (
                      <div className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                        {timeLeft.hours}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Hours</span>
                </div>

                <div className="flex flex-col items-center ">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.minutes * 60}
                    size={size}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    strokeWidth={10}
                    onComplete={() => console.log("Minutes up")}
                  >
                    {() => (
                      <div className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                        {timeLeft.minutes}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Minutes</span>
                </div>

                <div className="flex flex-col items-center ">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.seconds}
                    size={size}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    strokeWidth={10}
                    onComplete={() => console.log("Seconds up")}
                  >
                    {() => (
                      <div className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                        {timeLeft.seconds}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Seconds</span>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <button
                  onClick={handleRegister}
                  className="bg-primary-color text-white lg:px-10 lg:py-2.5 md:px-10 md:py-2.5 py-1.5 px-6 rounded-xl"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MarathonDetails.propTypes = {};

export default MarathonDetails;
