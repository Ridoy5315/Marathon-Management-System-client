import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import { GrUpdate } from "react-icons/gr";
import { FaDeleteLeft } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import UpdateRegistration from "../../Components/UpdateRegistration";

const MyApplyList = (props) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const fetchAllApplicationData = async () => {
      const { data } = await axiosSecure.get(
        `/registered-marathon/${user?.email}`
      );
      setMyData(data);
    };
    fetchAllApplicationData();
  }, [axiosSecure, user?.email]);

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
                    <UpdateRegistration id={data._id}></UpdateRegistration>
                  </td>
                  <td className="pl-4 text-right tooltip" data-tip="Delete">
                    <Link className="">
                      <FaDeleteLeft className=" text-secondary-color text-3xl"></FaDeleteLeft>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        
      </div>
    </div>
  );
};

MyApplyList.propTypes = {};

export default MyApplyList;
