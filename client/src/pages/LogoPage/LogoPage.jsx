import React, { useContext, useState } from "react";
import { FormDataContext } from "../../context/FormContext";
import { Link } from "react-router-dom";


export default function PageTwo() {
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
}
