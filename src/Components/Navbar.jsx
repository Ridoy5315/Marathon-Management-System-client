import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logoPhoto from "../assets/4 copy.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = (props) => {
  const { user, logOutUser } = useAuth();
  const [activeButton, setActiveButton] = useState("Login");
  const [dashboardActive, setDashboardActive] = useState(false);
  const {pathname} = useLocation();
  console.log(pathname)
  ///dashboard/my-marathon-list
  ///dashboard/my-apply-list

  useEffect(() => {
    if(pathname === "/dashboard/my-marathon-list" || pathname === "/dashboard/my-apply-list"){
      setDashboardActive(true);
    }
    else{
      setDashboardActive(false);
    }
  }, [pathname])

  const handleLogOut = () => {
    logOutUser().then(() => {
      toast.success("Log out successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };
  const links = (
    <nav className="">
      <ul className="flex gap-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `lg:py-1 lg:px-3  py-0.5 px-1 lg:text-base text-sm rounded-md ${
                isActive
                  ? "bg-primary-color text-white focus:bg-primary-color focus:text-white"
                  : "text-primary-color font-semibold hover:bg-gray-200"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/marathons"
            className={({ isActive }) =>
              `lg:py-1 lg:px-3  py-0.5 px-1 lg:text-base  text-sm  rounded-md ${
                isActive
                  ? "bg-primary-color text-white focus:bg-primary-color focus:text-white"
                  : "text-primary-color font-semibold hover:bg-gray-200"
              }`
            }
          >
            Marathons
          </NavLink>
        </li>

        {user ? (
          <li>
            <NavLink
              to="/dashboard/add-marathon"
              className={({ isActive }) =>
                `lg:py-1 lg:px-3  py-0.5 px-1 lg:text-base  text-sm  rounded-md ${
                  isActive || dashboardActive
                    ? "bg-primary-color text-white focus:bg-primary-color focus:text-white"
                    : "text-primary-color font-semibold hover:bg-gray-200"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
  return (
    <div className="navbar w-11/12 mx-auto lg:py-3 md:py-2 bg-base-100 font-fontHeading">
      <div className="navbar-start justify-between lg:justify-start">
        <div className="dropdown mr-8">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[20] py-1 px-2"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8"
            src={logoPhoto}
            alt=""
          />
          <p className="text-primary-color font-bold lg:text-2xl lg:block md:block hidden md:text-xl text-lg">
            Marathon <span className="text-secondary-color">Milestone</span>
          </p>
          <p className="text-primary-color font-bold lg:hidden md:hidden block text-2xl">
            M <span className="text-secondary-color">M</span>
          </p>
          
        </div>
      </div>
      <div className="navbar-end flex lg:gap-6 md:gap-6 gap-3">
        <ul className="menu menu-horizontal lg:block md:hidden hidden text-base text-primary-color ">
          {links}
        </ul>
        {/* divider */}
        <div className="divider divider-horizontal lg:block md:hidden hidden py-2 mx-0"></div>
        {user ? (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="lg:w-12 md:w-12 w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="lg:py-2 lg:px-4 md:py-1.5 md:px-4 py-1 px-3 text-sm lg:text-base md:text-base rounded bg-primary-color text-white hover:bg-secondary-color"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2 lg:gap-3 md:gap-3">
            <Link
              to="/login"
              onClick={() => setActiveButton("Login")}
              className={`lg:py-2 lg:px-4 md:py-1.5 md:px-4 py-1 px-3 text-sm lg:text-base md:text-base rounded ${
                activeButton === "Login"
                  ? "bg-primary-color text-white"
                  : "text-primary-color border border-primary-color hover:border-secondary-color font-bold hover:bg-secondary-color hover:text-white"
              }`}
            >
              Login
            </Link>
            <Link
              to="/registration"
              onClick={() => setActiveButton("Register")}
              className={`lg:py-2 lg:px-4 md:py-1.5 md:px-4 py-1 px-3 text-sm lg:text-base md:text-base rounded ${
                activeButton === "Register"
                  ? "bg-primary-color text-white"
                  : "text-primary-color border border-primary-color hover:border-secondary-color font-bold hover:bg-secondary-color hover:text-white"
              }`}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
