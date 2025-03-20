import { useState } from "react";
import img1 from "../../public/assets/r600x0x4 (1).webp";
import img2 from "../../public/assets/r600x0x4 (2).webp";
import img3 from "../../public/assets/youngest.webp";
import img4 from "../../public/assets/r600x0x4.webp";
import img5 from "../../public/assets/detectiv.webp";
import img6 from "../../public/assets/documentary.webp";
import img7 from "../../public/assets/educetional.webp";
import img8 from "../../public/assets/comedies.webp";
import "../styles/choose.css";
import "../styles/pagination.css";

interface Prop {
	name: string;
}

function ChooseByGenre({ name }: Prop) {
	const images = [
		{ id: "img1", src: img1 },
		{ id: "img2", src: img2 },
		{ id: "img3", src: img3 },
		{ id: "img4", src: img4 },
		{ id: "img5", src: img5 },
		{ id: "img6", src: img6 },
		{ id: "img7", src: img7 },
		{ id: "img8", src: img8 },
	];
	const itemsPerPage = 4;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(images.length / itemsPerPage);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const displayedImages = images.slice(startIndex, startIndex + itemsPerPage);

	return (
		<div className="choose">
			<div className="title">
				<h2>{name}</h2>
				<div className="pagination-style">
					<button
						type="button"
						className="pagination-button"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						❮
					</button>

					<button
						type="button"
						className="pagination-button"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
					>
						❯
					</button>
				</div>
			</div>
			<div className="genre">
				{displayedImages.map((img) => (
					<div key={img.id} className="image-container">
						<img src={img.src} alt={`img-${img.id}`} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ChooseByGenre;
