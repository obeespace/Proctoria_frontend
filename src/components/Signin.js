import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    if (!email || !password) {
      toast.error("Kindly fill up all fields");
      event.preventDefault();
      return;
    }
    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3007/api/studentuser/login", data)
      .then((res) => {
        // setLoading(false);
        
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/instructions");
          }, 3000);
        

      })
      .catch((err) => {
        console.log();

    toast.error(err.response.data.message);
      });
  };
  return (
    <div className="mt-32 lg:w-4/12 mx-auto">
      <p className="text-2xl text-center font-bold">Sign In</p>
      <div className="mt-10">
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

        <div className="flex justify-center">
          <button onClick={handleLogin} className="bg-rose-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white">
            Sign In
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
