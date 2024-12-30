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
    <div className="w-10/12 mx-auto mt-10">
      <div></div>
      <div className="grid grid-cols-3 gap-6">
        {marathons.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};

Marathons.propTypes = {};

export default Marathons;
