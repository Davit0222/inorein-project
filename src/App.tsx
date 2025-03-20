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

function App() {
	return (
		<div className="app">
			<Header />
			<Carusel data={slides} />
			<Section1 />
			<Section2 name="Copa del Rey 2024/2025" />
			<Section2 name="PREMIERES" />
			<Section2 name="Korean Series" />
			<Section2 name="Free Access" />
			<Section2 name="Now Cheaper" />
			<Section2 name="Now in the Subscription" />
			<Section2 name="Top Watched on MEGOGO" />
			<Section2 name="Best by IMDB Rating" />
			<Section2 name="HBO Series" />
			<Section2 name="Choose by Genre" />
			<ShowMovieCard name="Premieres" />
			<ShowMovieCard name="Copa del Rey 2024/2025" />
			<ShowMovieCard name="PREMIERES" />
			<ShowMovieCard name="Korean Series" />
			<ShowMovieCard name="Free Access" />
			<ShowMovieCard name="Now Cheaper" />
			<ShowMovieCard name="Now in the Subscription" />
			<ShowMovieCard name="Top Watched on MEGOGO" />
			<ShowMovieCard name="Best by IMDB Rating" />
			<ShowMovieCard name="HBO Series" />
			<ChooseByGenre name="Choose by Genre" />
			<Section3 />
			<Footer />
			<FooterHeader />
		</div>
	);
}

export default App;
