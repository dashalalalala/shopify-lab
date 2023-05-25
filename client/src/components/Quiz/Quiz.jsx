import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../helper";

export default function Quiz() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/${id}`)
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  const formHandler = (isCorrect) => {
    if (!isCorrect) {
      alert`try Again`;
      setAttempts(attempts + 1);
    } else {
      alert`you got it right`;
      setAttempts(attempts + 1);
      setScore(score + 1);
    }
  };

  const answers = questions.answerOptions;

  return (
    <>
      <div className="guide">
        <p className="title">{questions.questionText}</p>

        <div>
          {answers.map((answer, index) => (
            <>
              <div className="guide" key={index}>
                <button
                  className="text"
                  onClick={() => formHandler(answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
