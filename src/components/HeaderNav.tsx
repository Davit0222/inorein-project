import "../styles/headerNav.css";
function HeaderNav() {
	return (
		<div className="header-nav">
			<nav className="nav">
				<ul>
					<li>
						<a href="#index">TV CHANNELS</a>
					</li>
					<li>
						<a href="#index">MOVIES</a>
					</li>
					<li>
						<a href="#index">CARTOONS</a>
					</li>
					<li>
						<a href="#index">SERIES</a>
					</li>
					<li>
						<a href="#index">SPORTS AND TV SHOWS</a>
					</li>
					<li>
						<a href="#index">BLOGGERS</a>
					</li>
				</ul>
			</nav>
			<button type="button" className="btn">
				<i className="fi fi-rs-menu-dots" />
				<i className="fi fi-rs-menu-dots" />
				<i className="fi fi-rs-menu-dots" />
			</button>
		</div>
	);
}

export default HeaderNav;
