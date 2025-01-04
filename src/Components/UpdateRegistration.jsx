import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { GrUpdate } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const UpdateRegistration = ({ id }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [applicantData, setApplicantData] = useState({})
  const { applicant, marathon_title, marathon_start_date } = applicantData || {};

  console.log(applicantData);

  useEffect(() => {
    
    fetchApplicantData()
  }, [])

  const fetchApplicantData = async() =>{
    const {data} = await axiosSecure.get(`/update-form/${id}`)
    setApplicantData(data);
  }
  

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const userFirstName = form.firstName.value;
    const userLastName = form.lastName.value;
    const userEmail = form.email.value;
    const userContactNumber = form.number.value;
    const userAddress = form.address.value;

    const updateData = {
      applicant: {
        userFirstName,
        userLastName,
        userEmail,
        userContactNumber,
        userAddress,
      },
      marathon_title,
      marathon_start_date,
    };

    try {
      await axiosSecure.put(`/update-data/${id}`, updateData);
      fetchApplicantData()
      toast.success("Data Updated Successfully!!!");
      // navigate(`/dashboard/my-apply-list/:email${user?.email}`)
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Link onClick={() => document.getElementById(`${id}`).showModal()}>
        <GrUpdate className="bg-primary-color py-1.5 px-1.5 rounded-full text-white text-[28px]"></GrUpdate>
      </Link>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <section className=" text-gray-600">
            <form
              onSubmit={handleUpdate}
              noValidate=""
              action=""
              className="container flex flex-col mx-auto"
            >
              <fieldset className="grid grid-cols-5 gap-8 rounded-md">
                <div className="col-span-full space-y-6">
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
                        defaultValue={applicant?.userFirstName}
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
                        defaultValue={applicant?.userLastName}
                        className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                      />
                    </div>
                  </div>
                  {/* second row */}
                  <div className="grid grid-cols-2 gap-5 ">
                    <div>
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
                        defaultValue={applicant?.userContactNumber}
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
                      defaultValue={applicant?.userAddress}
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
                      <label className="font-semibold text-primary-color">
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

                  {/* action button */}
                  <div className="flex flex-row-reverse">
                    <div className="flex gap-4">
                      <div className=" modal-action">
                        <form method="dialog" className="flex flex-row-reverse">
                          <button className="transition-colors duration-300 transhtmlForm border border-secondary-color px-4 hover:border-[#f4d6d6] hover:bg-[#f4d6d6] text-secondary-color py-1 rounded-md font-semibold">
                            Cancel
                          </button>
                        </form>
                      </div>
                      <div className=" modal-action">
                        <button className="transition-colors duration-300 transhtmlForm border border-primary-color px-4 hover:border-[#c2c9d8] hover:bg-[#c2c9d8] text-primary-color py-1 rounded-md font-semibold">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </dialog>
    </div>
  );
};

UpdateRegistration.propTypes = {};

export default UpdateRegistration;
