import "./Form.scss";
import React, { useContext, useState } from "react";
import { FormDataContext, FormProvider } from "../../context/FormContext";
import { Link } from "react-router-dom";
import axios from "axios";
import GuideData from "../guideData/GuideData";
import Navigation from "../navigation/Navigation";
import { useParams } from "react-router-dom";

const Intro = () => {
	const [formData, setFormData] = useContext(FormDataContext);

	return (
		<div>
			<h1 className="title">Welcome to Shopify Interactive Learning Lab!</h1>
			<p className="text">
				Shopify Interactive Learning Forum is the place where you can
				experiment, make mistakes, and learn in a risk-free, simulated
				environment. Whether you're new to the digital commerce world, planning
				to scale your existing venture, or seeking insights to optimize your
				operations, our forum provides you with the necessary tools and guidance
				to navigate the eCommerce landscape confidently.
			</p>
			<p className="text">
				{" "}
				Through practical scenarios, we'll help you learn about key aspects like
				effective cash flow management, comprehensive market research, building
				a robust online presence, delivering excellent customer service, and
				handling growth challenges. We're here to help turn your entrepreneurial
				vision into a successful reality.
			</p>
		</div>
	);
};

const LogoUpload = () => {
	const [formData, setFormData] = useContext(FormDataContext);
	const [selectedFile, setSelectedFile] = useState(null); // will be Shopify logo by default

	const fileSelectedHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const fileUploadHandler = async () => {
		const formDataObj = new FormData();
		formDataObj.append("file", selectedFile);

		// upload the formDataObj to server using axios
		const response = await axios.post(
			"http://localhost:8080/upload",
			formDataObj
		);

		// update the context with the new logo URL
		setFormData({
			...formData,
			logo: response.data.logoUrl,
		});

		//PUT request to update logoUrl on the server
		try {
			const updateResponse = await axios.put(
				`http://localhost:8080/user/bde3782d-b441-4e63-b0ae-66e7a6e4a882/logo`,
				{ logoUrl: response.data.logoUrl }
			);
			console.log(updateResponse.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h1 className="title">Let's Get Started!</h1>
			<p className="text">
				Now that you are done with all the hard parts of setting up your
				business, let's start with the fun ones! First, we want you to create
				your logo. If you already have one, just upload it below, if you dont
				have one you can use our{" "}
				<a
					className="link"
					href="https://www.shopify.com/tools/logo-maker"
					target="_blank"
					rel="noopener noreferrer"
				>
					free logo maker tool
				</a>
				: :
			</p>
			<input type="file" onChange={fileSelectedHandler} />
			<button className="button" onClick={fileUploadHandler}>
				Upload
			</button>
		</div>
	);
};

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
	);
};

export default MultiPageForm;
