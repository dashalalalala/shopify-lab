import "./LogoUpload.scss";
import axios from "axios";
import { useState, useContext } from "react";
import { FormDataContext } from "../../context/FormContext";
import Typist from "react-typist-component";

function LogoUpload() {
	// const [formData, setFormData] = useContext(FormDataContext);
	// const [selectedFile, setSelectedFile] = useState(null); // will be Shopify logo by default

	// const fileSelectedHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// };

	// const fileUploadHandler = async () => {
	// 	const formDataObj = new FormData();
	// 	formDataObj.append("file", selectedFile);

	// 	// upload the formDataObj to server using axios
	// 	const response = await axios.post(
	// 		"http://localhost:8080/upload",
	// 		formDataObj
	// 	);

	// 	// update the context with the new logo URL
	// 	setFormData({
	// 		...formData,
	// 		logo: response.data.logoUrl,
	// 	});

	// 	//PUT request to update logoUrl on the server
	// 	try {
	// 		const updateResponse = await axios.put(
	// 			`http://localhost:8080/user/bde3782d-b441-4e63-b0ae-66e7a6e4a882/logo`,
	// 			{ logoUrl: response.data.logoUrl }
	// 		);
	// 		console.log(updateResponse.data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	return (
		<div>
			<Typist>
				<h1 className="title">Let's Get Started!</h1>
			</Typist>
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
				:
			</p>
			{/* <input type="file" className="input" onChange={fileSelectedHandler} /> */}
			{/* <button className="button" onClick={fileUploadHandler}> */}
			Upload
			{/* </button> */}
			<input type="file" className="input" />
			<button className="button">Upload</button>
		</div>
	);
}

export default LogoUpload;
