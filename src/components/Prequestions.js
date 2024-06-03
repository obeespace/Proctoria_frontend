import React from 'react'
import { Link } from 'react-router-dom'



const Prequestions = () => {

  return (
      <div className='w-5/6 mx-auto mt-16'>
      <div className='flex gap-4'>
        <p className='font-bold text-xl'>Note: </p>
        <div className='font-semibold'>
            <p className=''>Kindly study the questions careful before attempting to answer</p>
        <p className='mt-4'>Each question carries 5 marks </p>
        <p className='mt-4'>Although you would get an instant result, Your teacher or instructor would determine if the total grade point is over 100 or 10 </p>
        <p className='mt-4'>Only click on the "Start Exams" button after you have finished reading this and you are ready totake your exams </p>
        </div>
      </div>
      <Link to='/questions' className='flex justify-end'><button
            className="bg-rose-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
          >
            Start Exams
          </button></Link>
    </div>
  )
}

export default Prequestions
