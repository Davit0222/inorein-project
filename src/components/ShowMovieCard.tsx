import { useState, useEffect } from "react";
import Card from "./Card";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import type { Movie } from "../interface/CardInterface";
import "../styles/card.css";
import "../styles/pagination.css";
import playimg from "../../public/assets/play-button.png";

const API_KEY = "c635124ddb90ddd0ae5f38efeb03b4b1";
const BASE_URL = "https://api.themoviedb.org/3";
interface Prop {
	name: string;
}
function ShowMovieCard({ name }: Prop) {
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [trailerKey, setTrailerKey] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

	const fetchMovies = async (page: number) => {
		try {
			const response = await fetch(
				`${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
			);
			const data = await response.json();
			setMovieList(data.results);
			setTotalPages(data.total_pages);
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMovies(currentPage);
	}, [currentPage]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const fetchTrailer = async (movieId: number) => {
		try {
			const movie = movieList.find((movie) => movie.id === movieId);
			if (movie) {
				setCurrentMovie(movie);
			}

			const response = await fetch(
				`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
			);
			const json = await response.json();
			const trailer = json.results.find(
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				(video: any) => video.type === "Trailer",
			);

			setTrailerKey(trailer ? trailer.key : null);
			setShowModal(true);
		} catch (error) {
			console.error("Error fetching trailer:", error);
		}
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setShowModal(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<>
			<MovieList onMoviesFetched={setMovieList} />
			{/* Pagination Component */}
			<div className="mov-container">
				<div className="pagination-style">
					<Pagination
						name={name}
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
				<div className="movie-container">
					<img src={playimg} alt="Play" className="play-icon" />
					{movieList.length === 0 ? (
						<Card
							movie={{ id: 0, title: "Dummy Movie", poster_path: "/dummy.jpg" }}
							onClick={() => console.log("Dummy movie clicked")}
						/>
					) : (
						movieList
							.slice(0, 6)
							.map((movie) => (
								<Card key={movie.id} movie={movie} onClick={fetchTrailer} />
							))
					)}
				</div>
			</div>

			{/* Modal for Trailer */}
			{showModal && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div className="modal" onClick={() => setShowModal(false)}>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<span className="close" onClick={() => setShowModal(false)}>
							&times;
						</span>
						<h2 style={{ textAlign: "center", marginBottom: "10px" }}>
							{currentMovie?.title || `Movie ID: ${currentMovie?.id}`}
						</h2>

						{trailerKey ? (
							<iframe
								title="watch video"
								width="100%"
								height="400"
								src={`https://www.youtube.com/embed/${trailerKey}`}
								allowFullScreen
							/>
						) : (
							<p
								style={{
									textAlign: "center",
									fontSize: "18px",
									padding: "20px",
								}}
							>
								No trailer available for this movie.
							</p>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default ShowMovieCard;
