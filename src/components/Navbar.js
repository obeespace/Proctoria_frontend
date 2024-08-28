import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const hold = localStorage.getItem("token")

  const handleLogout = () => {
    toast.success("Signed out successful")

    localStorage.removeItem("token");
    localStorage.removeItem("classnumber");
    setTimeout(() => {
      navigate("/");
    }, 1800);
    
  
  };

  return (
    <div className='w-5/6 mx-auto my-6'>
      <div className='flex justify-between items-center'>
      <p className='text-rose-900 text-3xl font-bold'>Proctoria</p>
      {hold && <button
          onClick={handleLogout}

          className="bg-rose-900 px-6 font-semibold py-3 w-max rounded-xl text-white"
        >
          Sign Out
        </button>}
        </div>
      <ToastContainer />

    </div>
  )
}

export default Navbar
