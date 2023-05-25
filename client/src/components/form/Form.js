import "./Form.scss";
import React, {  useState } from "react";
import {  FormProvider } from "../../context/FormContext";
import PageFour from "../../pages/PageFour/PageFour";
import LandingPage from "../../pages/LandingPage/LandingPage";
import LogoPage from "../../pages/LogoPage/LogoPage";
import Management from "../../pages/Management/Management";




const MultiPageForm = () => {
	const [page, setPage] = useState(0);
	const pages = [<LandingPage />, <LogoPage />, <Management />, <PageFour />];

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
		<div className="form">
			<FormProvider>
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
					<button className="button">
						Submit
					</button>
				)
				}
			</FormProvider>
			
		</div>
	);
};

export default MultiPageForm;
