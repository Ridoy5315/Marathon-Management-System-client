import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MarathonCard from "../Components/MarathonCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../Components/LoadingSpinner";
import { TbSortDescending } from "react-icons/tb";

const Marathons = (props) => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('')
  if(loading){
    <LoadingSpinner></LoadingSpinner>
  }
  
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    setLoading(true)
    const fetchAllMarathons = async () => {
      const { data } = await axiosSecure.get(
        `/marathons?sort=${sort}`
      );
      setMarathons(data);
      setLoading(false)
    };
    fetchAllMarathons();
  }, [axiosSecure, sort]);
  return (
    <div className="w-10/12 mx-auto mt-16">
      <div className="flex flex-row-reverse mb-6">
        <button onClick={() => setSort('sort')} className="text-white bg-secondary-color py-1 text-xl px-6 rounded-xl flex items-center gap-2"><TbSortDescending className="text-2xl"></TbSortDescending>Sort</button>
      </div>
      <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">Discover Your Next Challenge</h2>
          <p className="px-44  font-light">Explore upcoming marathons, track events, and running opportunities near you. Find your race, set your pace, and start your journey today!</p>
      </div>
      {/* {
        loading && <LoadingSpinner></LoadingSpinner>
      } */}
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
