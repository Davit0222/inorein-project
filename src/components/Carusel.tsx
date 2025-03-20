import "../styles/carusel.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";

type Slide = {
	src: string;
	alt: string;
};

type CaruselProps = {
	data: Slide[];
	interval?: number;
};

function Carusel({ data, interval = 3000 }: CaruselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const autoslide = setInterval(() => {
			nextSlide();
		}, interval);
		return () => {
			clearInterval(autoslide);
		};
	}, [currentIndex, interval]);

	return (
		<div className="carousel-container">
			<button type="button" className="arrow left" onClick={prevSlide}>
				<GrPrevious />
			</button>

			<div className="carousel-slide">
				<img src={data[currentIndex].src} alt={data[currentIndex].alt} />
			</div>

			<button type="button" className="arrow right" onClick={nextSlide}>
				<GrNext />
			</button>

			<div className="dots">
				{data.map((_ind, index) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={`dot ${index === currentIndex ? "active" : ""}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
}
export default Carusel;
