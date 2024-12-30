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
    <div>
      <div>
        <img src={marathon_image} alt="" />
      </div>
      <div>
        <h4>{marathon_title}</h4>
        <p>Location: {location}</p>
        <div>
          <p>Registration start date : {start_registration_date}</p>
          <p>Registration end date : {end_registration_date}</p>
        </div>
      </div>
    </div>
  );
};

MarathonCard.propTypes = {};

export default MarathonCard;
