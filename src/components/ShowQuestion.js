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
    <div>
      <div>
        <p>{question.question}</p>
      </div>
    </div>
  )
}

export default ShowQuestion
