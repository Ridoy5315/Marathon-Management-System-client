import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { GrUpdate } from "react-icons/gr";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const UpdateMarathon = ({ id, fetchAllMarathonList }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [applicantData, setApplicantData] = useState({});
  useEffect(() => {
    fetchMarathonData();
  }, []);

  //   get data for update form
  const fetchMarathonData = async () => {
    const { data } = await axiosSecure.get(`/marathon-update-form/${id}`);
    setApplicantData(data);
  };
  const {
    marathon_title,
    marathon_start_date,
    start_registration_date,
    location,
    marathon_image,
    description,
    running_distance,
    end_registration_date,
  } = applicantData || {};
  console.log(marathon_start_date)

//   const myDate = new Date(marathon_start_date)
  const [startDate, setStartDate] = useState(marathon_start_date);

  const [startRegistrationDate, setStartRegistrationDate] = useState(
    start_registration_date
  );

  const [endRegistrationDate, setEndRegistrationDate] = useState(
    end_registration_date
  );

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const marathon_title = form.title.value;
    const location = form.location.value;
    const marathon_image = form.image.value;
    const description = form.description.value;
    const running_distance = form.distance.value;
    const marathon_start_date = startDate;
    const start_registration_date = startRegistrationDate;
    const end_registration_date = endRegistrationDate;

    const updateData = {
      marathon_title,
      location,
      marathon_image,
      description,
      running_distance,
      marathon_start_date,
      start_registration_date,
      end_registration_date,
    };

    //    update data
    try {
      await axiosSecure.put(`/update-marathon/${id}`, updateData);
      document.getElementById(id).close();
      await fetchAllMarathonList();
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
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={marathon_title}
                        className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                      />
                    </div>
                    <div className="">
                      <label className="font-semibold text-primary-color">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        defaultValue={location}
                        className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                      />
                    </div>
                  </div>
                  {/* second row */}
                  <div className="">
                    <div>
                      <label className="font-semibold text-primary-color">
                        Photo
                      </label>
                      <input
                        type="text"
                        name="image"
                        placeholder="Photo URL"
                        defaultValue={marathon_image}
                        className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                      />
                    </div>
                  </div>
                  {/* third row */}
                  <div>
                    <div className="">
                      <label className="font-semibold text-primary-color">
                        Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        defaultValue={description}
                        className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                      />
                    </div>
                  </div>

                  {/* forth row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-primary-color" htmlFor="category">
                        Running distance
                      </label>
                      <select
                        name="distance"
                        
                        className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                      >
                        <option value="Choose one">{running_distance}</option>
                        <option value="3 kilometer">3 kilometer</option>
                        <option value="10 kilometer">10 kilometer</option>
                        <option value="25 kilometer">25 kilometer</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-primary-color">
                        Marathon Start Date
                      </label>

                      {/* Date Picker Input Field */}
                      {
                         startDate && (<DatePicker
                              className="w-full rounded-md focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />)
                      }
                      
                    </div>
                  </div>

                  {/* row five */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-primary-color">
                        Marathon Start Date
                      </label>

                      {/* Date Picker Input Field */}
                      <DatePicker
                        className="w-full rounded-md focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                        selected={startRegistrationDate}
                        onChange={(date) => setStartRegistrationDate(date)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-primary-color">
                        Marathon Start Date
                      </label>

                      {/* Date Picker Input Field */}
                      <DatePicker
                        className="w-full rounded-md focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                        selected={endRegistrationDate}
                        onChange={(date) => setEndRegistrationDate(date)}
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

UpdateMarathon.propTypes = {};

export default UpdateMarathon;
