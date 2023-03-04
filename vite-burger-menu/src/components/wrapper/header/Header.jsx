import React, { useState } from "react";
import "./Header.scss";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="header">
				<h1>Logo</h1>
				<nav>
					<ul className={isOpen ? "show" : ""}>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
					<span className={isOpen ? "open" : ""} />
					<span className={isOpen ? "open" : ""} />
					<span className={isOpen ? "open" : ""} />
				</div>
			</div>
		</>
	);
};
