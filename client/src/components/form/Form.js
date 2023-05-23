import "./Form.scss";
import React, { useContext, useState } from "react";
import { FormDataContext, FormProvider } from "../../context/FormContext";
import { Link } from "react-router-dom";

const PageOne = () => {
	const [formData, setFormData] = useContext(FormDataContext);

	return (
		<div>
			<h1 className="title">Welcome to Shopify Interactive Learning!</h1>
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

const PageTwo = () => {
	const [formData, setFormData] = useContext(FormDataContext);

	const [selectedFile, setSelectedFile] = useState(null); // will be Shopify logo by default

	const fileSelectedHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const fileUploadHandler = () => {
		const formData = new FormData();
		formData.append("file", selectedFile, selectedFile.name);
		//upload the formData to server using axios
	};

	return (
		<div>
			<h1 className="title">Let's Get Started!</h1>
			<p className="text">
				Now that you are done with all the hard parts of setting up your
				business, let's start with the fun ones! First, we want you to create
				your logo. If you already have one, just upload it below, if you dont
				have one you can use our{" "}
				<Link className="link" to="https://www.shopify.com/tools/logo-maker">
					{" "}
					free logo maker tool
				</Link>
				:
			</p>
			<input type="file" onChange={fileSelectedHandler} />
			<button className="button" onClick={fileUploadHandler}>
				Upload
			</button>
		</div>
	);
};

const PageThree = () => {
	const [formData, setFormData] = useContext(FormDataContext);

	return (
		<div>
			<h1 className="title">Management 101</h1>
			<p className="text">
				As a small business owner, being a great manager is crucial for the
				success of your business. Here are some important things to note:
			</p>
			<p className="text">
				{" "}
				1. Effective Communication: Communicate clearly and listen to your
				employees. <br />
				2. Lead by Example: Set a positive example through your own actions.
				<br />
				3. Delegate and Empower: Delegate tasks and empower employees to make
				decisions. <br />
				4. Recognize and Reward: Acknowledge and appreciate employees' efforts.
				<br />
				5. Foster a Positive Work Culture: Create a supportive and inclusive
				environment. <br />
				6. Develop Your Employees: Invest in their growth and provide
				opportunities. <br />
				7. Set Clear Goals and Expectations: Define objectives and
				responsibilities. <br />
				8. Effective Time Management: Prioritize tasks and support efficiency.
				<br />
				9. Adaptability and Flexibility: Embrace change and encourage
				innovation.
				<br />
				10. Trust and Empathy: Build trust and show empathy towards employees.
				<br />
				Remember, continuous learning and improvement are key to being a great
				manager.
			</p>
		</div>
	);
};

const PageFour = () => {
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
	const [page, setPage] = useState(0);
	const pages = [<PageOne />, <PageTwo />, <PageThree />, <PageFour />];

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
					<button className="button" onClick={handleSubmit}>
						Submit
					</button>
				)}
			</FormProvider>
		</div>
	);
};

export default MultiPageForm;
