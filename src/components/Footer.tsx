import "../styles/footer.css";
import img1 from "../../public/assets/smarttv.webp";
import img2 from "../../public/assets/appstore.webp";
import img3 from "../../public/assets/googleplay.webp";
import img4 from "../../public/assets/appgallery.webp";
import img5 from "../../public/assets/f_logo_RGB-Blue_1024.png";
import img6 from "../../public/assets/telegram-logo-computer-icons-telegram.jpg";
import img7 from "../../public/assets/vibericon.png";

function Footer() {
	return (
		<div className="container-footer">
			<div className="top1">
				<div className="footer-nav1">
					<div className="footer-nav1-1">
						<span className="span">Users and Partners</span>
						<button type="button">All About Subscriptions</button>
						<button type="button">Redeem a Promo Code</button>
						<button type="button">User Agreement</button>
						<button type="button">Privacy Policy</button>
						<button type="button">Delete Your Account</button>
					</div>
					<div className="footer-nav1-2">
						<button type="button">About Us</button>
						<button type="button">Contact for Media</button>
						<button type="button">add a Podcast</button>
						<button type="button">Partnership</button>
					</div>
				</div>
				<div className="footer-nav2">
					<div className="footer-nav2-1">
						<span className="span">On Device</span>
						<button type="button">TVs and Meiaplayers</button>
						<button type="button">MOBILE Device</button>
						<button type="button">PC</button>
						<button type="button">Connect a TV</button>
					</div>
				</div>
				<div className="footer-nav2-2">
					<span className="span">Users support</span>
					<button className="support" type="button">
						support@megogo.net
					</button>
					<div className="support-bottom">
						<button type="button">All contacts</button>
						<button type="button">FAQ</button>
					</div>
				</div>
			</div>
			<div className="top2">
				<div className="application">
					<span>Our applications</span>
					<div className="app-button">
						<img src={img1} alt="img" />
						<img src={img2} alt="img" />
						<img src={img3} alt="img" />
						<img src={img4} alt="img" />
					</div>
				</div>
				<div className="social-media">
					<span>Join us on social media</span>
					<div className="social-button">
						<img src={img5} alt="img" />
						<img src={img6} alt="img" />
						<img src={img7} alt="img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
