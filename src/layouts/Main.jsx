import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <section className="w-full fixed z-10 shadow-lg bg-white">
        <Navbar></Navbar>
      </section>
      <section className='min-h-[calc(100vh-345px)]'>
          <Outlet></Outlet>
      </section>
      <section>
          <Footer></Footer>
      </section>
    </div>
  );
};

Main.propTypes = {};

export default Main;
