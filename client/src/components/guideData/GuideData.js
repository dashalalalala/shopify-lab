import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GuideData.scss";
import YouTube from "react-youtube";

function GuideData() {
	const { moduleId } = useParams();
	const location = useLocation();
	const [guide, setGuide] = useState(
		location.state ? location.state.guide : null
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8080/guide/${moduleId}`
				);
				setGuide(response.data);
			} catch (error) {
				console.error("Failed to fetch data: ", error);
			}
		};

		// Fetch data every time the moduleId changes
		fetchData();
	}, [moduleId]); // Only dependent on moduleId

	if (!guide) {
		return <div>Loading...</div>;
	}

	const opts = {
		height: "300",
		width: "600",
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<div>
			{guide.description.includes("https://youtu.be/") ? (
				<div>
					<h2 className="title">{guide.name}</h2>
					<YouTube
						videoId={guide.description.split("https://youtu.be/")[1]}
						opts={opts}
					/>
				</div>
			) : (
				<div>
					<h2 className="title">{guide.name}</h2>
					<p className="text">{guide.description}</p>
				</div>
			)}
		</div>
	);
}

export default GuideData;
