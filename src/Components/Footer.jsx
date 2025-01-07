import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/4 copy.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = (props) => {
  return (
    <div className="bg-[#F5F5F5] mt-32">
      <footer className="px-4 divide-y">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="w-1/3 flex text-center">
            <span className="self-center text-4xl font-bold text-primary-color">
              Marathon <span className="text-secondary-color">Milestone</span>
            </span>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-primary-color font-semibold">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 text-primary-color font-semibold">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 text-primary-color font-semibold">
                Developers
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900 text-primary-color font-semibold">
                Social media
              </div>
              <div className="flex lg:gap-4 md:gap-4 gap-2 lg:text-xl md:text-xl text-lg">
                <button className="">
                  <FaFacebook></FaFacebook>
                </button>
                <button>
                  <FaInstagram></FaInstagram>
                </button>
                <button>
                  <FiYoutube></FiYoutube>
                </button>
                <button>
                  <FaXTwitter></FaXTwitter>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
