import HeaderLogo from "./HeaderLogo";
import "../styles/footerHeader.css";
import FooterBottom from "./FooterBottom";
function Header() {
	return (
		<div className="footer-container">
			<div className="footer-header">
				<HeaderLogo />
				<FooterBottom />
			</div>
		</div>
	);
}

export default Header;
