import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionTemplete from "./QuestionTemplete";
import { Link } from "react-router-dom";

const Questions = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3007/api/question")
      .then((res) => {
        console.log(res)
        // console.log(res.data);
        let jul = res.data.filter((r) => {
          return r.class === localStorage.getItem("classnumber");
        });
        console.log(jul);

        setQuestion(jul);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-5/6 mx-auto mt-16">
      <p className="mb-7 font-semibold">
        Kindly attempt all questions. Dont not click on the submit button till
        you are sure you are ready to submit!
      </p>

      <div
        
        className="grid grid-cols-4 gap-10 grid-flow-col"
      >
        {question.map((n, index) => {
          return <Link to={`/questions/questiondetails/${n._id}`}><QuestionTemplete key={n._id} index={index + 1} {...n} /></Link>
        })}
      </div>
    </div>
  );
};

export default Questions;
