import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import signInLottieData from "../../assets/lottie/Login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignIn = (props) => {
  const axiosSecure = useAxiosSecure();
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        // const user = result.user;
        setUser(result.user);
        axiosSecure.post(`/jwt`, email)
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You're logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        toast.error("Email or password is incorrect. Please try again.", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You're logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        // console.log(error);
      }
      
    });
  };
  return (
    <div className="hero lg:w-9/12 w-11/12 mx-auto min-h-screen pt-20">
      <div className="hero-content flex-row gap-8">
        <div className="text-center lg:text-left lg:block md:block hidden">
          <Lottie animationData={signInLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold mx-auto pt-2 text-primary-color">
            Login to your account!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary-color text-white hover:bg-[#354f8a]">
                Login
              </button>
            </div>
            <div className="divider">Login with social accounts</div>
            <div className="flex justify-center">
              <button onClick={handleSignInWithGoogle} className="text-3xl">
                <FaGoogle></FaGoogle>
              </button>
            </div>
            <div className="divider"></div>
            <div>
              <p className="font-light text-center">
                Dont have account? Register{" "}
                <Link to='/registration' className="text-secondary-color font-semibold text-xl">
                  here
                </Link>
              </p>
            </div>
          </form>
          <div className="m-4"></div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
