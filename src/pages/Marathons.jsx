import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import MarathonCard from "../Components/MarathonCard";

const Marathons = (props) => {
  const [marathons, setMarathons] = useState([]);
  useEffect(() => {
    const fetchAllMarathons = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/marathons`
      );
      setMarathons(data);
      console.log(data);
    };
    fetchAllMarathons();
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-16">
      <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">Discover Your Next Challenge</h2>
          <p className="px-44  font-light">Explore upcoming marathons, track events, and running opportunities near you. Find your race, set your pace, and start your journey today!</p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {marathons.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};

Marathons.propTypes = {};

export default Marathons;
