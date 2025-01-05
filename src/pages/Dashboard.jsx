import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, Outlet } from "react-router-dom";
import AddMarathon from "./dashboardPages/addMarathon";
import MyMarathonList from "./dashboardPages/MyMarathonList";
import MyApplyList from "./dashboardPages/MyApplyList";
import useAuth from "../hooks/useAuth";

const Dashboard = (props) => {
  const {user} = useAuth();

  return (
    <div className="grid grid-cols-5 mx-6 mt-14">

      <nav className="col-span-1">
      <ul className="flex flex-col justify-between items-center gap-3">
        <li>
          <NavLink
            to="/dashboard/add-marathon"
            className={({ isActive }) =>
              `py-1.5 px-3 rounded-md ${
                isActive
                  ? "bg-primary-color text-white"
                  : "text-primary-color font-semibold hover:bg-gray-200 "
              }`
            }
          >
            Add Marathon
          </NavLink>
        </li>
        <div className="divider m-0 mx-4"></div>
        <li>
          <NavLink
            to="/dashboard/my-marathon-list"
            className={({ isActive }) =>
              `py-1.5 px-3 rounded-md ${
                isActive
                  ? "bg-primary-color text-white"
                  : "text-primary-color font-semibold hover:bg-gray-200"
              }`
            }
          >
            My Marathon List
          </NavLink>
        </li>

        <div className="divider m-0 mx-4"></div>

        {user ? (
          <li>
            <NavLink
              to="/dashboard/my-apply-list"
              className={({ isActive }) =>
                `py-1.5 px-3 rounded-md ${
                  isActive
                    ? "bg-primary-color text-white"
                    : "text-primary-color font-semibold hover:bg-gray-200"
                }`
              }
            >
              My Apply List
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
        {/* <nav className="flex flex-col gap-2">
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
            to={`/dashboard/my-apply-list/${user?.email}`}
            onClick={() => setActiveLink("My Apply List")}
            className={`py-1 px-3 rounded-md ${
              activeLink === "My Apply List"
                ? "bg-primary-color text-white"
                : "text-primary-color font-semibold hover:bg-gray-200"
            }`}
          >
            My Apply List
          </Link>
        </nav> */}
    
      <div className="col-span-4 border-l-2 border-primary-color">
        <Outlet></Outlet>
        {/* {
          activeLink === 'Add Marathon' ? <AddMarathon></AddMarathon> : activeLink === 'My Marathon List' ? <MyMarathonList></MyMarathonList> : <MyApplyList></MyApplyList>
        } */}
        
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
