import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import registerLottieData from "../../assets/lottie/Register.json";
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";

const Register = (props) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const {
    createNewUser,
    setUser,
    user,
    validatePassword,
    signInWithGoogle,
    updateUserProfile,
  } = useAuth();

  const handleRegistration = async (e) => {
    e.preventDefault();

    setNameError(null);
    setPassError(null);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be at least 5 character");
      return;
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      setPassError(
        "Password is too weak. It must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {});
        const newUser = { name, email, photo };
        try {
          axiosSecure.post(`/users`, newUser);
          navigate("/");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          console.log(error);
        }
      })
      .catch(() => {
        toast.error(
          "This email is already registered. Please log in to continue.",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      setUser(result.user);
      const email = result.user.email;
      const name = result.user.displayName;
      const photo = result.user.photoURL;
      const newUser = { name, email, photo };
      try {
        axiosSecure.post(`/users`, newUser);
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        toast.error(
          "This email is already registered. Please log in to continue.",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto my-20 grid grid-cols-2 gap-16">
      {/* login area */}
      <div className="flex  flex-col justify-center items-center text-current">
        <div className="">
          {/* login with email and password */}
          <div className="">
            <form onSubmit={handleRegistration} className="">
              <h3 className="text-primary-color font-bold text-4xl ">
                Register to Your Account
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input rounded-3xl bg-[#28a74634]"
                  required
                />
              </div>
              {nameError && <p className="text-sm text-red-500">{nameError}</p>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input rounded-3xl bg-[#28a74634]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input rounded-3xl bg-[#28a74634]"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input rounded-3xl bg-[#28a74634]"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[52px]"
                >
                  {showPassword ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </span>
              </div>
              {passError && <p className="text-sm text-red-500">{passError}</p>}
              <div className="flex justify-center flex-row-reverse mt-3 mb-5 text-white ">
                <button className="bg-primary-color text-white hover:bg-[#354f8a] py-3 px-10 rounded-2xl text-sm font-semibold w-full">
                  Register
                </button>
              </div>
            </form>
          </div>

          {/* login with social */}
          <div className="text-center space-y-3">
            <div className="divider">Register with social accounts</div>
            <div className="flex gap-3 text-3xl justify-center">
              <button onClick={handleSignInWithGoogle}>
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </div>
          {/* divider */}
          <div className="divider mt-8">OR</div>

          <div>
            <p className="font-light text-center">
              Already have a account? Login{" "}
              <Link
                to="/login"
                className="text-secondary-color font-semibold text-xl"
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* redirect to the registration page area */}
      <div className="text-center lg:text-left">
        <Lottie animationData={registerLottieData}></Lottie>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

Register.propTypes = {};

export default Register;
