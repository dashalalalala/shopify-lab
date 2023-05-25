import { useLocation } from "react-router-dom";
import "./GuideData.scss";
import YouTube from "react-youtube";

function GuideData() {
	const location = useLocation();
	const guide = location.state.guide; // Access the guide data

	const opts = {
		height: "300",
		width: "600",
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<div>
			{/* Checking if the guide.description is a Youtube URL */}
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
