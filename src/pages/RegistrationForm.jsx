import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

const RegistrationForm = (props) => {
     const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <section className="p-6 text-gray-600">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-5 gap-4 px-8 rounded-md">
            <div className="flex justify-center items-center col-span-2">
              <p className="font-semibold text-primary-color text-4xl leading-relaxed">
                Revolutionize Your Marathon Planning with Ease and Efficiency!
              </p>
            </div>
            <div className="col-span-3 space-y-7">
              {/* row one */}
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <label className="font-semibold text-primary-color">
                    Marathon Title
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
                <div className="">
                  <label className="font-semibold text-primary-color">
                    Location
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
              </div>

              {/* row two */}
              <div className="col-span-full sm:col-span-3">
                <label className="font-semibold text-primary-color">
                  Marathon Image
                </label>
                <input
                  id="email"
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                />
              </div>

              {/* row three */}
              <div className="">
                <label className="font-semibold text-primary-color">
                  Description
                </label>
                <textarea
                  className="block w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                  name="description"
                  id="description"
                ></textarea>
              </div>

              {/* row four */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color" htmlFor="category">
                    Running distance
                  </label>
                  <select
                    name="distance"
                    id="category"
                    defaultValue="choose one"
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                  >
                    <option value="Choose one">Choose one</option>
                    <option value="3 kilometer">3 kilometer</option>
                    <option value="10 kilometer">10 kilometer</option>
                    <option value="25 kilometer">25 kilometer</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color">
                    Marathon Start Date
                  </label>

                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              {/* row five */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color">
                    Start Registration Date
                  </label>

                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color">
                    End Registration Date
                  </label>

                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <button className="transition-colors duration-300 transhtmlForm bg-[#c2c9d8] px-10  hover:bg-[#f4d6d6] text-primary-color py-2 rounded-md font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

RegistrationForm.propTypes = {};

export default RegistrationForm;
