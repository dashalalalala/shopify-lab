import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../helper";

export default function Guide() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [description, setDescription] = useState("");

	useEffect(() => {
		axios
		.get(`${BASE_API_URL}/${id}`)
		.then((res) => {
			setDescription(res.data);
			setLoading(false);
		})
		.catch((err) => {
			console.error(err);
		});
	}, [id]);

	if (loading) {
		return (
		<div>
			<h1>Loading.....</h1>
		</div>
		);
	}


	return (
		<>
		<div className="guide">
			<h1 className="title">{description.name}</h1>
			<p className="text">{description.description}</p>
			<button onClick={() => navigate(`${description.id}`)} className="button">
			Next
			</button>
		</div>
		</>
	);
}
