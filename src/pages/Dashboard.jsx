import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AddMarathon from "./dashboardPages/addMarathon";

const Dashboard = (props) => {
  const [activeLink, setActiveLink] = useState("Add Marathon");
  return (
    <div className="grid grid-cols-5 mx-6">
      <div className="col-span-1">
        <nav className="flex flex-col gap-2">
          <Link
            onClick={() => setActiveLink("Add Marathon")}
            className={`py-1 px-3 rounded-md ${
              activeLink === "Add Marathon"
                ? "bg-primary-color text-white"
                : "text-primary-color font-semibold hover:bg-gray-200 "
            }`}
          >
            Add Marathon
          </Link>
          <Link
            onClick={() => setActiveLink("My Marathon List")}
            className={`py-1 px-3 rounded-md ${
              activeLink === "My Marathon List"
                ? "bg-primary-color text-white"
                : "text-primary-color font-semibold hover:bg-gray-200"
            }`}
          >
            My Marathon List
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setActiveLink("My Apply List")}
            className={`py-1 px-3 rounded-md ${
              activeLink === "My Apply List"
                ? "bg-primary-color text-white"
                : "text-primary-color font-semibold hover:bg-gray-200"
            }`}
          >
            My Apply List
          </Link>
        </nav>
      </div>
      <div className="col-span-4">
        <AddMarathon></AddMarathon>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
