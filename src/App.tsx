import "./App.css";
import Carusel from "./components/Carusel";
import ChooseByGenre from "./components/ChooseByGenre";
import Footer from "./components/Footer";
import FooterHeader from "./components/FooterHeader";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ShowMovieCard from "./components/ShowMovieCard";
import { slides } from "./data/caruselData.json";

import sectionTitles from "./data/sectionData.json";
function App() {
	return (
		<div className="app">
			<Header />
			<Carusel data={slides} />
			<Section1 />
			{sectionTitles.csectionTitles.map((title) => (
				<Section2 key={title} name={title} />
			))}

			{sectionTitles.csectionTitles.map((title) => (
				<ShowMovieCard key={title} name={title} />
			))}

			<ChooseByGenre name="Choose by Genre" />
			<Section3 />
			<Footer />
			<FooterHeader />
		</div>
	);
}

export default App;
