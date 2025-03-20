import "../styles/card.css";

import type { CardProps } from "../interface/CardInterface";

const img_path = "https://image.tmdb.org/t/p/w500";

function Card({ movie, onClick }: CardProps) {
	console.log(movie);
	if (!movie) {
		return (
			<div className="movie">
				<img src="/placeholder.jpg" alt="Dummy Movie" />
				<h3>Dummy Movie</h3>
			</div>
		);
	}

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="movie" onClick={() => onClick(movie.id)}>
			<img
				src={
					movie.poster_path ? `${img_path}${movie.poster_path}` : "/dummy.jpg"
				}
				alt={movie.title}
			/>
			<h3>{movie.title}</h3>
		</div>
	);
}

export default Card;
