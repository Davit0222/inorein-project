import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderUserWidget from "./HeaderUserWidget";
import "../styles/header.css";
function Header() {
	return (
		<div className="header-container">
			<div className="header">
				<HeaderLogo />
				<HeaderNav />
				<HeaderUserWidget />
			</div>
		</div>
	);
}

export default Header;
