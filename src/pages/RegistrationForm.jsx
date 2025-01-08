import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const RegistrationForm = (props) => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { _id, marathon_title, marathon_start_date } = formData || {};

  useEffect(() => {
    const organizerData = async () => {
      try {
        const { data } = await axiosSecure.get(`/marathon/${id}`);
        setFormData(data);
      } catch (error) {
        console.log(error);
      }
    };

    organizerData();
  }, [axiosSecure, id]);

  const handleRegistrationMarathon = async (e) => {
    e.preventDefault();

    const form = e.target;

    const userFirstName = form.firstName.value;
    const userLastName = form.lastName.value;
    const userEmail = form.email.value;
    const userContactNumber = form.number.value;
    const userAddress = form.address.value;

    const registrationData = {
      applicant: {
        userFirstName,
        userLastName,
        userEmail,
        userContactNumber,
        userAddress,
      },
      marathon_title,
      marathon_start_date,
      competition_id: _id,
    };

    try {
      // 1. make a post request
      const {status} = await axiosSecure.post(
        `/add-registered-marathon`,
        registrationData
      )
      // 3. Show toast and navigate
      navigate('/dashboard/my-apply-list')
      toast.success('You have successfully completed the registration')
    } catch (err) {
      toast.error("You have already apply on this Competition!")
      console.log(err)
    }
  };

  return (
    <div className="w-11/12 mx-auto lg:mt-24 md:mt-20 mt-10">
      <section className=" text-gray-600">
        <form
          onSubmit={handleRegistrationMarathon}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid lg:grid-cols-5 grid-cols-1 lg:gap-8 gap-6 rounded-md">
            <div className="flex justify-center text-center lg:mx-0 md:mx-20 mx-6 lg:text-start items-center lg:col-span-2">
              <p className="font-semibold text-primary-color lg:text-4xl md:text-3xl text-2xl lg:leading-relaxed md:leading-relaxed">
                Celebrate your hard work with every step toward the finish line
              </p>
            </div>
            <div className="lg:col-span-3 lg:space-y-7 space-y-5">
              {/* row one */}
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <label className="font-semibold text-primary-color">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
                <div className="">
                  <label className="font-semibold text-primary-color">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
              </div>
              {/* second row */}
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <label className="font-semibold text-primary-color">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={user?.email}
                    disabled
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
                <div className="">
                  <label className="font-semibold text-primary-color">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    placeholder="Number"
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
              </div>

              {/* third row */}
              <div className="col-span-full sm:col-span-3">
                <label className="font-semibold text-primary-color">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Your address"
                  className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                />
              </div>

              {/* row four */}
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <label className="font-semibold text-primary-color">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    defaultValue={marathon_title}
                    disabled
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color">
                    Marathon Start Date
                  </label>

                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="w-full rounded-md focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={marathon_start_date}
                    disabled
                    // onChange={(date) => setMarathonStartDate(date)}
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
