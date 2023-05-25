import "./Form.scss";
import React, { useContext, useState } from "react";
import { FormDataContext, FormProvider } from "../../context/FormContext";
import GuideData from "../guideData/GuideData";
import Navigation from "../navigation/Navigation";
import LogoUpload from "../logoUpload/LogoUpload";
import Intro from "../intro/Intro";
import { useParams } from "react-router-dom";
import ModuleQuiz from "../moduleQuiz/ModuleQuiz";

const MultiPageForm = () => {
	const { moduleId } = useParams();
	const [page, setPage] = useState(moduleId ? 3 : 0); // If moduleId is present, start from GuideData
	const pages = [
		<Intro />,
		<LogoUpload />,
		<Navigation />,
		<GuideData moduleId={moduleId} />, // Pass moduleId as prop to GuideData
		<ModuleQuiz />,
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
			</div>
		</>
	);
};

export default MultiPageForm;
