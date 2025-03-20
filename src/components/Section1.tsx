import "../styles/section1.css";
import img1 from "/assets/3-20240611_180241_0001.webp";
import img2 from "/assets/unnamed.jpg";
import img3 from "/assets/images.jpeg";
import img4 from "/assets/depositphotos_238331546-stock-illustration-scratched-textured-comedy-movies-stamp.jpg";
import img5 from "/assets/what_if__cartoon_network_movies__2004_2010__logo_by_abfan21_dhkp9ej-fullview.jpg";

function Section1() {
	return (
		<div className="section1">
			<button type="button">
				<img src={img1} alt="img1" />
			</button>
			<button type="button">
				<img src={img2} alt="img2" />
			</button>
			<button type="button">
				<img src={img3} alt="img3" />
			</button>
			<button type="button">
				<img src={img4} alt="img4" />
			</button>
			<button type="button">
				<img src={img5} alt="img5" />
			</button>
		</div>
	);
}

export default Section1;
