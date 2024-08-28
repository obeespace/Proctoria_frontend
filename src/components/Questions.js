import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import QuestionTemplete from "./QuestionTemplete";
import { Link } from "react-router-dom";
import Modal from "./Modal";


const Questions = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [showEndExam, setshowEndExam] = useState(true);
  const [showScores, setShowScores] = useState(false);
  const [Result, setResult] = useState();

  const email = localStorage.getItem("email");

  const submitFinalAnswers = () => {
    console.log(email)
    axios
      .get(`http://localhost:3007/api/question/final-result/${email}`)
      .then((res) => {
        setResult(res.data);
        setshowModal(true);
        setshowEndExam(false)
        setShowScores(true);

      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3007/api/question")
      .then((res) => {
        const result = res.data.filter((z) => z.classnumber == localStorage.getItem("classnumber"));
        setQuestion(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-5/6 mx-auto mt-16">
      <p className="mb-16 font-semibold">
        Kindly attempt all questions. Dont not click on the submit button till
        you are sure you are ready to submit!
      </p>

      <div className="lg:grid grid-cols-4  gap-14">
        {question && question.map((n, index) => {
          return (
            <Link to={`/questions/questiondetails/${n._id}`}>
              <QuestionTemplete key={n._id} index={index + 1} {...n} />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          onClick={()=>setshowModal(true)}
          className="bg-rose-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
        >
          End Exams
        </button>
      </div>
 
      {/* Modal */}
      {showModal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-full w-11/12 max-w-md mx-4">
        {showEndExam && <div className="mx-10 my-5">
          <p className="font-bold text-center mb-10">
            Are sure you have attempted all questions and ready to end exams?
          </p>
          <div className="flex gap-5"><button onClick={submitFinalAnswers} className="border border-rose-900 bg-rose-50 font-semibold px-10 py-3 w-max rounded-xl">
            End Exams
          </button>

          <button onClick={()=>{setshowModal(false)}} className="bg-rose-900 px-10 font-semibold py-3 w-max rounded-xl text-white">
            Cancel
          </button>
          </div>
        </div>}

        {showScores && <div className="mx-10 my-5 text-center">
          

          <p>Your score is</p>
          <p className="text-rose-900 text-6xl my-8 font-semibold">{Result.finalScore}</p>

          <p className="font-bold text-center mb-10">
            You correctly answered {Result.correctCount} out of {Result.totalQuestions}  questions
          </p>
          <div className="">

          <button onClick={()=>{setshowModal(false); setshowEndExam(true); setShowScores(false)}} className="bg-rose-900 px-10 font-semibold py-3 w-max rounded-xl text-white">
            Close
          </button>
          </div>
        </div>}
      </div>
    </div>} 
    </div>
  );
};

export default Questions;
