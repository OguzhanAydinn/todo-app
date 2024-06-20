import React from "react";
import NewTForm from "./NewTForm";

function Header() {
	return (
		<header className="header">
			<h1>todos</h1>
			<NewTForm />
		</header>
	);
}

export default Header;
