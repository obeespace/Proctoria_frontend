import React from 'react'

const Navbar = () => {
  return (
    <div className='w-5/6 mx-auto flex justify-between items-center my-6'>
      <p className='text-rose-900 text-3xl font-bold'>Proctoria</p>
      <p
          
          className="bg-rose-900 px-6 font-semibold py-3 w-max rounded-xl text-white"
        >
          Sign Out
        </p>
    </div>
  )
}

export default Navbar
