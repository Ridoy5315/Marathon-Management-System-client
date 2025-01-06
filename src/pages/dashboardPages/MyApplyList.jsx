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
  const { user } = useAuth();
  const [myData, setMyData] = useState([]);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    
    fetchAllApplicationData();
  }, []);

  const fetchAllApplicationData = async () => {
    const { data } = await axiosSecure.get(
      `/registered-marathon/${user?.email}`
    );
    setMyData(data);
  };

   // delete functionality
   const handleDelete = async id => {
    try {
      await axiosSecure.delete(`/apply-list/${id}`)
      toast.success('Your application has been Deleted Successfully!!!')
      fetchAllApplicationData()
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  const confirmationDelete = id => {
    toast(t => (
      <div className='flex gap-3 items-center'>
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className='gap-2 flex'>
          <button
            className='bg-red-400 text-white px-3 py-1 rounded-md'
            onClick={() => {
              toast.dismiss(t.id)
              handleDelete(id)
            }}
          >
            Yes
          </button>
          <button
            className='bg-green-400 text-white px-3 py-1 rounded-md'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ))
  }

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
      document.getElementById('my_modal_1').close()
      await fetchAllApplicationData()
      toast.success("Your Application Information has been Updated Successfully!!!");
      
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl border-b-4 font-semibold leading-tight">
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
              <col className="w-24" />
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
                  <td className="pl-6 text-left tooltip" data-tip="Update">
                  <button onClick={() => {setModalData(data); document.getElementById('my_modal_1').showModal()}}>
                <GrUpdate className="bg-primary-color py-1.5 px-1.5 rounded-full text-white text-[28px]"></GrUpdate>
              </button>
                    {/* <UpdateRegistration id={data._id} fetchAllApplicationData={fetchAllApplicationData}></UpdateRegistration> */}
                  </td>
                  <td className="pl-4 text-right tooltip" data-tip="Delete">
                    <Link onClick={() => confirmationDelete(data._id)}>
                      <FaDeleteLeft className=" text-secondary-color text-3xl"></FaDeleteLeft>
                    </Link>
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
                                defaultValue={modalData?.applicant?.userFirstName}
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
                                defaultValue={modalData?.applicant?.userLastName}
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
                                defaultValue={modalData?.applicant?.userContactNumber}
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
                              defaultValue={modalData?.applicant?.userAddress}
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
                                defaultValue={modalData.marathon_title}
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
        
      </div>
    </div>
  );
};

MyApplyList.propTypes = {};

export default MyApplyList;
