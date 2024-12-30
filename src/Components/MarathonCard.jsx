import React from "react";
import PropTypes from "prop-types";

const MarathonCard = ({ marathon }) => {
  const {
    marathon_image,
    marathon_title,
    location,
    start_registration_date,
    end_registration_date,
    _id,
  } = marathon || {};
  return (
    <div className="rounded-xl shadow-xl  shadow-blue-800/20 hover:shadow-rose-500/20 transform transition-transform duration-300 hover:scale-105">
      <div className="lg:h-56 w-full ">
        <img
          className="w-full h-full rounded-t-xl"
          src={marathon_image}
          alt=""
        />
      </div>
      <div className="p-6 space-y-2">
        <h4 className="font-semibold text-xl">{marathon_title}</h4>
        <p className="font-light text-sm">
          Location: <span className="text-base font-medium">{location}</span>
        </p>
        <div className="divider"></div>
        <div className="font-light text-sm space-y-2">
          <p>
            Registration start date:{" "}
            <span className="bg-[#90c5e6] font-semibold text-white py-0.5 px-2 rounded-xl">
              {start_registration_date}
            </span>
          </p>
          <p>
            Registration end date:{" "}
            <span className="bg-[#90c5e6] font-semibold text-white py-0.5 px-2 rounded-xl">
              {end_registration_date}
            </span>
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex justify-end ">
          <button className="bg-primary-color text-white py-1 px-6 rounded-xl">See Details</button>
        </div>
      </div>
    </div>
  );
};

MarathonCard.propTypes = {};

export default MarathonCard;
