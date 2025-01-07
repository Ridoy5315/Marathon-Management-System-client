import React, { useState } from "react";
import PropTypes from "prop-types";
import logoPhoto from "../assets/4 copy.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = (props) => {
  const { user, logOutUser } = useAuth();
  const [activeButton, setActiveButton] = useState("Login");

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
              `py-1 px-3 rounded-md ${
                isActive
                  ? "bg-primary-color text-white"
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
              `py-1 px-3 rounded-md ${
                isActive
                  ? "bg-primary-color text-white"
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
                `py-1 px-3 rounded-md ${
                  isActive
                    ? "bg-primary-color text-white"
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
  // const links = (
  //   <nav className="flex gap-2">
  //     <Link to='/home'
  //       onClick={() => setActiveLink("home")}
  //       className={`py-1 px-3 rounded-md ${
  //         activeLink === "home"
  //           ? "bg-primary-color text-white"
  //           : "text-primary-color font-semibold hover:bg-gray-200 "
  //       }`}
  //     >
  //       Home
  //     </Link>
  //     <Link
  //       to="/marathons"
  //       onClick={() => setActiveLink("Marathons")}
  //       className={`py-1 px-3 rounded-md ${
  //         activeLink === "Marathons"
  //           ? "bg-primary-color text-white"
  //           : "text-primary-color font-semibold hover:bg-gray-200"
  //       }`}
  //     >
  //       Marathons
  //     </Link>
  //     {user ? (
  //       <Link
  //         to="/dashboard"
  //         onClick={() => setActiveLink("Dashboard")}
  //         className={`py-1 px-3 rounded-md ${
  //           activeLink === "Dashboard"
  //             ? "bg-primary-color text-white"
  //             : "text-primary-color font-semibold hover:bg-gray-200"
  //         }`}
  //       >
  //         Dashboard
  //       </Link>
  //     ) : (
  //       ""
  //     )}
  //   </nav>
  // );
  return (
    <div className="navbar my-4 bg-base-100 font-fontHeading">
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
          <p className="text-primary-color font-bold lg:text-2xl md:text-xl text-lg">
            Marathon <span className="text-secondary-color">Milestone</span>
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
        {user ? (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="py-2 px-4 rounded bg-primary-color text-white hover:bg-secondary-color"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/login"
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
              to="/registration"
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
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
