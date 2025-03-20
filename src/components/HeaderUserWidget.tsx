import { useState } from "react";
import "../styles/widget.css";
import search from "../icons/icons8-search-100.png";

function HeaderUserWidget() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="container-widget">
			<div className="widget">
				<a href="#index" className="try-add-utton">
					Try for 39 AMD
				</a>
				<button type="button" className="search">
					<input
						type="searche"
						name="search"
						id="search"
						className="input-search"
					/>
					<img src={search} alt="asd" sizes="20" />
				</button>
				<div className="language">
					<button
						onClick={toggleDropdown}
						type="button"
						className="language-button"
					>
						EN
					</button>
					{isDropdownOpen && (
						<div className="dropDownLanguage">
							<ul className="languages-list">
								<li className="languages-item">
									<a href="#index" className="link-default">
										ENGLISH
									</a>
								</li>
								<li className="languages-item">
									<a href="#index" className="link-default">
										RUSSIAN
									</a>
								</li>
								<li className="languages-item">
									<a href="#index" className="link-default">
										ARMENIAN
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className="header-auth">
					<a href="#index">LOG IN</a>
				</div>
			</div>
		</div>
	);
}

export default HeaderUserWidget;
