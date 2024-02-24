import React from 'react';
import sass from './NavBar.sass';

export default function NavBar() {
	return (
		<div className="NavBar">
			<h3 className="logo">FFUpcycling</h3>
				<div className="button mission">Mission</div>
				<div className="button platforms">Platforms</div>
				<div className="button contact">Contact</div>
				<div className="button contact">About us</div>
				<div className="gostElement"></div>
			</div>
	);
}
