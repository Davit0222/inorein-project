export interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

export interface CardProps {
	movie: Movie;
	onClick: (id: number) => void;
}
