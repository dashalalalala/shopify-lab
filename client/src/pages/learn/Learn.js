// import Form from "../../components/form/Form";
// import StoreFront from "../../components/storeFront/StoreFront";
// import "./Learn.scss";

// function Learn() {
// 	return (
// 		<div className="learn-page">
// 			<Form />
// 			<StoreFront />
// 		</div>
// 	);
// }

// export default Learn;

import MultiPageForm from "../../components/form/Form";
import StoreFront from "../../components/storeFront/StoreFront";
import "./Learn.scss";
import { FormProvider } from "../../context/FormContext";
import { useState, useEffect } from "react";
import axios from "axios";
// const { userId } = useParams();

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

	// const [guideData, setGuideData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get("http://localhost:8080/guide");
	// 			setGuideData(response.data);
	// 			console.log(response.data);
	// 		} catch (error) {
	// 			console.error("Failed to fetch data: ", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	return (
		<FormProvider>
			<div className="learn-page">
				<MultiPageForm />
				<StoreFront userData={userData} />
			</div>
		</FormProvider>
	);
}

export default Learn;
