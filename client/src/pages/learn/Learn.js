import MultiPageForm from "../../components/form/Form";
import StoreFront from "../../components/storeFront/StoreFront";
import "./Learn.scss";
import { FormProvider } from "../../context/FormContext";
import { useState, useEffect } from "react";
import axios from "axios";

function Learn() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/user/bde3782d-b441-4e63-b0ae-66e7a6e4a882`)
			.then((response) => {
				setUserData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<FormProvider>
			<div className="learn-page">
				<MultiPageForm />
				{/* <StoreFront userData={userData} /> */}
			</div>
		</FormProvider>
	);
}

export default Learn;
