import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = (props) => {

  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 lg:mx-6 md:mx-6 mx-3 pt-32">
      <nav className="lg:col-span-1 lg:mb-0 mb-4">
        <ul className="flex lg:flex-col justify-center lg:justify-between items-center lg:gap-3 md:gap-3 gap-1">
          <li>
            <NavLink
              to="/dashboard/add-marathon"
              className={({ isActive }) =>
                `lg:py-1.5 md:py-1.5 py-1 lg:px-3 md:px-3 px-2 lg:base md:base text-sm rounded-md ${
                  isActive
                    ? "bg-primary-color text-white"
                    : "text-primary-color font-semibold hover:bg-gray-200 "
                }`
              }
            >
              Add Marathon
            </NavLink>
          </li>
          <div className="divider lg:block hidden m-0 mx-4"></div>
          <li>
            <NavLink
              to="/dashboard/my-marathon-list"
              className={({ isActive }) =>
                `lg:py-1.5 md:py-1.5 py-1 lg:px-3 md:px-3 px-2 lg:base md:base text-sm rounded-md ${
                  isActive
                    ? "bg-primary-color text-white"
                    : "text-primary-color font-semibold hover:bg-gray-200"
                }`
              }
            >
              My Marathon List
            </NavLink>
          </li>

          <div className="divider lg:block hidden m-0 mx-4"></div>

          <li>
            <NavLink
              to="/dashboard/my-apply-list"
              className={({ isActive }) =>
                `lg:py-1.5 md:py-1.5 py-1 lg:px-3 md:px-3 px-2 lg:base md:base text-sm rounded-md ${
                  isActive
                    ? "bg-primary-color text-white"
                    : "text-primary-color font-semibold hover:bg-gray-200"
                }`
              }
            >
              My Apply List
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="lg:col-span-4 lg:border-l-2 border-primary-color">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
