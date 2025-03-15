import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MarathonCard from "../Components/MarathonCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../Components/LoadingSpinner";
import { TbSortDescending } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
const Marathons = (props) => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    const fetchAllMarathons = async () => {
      const { data } = await axiosSecure.get(`/marathons?sort=${sort}`);
      setMarathons(data);
      setLoading(false);
    };
    fetchAllMarathons();
  }, [axiosSecure, sort]);

  if (loading) {
    <LoadingSpinner></LoadingSpinner>;
  }

  // Delay of 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1600);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto pt-32">
      <div className="flex flex-row-reverse mb-6">
        <button
          onClick={() => setSort("sort")}
          className="text-white bg-secondary-color py-1 lg:text-xl lg:px-6 px-4 rounded-xl flex items-center gap-2"
        >
          <TbSortDescending className="lg:text-2xl text-xl"></TbSortDescending>
          Sort
        </button>
      </div>
      <div className="text-center space-y-4">
        <div className="flex justify-center gap-2 overflow-hidden">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
            <Typewriter
              words={["Discover Your Next"]}
              loop={1}
              typeSpeed={80}
            ></Typewriter>
          </h2>
          {startTyping && (
            <h2 className="lg:text-4xl md:text-3xl text-2xl text-secondary-color font-semibold">
              <Typewriter
                words={["Milestone", "Adventure", "Mission", "Challenge"]}
                loop={false}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              ></Typewriter>
            </h2>
          )}
        </div>
        <p className="lg:px-44 md:px-20 lg:text-base text-sm font-light">
          Explore upcoming marathons, track events, and running opportunities
          near you. Find your race, set your pace, and start your journey today!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-10 md:mt-10 mt-6 pb-6 overflow-hidden">
        {marathons.map((marathon, i) => (
          <motion.div
            key={marathon._id}
            initial={{
              opacity: 0,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
            }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <MarathonCard marathon={marathon}></MarathonCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

Marathons.propTypes = {};

export default Marathons;
