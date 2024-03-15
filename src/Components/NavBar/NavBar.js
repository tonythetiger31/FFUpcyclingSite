import React from 'react';
import sass from './NavBar.sass';
import colorTransparentLogo from '../../assets/logos/colorTransparentLogo.webp';
import whiteTransparentLogo from '../../assets/logos/whiteTransparentLogo.webp';

export default function NavBar() {
	return (
		<div className="NavBar">
			<input type="checkbox" id="menyAvPaa" className="menyAvPaa"></input>
			<label className="burger" htmlFor="menyAvPaa">
				<div></div>
				<div></div>
				<div></div>
			</label>
			<nav>
				<div className="button button-m mission">Mission</div>
				<div className="button button-m platforms">Platforms</div>
				<div className="button button-m contact">Contact</div>
				<div className="button button-m contact">About us</div>
			</nav>

			<div className="navAndTitleParent">
				<div className="title">
					<img className="titleLogo" src={colorTransparentLogo} />
					UPCYCLING
				</div>
				<div className="navParent">
					<div className="button-d button mission">Mission</div>
					<div className="button-d button platforms">Platforms</div>
					<div className="button-d button contact">Contact</div>
					<div className="button-d button contact">About us</div>
					<div className="gostElement"></div>
				</div>
			</div>
		</div>
	);
}
