import React, { useState } from "react";
import PropTypes from "prop-types";
import logoPhoto from "../assets/4 copy.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState("home");
  const [activeButton, setActiveButton] = useState("Login");
  const links = (
    <nav className="flex gap-2">
      <Link
        onClick={() => setActiveLink("home")}
        className={`py-1 px-3 rounded-md ${
          activeLink === "home"
            ? "bg-primary-color text-white"
            : "text-primary-color font-semibold hover:bg-gray-200 "
        }`}
      >
        Home
      </Link>
      <Link
        onClick={() => setActiveLink("Marathons")}
        className={`py-1 px-3 rounded-md ${
          activeLink === "Marathons"
            ? "bg-primary-color text-white"
            : "text-primary-color font-semibold hover:bg-gray-200"
        }`}
      >
        Marathons
      </Link>
    </nav>
  );
  return (
    <div className="navbar bg-base-100 font-fontHeading">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[20] mt-3 w-52 p-2"
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
          <p className="text-secondary-color font-bold lg:text-2xl md:text-xl text-lg">
            Marathon Milestone
          </p>
        </div>
      </div>
      {/* <div className="navbar-center hidden lg:flex"></div> */}
      <div className="navbar-end flex lg:gap-6 md:gap-6 gap-3">
        <ul className="menu menu-horizontal text-base text-primary-color ">
          {links}
        </ul>
        {/* divider */}
        <div className="divider divider-horizontal py-2 mx-0"></div>
        <div className="flex gap-3">
          <Link
            onClick={() => setActiveButton("Login")}
            className={`py-2 px-4 rounded ${
              activeButton === "Login"
                ? "bg-primary-color text-white"
                : "text-primary-color border border-primary-color hover:border-secondary-color font-bold hover:bg-secondary-color hover:text-white"
            }`}
          >
            Login
          </Link>
          <Link
            onClick={() => setActiveButton("Register")}
            className={`py-2 px-4 rounded ${
              activeButton === "Register"
                ? "bg-primary-color text-white"
                : "text-primary-color border border-primary-color hover:border-secondary-color font-bold hover:bg-secondary-color hover:text-white"
            }`}
          >
            Register
          </Link>
        </div>

        {/* {user ? (
          <>
            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-2">
              <div className="avatar relative group">
                <div className="lg:w-12 md:w-12 w-10 rounded-full">
                  <img className="cursor-pointer rounded-full" src={user.photoURL} />
                </div>
                <div className="absolute z-10 right-0 mt-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-20">
                  <div className="p-2">
                    <p className="text-sm font-medium text-gray-800">
                      {user.displayName}
                    </p>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <button onClick={handleSignOut} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/auth/login"
              className="text-secondary-color border-2 border-secondary-color hover:bg-secondary-color hover:border-none hover:text-white hover:py-2 py-1.5 px-5 font-semibold rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              Log in
            </Link>
            <Link
              to="/auth/register"
              className="bg-secondary-color text-white py-2 px-5 hover:bg-white hover:border-2 hover:border-secondary-color hover:text-secondary-color hover:py-1.5 font-semibold rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              Register
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
