import "./Form.scss";
import React, { useContext, useState } from "react";
import { FormDataContext, FormProvider } from "../../context/FormContext";
import { Link } from "react-router-dom";
import axios from "axios";
import GuideData from "../guideData/GuideData";
import Navigation from "../navigation/Navigation";
import LogoUpload from "../logoUpload/LogoUpload";
import Intro from "../intro/Intro";
import { useParams } from "react-router-dom";

const Quiz = () => {
	const [answer, setAnswer] = useState("");

	const handleOnChange = (event) => {
		setAnswer(event.target.value);
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		// handle form submission here with the answer state
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<h2 className="title">Management Skills Quiz</h2>
				<p className="text">
					As a manager, you've noticed that one of your team members, who used
					to be highly productive, has been underperforming and seems less
					engaged over the past few weeks. How would you handle this situation?
				</p>
				<input
					type="radio"
					id="answerA"
					name="answer"
					value="A"
					onChange={handleOnChange}
				/>
				<label className="text" htmlFor="answerA">
					Ignore the situation and hope the employee's performance improves on
					its own.
				</label>
				<br />
				<input
					type="radio"
					id="answerB"
					name="answer"
					value="B"
					onChange={handleOnChange}
				/>
				<label className="text" htmlFor="answerB">
					Speak privately with the employee, expressing your concern about their
					performance and asking if there's anything they'd like to discuss or
					any support they need.
				</label>
				<br />
				<input
					type="radio"
					id="answerC"
					name="answer"
					value="C"
					onChange={handleOnChange}
				/>
				<label className="text" htmlFor="answerC">
					Immediately issue a formal warning to the employee about their
					underperformance.
				</label>
				<br />
				<input
					type="radio"
					id="answerD"
					name="answer"
					value="D"
					onChange={handleOnChange}
				/>
				<label className="text" htmlFor="answerD">
					Publicly call out the employee during a team meeting for not meeting
					performance standards.
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

const MultiPageForm = () => {
	const { moduleId } = useParams();
	const [page, setPage] = useState(moduleId ? 3 : 0); // If moduleId is present, start from GuideData
	const pages = [
		<Intro />,
		<LogoUpload />,
		<Navigation />,
		<GuideData moduleId={moduleId} />, // Pass moduleId as prop to GuideData
		<Quiz />,
	];

	const goBack = () => {
		if (page > 0) {
			setPage(page - 1);
		}
	};

	const goNext = () => {
		if (page < pages.length - 1) {
			setPage(page + 1);
		}
	};

	const handleSubmit = () => {
		// submit form
	};

	return (
		<>
			<div className="form">
				{/* <FormProvider> */}
				{pages[page]}
				{page > 0 && (
					<button className="button" onClick={goBack}>
						Go Back
					</button>
				)}
				{page < pages.length - 1 ? (
					<button className="button" onClick={goNext}>
						Next
					</button>
				) : (
					<button className="button" onClick={handleSubmit}>
						Submit
					</button>
				)}
				{/* </FormProvider> */}
			</div>
		</>
	);
};

export default MultiPageForm;
