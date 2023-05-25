import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Navigation.scss";

function Navigation() {
	const [guideData, setGuideData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:8080/guide");
				setGuideData(response.data);
				console.log(response.data);
			} catch (error) {
				console.error("Failed to fetch data: ", error);
			}
		};

		fetchData();
	}, []);

	console.log("guideData", guideData);

	const navigate = useNavigate();

	return (
		<div>
			<h1 className="title">Select Your Module</h1>
			<div className="navigation-box">
				{guideData &&
					guideData.map((data, index) => (
						<p
							className="navigation-text"
							key={index}
							onClick={() =>
								navigate(`/guide/${data.id}`, {
									state: { guide: data },
								})
							}
						>
							{data.name}
						</p>
					))}
			</div>
		</div>
	);
}

export default Navigation;
