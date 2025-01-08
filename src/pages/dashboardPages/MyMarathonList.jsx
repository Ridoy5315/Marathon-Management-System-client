import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { format } from "date-fns";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";

const MyMarathonList = (props) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [myData, setMyData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [startRegistrationDate, setStartRegistrationDate] = useState(
    new Date()
  );
  const [endRegistrationDate, setEndRegistrationDate] = useState(new Date());

  useEffect(() => {
    fetchAllMarathonList();
  }, []);

  const fetchAllMarathonList = async () => {
    const { data } = await axiosSecure.get(`/marathon-data/${user?.email}`);
    setMyData(data);
  };

  // delete functionality
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/marathon-list/${id}`);
      toast.success("Marathon Deleted Successfully!!!");
      fetchAllMarathonList();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const confirmationDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const handleData = (data) => {
    setModalData(data);
    setStartDate(data?.marathon_start_date);
    setStartRegistrationDate(data?.start_registration_date);
    setEndRegistrationDate(data?.end_registration_date);
  };

  // update data
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
      await axiosSecure.put(`/update-marathon/${modalData._id}`, updateData);
      document.getElementById("my_modal_1").close();
      await fetchAllMarathonList();
      toast.success("Marathon Information Updated Successfully!!!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="container p-2 mx-auto text-gray-800">
        <h2 className="mb-4 lg:text-2xl md:text-2xl text-xl border-b-4 font-semibold leading-tight">
          Total Marathons: {myData.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Location</th>
                <th className="p-3">Running Distance</th>
                <th className="p-3">Marathon Start Date</th>
                <th className="p-3">Registration Deadline</th>
                <th className="p-3 text-right"></th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {myData.map((data) => (
                <tr
                  key={data._id}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{data?.marathon_title}</p>
                  </td>
                  <td className="p-3">
                    <p>{data?.location}</p>
                  </td>
                  <td className="p-3">
                    <p>{data?.running_distance}</p>
                  </td>
                  <td className="p-3">
                    <p>{format(new Date(data?.marathon_start_date), "PPP")}</p>
                  </td>
                  <td className="p-3">
                    <p>
                      {format(new Date(data?.end_registration_date), "PPP")}
                    </p>
                  </td>
                  <td className="md:flex lg:mt-1 md:mt-3 gap-1">
                    <td
                      className="lg:pl-6 md:pl-2 text-left tooltip"
                      data-tip="Update"
                    >
                      <button
                        onClick={() => {
                          handleData(data);
                          document.getElementById("my_modal_1").showModal();
                        }}
                      >
                        <GrUpdate className="bg-primary-color lg:py-1.5 lg:px-1.5 py-1 px-1 rounded-full text-white lg:text-[28px] text-[20px]"></GrUpdate>
                      </button>
                    </td>
                    <td
                      className="lg:pl-4 pl-2 text-right tooltip"
                      data-tip="Delete"
                    >
                      <Link onClick={() => confirmationDelete(data._id)}>
                        <FaDeleteLeft className=" text-secondary-color lg:text-3xl text-2xl"></FaDeleteLeft>
                      </Link>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* modal */}
        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <section className=" text-gray-600">
                <form
                  onSubmit={handleUpdate}
                  noValidate=""
                  action=""
                  className="container flex flex-col mx-auto"
                >
                  <fieldset className="grid grid-cols-5 lg:gap-8 md:gap-8 gap-4 rounded-md">
                    <div className="col-span-full lg:space-y-6 md:space-y-6 space-y-4">
                      {/* row one */}
                      <div className="grid grid-cols-2 lg:gap-5 md:gap-5 gap-3">
                        <div className="">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            defaultValue={modalData?.marathon_title}
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                        <div className="">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            defaultValue={modalData?.location}
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                      </div>
                      {/* second row */}
                      <div className="">
                        <div>
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Photo
                          </label>
                          <input
                            type="text"
                            name="image"
                            placeholder="Photo URL"
                            defaultValue={modalData?.marathon_image}
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                      </div>
                      {/* third row */}
                      <div>
                        <div className="">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Description
                          </label>
                          <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            defaultValue={modalData?.description}
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                      </div>

                      {/* forth row */}
                      <div className="grid grid-cols-2 lg:gap-5 md:gap-5 gap-3">
                        <div className="flex flex-col gap-1">
                          <label
                            className="text-primary-color lg:text-base md:text-base text-sm"
                            htmlFor="category"
                          >
                            Running distance
                          </label>
                          <select
                            name="distance"
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                          >
                            <option value="Choose one">
                              {modalData?.running_distance}
                            </option>
                            <option value="3 kilometer">3 kilometer</option>
                            <option value="10 kilometer">10 kilometer</option>
                            <option value="25 kilometer">25 kilometer</option>
                          </select>
                        </div>
                        {modalData?.marathon_start_date && (
                          <div className="flex flex-col gap-1">
                            <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                              Marathon Start Date
                            </label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                              className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                        )}
                      </div>

                      {/* row five */}
                      <div className="grid grid-cols-2 lg:gap-5 md:gap-5 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Start Registration date
                          </label>

                          {/* Date Picker Input Field */}
                          <DatePicker
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                            selected={startRegistrationDate}
                            onChange={(date) => setStartRegistrationDate(date)}
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Registration Deadline
                          </label>

                          {/* Date Picker Input Field */}
                          <DatePicker
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                            selected={endRegistrationDate}
                            onChange={(date) => setEndRegistrationDate(date)}
                          />
                        </div>
                      </div>

                      {/* action button */}
                      <div className="flex flex-row-reverse">
                        <div className="flex gap-4">
                          <div className=" modal-action">
                            <form
                              method="dialog"
                              className="flex flex-row-reverse"
                            >
                              <button className="transition-colors lg:text-base md:text-base text-sm duration-300 transhtmlForm border border-secondary-color px-4 hover:border-[#f4d6d6] hover:bg-[#f4d6d6] text-secondary-color py-1 rounded-md font-semibold">
                                Cancel
                              </button>
                            </form>
                          </div>
                          <div className=" modal-action">
                            <button className="transition-colors lg:text-base md:text-base text-sm duration-300 transhtmlForm border border-primary-color px-4 hover:border-[#c2c9d8] hover:bg-[#c2c9d8] text-primary-color py-1 rounded-md font-semibold">
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
      </div>
    </div>
  );
};

MyMarathonList.propTypes = {};

export default MyMarathonList;
