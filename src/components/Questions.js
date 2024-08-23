import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import QuestionTemplete from "./QuestionTemplete";
import { Link } from "react-router-dom";

const Questions = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("email");

  const submitFinalAnswers = () => {
    console.log(email)
    axios
      .get(`http://localhost:3007/api/question/final-result/${email}`)
      .then((res) => {
        console.log(res);
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
        console.log(res);
        // console.log(res.data);
        let jul = res.data.filter((r) => {
          return r.class === localStorage.getItem("classnumber");
        });
        console.log(jul);

        setQuestion(res.data);
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
        {question.map((n, index) => {
          return (
            <Link to={`/questions/questiondetails/${n._id}`}>
              <QuestionTemplete key={n._id} index={index + 1} {...n} />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          onClick={submitFinalAnswers}
          className="bg-rose-900 mt-10 px-10 font-semibold py-3 w-max mb-3 rounded-xl text-white"
        >
          End Exams
        </button>
      </div>
    </div>
  );
};

export default Questions;
