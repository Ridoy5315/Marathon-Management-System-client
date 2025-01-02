import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const MarathonSection = (props) => {
  const [marathons, setMarathons] = useState([]);
  useEffect(() => {
    const fetchAllMarathons = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/home_marathons`
      );
      setMarathons(data);
    };
    fetchAllMarathons();
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center space-y-3 mt-16">
        <h2 className="text-4xl font-semibold">
          On the <span className="text-secondary-color">Run!</span>
        </h2>
        <p className="px-44 font-light">
          Marathons aren't just races, we are celebrations of resilience, unity,
          and the joy of movement
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {marathons.map((marathon) => (
          <div
            key={marathon._id}
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
        ))}
      </div>
    </div>
  );
};

MarathonSection.propTypes = {};

export default MarathonSection;
