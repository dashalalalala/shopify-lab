import React, { useContext } from "react";
import { FormDataContext } from "../../context/FormContext";

export default function PageThree() {
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
}
