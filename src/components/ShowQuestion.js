import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const ShowQuestion = () => {
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3007/api/question/${id}`)
      .then((res) => {
        setQuestion(res.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-5/6 mx-auto mt-16">
      <div>
        <p className="font-semibold text-lg mb-5">{question.question}</p>

        <div className="flex flex-col gap-8">
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option1"
              name="answers"
              value={question.answerOne}
              // checked={selectedOption === 'Red'}
              // onChange={handleOptionChange}
            />
            <label htmlFor="option1">{question.answerOne}</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option2"
              name="answers"
              value={question.answerTwo}
              // checked={selectedOption === 'Red'}
              // onChange={handleOptionChange}
            />
            <label htmlFor="option2">{question.answerTwo}</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option3"
              name="answers"
              value={question.answerOne}
              // checked={selectedOption === 'Red'}
              // onChange={handleOptionChange}
            />
            <label htmlFor="option3">{question.answerThree}</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="option4"
              name="answers"
              value={question.answerFour}
              // checked={selectedOption === 'Red'}
              // onChange={handleOptionChange}
            />
            <label htmlFor="option4">{question.answerFour}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowQuestion;
