import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineSocialDistance } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt, FaFastBackward } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { compareAsc } from "date-fns";

const MarathonDetails = (props) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [details, setDetails] = useState({});
  const { id } = useParams();
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
      setDetails(data);
    };
    marathonDetails();
  }, [id]);

  const handleRegisterFrom = () => {
    if (user?.email === user_email) {
      return toast.error(" You cant apply in your own competition");
    }

    if (compareAsc(new Date(), new Date(end_registration_date)) === 1) {
      return toast.error("Registration deadline is expired");
    } else {
      navigate(`/registration-from/${user_email}`);
    }
  };
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="mb-10 flex justify-between">
        <Link className="bg-secondary-color text-white px-6 py-1 rounded-xl flex items-center"><FaFastBackward className="mr-2"></FaFastBackward>
          Back
        </Link>
        <div className="bg-primary-color text-white px-6 py-1 rounded-xl flex items-center gap-3">
          <p>Total Registration:</p>
          <span>0</span>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-8">
        {/* title, subtitle, button */}
        <div className="col-span-2 flex flex-col justify-center gap-7">
          <h3 className="text-5xl font-semibold leading-snug">
            {marathon_title}
          </h3>
          <p className="font-light text-xl">{description}</p>
          <div className="">
            <button
              onClick={handleRegisterFrom}
              className="bg-primary-color text-white px-5 py-2 rounded-xl"
            >
              Register
            </button>
          </div>
        </div>
        {/* image */}
        <div className=" col-span-4">
          <img
            className="h-full w-full rounded-2xl"
            src={marathon_image}
            alt=""
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center gap-6">
          {/* running distance */}
          <div className=" flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                <MdOutlineSocialDistance></MdOutlineSocialDistance>
              </span>
              <p className="font-medium text-2xl">Running Distance: </p>
            </div>
            <div className="text-center">
              <span className="">{running_distance}</span>
            </div>
          </div>
          {/* location */}
          <div className=" flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                <FaLocationDot></FaLocationDot>
              </span>
              <p className="font-medium text-2xl">Location: </p>
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
              <p className="font-medium text-xl">Registration start date: </p>
            </div>
            <div className="text-center">
              <span className="">{start_registration_date}</span>
            </div>
          </div>
          {/* registration end date */}
          <div className=" flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                <FaCalendarAlt></FaCalendarAlt>
              </span>
              <p className="font-medium text-xl">Registration deadline: </p>
            </div>
            <div className="text-center">
              <span className="">{end_registration_date}</span>
            </div>
          </div>
          {/* Competition start date */}
          <div className=" flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white bg-secondary-color font-bold text-xl py-2 px-2 rounded-full">
                <FaCalendarAlt></FaCalendarAlt>
              </span>
              <p className="font-medium text-xl">Competition start date: </p>
            </div>
            <div className="text-center">
              <span className="">{marathon_start_date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MarathonDetails.propTypes = {};

export default MarathonDetails;
