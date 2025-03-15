import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Countdown from "./Countdown";
import winning from "../assets/upcoming/win2.jpg";
import useAxiosSecure from "../hooks/useAxiosSecure";
const NextMarathon = () => {
  const axiosSecure = useAxiosSecure();
  const [nextMarathon, setNextMarathon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNextMarathons = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/latest_registration_start_date`
        );
        if (!data.nextRegistrationStartDate) {
          setError(data.message || "No upcoming marathons found.");
          setNextMarathon(null);
        } else {
          setNextMarathon(data);
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setNextMarathon(null);
      }
    };
    fetchNextMarathons();
  }, [axiosSecure]);

  if (error) {
    return <p className="text-center text-secondary-color">{error}</p>;
  }
  return (
    <div
      className="w-full relative bg-cover bg-center lg:h-[650px] md:h-[500px] h-[360px]"
      style={{ backgroundImage: `url(${winning})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#5E5D5D]/70 to-[#5E5D5D]/70 "></div>

      {nextMarathon && nextMarathon.nextRegistrationStartDate ? (
        <Countdown nextMarathon={nextMarathon}></Countdown>
      ) : (
        <p className="text-white text-center text-lg">No upcoming marathons</p>
      )}
    </div>
  );
};

NextMarathon.propTypes = {};

export default NextMarathon;
