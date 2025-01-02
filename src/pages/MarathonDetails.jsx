import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineSocialDistance } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt, FaFastBackward } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { compareAsc, format } from "date-fns";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonDetails = (props) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();
  const { user } = useAuth();
  const [details, setDetails] = useState({});

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
  } = details || {};

  useEffect(() => {
    const marathonDetails = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/marathon/${id}`
      );
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
    if(compareAsc( new Date(start_registration_date), new Date()) === 1){
      return toast.error("Registration has not started yet");
    }
    else {
      navigate(`/registration-from/${_id}`);
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-20">
      <div className="mb-10 flex justify-between">
        <Link className="bg-secondary-color text-white px-6 py-1 rounded-xl flex items-center">
          <FaFastBackward className="mr-2"></FaFastBackward>
          Back
        </Link>
        <div className="bg-primary-color text-white px-6 py-1 rounded-xl flex items-center gap-3">
          <p>Total Registration:</p>
          <span>0</span>
        </div>
      </div>
      <div className="space-y-16">
        {/* first part */}
        <div className="grid grid-cols-5 gap-8">
          {/* image */}
          <div className=" col-span-3">
            <img
              className="h-full w-full rounded-2xl"
              src={marathon_image}
              alt=""
            />
          </div>
          {/* title, subtitle, button */}
          <div className="col-span-2 flex flex-col justify-center gap-7">
            <h3 className="text-5xl font-semibold leading-snug">
              {marathon_title}
            </h3>
            <p className="font-light text-xl">{description}</p>
          </div>
        </div>

        {/* second part */}
        <div className="grid grid-cols-6 gap-14">
          <div className="col-span-2 flex flex-col justify-center gap-8">
            {/* running distance */}
            <div className=" flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                  <MdOutlineSocialDistance></MdOutlineSocialDistance>
                </span>
                <p className="font-medium text-2xl">Running Distance </p>
              </div>
              <div className="text-center">
                <span className="">{running_distance}</span>
              </div>
            </div>
            {/* location */}
            <div className=" flex flex-col gap-1">
              <div className="flex items-center  gap-2">
                <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                  <FaLocationDot></FaLocationDot>
                </span>
                <p className="font-medium text-2xl">Location </p>
              </div>
              <div className="text-center">
                <span className="">{location}</span>
              </div>
            </div>

            {/* registration start date */}
            <div className=" flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="font-medium text-xl">Registration start date </p>
              </div>
              <div className="text-center">
              {start_registration_date && (
                  <span className="">
                    {format(new Date(start_registration_date), "PPPP")}
                  </span>
                )}
              </div>
            </div>
            {/* registration end date */}
            <div className=" flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="font-medium text-xl">Registration deadline </p>
              </div>
              <div className="text-center">
              {end_registration_date && (
                  <span className="">
                    {format(new Date(end_registration_date), "PPPP")}
                  </span>
                )}
              </div>
            </div>
            {/* Competition start date */}
            <div className=" flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="font-medium text-xl">Marathon start date </p>
              </div>
              <div className="text-center">
                {marathon_start_date && (
                  <span className="">
                    {format(new Date(marathon_start_date), "PPPP")}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* countdown timer part */}
          <div className="col-span-4 flex flex-col justify-center items-center gap-10">
            <div>
              <p className="text-5xl text-primary-color font-semibold">
                Marathon is yet to begin
              </p>
            </div>

            {/* countdown timer */}
            <div className="flex flex-col gap-20">
              <div className="flex justify-center space-x-4">
                <div className="flex flex-col items-center">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.days * 24 * 3600}
                    size={130}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    onComplete={() => console.log("Days up")}
                  >
                    {() => (
                      <div className="text-4xl font-semibold">
                        {timeLeft.days}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Days</span>
                </div>

                <div className="flex flex-col items-center">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.hours * 3600}
                    size={130}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    onComplete={() => console.log("Hours up")}
                  >
                    {() => (
                      <div className="text-4xl font-semibold">
                        {timeLeft.hours}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Hours</span>
                </div>

                <div className="flex flex-col items-center">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.minutes * 60}
                    size={130}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    onComplete={() => console.log("Minutes up")}
                  >
                    {() => (
                      <div className="text-4xl font-semibold">
                        {timeLeft.minutes}
                      </div>
                    )}
                  </CountdownCircleTimer>
                  <span className="text-sm">Minutes</span>
                </div>

                <div className="flex flex-col items-center">
                  <CountdownCircleTimer
                    isPlaying
                    duration={timeLeft.seconds}
                    size={130}
                    colors={[
                      ["#004777", 0.33],
                      ["#F7B801", 0.33],
                      ["#A30000", 0.33],
                    ]}
                    onComplete={() => console.log("Seconds up")}
                  >
                    {() => (
                      <div className="text-4xl font-semibold">
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
                  className="bg-primary-color text-white px-10 py-2.5 rounded-xl"
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
