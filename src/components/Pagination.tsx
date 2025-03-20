import "../styles/pagination.css";

interface PaginationProps {
	name: string;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	name,
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	return (
		<div className="pagination">
			<h2>{name}</h2>
			<div className="pagination-buttons">
				<button
					className="pagination-button"
					type="button"
					onClick={handlePrevious}
					disabled={currentPage === 1}
				>
					❮
				</button>

				<button
					className="pagination-button"
					type="button"
					onClick={handleNext}
					disabled={currentPage === totalPages}
				>
					❯
				</button>
			</div>
		</div>
	);
};

export default Pagination;
