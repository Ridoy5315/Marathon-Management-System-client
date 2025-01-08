import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { compareAsc } from "date-fns";
import { Typewriter } from "react-simple-typewriter";
const AddMarathon = (props) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [marathonDate, setMarathonDate] = useState(new Date());
  const [startRegistrationDate, setStartRegistrationDate] = useState(
    new Date()
  );
  const [endRegistrationDate, setEndRegistrationDate] = useState(new Date());

  const [runningDistanceError, setRunningDistanceError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setRunningDistanceError(null);

    const form = e.target;

    const marathon_title = form.title.value;
    const location = form.location.value;
    const marathon_image = form.image.value;
    const description = form.description.value;
    const running_distance = form.distance.value;
    if (running_distance === "Choose one") {
      setRunningDistanceError("Please choose a option of running distance");
      return;
    }
    const marathon_start_date = marathonDate;
    const start_registration_date = startRegistrationDate;
    const end_registration_date = endRegistrationDate;
    const addMarathonDate = new Date();

    if (
      compareAsc(
        new Date(start_registration_date),
        new Date(end_registration_date)
      ) === 1
    ) {
      return toast.error(
        "The Marathon registration deadline date cann't be earlier than the Marathon registration start date"
      );
    }

    if (
      compareAsc(
        new Date(end_registration_date),
        new Date(marathon_start_date)
      ) === 1 ||
      compareAsc(
        new Date(start_registration_date),
        new Date(marathon_start_date)
      ) === 1 ||
      compareAsc(new Date(addMarathonDate), new Date(marathon_start_date)) === 1
    ) {
      return toast.error(
        "The Marathon start date cann't be earlier than the registration deadline date"
      );
    }

    const formData = {
      marathon_title,
      organizer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      location,
      marathon_image,
      description,
      running_distance,
      marathon_start_date,
      start_registration_date,
      end_registration_date,
      addMarathonDate,
      registration_count: 0,
    };

    try {
      await axiosSecure.post(`/add-marathon`, formData);
      form.reset();
      toast.success("You organized marathon competition has been added");
      navigate("/dashboard/my-marathon-list");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <section className="p-6 text-gray-600">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-5 gap-4 px-8 rounded-md">
            <div className="flex justify-center items-center col-span-2 overflow-hidden">
              <p className="font-semibold text-primary-color text-4xl leading-relaxed">
                <Typewriter
                  words={[
                    "Revolutionize Your Marathon Planning with Ease and Efficiency!",
                  ]}
                  loop={1}
                  typeSpeed={80}
                ></Typewriter>
              </p>
            </div>
            <div className="col-span-3 space-y-7">
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
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]"
                  />
                </div>
              </div>

              {/* row two */}
              <div className="col-span-full sm:col-span-3">
                <label className="font-semibold text-primary-color">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                />
              </div>

              {/* row three */}
              <div className="">
                <label className="font-semibold text-primary-color">
                  Description
                </label>
                <textarea
                  className="block w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                  name="description"
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
                    defaultValue="choose one"
                    className="w-full rounded-md focus:ring px-2 py-1 text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
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
                    className="w-full rounded-md focus:ring px-2 py-1 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={marathonDate}
                    onChange={(date) => setMarathonDate(date)}
                  />
                </div>
                {runningDistanceError && (
                  <p className="text-sm text-red-500">{runningDistanceError}</p>
                )}
              </div>

              {/* row five */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color">
                    Start Registration Date
                  </label>

                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="w-full rounded-md focus:ring px-2 py-1 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={startRegistrationDate}
                    onChange={(date) => setStartRegistrationDate(date)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-primary-color">
                    End Registration Date
                  </label>

                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="w-full rounded-md focus:ring px-2 py-1 text-sm text-gray-700 focus:ring-[#a8afc0] border-2 border-[#a8afc0]]"
                    selected={endRegistrationDate}
                    onChange={(date) => setEndRegistrationDate(date)}
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

AddMarathon.propTypes = {};

export default AddMarathon;
