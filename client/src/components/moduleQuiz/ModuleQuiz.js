import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../helper";
import "./ModuleQuiz.scss";

export default function Quiz() {
	const { moduleId } = useParams();

	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState(null);
	const [attempts, setAttempts] = useState(0);
	const [score, setScore] = useState(0);

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}/guide/${moduleId}`)
			.then((res) => {
				setQuestions(res.data);
				console.log("res data", res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [moduleId]);

	if (loading) {
		return (
			<div>
				<h1>Loading.....</h1>
			</div>
		);
	}

	const formHandler = (isCorrect) => {
		if (!isCorrect) {
			alert("Hmm...Not quite right. Try again! 🤓");
			setAttempts(attempts + 1);
		} else {
			alert("You got it right! Well done🥳");
			setAttempts(attempts + 1);
			setScore(score + 1);
		}
	};

	const answers = questions.answerOptions;

	return (
		<>
			<div className="quiz">
				<p className="quiz__title">{questions.questionText}</p>
				<div>
					{answers.map((answer, index) => (
						<div className="quiz__question" key={index}>
							<button
								className="quiz__question--text"
								onClick={() => formHandler(answer.isCorrect)}
							>
								{answer.answerText}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
