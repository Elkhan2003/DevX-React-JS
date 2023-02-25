import React, { useState } from "react";
import "./Header.scss";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div>
				<h1>awdawd</h1>
				<nav>
					<div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
						<div className={isOpen ? "open" : ""} />
						<div className={isOpen ? "open" : ""} />
						<div className={isOpen ? "open" : ""} />
					</div>
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
						<li>
							<button onClick={() => setIsOpen(false)}>Close</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
