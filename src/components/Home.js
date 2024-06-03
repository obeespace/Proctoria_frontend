import React from 'react'
import LandingPic from '../assets/landing1.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-5/6 mx-auto mt-20 flex justify-evenly items-center'>
      <img src={LandingPic} alt='' />
      <div className='flex flex-col items-center'>
        <p className='text-2xl text-center font-bold mb-7'>Exams may not be the best assessment of knowledge but taking it in the right platform helps better the overall experience</p>
        <div className='flex flex-col items-center'>
            <Link to='/register'><button className='bg-rose-900 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white'>New? Signup</button></Link>
            <Link to='/login'><button className='border border-rose-900 bg-rose-50 font-semibold px-10 py-3 w-max rounded-xl'>Got an account? SignIn</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
