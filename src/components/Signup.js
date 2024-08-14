import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setlastname] = useState("");
  const [classnumber, setClassNumber] = useState("");
  const [firstname, setfirstname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (!firstname || !lastname || !email || !password || !classnumber) {
      toast.error("Kindly fill up all fields");
      event.preventDefault();
      return;
    }

    const data = {
      firstname: firstname,
      lastname: lastname,
      classnumber: classnumber,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3007/api/studentuser/register", data)
      .then(() => {
        // setLoading(false);
        toast.success("User signed up Successfully");
        localStorage.setItem("classnumber", data.classnumber);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error:", err);
      });
  };

  return (
    <div className="mt-20 lg:w-5/12 mx-auto">
      <p className="text-2xl text-center font-bold">Sign Up</p>
      <div className="mt-10">
        <div className="flex gap-5">
          <input
            className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
            type="text"
            id="firstname"
            placeholder="First Name"
            name="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            required
          />

          <input
            className="border-b border-rose-900 shadow-sm px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
            type="text"
            id="lastname"
            placeholder="Last Name"
            name="lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            required
          />
        </div>
        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="number"
          id="class"
          placeholder="Enter a classnumber between 1 and 5"
          name="class"
          value={classnumber}
          onChange={(e) => setClassNumber(e.target.value)}
          required
        />

        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="border-b border-rose-900 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-end">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="underline text-rose-900">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-rose-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            Create Account
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
