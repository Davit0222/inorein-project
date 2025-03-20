import { useEffect } from "react";
const API_KEY = "?api_key=c635124ddb90ddd0ae5f38efeb03b4b1";
const BASE_URL = "https://api.themoviedb.org/3";

interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

interface MovieListProps {
	onMoviesFetched: (movies: Movie[]) => void;
}

function MovieList({ onMoviesFetched }: MovieListProps) {
	useEffect(() => {
		async function getMovies() {
			try {
				const response = await fetch(
					`${BASE_URL}/discover/movie${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
				);
				const json = await response.json();
				console.log("🎬 Fetched movies:", json.results);

				if (json.results && json.results.length > 0) {
					onMoviesFetched(json.results);
				} else {
					console.warn("⚠ No movies found!");
				}
			} catch (error) {
				console.error(" Error fetching movies:", error);
			}
		}

		getMovies();
	}, [onMoviesFetched]);

	return null;
}

export default MovieList;
