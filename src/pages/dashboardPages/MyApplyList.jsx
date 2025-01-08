import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import { GrUpdate } from "react-icons/gr";
import { FaDeleteLeft } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyApplyList = (props) => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  console.log(search);
  const { user } = useAuth();
  const [myData, setMyData] = useState([]);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetchAllApplicationData();
  }, [search]);

  const fetchAllApplicationData = async () => {
    const { data } = await axiosSecure.get(
      `/registered-marathon/${user?.email}?search=${search}`
    );
    setMyData(data);
  };

  // delete functionality
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/apply-list/${id}`);
      toast.success("Your application has been Deleted Successfully!!!");
      fetchAllApplicationData();
    } catch (err) {
      console.log(err);
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const userFirstName = form.firstName.value;
    const userLastName = form.lastName.value;
    const userEmail = form.email.value;
    const userContactNumber = form.number.value;
    const userAddress = form.address.value;
    const marathon_title = modalData.marathon_title;
    const marathon_start_date = modalData.marathon_start_date;

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
      await axiosSecure.put(`/update-data/${modalData._id}`, updateData);
      document.getElementById("my_modal_1").close();
      await fetchAllApplicationData();
      toast.success(
        "Your Application Information has been Updated Successfully!!!"
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      {/* search field */}
      <fieldset className="w-full space-y-1 flex flex-row-reverse pr-6">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 dark:text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="Search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-32 lg:py-3 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-50"
          />
        </div>
      </fieldset>
      {/* search field end */}
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 lg:text-2xl md:text-2xl text-xl border-b-4 font-semibold leading-tight">
          Total Application: {myData.length}
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
                <th className="p-3">Applicant's Name</th>
                <th className="p-3">Applicant's Address</th>
                <th className="p-3">Contact Number</th>
                <th className="p-3">Marathon Start Date</th>
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
                    <p>{data.marathon_title}</p>
                  </td>
                  <td className="p-3">
                    <p>
                      {data.applicant.userFirstName}{" "}
                      {data.applicant.userLastName}
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{data.applicant.userAddress}</p>
                  </td>
                  <td className="p-3">
                    <p>{data.applicant.userContactNumber}</p>
                  </td>
                  <td className="p-3">
                    <p>{format(new Date(data.marathon_start_date), "PPP")}</p>
                  </td>
                  <td className="md:flex lg:mt-1 md:mt-3 gap-1 ">
                    <td className="lg:pl-6 md:pl-2 text-left tooltip" data-tip="Update">
                      <button
                        onClick={() => {
                          setModalData(data);
                          document.getElementById("my_modal_1").showModal();
                        }}
                      >
                        <GrUpdate className="bg-primary-color lg:py-1.5 lg:px-1.5 py-1 px-1 rounded-full text-white lg:text-[28px] text-[20px]"></GrUpdate>
                      </button>
                      {/* <UpdateRegistration id={data._id} fetchAllApplicationData={fetchAllApplicationData}></UpdateRegistration> */}
                    </td>
                    <td className="lg:pl-4 pl-2 text-right tooltip" data-tip="Delete">
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
          {/* <Link onClick={() => document.getElementById('my_modal_1').showModal()}>
                <GrUpdate className="bg-primary-color py-1.5 px-1.5 rounded-full text-white text-[28px]"></GrUpdate>
              </Link> */}
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
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            defaultValue={modalData?.applicant?.userFirstName}
                            className="w-full lg:text-base md:text-base text-sm rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                        <div className="">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            defaultValue={modalData?.applicant?.userLastName}
                            className="w-full rounded-md lg:text-base md:text-base text-sm focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                      </div>
                      {/* second row */}
                      <div className="grid grid-cols-2 lg:gap-5 md:gap-5 gap-3 ">
                        <div>
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            defaultValue={user?.email}
                            disabled
                            className="w-full lg:text-base md:text-base text-sm rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                        <div className="">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Contact Number
                          </label>
                          <input
                            type="number"
                            name="number"
                            placeholder="Number"
                            defaultValue={
                              modalData?.applicant?.userContactNumber
                            }
                            className="w-full lg:text-base md:text-base text-sm rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                      </div>

                      {/* third row */}
                      <div className="col-span-full sm:col-span-3">
                        <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Your address"
                          defaultValue={modalData?.applicant?.userAddress}
                          className="w-full lg:text-base md:text-base text-sm rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                        />
                      </div>

                      {/* row four */}
                      <div className="grid grid-cols-2 lg:gap-5 md:gap-5 gap-3">
                        <div className="">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            defaultValue={modalData.marathon_title}
                            disabled
                            className="w-full lg:text-base md:text-base text-sm rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-semibold lg:text-base md:text-base text-sm text-primary-color">
                            Marathon Start Date
                          </label>

                          {/* Date Picker Input Field */}
                          <DatePicker
                            className="w-full lg:text-base md:text-base text-sm rounded-md focus:ring px-2 py-0.5 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                            selected={modalData.marathon_start_date}
                            disabled
                            // onChange={(date) => setMarathonStartDate(date)}
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
      </div>
    </div>
  );
};

MyApplyList.propTypes = {};

export default MyApplyList;
