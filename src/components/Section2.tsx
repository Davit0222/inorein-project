import { useState } from "react";
import "../styles/section2.css";
import videoUri from "../data/videoGalleryData.json";
import playimg from "../../public/assets/play-button.png";
interface Props {
	name: string;
}

function Section2({ name }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const videos = videoUri.gallery;
	const videosPerPage = 6;

	const handleNext = () => {
		if (currentIndex + videosPerPage < videos.length) {
			setCurrentIndex(currentIndex + videosPerPage);
		} else {
			setCurrentIndex(0);
		}
	};

	const handlePrev = () => {
		if (currentIndex - videosPerPage >= 0) {
			setCurrentIndex(currentIndex - videosPerPage);
		} else {
			setCurrentIndex(videos.length - videosPerPage);
		}
	};
	return (
		<div className="container">
			<div className="header">
				<h2>{name}</h2>
				<div className="controls">
					<button type="button" onClick={handlePrev} className="nav-button">
						❮
					</button>
					<button type="button" onClick={handleNext} className="nav-button">
						❯
					</button>
				</div>
			</div>

			<div className="gallery">
				{videos
					.slice(currentIndex, currentIndex + videosPerPage)
					.map((video, index) => (
						<div key={`${video.id}-${index}`} className="video-container">
							<iframe
								src={`https://www.youtube.com/embed/${video.src}?enablejsapi=1`}
								title={video.name}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="iframe"
							/>
							<img src={playimg} alt="Play" className="play-icon" />

							<div className="description">
								<h2>{video.name}</h2>
								<p>{video.description}</p>
								<p>{video.purchase}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Section2;
